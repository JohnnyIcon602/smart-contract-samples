// Supabase Config
const SUPABASE_URL = 'https://mwdvaohdgaclihatawpn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZHZhb2hkZ2FjbGloYXRhd3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzk1NzIsImV4cCI6MjA5NTY1NTU3Mn0.oyaZFi9OtggYXxHbQvgyoZtbmSXxNr-YFRHMtFq8p8M';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: true,
        autoRefreshToken: true
    }
});

let cars = [];
let user = null;
let authMode = 'signin';

// Auth Functions
async function toggleAuthMode() {
    authMode = authMode === 'signin' ? 'signup' : 'signin';
    document.getElementById('authTitle').textContent = authMode === 'signin' ? 'Sign In' : 'Sign Up';
    document.getElementById('authBtn').textContent = authMode === 'signin' ? 'Sign In' : 'Sign Up';
    document.getElementById('toggleText').textContent = authMode === 'signin' ? "Don't have an account?" : "Already have an account?";
    document.getElementById('toggleAuth').textContent = authMode === 'signin' ? 'Sign Up' : 'Sign In';
    document.getElementById('authError').textContent = '';
}

document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const errorEl = document.getElementById('authError');
    errorEl.textContent = '';

    try {
  if (authMode === 'signin') {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      user = data.user;
  } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      if (data.user && !data.session) {
          errorEl.textContent = 'Check your email to confirm signup!';
          return;
      }
      user = data.user;
  }
  loadCars();
    } catch (err) {
  errorEl.textContent = err.message;
    }
});

async function signOut() {
    await supabase.auth.signOut();
    user = null;
    cars = [];
    showAuth();
}

async function initAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
  user = session.user;
  loadCars();
    } else {
  showAuth();
    }

    supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
      user = session.user;
      loadCars();
  } else {
      user = null;
      cars = [];
      showAuth();
  }
    });
    
    // Refresh session token before it expires (every 30 minutes)
    setInterval(async () => {
        const { data, error } = await supabase.auth.refreshSession();
        if (error) {
            console.log('Session refresh failed:', error.message);
        } else if (data.session) {
            console.log('Session refreshed successfully');
        }
    }, 30 * 60 * 1000); // 30 minutes
}

