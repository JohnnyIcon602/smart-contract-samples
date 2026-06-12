"""
Crypto Trading Bot - Multi-Coin Aggressive Mode
Ready for real API keys when available
"""

import ccxt
import time
import json
import os
from datetime import datetime
from collections import deque

# ============== CONFIGURATION ==============
PAPER_MODE = True  # Set to False when real API is ready

# Trading config - MULTI-COIN
SYMBOLS = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT', 'ADA/USDT']
QUOTE_CURRENCY = 'USDT'
INITIAL_BALANCE = 2000  # Per coin allocation ($10k / 5 coins)

# AGGRESSIVE Risk management
STOP_LOSS_PCT = 0.10  # 10% stop loss
TAKE_PROFIT_PCT = 0.15  # 15% take profit (faster)
POSITION_SIZE = 1.0  # Use full allocation

# AGGRESSIVE Strategy parameters
SHORT_WINDOW = 2
LONG_WINDOW = 5
RSI_PERIOD = 7
RSI_OVERSOLD = 40
RSI_OVERBOUGHT = 60
MOMENTUM_THRESHOLD = 0.001  # 0.1% momentum filter (more sensitive)

# ============== PAPER TRADING STATE ==============
class PaperTradingAccount:
    def __init__(self, initial_balance):
        self.quote_balance = initial_balance
        self.base_balance = 0
        self.current_price = 0
        self.trades = []
        
    def get_balance(self, current_price=0):
        if current_price:
            self.current_price = current_price
        total = self.quote_balance + (self.base_balance * self.current_price)
        return {
            'quote': self.quote_balance,
            'base': self.base_balance,
            'total': total if total else 0
        }
    
    def can_buy(self, price, amount):
        cost = price * amount
        return self.quote_balance >= cost
    
    def buy(self, price, amount):
        cost = price * amount
        if self.can_buy(price, amount):
            self.quote_balance -= cost
            self.base_balance += amount
            self.current_price = price
            self.trades.append({
                'type': 'BUY',
                'price': price,
                'amount': amount,
                'cost': cost,
                'time': datetime.now().isoformat()
            })
            return True
        return False
    
    def sell(self, price, amount):
        if self.base_balance >= amount:
            self.base_balance -= amount
            proceeds = price * amount
            self.quote_balance += proceeds
            self.current_price = price
            self.trades.append({
                'type': 'SELL',
                'price': price,
                'amount': amount,
                'proceeds': proceeds,
                'time': datetime.now().isoformat()
            })
            return True
        return False

# ============== STRATEGY ==============
class AggressiveStrategy:
    def __init__(self, symbol):
        self.symbol = symbol
        self.price_history = deque(maxlen=50)
        self.history_file = f'/Users/five/.openclaw/workspace/crypto-bot/price_history_{symbol.replace("/", "_")}.json'
        self.load_history()
        
    def load_history(self):
        if os.path.exists(self.history_file):
            try:
                with open(self.history_file, 'r') as f:
                    data = json.load(f)
                    self.price_history = deque(data.get('prices', []), maxlen=50)
            except:
                pass
    
    def save_history(self):
        with open(self.history_file, 'w') as f:
            json.dump({'prices': list(self.price_history)}, f)
    
    def calculate_ema(self, prices, period):
        if len(prices) < period:
            return None
        weights = [i+1 for i in range(period)]
        return sum(p * w for p, w in zip(list(prices)[-period:], weights)) / sum(weights)
    
    def calculate_rsi(self, prices, period=7):
        if len(prices) < period + 1:
            return None
        deltas = [prices[i] - prices[i-1] for i in range(1, len(prices))]
        gains = [d if d > 0 else 0 for d in deltas]
        losses = [-d if d < 0 else 0 for d in deltas]
        
        avg_gain = sum(gains[-period:]) / period
        avg_loss = sum(losses[-period:]) / period
        
        if avg_loss == 0:
            return 100
        rs = avg_gain / avg_loss
        rsi = 100 - (100 / (1 + rs))
        return rsi
    
    def calculate_momentum(self, prices):
        """Calculate price momentum"""
        if len(prices) < 3:
            return 0
        return (prices[-1] - prices[-3]) / prices[-3]
    
    def analyze(self, current_price):
        self.price_history.append(current_price)
        
        if len(self.price_history) < 5:
            return 'WAIT', 0
        
        # Get multiple timeframes for aggressive signals
        prices = list(self.price_history)
        
        # Simple momentum - compare current to recent
        recent_change = (prices[-1] - prices[-3]) / prices[-3] * 100  # 3-period change %
        
        # RSI
        rsi = self.calculate_rsi(prices)
        
        # Ultra-aggressive: any significant move triggers signal
        signal = 'HOLD'
        confidence = 0
        
        # Buy: positive momentum + low RSI OR just strong positive momentum
        if rsi and rsi < 45:
            if recent_change > 0.3:  # Up 0.3% in 3 periods
                signal = 'BUY'
                confidence = min(90, 50 + recent_change * 10 + (50 - rsi))
            elif rsi < 35:  # Deeply oversold
                signal = 'BUY'
                confidence = 80
        
        # Sell: negative momentum OR high RSI
        elif rsi and rsi > 55:
            if recent_change < -0.3:  # Down 0.3% in 3 periods
                signal = 'SELL'
                confidence = min(90, 50 + abs(recent_change) * 10 + (rsi - 50))
            elif rsi > 65:  # Deeply overbought
                signal = 'SELL'
                confidence = 80
        
        return signal, confidence

# ============== COIN BOT ==============
class CoinBot:
    def __init__(self, symbol, exchange):
        self.symbol = symbol
        self.exchange = exchange
        self.account = PaperTradingAccount(INITIAL_BALANCE)
        self.strategy = AggressiveStrategy(symbol)
        self.position = None
        self.state_file = f'/Users/five/.openclaw/workspace/crypto-bot/state_{symbol.replace("/", "_")}.json'
        self.load_state()
        
    def load_state(self):
        if os.path.exists(self.state_file):
            try:
                with open(self.state_file, 'r') as f:
                    state = json.load(f)
                    self.account.quote_balance = state.get('quote_balance', INITIAL_BALANCE)
                    self.account.base_balance = state.get('base_balance', 0)
                    self.account.trades = state.get('trades', [])
                    self.position = state.get('position')
            except:
                pass
    
    def save_state(self):
        state = {
            'quote_balance': self.account.quote_balance,
            'base_balance': self.account.base_balance,
            'trades': self.account.trades[-20:],
            'position': self.position
        }
        with open(self.state_file, 'w') as f:
            json.dump(state, f)
    
    def get_market_data(self):
        try:
            ticker = self.exchange.fetch_ticker(self.symbol)
            return {
                'price': ticker['last'],
                'bid': ticker['bid'],
                'ask': ticker['ask'],
                'volume': ticker.get('baseVolume', 0),
                'change': ticker.get('percentage', 0)
            }
        except Exception as e:
            print(f"  Error fetching {self.symbol}: {e}")
            return None
    
    def should_stop_loss(self, entry_price, current_price):
        loss_pct = (current_price - entry_price) / entry_price
        return loss_pct <= -STOP_LOSS_PCT
    
    def should_take_profit(self, entry_price, current_price):
        profit_pct = (current_price - entry_price) / entry_price
        return profit_pct >= TAKE_PROFIT_PCT
    
    def execute_trade(self, signal, market_data):
        current_price = market_data['price']
        
        # Check exits
        if self.position == 'LONG' and self.account.trades:
            entry_price = self.account.trades[-1]['price']
            
            if self.should_stop_loss(entry_price, current_price):
                self.account.sell(current_price, self.account.base_balance)
                self.position = None
                self.save_state()
                return "STOP_LOSS"
            
            if self.should_take_profit(entry_price, current_price):
                self.account.sell(current_price, self.account.base_balance)
                self.position = None
                self.save_state()
                return "TAKE_PROFIT"
        
        # Execute signals
        if signal == 'BUY' and self.position is None:
            amount = (self.account.quote_balance * POSITION_SIZE) / current_price
            if self.account.can_buy(current_price, amount):
                self.account.buy(current_price, amount)
                self.position = 'LONG'
                self.save_state()
                return "BUY"
                
        elif signal == 'SELL' and self.position == 'LONG':
            self.account.sell(current_price, self.account.base_balance)
            self.position = None
            self.save_state()
            return "SELL"
        
        return "HOLD"
    
    def run(self):
        market_data = self.get_market_data()
        if not market_data:
            return None
        
        signal, confidence = self.strategy.analyze(market_data['price'])
        self.strategy.save_history()
        
        result = None
        if signal != 'WAIT':
            result = self.execute_trade(signal, market_data)
        
        balance = self.account.get_balance(market_data['price'])
        
        return {
            'symbol': self.symbol,
            'price': market_data['price'],
            'signal': signal,
            'confidence': confidence,
            'result': result,
            'quote': balance['quote'],
            'base': balance['base'],
            'total': balance['total'],
            'position': self.position
        }

# ============== MAIN BOT ==============
class TradingBot:
    def __init__(self, paper_mode=True):
        self.paper_mode = paper_mode
        self.exchange = ccxt.coinbase({'enableRateLimit': True})
        self.bots = {symbol: CoinBot(symbol, self.exchange) for symbol in SYMBOLS}
        
    def run_once(self):
        print(f"\n{'='*60}")
        print(f"📊 MULTI-COIN AGGRESSIVE BOT - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*60}")
        
        total_portfolio = 0
        results = []
        
        for symbol, bot in self.bots.items():
            result = bot.run()
            if result:
                results.append(result)
                total_portfolio += result['total']
                
                # Format price based on value
                price = result['price']
                price_str = f"${price:.0f}" if price > 100 else f"${price:.4f}"
                
                print(f"\n{symbol}:")
                print(f"  💵 {price_str}")
                print(f"  📈 {result['signal']} ({result['confidence']:.0f}%)")
                if result['result'] and result['result'] != 'HOLD':
                    print(f"  ⚡ {result['result']}")
                print(f"  💼 ${result['total']:.2f} ({result['position']})")
        
        print(f"\n{'='*60}")
        print(f"💰 TOTAL PORTFOLIO: ${total_portfolio:.2f}")
        print(f"{'='*60}")
        
        return total_portfolio
    
    def start(self, interval_seconds=120):
        print(f"\n🚀 Starting Multi-Coin Aggressive Bot")
        print(f"   Coins: {', '.join(SYMBOLS)}")
        print(f"   Per coin: ${INITIAL_BALANCE}")
        print(f"   Stop Loss: {STOP_LOSS_PCT*100}% | Take Profit: {TAKE_PROFIT_PCT*100}%")
        print(f"   Running every {interval_seconds}s\n")
        
        try:
            while True:
                self.run_once()
                time.sleep(interval_seconds)
        except KeyboardInterrupt:
            print("\n\n🛑 Bot stopped")

if __name__ == '__main__':
    bot = TradingBot(paper_mode=True)
    bot.run_once()