function showAuth() {
    document.getElementById('authScreen').classList.add('active');
    document.getElementById('appScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'none';
}

function showApp() {
    document.getElementById('authScreen').classList.remove('active');
    document.getElementById('appScreen').style.display = 'block';
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('userEmail').textContent = user.email;
}

// Database Functions
async function loadCars() {
    if (!user) return;
    showApp();
    
    // Load ALL cars from the database (not just current user's) for data sharing
    console.log('Loading cars... user:', user?.email);
    
    // First, let's try to get count to debug
    const { count, error: countError } = await supabase
      .from('cars')
      .select('*', { count: 'exact', head: true });
    
    console.log('Total cars in DB:', count, 'countError:', countError);
    
    const { data, error } = await supabase
  .from('cars')
  .select('*')
  .order('created_at', { ascending: false });

    console.log('Load result - data count:', data?.length, 'error:', error);

    if (error) {
  console.error('Error loading cars:', error);
  alert('Error loading cars: ' + error.message);
      return;
    }

    if (!data || data.length === 0) {
      console.log('No cars returned - possible RLS filtering');
      // Try with a raw query to bypass RLS for debugging
      // This helps identify if RLS is the issue
    }
    
    // Map database fields to app fields
    cars = (data || []).map(car => ({
      ...car,
      purchase_price: car.price || car.purchase_price,
      sale_price: car.sold_price || car.sale_price,
      includeInReports: car.include_in_reports !== false // default to true
    }));
    
    console.log('Cars loaded:', cars.length);
    renderCars();
    updateStats();
}

async function saveCar(carData) {
    if (!user) return;

    const carPayload = {
  id: carData.id,
  user_id: user.email,
  year: carData.year,
  make: carData.make,
  model: carData.model,
  vin: carData.vin,
  purchase_date: carData.purchaseDate,
  purchase_price: carData.purchasePrice,
  sale_price: carData.salePrice,
  sale_date: carData.saleDate,
  price: carData.purchasePrice,
  sold_price: carData.salePrice,
  expenses: JSON.stringify(carData.expenses || []),
  include_in_reports: carData.includeInReports
    };

    const { error } = await supabase
  .from('cars')
  .upsert(carPayload, { onConflict: 'id' });

    if (error) {
  console.error('Error saving car:', error);
  alert('Error saving car: ' + error.message);
  return;
    }

    loadCars();
}

async function deleteCarFromDb(id) {
    if (!user) return;

    console.log('Deleting car with id:', id, 'type:', typeof id);
    
    // Try as string first, then as number
    let error = null;
    
    // First try with string ID
    const { error: err1 } = await supabase
  .from('cars')
  .delete()
  .eq('id', String(id));
    
    if (err1) {
      // Try with numeric ID
      const { error: err2 } = await supabase
        .from('cars')
        .delete()
        .eq('id', parseInt(id, 10));
      
      if (err2) {
        error = err2;
      }
    }

    if (error) {
      console.error('Error deleting car:', error);
      alert('Error deleting car: ' + error.message);
      return;
    }

    console.log('Car deleted successfully');
    
    // Filter by converting both to strings to ensure match
    cars = cars.filter(c => String(c.id) !== String(id));
    renderCars();
    updateStats();
}

function updateStats() {
    // Filter out cars excluded from reports
    const reportCars = cars.filter(c => c.includeInReports !== false);
    const totalCars = reportCars.length;
    const soldCars = reportCars.filter(c => c.sale_date).length;
    const inStock = totalCars - soldCars;
    
    let totalProfit = 0;
    reportCars.forEach(car => {
  if (car.sale_price && car.purchase_price) {
      let expArray = [];
      try {
        expArray = car.expenses && typeof car.expenses === 'string' ? JSON.parse(car.expenses) : (car.expenses || []);
      } catch(e) { expArray = []; }
      const expenses = Array.isArray(expArray) ? expArray.reduce((sum, e) => sum + e.amount, 0) : 0;
      totalProfit += car.sale_price - car.purchase_price - expenses;
  }
    });

    document.getElementById('totalCars').textContent = totalCars;
    document.getElementById('carsSold').textContent = soldCars;
    document.getElementById('carsInStock').textContent = inStock;
    document.getElementById('totalProfit').textContent = '$' + totalProfit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

// Render Cars
function renderCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('carsGrid');
    
    const filtered = cars.filter(car => {
  return car.make.toLowerCase().includes(searchTerm) ||
         car.model.toLowerCase().includes(searchTerm) ||
         car.year.toString().includes(searchTerm);
    });

    if (filtered.length === 0) {
  grid.innerHTML = `
      <div class="empty-state">
          <h3>${cars.length === 0 ? 'NO CARS YET' : 'NO MATCHES'}</h3>
          <p>${cars.length === 0 ? 'Add your first car to get started' : 'Try a different search term'}</p>
      </div>
  `;
  return;
    }

    grid.innerHTML = filtered.map(car => {
  // Handle both string and array formats for expenses
  let expenses = [];
  if (car.expenses) {
    try {
      expenses = typeof car.expenses === 'string' ? JSON.parse(car.expenses) : car.expenses;
    } catch (e) {
      console.error('Error parsing expenses:', e, car.expenses);
      expenses = [];
    }
  }
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const profit = car.sale_price && car.purchase_price ? car.sale_price - car.purchase_price - totalExpenses : null;

  return `
      <div class="car-card">
          <div class="header">
              <div>
                  <div class="title"><span class="year">${car.year}</span> ${car.make} ${car.model}</div>
                  <div class="vin">VIN: ${car.vin}</div>
              </div>
              <div class="actions">
                  <button onclick="editCar('${car.id}')" title="Edit">✎</button>
                  <button class="delete" onclick="deleteCar('${car.id}')" title="Delete">✕</button>
              </div>
          </div>
          <div class="car-details">
              <div class="detail">
                  <label>Purchase</label>
                  <span>${car.purchase_price ? '$' + parseFloat(car.purchase_price).toLocaleString() : '—'}</span>
              </div>
              <div class="detail">
                  <label>Purchased</label>
                  <span>${formatDate(car.purchase_date)}</span>
              </div>
              ${car.sale_price ? `
              <div class="detail">
                  <label>Sale Price</label>
                  <span>$${parseFloat(car.sale_price).toLocaleString()}</span>
              </div>
              <div class="detail">
                  <label>Sold</label>
                  <span>${formatDate(car.sale_date)}</span>
              </div>
              ` : ''}
              <div class="detail ${profit !== null ? (profit >= 0 ? 'profit' : 'loss') : ''}">
                  <label>Profit</label>
                  <span>${profit !== null ? '$' + profit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '—'}</span>
              </div>
              <div class="detail">
                  <label>Expenses</label>
                  <span>$${totalExpenses.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
          </div>
          <div class="expenses-section">
              <div class="expenses-header">
                  <h4>EXPENSES</h4>
                  <span class="total">$${totalExpenses.toLocaleString()}</span>
              </div>
              <div class="expense-list">
                  ${expenses.map((e, i) => `
                      <div class="expense-item">
                          <span class="desc">${e.category}: ${e.desc}</span>
                          <span class="amount">$${e.amount.toLocaleString()}</span>
                          <button class="delete-expense" onclick="deleteExpense('${car.id}', ${i})">✕</button>
                      </div>
                  `).join('')}
              </div>
              <button class="add-expense-btn" onclick="openExpenseModal('${car.id}')">+ Add Expense</button>
          </div>
      </div>
  `;
    }).join('');
}

function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Modal Functions
function openModal(carId = null) {
    const modal = document.getElementById('carModal');
    const form = document.getElementById('carForm');
    const title = document.getElementById('modalTitle');
    
    if (carId) {
  const car = cars.find(c => c.id === carId);
  title.textContent = 'Edit Car';
  document.getElementById('carId').value = car.id;
  document.getElementById('year').value = car.year;
  document.getElementById('make').value = car.make;
  document.getElementById('model').value = car.model;
  document.getElementById('vin').value = car.vin;
  document.getElementById('purchaseDate').value = car.purchase_date;
  document.getElementById('purchasePrice').value = car.purchase_price;
  document.getElementById('salePrice').value = car.sale_price || '';
  document.getElementById('saleDate').value = car.sale_date || '';
  document.getElementById('includeInReports').checked = car.includeInReports !== false;
    } else {
  title.textContent = 'Add New Car';
  form.reset();
  document.getElementById('carId').value = '';
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('carModal').classList.remove('active');
}

function openExpenseModal(carId) {
    document.getElementById('expenseCarId').value = carId;
    document.getElementById('expenseDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('expenseForm').reset();
    document.getElementById('expenseCarId').value = carId;
    document.getElementById('expenseModal').classList.add('active');
}

function closeExpenseModal() {
    document.getElementById('expenseModal').classList.remove('active');
}

// CRUD Operations
document.getElementById('carForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const carId = document.getElementById('carId').value;
    const existingCar = carId ? cars.find(c => String(c.id) === String(carId)) : null;
    let existingExpenses = [];
    if (existingCar && existingCar.expenses) {
      try {
        existingExpenses = typeof existingCar.expenses === 'string' ? JSON.parse(existingCar.expenses) : existingCar.expenses;
      } catch(e) { existingExpenses = []; }
    }
    
    const carData = {
  id: carId || Date.now().toString(),
  year: document.getElementById('year').value,
  make: document.getElementById('make').value,
  model: document.getElementById('model').value,
  vin: document.getElementById('vin').value,
  purchaseDate: document.getElementById('purchaseDate').value,
  purchasePrice: parseFloat(document.getElementById('purchasePrice').value),
  salePrice: document.getElementById('salePrice').value ? parseFloat(document.getElementById('salePrice').value) : null,
  saleDate: document.getElementById('saleDate').value || null,
  includeInReports: document.getElementById('includeInReports').checked,
  expenses: existingExpenses
    };

    saveCar(carData);
    closeModal();
});

document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const carId = document.getElementById('expenseCarId').value;
    const car = cars.find(c => String(c.id) === String(carId));
    
    if (!car.expenses) car.expenses = [];
    let expenses = [];
    try {
      expenses = typeof car.expenses === 'string' ? JSON.parse(car.expenses) : (car.expenses || []);
    } catch(e) { expenses = []; }
    
    expenses.push({
  desc: document.getElementById('expenseDesc').value,
  category: document.getElementById('expenseCategory').value,
  amount: parseFloat(document.getElementById('expenseAmount').value),
  date: document.getElementById('expenseDate').value
    });

    car.expenses = JSON.stringify(expenses);
    saveCar(car);
    closeExpenseModal();
});

function editCar(id) {
    openModal(id);
}

function deleteCar(id) {
    if (confirm('Delete this car?')) {
  deleteCarFromDb(id);
    }
}

function deleteExpense(carId, expenseIndex) {
    const car = cars.find(c => String(c.id) === String(carId));
    let expenses = [];
    try {
      expenses = car.expenses && typeof car.expenses === 'string' ? JSON.parse(car.expenses) : (car.expenses || []);
    } catch(e) { expenses = []; }
    expenses.splice(expenseIndex, 1);
    car.expenses = JSON.stringify(expenses);
    saveCar(car);
}

// Search
document.getElementById('searchInput').addEventListener('input', renderCars);

// Expose functions globally for onclick handlers
window.toggleAuthMode = toggleAuthMode;
window.openModal = openModal;
window.closeModal = closeModal;
window.openExpenseModal = openExpenseModal;
window.closeExpenseModal = closeExpenseModal;
window.editCar = editCar;
window.deleteCar = deleteCar;
window.deleteExpense = deleteExpense;

// Initialize
document.getElementById('loadingScreen').style.display = 'block';
document.getElementById('authScreen').classList.remove('active');
initAuth();
