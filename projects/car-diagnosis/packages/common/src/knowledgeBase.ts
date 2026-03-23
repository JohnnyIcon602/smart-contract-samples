import { IssueSuggestion } from './index';

type DtcEntry = {
  title: string;
  explanation: string;
  severity: IssueSuggestion['severity'];
  recommendedChecks: string[];
  estimatedRepairRange?: IssueSuggestion['estimatedRepairRange'];
  keywords?: string[];
};

type SymptomRule = {
  matchers: string[];
  issue: Omit<IssueSuggestion, 'likelihood' | 'sourceTrail'>;
  sourceTrail?: string[];
};

export const dtcKnowledge: Record<string, DtcEntry> = {
  // === MISFIRE CODES ===
  P0300: {
    title: 'Random/Multiple Cylinder Misfire',
    explanation:
      'The PCM detected repeated misfires across multiple cylinders. Combined with drivability issues it typically points to ignition or fueling problems.',
    severity: 'high',
    recommendedChecks: ['Scan fuel trims', 'Scope ignition waveforms', 'Compression and leak-down test'],
    estimatedRepairRange: { parts: 438, laborHours: 3 },
    keywords: ['misfire', 'shaking', 'rough']
  },
  P0301: {
    title: 'Cylinder 1 Misfire Detected',
    explanation:
      'Cylinder 1 is misfiring consistently. Common causes include bad spark plug, ignition coil, fuel injector, or low compression.',
    severity: 'high',
    recommendedChecks: ['Swap coil to another cylinder', 'Test spark plug', 'Check fuel injector', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 1']
  },
  P0302: {
    title: 'Cylinder 2 Misfire Detected',
    explanation:
      'Cylinder 2 is misfiring consistently. Check the same components as other cylinder misfires.',
    severity: 'high',
    recommendedChecks: ['Swap coil to another cylinder', 'Test spark plug', 'Check fuel injector', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 2']
  },
  P0303: {
    title: 'Cylinder 3 Misfire Detected',
    explanation:
      'Cylinder 3 is misfiring consistently. Often caused by a failing ignition coil or fuel injector.',
    severity: 'high',
    recommendedChecks: ['Swap coil to another cylinder', 'Test spark plug', 'Check fuel injector', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 3']
  },
  P0304: {
    title: 'Cylinder 4 Misfire Detected',
    explanation:
      'Cylinder 4 is misfiring consistently. Check ignition coil, spark plug, and fuel injector.',
    severity: 'high',
    recommendedChecks: ['Swap coil to another cylinder', 'Test spark plug', 'Check fuel injector', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 4']
  },
  P0305: {
    title: 'Cylinder 5 Misfire Detected',
    explanation: 'Cylinder 5 is misfiring. Common on V6 and V8 engines with individual coil packs.',
    severity: 'high',
    recommendedChecks: ['Inspect coil', 'Test spark plug', 'Fuel injector check', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 5']
  },
  P0306: {
    title: 'Cylinder 6 Misfire Detected',
    explanation: 'Cylinder 6 is misfiring. Check ignition coil, spark plug, and injector operation.',
    severity: 'high',
    recommendedChecks: ['Inspect coil', 'Test spark plug', 'Fuel injector check', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 6']
  },
  P0307: {
    title: 'Cylinder 7 Misfire Detected',
    explanation: 'Cylinder 7 is misfiring, typically on V8 engines.',
    severity: 'high',
    recommendedChecks: ['Inspect coil', 'Test spark plug', 'Fuel injector check', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 7']
  },
  P0308: {
    title: 'Cylinder 8 Misfire Detected',
    explanation: 'Cylinder 8 is misfiring, typically on V8 engines.',
    severity: 'high',
    recommendedChecks: ['Inspect coil', 'Test spark plug', 'Fuel injector check', 'Compression test'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['misfire', 'cylinder 8']
  },

  // === FUEL SYSTEM CODES ===
  P0171: {
    title: 'System Too Lean (Bank 1)',
    explanation:
      'Bank 1 oxygen sensor feedback indicates excessive oxygen in the exhaust. Common causes are vacuum leaks, intake restrictions, or weak fuel delivery.',
    severity: 'medium',
    recommendedChecks: ['Smoke test intake system', 'Fuel pressure test', 'Inspect mass airflow sensor', 'Check for vacuum leaks'],
    estimatedRepairRange: { parts: 225, laborHours: 2.2 },
    keywords: ['lean', 'rough idle', 'weak']
  },
  P0172: {
    title: 'System Too Rich (Bank 1)',
    explanation:
      'Bank 1 oxygen sensor shows excessively rich fuel mixture. Could be caused by a faulty injector, pressure regulator, or leaking fuel pump.',
    severity: 'medium',
    recommendedChecks: ['Check fuel pressure', 'Inspect injectors for leakage', 'Test fuel pressure regulator', 'Check for coolant leaks in intake'],
    estimatedRepairRange: { parts: 275, laborHours: 2 },
    keywords: ['rich', 'smell gas', 'flooding']
  },
  P0174: {
    title: 'System Too Lean (Bank 2)',
    explanation:
      'Bank 2 oxygen sensor indicates lean condition. On V6/V8 engines, Bank 2 is the opposite bank from Bank 1.',
    severity: 'medium',
    recommendedChecks: ['Smoke test intake', 'Fuel pressure test', 'Inspect MAF sensor', 'Check for vacuum leaks on Bank 2'],
    estimatedRepairRange: { parts: 225, laborHours: 2.2 },
    keywords: ['lean', 'rough']
  },
  P0175: {
    title: 'System Too Rich (Bank 2)',
    explanation: 'Bank 2 running rich. Check fuel injectors, pressure regulator, and air intake for Bank 2.',
    severity: 'medium',
    recommendedChecks: ['Check fuel pressure', 'Inspect injectors', 'Test FPR', 'Check intake gasket'],
    estimatedRepairRange: { parts: 275, laborHours: 2 },
    keywords: ['rich', 'smell gas']
  },
  P0440: {
    title: 'Evaporative Emission Control System Malfunction',
    explanation:
      'The EVAP system has a general malfunction. The check valve, vent valve, or purge valve may be faulty.',
    severity: 'low',
    recommendedChecks: ['Visual inspection of EVAP lines', 'Test purge valve', 'Test vent valve', 'Check gas cap'],
    estimatedRepairRange: { parts: 150, laborHours: 1.5 },
    keywords: ['evap', 'smell gas', 'filling']
  },
  P0442: {
    title: 'Evaporative Emission Control System Leak Detected (Small Leak)',
    explanation:
      'A small leak in the EVAP system has been detected, often from a loose gas cap, cracked hose, or small hole in the system.',
    severity: 'low',
    recommendedChecks: ['Replace gas cap', 'Smoke test EVAP system', 'Inspect all hoses and connections', 'Check purge valve'],
    estimatedRepairRange: { parts: 100, laborHours: 1 },
    keywords: ['evap', 'check engine', 'gas cap']
  },
  P0446: {
    title: 'Evaporative Emission Control System Vent System Performance',
    explanation:
      'The EVAP vent system is not flowing properly. The vent valve or vent line may be restricted or stuck closed.',
    severity: 'low',
    recommendedChecks: ['Test vent valve', 'Check vent line for blockage', 'Inspect charcoal canister', 'Verify vent solenoid operation'],
    estimatedRepairRange: { parts: 188, laborHours: 1.2 },
    keywords: ['evap', 'vent']
  },
  P0455: {
    title: 'Evaporative Emission Control System Leak Detected (Large Leak)',
    explanation:
      'A large leak detected in EVAP system, often gas cap left off or missing, or large hose disconnected.',
    severity: 'low',
    recommendedChecks: ['Verify gas cap is present and sealed', 'Check all EVAP hoses', 'Smoke test system', 'Inspect canister'],
    estimatedRepairRange: { parts: 75, laborHours: 0.8 },
    keywords: ['evap', 'check engine', 'gas cap']
  },
  P0456: {
    title: 'Evaporative Emission Control System Leak Detected (Very Small Leak)',
    explanation: 'A very small leak in EVAP system, often microscopic pinhole in hose or loose connection.',
    severity: 'low',
    recommendedChecks: ['Smoke test withsniffer', 'Inspect all hoses', 'Check gas cap seal', 'Test purge/vent valves'],
    estimatedRepairRange: { parts: 125, laborHours: 1.5 },
    keywords: ['evap', 'check engine']
  },

  // === CATALYTIC CONVERTER CODES ===
  P0420: {
    title: 'Catalyst System Efficiency Below Threshold (Bank 1)',
    explanation:
      'The upstream vs downstream oxygen sensor readings show the catalytic converter is not storing oxygen as expected, often from converter wear or upstream misfires.',
    severity: 'medium',
    recommendedChecks: ['Check for rich/lean conditions', 'Verify exhaust leaks', 'Measure catalyst temperature split', 'Check for upstream misfires'],
    estimatedRepairRange: { parts: 1125, laborHours: 1.8 },
    keywords: ['catalyst', 'converter', 'efficiency']
  },
  P0421: {
    title: 'Catalyst System Efficiency Below Threshold - Warmup (Bank 1)',
    explanation: 'Catalytic converter not reaching operating temperature efficiently during warmup.',
    severity: 'medium',
    recommendedChecks: ['Check coolant temperature sensor', 'Inspect exhaust leaks before converter', 'Verify proper thermostat operation'],
    estimatedRepairRange: { parts: 1063, laborHours: 1.5 },
    keywords: ['catalyst', 'warmup', 'cold']
  },
  P0430: {
    title: 'Catalyst System Efficiency Below Threshold (Bank 2)',
    explanation: 'Bank 2 catalytic converter efficiency is below threshold.',
    severity: 'medium',
    recommendedChecks: ['Check for rich/lean conditions on Bank 2', 'Verify exhaust leaks', 'Test upstream O2 sensor'],
    estimatedRepairRange: { parts: 1125, laborHours: 1.8 },
    keywords: ['catalyst', 'bank 2', 'converter']
  },

  // === IGNITION/TIMING CODES ===
  P0335: {
    title: 'Crankshaft Position Sensor A Circuit Malfunction',
    explanation:
      'The crankshaft position sensor is not sending a signal to the PCM. The engine may not start or could stall.',
    severity: 'high',
    recommendedChecks: ['Test crankshaft position sensor', 'Check sensor wiring and connectors', 'Verify reluctor ring condition', 'Check for damage to sensor'],
    estimatedRepairRange: { parts: 150, laborHours: 1.5 },
    keywords: ['crank', 'position', 'no start', 'won\'t start']
  },
  P0340: {
    title: 'Camshaft Position Sensor Circuit Malfunction',
    explanation:
      'The camshaft position sensor is not sending a proper signal. May cause no-start or running issues.',
    severity: 'high',
    recommendedChecks: ['Test camshaft position sensor', 'Check wiring', 'Verify cam timing', 'Inspect sensor connector'],
    estimatedRepairRange: { parts: 163, laborHours: 1.8 },
    keywords: ['camshaft', 'position', 'timing', 'no start']
  },
  P0351: {
    title: 'Ignition Coil A Primary/Secondary Circuit Malfunction',
    explanation: 'Ignition coil for cylinder 1 has an electrical issue. Check primary and secondary circuits.',
    severity: 'medium',
    recommendedChecks: ['Test ignition coil', 'Check primary voltage', 'Inspect secondary spark', 'Check wiring harness'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['coil', 'ignition', 'misfire']
  },
  P0352: {
    title: 'Ignition Coil B Primary/Secondary Circuit Malfunction',
    explanation: 'Ignition coil for cylinder 2 has an electrical issue.',
    severity: 'medium',
    recommendedChecks: ['Test ignition coil', 'Check primary voltage', 'Inspect secondary spark', 'Check wiring harness'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['coil', 'ignition', 'misfire']
  },
  P0353: {
    title: 'Ignition Coil C Primary/Secondary Circuit Malfunction',
    explanation: 'Ignition coil for cylinder 3 has an electrical issue.',
    severity: 'medium',
    recommendedChecks: ['Test ignition coil', 'Check primary voltage', 'Inspect secondary spark', 'Check wiring harness'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['coil', 'ignition', 'misfire']
  },
  P0354: {
    title: 'Ignition Coil D Primary/Secondary Circuit Malfunction',
    explanation: 'Ignition coil for cylinder 4 has an electrical issue.',
    severity: 'medium',
    recommendedChecks: ['Test ignition coil', 'Check primary voltage', 'Inspect secondary spark', 'Check wiring harness'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['coil', 'ignition', 'misfire']
  },

  // === THROTTLE/ACCELERATOR CODES ===
  P0120: {
    title: 'Throttle Position Sensor/Switch A Circuit Malfunction',
    explanation: 'Throttle position sensor circuit has a problem. May cause idle issues or acceleration problems.',
    severity: 'medium',
    recommendedChecks: ['Test throttle position sensor', 'Check wiring', 'Verify pedal position sensor', 'Inspect throttle body'],
    estimatedRepairRange: { parts: 150, laborHours: 1.2 },
    keywords: ['throttle', 'accelerator', 'pedal']
  },
  P0122: {
    title: 'Throttle Position Sensor/Switch A Circuit Low Input',
    explanation: 'Throttle position sensor reading too low. The sensor may be faulty or circuit has a short.',
    severity: 'medium',
    recommendedChecks: ['Test TPS voltage', 'Check wiring for shorts', 'Inspect connector', 'Verify 5V reference'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['throttle', 'idle', 'acceleration']
  },
  P0123: {
    title: 'Throttle Position Sensor/Switch A Circuit High Input',
    explanation: 'Throttle position sensor reading too high. May cause high idle or acceleration issues.',
    severity: 'medium',
    recommendedChecks: ['Test TPS voltage', 'Check for open circuit', 'Inspect connector', 'Verify ground circuit'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['throttle', 'high idle']
  },
  P0220: {
    title: 'Throttle Position Sensor/Switch B Circuit Malfunction',
    explanation: 'Secondary throttle position sensor circuit issue.',
    severity: 'medium',
    recommendedChecks: ['Test TPS B', 'Check wiring', 'Verify throttle body operation', 'Inspect connectors'],
    estimatedRepairRange: { parts: 150, laborHours: 1.2 },
    keywords: ['throttle', 'accelerator']
  },
  P0222: {
    title: 'Throttle Position Sensor/Switch B Circuit Low Input',
    explanation: 'Secondary TPS reading too low.',
    severity: 'medium',
    recommendedChecks: ['Test TPS B voltage', 'Check wiring', 'Inspect connector'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['throttle']
  },
  P0223: {
    title: 'Throttle Position Sensor/Switch B Circuit High Input',
    explanation: 'Secondary TPS reading too high.',
    severity: 'medium',
    recommendedChecks: ['Test TPS B voltage', 'Check wiring', 'Inspect connector'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['throttle']
  },
  P0128: {
    title: 'Coolant Thermostat Temperature Below Regulating Temperature',
    explanation:
      'Engine not reaching operating temperature. Usually a stuck-open thermostat or faulty coolant temp sensor.',
    severity: 'low',
    recommendedChecks: ['Test thermostat', 'Check coolant temperature sensor', 'Verify coolant level', 'Inspect cooling system'],
    estimatedRepairRange: { parts: 100, laborHours: 1.5 },
    keywords: ['thermostat', 'cold', 'temperature', 'warmup']
  },

  // === MASS AIRFLOW CODES ===
  P0100: {
    title: 'Mass Air Flow Circuit Malfunction',
    explanation: 'Mass airflow sensor circuit has a problem. May cause running and fuel economy issues.',
    severity: 'medium',
    recommendedChecks: ['Test MAF sensor', 'Check wiring', 'Inspect air intake for leaks', 'Verify signal circuit'],
    estimatedRepairRange: { parts: 225, laborHours: 1.2 },
    keywords: ['maf', 'mass air', 'running']
  },
  P0101: {
    title: 'Mass Air Flow Circuit Range/Performance',
    explanation: 'MAF sensor signal is out of expected range for the operating conditions.',
    severity: 'medium',
    recommendedChecks: ['Test MAF sensor', 'Check for intake leaks', 'Inspect air filter', 'Verify fuel trims'],
    estimatedRepairRange: { parts: 225, laborHours: 1.2 },
    keywords: ['maf', 'mass air', 'running']
  },
  P0102: {
    title: 'Mass Air Flow Circuit Low Input',
    explanation: 'MAF sensor signal is too low. Often caused by dirty sensor or wiring issue.',
    severity: 'medium',
    recommendedChecks: ['Clean MAF sensor', 'Check wiring', 'Test voltage reference', 'Inspect intake for leaks'],
    estimatedRepairRange: { parts: 150, laborHours: 1 },
    keywords: ['maf', 'lean']
  },
  P0103: {
    title: 'Mass Air Flow Circuit High Input',
    explanation: 'MAF sensor signal is too high. May be caused by contamination or wiring issue.',
    severity: 'medium',
    recommendedChecks: ['Test MAF sensor', 'Check wiring for short', 'Inspect connector', 'Verify signal'],
    estimatedRepairRange: { parts: 188, laborHours: 1 },
    keywords: ['maf', 'rich']
  },

  // === OXYGEN SENSOR CODES ===
  P0130: {
    title: 'O2 Sensor Circuit Malfunction (Bank 1 Sensor 1)',
    explanation: 'Primary oxygen sensor on Bank 1 is not functioning properly.',
    severity: 'medium',
    recommendedChecks: ['Test O2 sensor', 'Check wiring', 'Verify heated element operation', 'Inspect connector'],
    estimatedRepairRange: { parts: 250, laborHours: 1.2 },
    keywords: ['o2', 'oxygen', 'sensor']
  },
  P0131: {
    title: 'O2 Sensor Circuit Low Voltage (Bank 1 Sensor 1)',
    explanation: 'Bank 1 upstream O2 sensor stuck lean. May indicate lean running condition.',
    severity: 'medium',
    recommendedChecks: ['Test O2 sensor', 'Check for vacuum leaks', 'Verify fuel pressure', 'Inspect MAF sensor'],
    estimatedRepairRange: { parts: 250, laborHours: 1.2 },
    keywords: ['o2', 'oxygen', 'lean']
  },
  P0132: {
    title: 'O2 Sensor Circuit High Voltage (Bank 1 Sensor 1)',
    explanation: 'Bank 1 upstream O2 sensor stuck rich.',
    severity: 'medium',
    recommendedChecks: ['Test O2 sensor', 'Check fuel pressure', 'Inspect injectors', 'Verify coolant temp sensor'],
    estimatedRepairRange: { parts: 250, laborHours: 1.2 },
    keywords: ['o2', 'oxygen', 'rich']
  },
  P0133: {
    title: 'O2 Sensor Circuit Slow Response (Bank 1 Sensor 1)',
    explanation: 'Bank 1 upstream O2 sensor is responding slowly. The sensor may be aging or contaminated.',
    severity: 'medium',
    recommendedChecks: ['Replace O2 sensor', 'Check for exhaust leaks', 'Inspect catalyst efficiency'],
    estimatedRepairRange: { parts: 250, laborHours: 1 },
    keywords: ['o2', 'oxygen', 'slow']
  },
  P0135: {
    title: 'O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 1)',
    explanation: 'The heated element in the O2 sensor is not working. Sensor may not heat properly.',
    severity: 'medium',
    recommendedChecks: ['Test O2 heater element', 'Check heater circuit wiring', 'Verify voltage supply', 'Inspect fuse'],
    estimatedRepairRange: { parts: 250, laborHours: 1.2 },
    keywords: ['o2', 'oxygen', 'heater', 'cold']
  },
  P0136: {
    title: 'O2 Sensor Circuit Malfunction (Bank 1 Sensor 2)',
    explanation: 'Downstream O2 sensor (post-catalyst) has a circuit issue.',
    severity: 'low',
    recommendedChecks: ['Test downstream O2 sensor', 'Check wiring', 'Verify heater operation'],
    estimatedRepairRange: { parts: 250, laborHours: 1.2 },
    keywords: ['o2', 'oxygen', 'post', 'catalyst']
  },
  P0140: {
    title: 'O2 Sensor Circuit No Activity Detected (Bank 1 Sensor 2)',
    explanation: 'Downstream O2 sensor not switching, indicating catalyst may not be working.',
    severity: 'medium',
    recommendedChecks: ['Test downstream O2 sensor', 'Check catalyst efficiency', 'Verify upstream sensor operation'],
    estimatedRepairRange: { parts: 1125, laborHours: 1.5 },
    keywords: ['o2', 'catalyst']
  },
  P0141: {
    title: 'O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)',
    explanation: 'Downstream O2 sensor heater circuit issue.',
    severity: 'low',
    recommendedChecks: ['Test O2 heater', 'Check wiring', 'Verify voltage supply'],
    estimatedRepairRange: { parts: 250, laborHours: 1 },
    keywords: ['o2', 'heater']
  },

  // === ENGINE COOLING CODES ===
  P0217: {
    title: 'Engine Coolant Temperature Too High',
    explanation: 'Engine is overheating. May be cooling system issue or sensor fault.',
    severity: 'high',
    recommendedChecks: ['Check coolant level', 'Inspect radiator', 'Test thermostat', 'Check cooling fan operation', 'Verify coolant temp sensor'],
    estimatedRepairRange: { parts: 375, laborHours: 2 },
    keywords: ['overheat', 'hot', 'temperature', 'coolant']
  },
  P0219: {
    title: 'Engine Speed Too High',
    explanation: 'Engine has exceeded safe RPM. May indicate transmission or torque converter issue.',
    severity: 'medium',
    recommendedChecks: ['Check transmission', 'Verify torque converter', 'Inspect shift linkage', 'Test TCM'],
    estimatedRepairRange: { parts: 500, laborHours: 2 },
    keywords: ['rpm', 'rev', 'high']
  },

  // === TRANSMISSION CODES (common ones) ===
  P0700: {
    title: 'Transmission Control System Malfunction',
    explanation: 'A general transmission code is stored. Additional codes needed for specific diagnosis.',
    severity: 'high',
    recommendedChecks: ['Scan for transmission codes', 'Check transmission fluid level', 'Road test', 'Check TCM connections'],
    estimatedRepairRange: { parts: 625, laborHours: 3 },
    keywords: ['transmission', 'gear', 'shifting']
  },
  P0702: {
    title: 'Transmission Control System Electrical',
    explanation: 'Transmission control system has an electrical issue.',
    severity: 'high',
    recommendedChecks: ['Scan for codes', 'Check TCM power and ground', 'Inspect wiring', 'Test sensors'],
    estimatedRepairRange: { parts: 500, laborHours: 2.5 },
    keywords: ['transmission', 'electrical']
  },
  P0715: {
    title: 'Input/Turbine Speed Sensor Circuit Malfunction',
    explanation: 'Input speed sensor not sending correct signal to TCM.',
    severity: 'medium',
    recommendedChecks: ['Test input speed sensor', 'Check wiring', 'Verify TCM operation', 'Inspect connector'],
    estimatedRepairRange: { parts: 225, laborHours: 1.5 },
    keywords: ['transmission', 'speed', 'sensor']
  },
  P0720: {
    title: 'Output Speed Sensor Circuit Malfunction',
    explanation: 'Output speed sensor issue, affects shift timing and torque converter lockup.',
    severity: 'medium',
    recommendedChecks: ['Test output speed sensor', 'Check wiring', 'Verify signal to TCM'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['transmission', 'speed', 'sensor']
  },

  // === BATTERY/CHARGING CODES ===
  P0562: {
    title: 'System Voltage Low',
    explanation: 'Vehicle voltage is below normal. Could be weak battery, alternator issue, or parasitic draw.',
    severity: 'medium',
    recommendedChecks: ['Test battery voltage', 'Test alternator output', 'Check for parasitic draw', 'Inspect battery cables'],
    estimatedRepairRange: { parts: 313, laborHours: 1.5 },
    keywords: ['battery', 'voltage', 'weak', 'drain']
  },
  P0563: {
    title: 'System Voltage High',
    explanation: 'Vehicle voltage is too high, usually indicating alternator overcharging.',
    severity: 'medium',
    recommendedChecks: ['Test alternator output', 'Verify voltage regulator', 'Check battery condition'],
    estimatedRepairRange: { parts: 250, laborHours: 1.2 },
    keywords: ['voltage', 'alternator', 'high']
  },

  // === KNOCK SENSOR CODES ===
  P0325: {
    title: 'Knock Sensor 1 Circuit Malfunction',
    explanation: 'Knock sensor circuit has a problem. May cause engine pinging or timing issues.',
    severity: 'medium',
    recommendedChecks: ['Test knock sensor', 'Check wiring', 'Verify signal to PCM', 'Inspect connector'],
    estimatedRepairRange: { parts: 125, laborHours: 1.2 },
    keywords: ['knock', 'ping', 'detonation']
  },
  P0326: {
    title: 'Knock Sensor 1 Circuit Range/Performance',
    explanation: 'Knock sensor signal is out of expected range.',
    severity: 'medium',
    recommendedChecks: ['Test knock sensor', 'Check for engine noises', 'Verify mounting', 'Check wiring'],
    estimatedRepairRange: { parts: 125, laborHours: 1 },
    keywords: ['knock', 'ping']
  },

  // === VARIABLE VALVE TIMING CODES ===
  P0010: {
    title: 'Intake Valve Control Solenoid Circuit Malfunction (Bank 1)',
    explanation: 'Variable valve timing solenoid for intake valve has an electrical issue.',
    severity: 'medium',
    recommendedChecks: ['Test VVT solenoid', 'Check wiring', 'Verify oil pressure', 'Inspect connector'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['vvt', 'timing', 'cam']
  },
  P0011: {
    title: 'Intake Valve Timing Performance (Bank 1)',
    explanation: 'Intake cam timing is not reaching commanded position. May be solenoid or cam phaser issue.',
    severity: 'medium',
    recommendedChecks: ['Test VVT solenoid', 'Check cam phaser', 'Verify oil pressure/flow', 'Inspect timing chain'],
    estimatedRepairRange: { parts: 438, laborHours: 3 },
    keywords: ['vvt', 'timing', 'cam', 'phaser']
  },
  P0012: {
    title: 'Intake Valve Timing Misalignment (Bank 1)',
    explanation: 'Intake cam timing is not at expected position for commanded value.',
    severity: 'medium',
    recommendedChecks: ['Test VVT solenoid', 'Check cam phaser', 'Verify timing chain stretch', 'Inspect oil passages'],
    estimatedRepairRange: { parts: 438, laborHours: 3 },
    keywords: ['vvt', 'timing', 'cam']
  },
  P0020: {
    title: 'Intake Valve Control Solenoid Circuit Malfunction (Bank 2)',
    explanation: 'Variable valve timing solenoid for Bank 2 intake has an electrical issue.',
    severity: 'medium',
    recommendedChecks: ['Test VVT solenoid', 'Check wiring', 'Verify oil pressure', 'Inspect connector'],
    estimatedRepairRange: { parts: 188, laborHours: 1.5 },
    keywords: ['vvt', 'timing', 'bank 2']
  },
  P0021: {
    title: 'Intake Valve Timing Performance (Bank 2)',
    explanation: 'Bank 2 intake cam timing is not reaching commanded position.',
    severity: 'medium',
    recommendedChecks: ['Test VVT solenoid', 'Check cam phaser', 'Verify oil pressure', 'Inspect timing chain'],
    estimatedRepairRange: { parts: 438, laborHours: 3 },
    keywords: ['vvt', 'timing', 'bank 2']
  },

  // === EXHAUST GAS RECIRCULATION CODES ===
  P0401: {
    title: 'EGR Flow Insufficient Detected',
    explanation: 'EGR system is not flowing enough exhaust gas. Often caused by carbon buildup or stuck valve.',
    severity: 'medium',
    recommendedChecks: ['Clean or replace EGR valve', 'Test EGR passages', 'Check vacuum supply', 'Inspect EGR cooler'],
    estimatedRepairRange: { parts: 250, laborHours: 1.5 },
    keywords: ['egr', 'emissions', 'pinging']
  },
  P0402: {
    title: 'EGR Flow Excessive Detected',
    explanation: 'EGR system is flowing too much exhaust gas, causing rough idle.',
    severity: 'medium',
    recommendedChecks: ['Test EGR valve', 'Check vacuum control', 'Verify EGR position sensor', 'Inspect for stuck open'],
    estimatedRepairRange: { parts: 225, laborHours: 1.5 },
    keywords: ['egr', 'idle', 'rough']
  },
  P0403: {
    title: 'EGR Control Circuit Malfunction',
    explanation: 'EGR valve has an electrical circuit issue.',
    severity: 'medium',
    recommendedChecks: ['Test EGR solenoid', 'Check wiring', 'Verify power supply', 'Inspect connector'],
    estimatedRepairRange: { parts: 188, laborHours: 1.2 },
    keywords: ['egr', 'electrical']
  },
  P0404: {
    title: 'EGR Sensor Circuit Range/Performance',
    explanation: 'EGR position sensor signal is out of expected range.',
    severity: 'medium',
    recommendedChecks: ['Test EGR position sensor', 'Check wiring', 'Verify signal voltage', 'Inspect valve movement'],
    estimatedRepairRange: { parts: 163, laborHours: 1 },
    keywords: ['egr', 'sensor']
  },

  // === FUEL INJECTOR CODES ===
  P0201: {
    title: 'Injector Circuit Malfunction - Cylinder 1',
    explanation: 'Fuel injector for cylinder 1 has an electrical issue.',
    severity: 'high',
    recommendedChecks: ['Test injector resistance', 'Check wiring', 'Verify driver signal from PCM', 'Inspect connector'],
    estimatedRepairRange: { parts: 150, laborHours: 1.5 },
    keywords: ['injector', 'cylinder 1']
  },
  P0202: {
    title: 'Injector Circuit Malfunction - Cylinder 2',
    explanation: 'Fuel injector for cylinder 2 has an electrical issue.',
    severity: 'high',
    recommendedChecks: ['Test injector resistance', 'Check wiring', 'Verify driver signal from PCM', 'Inspect connector'],
    estimatedRepairRange: { parts: 150, laborHours: 1.5 },
    keywords: ['injector', 'cylinder 2']
  },
  P0203: {
    title: 'Injector Circuit Malfunction - Cylinder 3',
    explanation: 'Fuel injector for cylinder 3 has an electrical issue.',
    severity: 'high',
    recommendedChecks: ['Test injector resistance', 'Check wiring', 'Verify driver signal from PCM', 'Inspect connector'],
    estimatedRepairRange: { parts: 150, laborHours: 1.5 },
    keywords: ['injector', 'cylinder 3']
  },
  P0204: {
    title: 'Injector Circuit Malfunction - Cylinder 4',
    explanation: 'Fuel injector for cylinder 4 has an electrical issue.',
    severity: 'high',
    recommendedChecks: ['Test injector resistance', 'Check wiring', 'Verify driver signal from PCM', 'Inspect connector'],
    estimatedRepairRange: { parts: 150, laborHours: 1.5 },
    keywords: ['injector', 'cylinder 4']
  }
};

export const symptomRules: SymptomRule[] = [
  // === POWER LOSS SYMPTOMS ===
  {
    matchers: ['loss of power', 'no power', 'slow acceleration', 'lack of power', 'weak acceleration', 'power drop'],
    issue: {
      title: 'Noticeable power loss under load',
      explanation:
        'Power complaints plus lean or misfire indicators often trace back to restricted fuel delivery or clogged converters. Verifying fuel pressure and exhaust back pressure isolates the cause.',
      severity: 'medium',
      recommendedChecks: ['Wide-open throttle fuel pressure test', 'Backpressure test before catalytic converter', 'Check MAF sensor', 'Test turbo boost (if equipped)'],
      estimatedRepairRange: { parts: 313, laborHours: 2.5 }
    },
    sourceTrail: ['symptom:power_loss']
  },
  {
    matchers: ['won\'t start', 'can\'t start', 'no start', 'engine won\'t start', 'crank no start'],
    issue: {
      title: 'Engine cranks but won\'t start',
      explanation:
        'No-start condition can come from fuel delivery, ignition, or sensor issues. Check fuel pump operation, spark at plugs, and crank/cam position sensor signals.',
      severity: 'high',
      recommendedChecks: ['Check for spark', 'Verify fuel pressure at rail', 'Test crank and cam sensors', 'Check fuel injector operation', 'Verify security system (if equipped)'],
      estimatedRepairRange: { parts: 375, laborHours: 2 }
    },
    sourceTrail: ['symptom:no_start']
  },
  {
    matchers: ['hard start', 'difficult to start', 'takes long to start', 'crank long'],
    issue: {
      title: 'Hard starting condition',
      explanation:
        'Hard starting can be caused by weak fuel delivery, low compression, bad starter, or sensor issues. Check coolant temp sensor and fuel pressure.',
      severity: 'medium',
      recommendedChecks: ['Test fuel pressure', 'Check coolant temp sensor', 'Verify battery voltage', 'Test starter draw', 'Check compression'],
      estimatedRepairRange: { parts: 250, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:hard_start']
  },

  // === IDLE/ROUGH RUNNING SYMPTOMS ===
  {
    matchers: ['engine shaking', 'rough idle', 'vibration at idle', 'shaking at idle', 'rough running', 'engine bucking'],
    issue: {
      title: 'Engine vibration at idle',
      explanation:
        'Shaking that improves with RPM typically means one or more cylinders are unstable. Ignition coils, plugs, or vacuum leaks are common on higher-mileage vehicles.',
      severity: 'medium',
      recommendedChecks: ['Check misfire counters per cylinder', 'Inspect coils/plugs', 'Vacuum leak smoke test', 'Check fuel trims'],
      estimatedRepairRange: { parts: 250, laborHours: 2 }
    },
    sourceTrail: ['symptom:idle_shake']
  },
  {
    matchers: ['stalls when stopping', 'dies at stop', 'stall at idle', 'dies when idle', 'shuts off at red light'],
    issue: {
      title: 'Engine stalls at idle or stop',
      explanation:
        'Stalling at idle is often caused by idle air control issues, vacuum leaks, or idle fuel delivery problems. Check for proper IAC operation and intake integrity.',
      severity: 'high',
      recommendedChecks: ['Test idle air control', 'Smoke test for vacuum leaks', 'Check fuel pressure at idle', 'Verify coolant temp sensor', 'Check for proper throttle plate closing'],
      estimatedRepairRange: { parts: 225, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:stall_idle']
  },
  {
    matchers: ['stalls when warm', 'dies after warmup', 'runs bad when hot', 'heat soak stall'],
    issue: {
      title: 'Stalling after engine warms up',
      explanation:
        'Heat-related stalling often points to fuel delivery issues as components heat up. Check fuel pump, fuel filter, and fuel pressure regulator.',
      severity: 'high',
    recommendedChecks: ['Test fuel pressure when hot', 'Check fuel pump voltage under load', 'Inspect fuel filter', 'Test coolant temp sensor', 'Check for vapor lock'],
      estimatedRepairRange: { parts: 250, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:stall_warm']
  },

  // === FUEL/MILEAGE SYMPTOMS ===
  {
    matchers: ['poor fuel economy', 'bad gas mileage', 'low mileage', 'uses too much gas', 'drinks fuel'],
    issue: {
      title: 'Poor fuel economy',
      explanation:
        'Reduced gas mileage can stem from many causes: oxygen sensor issues, dirty MAF, improper tire pressure, or transmission problems. A scan can reveal fuel trims.',
      severity: 'medium',
      recommendedChecks: ['Check fuel trims', 'Test O2 sensors', 'Inspect MAF sensor', 'Check tire pressure', 'Verify transmission torque converter lockup', 'Look for vacuum leaks'],
      estimatedRepairRange: { parts: 250, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:fuel_economy']
  },
  {
    matchers: ['smell gas', 'gas smell', 'fuel smell', 'smell fuel inside', 'strong gas odor'],
    issue: {
      title: 'Fuel odor present',
      explanation:
        'Gas smell inside usually indicates an EVAP leak or fuel leak. Outside smell during startup could be rich running or leaking injector.',
      severity: 'high',
      recommendedChecks: ['Smoke test EVAP system', 'Inspect fuel lines', 'Check injectors for leakage', 'Verify fuel pressure regulator', 'Inspect gas cap', 'Check purge valve'],
      estimatedRepairRange: { parts: 188, laborHours: 1 }
    },
    sourceTrail: ['symptom:gas_smell']
  },
  {
    matchers: ['black smoke', 'dark smoke', 'exhaust smoke', 'smoky exhaust'],
    issue: {
      title: 'Black smoke from exhaust',
      explanation:
        'Black smoke indicates rich fuel mixture. Check for stuck injector, faulty O2 sensor, or high fuel pressure.',
      severity: 'high',
      recommendedChecks: ['Check fuel pressure', 'Test O2 sensors', 'Inspect fuel injectors', 'Check MAF sensor', 'Verify coolant temp sensor'],
      estimatedRepairRange: { parts: 313, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:black_smoke']
  },
  {
    matchers: ['white smoke', 'white exhaust', 'milky exhaust'],
    issue: {
      title: 'White smoke from exhaust',
      explanation:
        'White smoke usually indicates coolant entering combustion chamber, likely from head gasket or cracked engine block. Also check for fuel dilution.',
      severity: 'high',
      recommendedChecks: ['Check coolant level', 'Test for combustion gases in coolant', 'Inspect head gasket', 'Check oil for coolant contamination', 'Compression test'],
      estimatedRepairRange: { parts: 1500, laborHours: 8 },
      keywords: ['head gasket', 'white smoke', 'coolant']
    },
    sourceTrail: ['symptom:white_smoke']
  },

  // === TEMPERATURE SYMPTOMS ===
  {
    matchers: ['overheating', 'runs hot', 'temperature gauge high', 'hot engine', 'coolant temp high', 'engine hot'],
    issue: {
      title: 'Engine overheating',
      explanation:
        'Overheating can be caused by low coolant, failed thermostat, bad water pump, radiator issues, or thermostat. Stop immediately to prevent engine damage.',
      severity: 'high',
      recommendedChecks: ['Check coolant level', 'Test thermostat', 'Inspect water pump', 'Verify radiator flow', 'Check cooling fan operation', 'Inspect for air in cooling system'],
      estimatedRepairRange: { parts: 500, laborHours: 2.5 }
    },
    sourceTrail: ['symptom:overheating']
  },
  {
    matchers: ['never gets warm', 'stays cold', 'cold engine', 'takes long to warm up', 'thermostat stuck'],
    issue: {
      title: 'Engine won\'t reach operating temperature',
      explanation:
        'Usually a stuck-open thermostat. May also be faulty coolant temp sensor giving false reading to PCM.',
      severity: 'low',
      recommendedChecks: ['Replace thermostat', 'Test coolant temperature sensor', 'Verify gauge sending unit'],
      estimatedRepairRange: { parts: 100, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:cold_engine']
  },

  // === NOISE SYMPTOMS ===
  {
    matchers: ['knocking', 'pinging', 'detonation', 'spark knock', 'ping when accelerating'],
    issue: {
      title: 'Engine knocking or pinging',
      explanation:
        'Knocking can be from low octane fuel, advanced timing, carbon buildup, or faulty knock sensor. Can cause engine damage if ignored.',
      severity: 'high',
      recommendedChecks: ['Check knock sensor', 'Verify timing', 'Inspect for carbon buildup', 'Try higher octane fuel', 'Check coolant temp sensor'],
      estimatedRepairRange: { parts: 125, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:knocking']
  },
  {
    matchers: ['tapping', 'ticking', 'noise from engine', 'valve noise', 'noisy top end'],
    issue: {
      title: 'Engine tapping or ticking noise',
      explanation:
        'Ticking noises often come from lifters, valve train, or exhaust leaks. Hydraulics can tick when cold but should quiet down.',
      severity: 'low',
      recommendedChecks: ['Check oil level and pressure', 'Inspect valve cover gasket', 'Listen for exhaust leak', 'Check for collapsed lifters', 'Inspect timing chain tensioner'],
      estimatedRepairRange: { parts: 188, laborHours: 2 }
    },
    sourceTrail: ['symptom:tapping']
  },
  {
    matchers: ['whining', 'squealing', 'belt noise', 'noise from belt', 'pulley noise'],
    issue: {
      title: 'Belt or pulley noise',
      explanation:
        'Whining or squealing from belt area can be worn belt, bad pulley, or incorrect tension.',
      severity: 'low',
      recommendedChecks: ['Inspect belt condition', 'Check belt tension', 'Test pulleys for wobble', 'Verify idler pulley', 'Check for belt misalignment'],
      estimatedRepairRange: { parts: 100, laborHours: 0.8 }
    },
    sourceTrail: ['symptom:belt_noise']
  },

  // === BRAKE SYMPTOMS (can trigger ABS codes) ===
  {
    matchers: ['abs light', 'brake light on', 'abs engage', 'abs pump noise'],
    issue: {
      title: 'ABS warning light on',
      explanation:
        'ABS light indicates issue with anti-lock brake system. Common causes include wheel speed sensors, wiring, or ABS module.',
      severity: 'medium',
      recommendedChecks: ['Scan for ABS codes', 'Test wheel speed sensors', 'Check sensor wiring', 'Verify hub bearing condition', 'Check ABS module'],
      estimatedRepairRange: { parts: 375, laborHours: 2 }
    },
    sourceTrail: ['symptom:abs_light']
  },
  {
    matchers: ['pulls when braking', 'pulls to side', 'brake pull', 'veers when braking'],
    issue: {
      title: 'Vehicle pulls during braking',
      explanation:
        'Brake pull can be from stuck caliper, contaminated brake pad, or unequal brake pressure.',
      severity: 'medium',
      recommendedChecks: ['Inspect calipers for sticking', 'Check brake pads', 'Test brake pressure', 'Inspect brake lines', 'Check for uneven rotor wear'],
      estimatedRepairRange: { parts: 250, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:brake_pull']
  },

  // === TRANSMISSION SYMPTOMS ===
  {
    matchers: ['hard shift', 'harsh shift', 'rough shift', 'slipping transmission', 'delayed shift'],
    issue: {
      title: 'Hard or harsh shifting',
      explanation:
        'Hard shifting can be transmission fluid related, shift solenoid issue, or mechanical problem inside transmission.',
      severity: 'high',
      recommendedChecks: ['Check transmission fluid level and condition', 'Scan for transmission codes', 'Test shift solenoids', 'Check line pressure', 'Inspect clutch (if manual)'],
      estimatedRepairRange: { parts: 500, laborHours: 2.5 }
    },
    sourceTrail: ['symptom:hard_shift']
  },
  {
    matchers: ['check transmission', 'transmission slip', 'won\'t shift', 'no gears'],
    issue: {
      title: 'Transmission engagement problems',
      explanation:
        'Transmission not engaging properly can be low fluid, torque converter issue, or internal mechanical failure.',
      severity: 'high',
      recommendedChecks: ['Check fluid level', 'Test torque converter', 'Scan for codes', 'Verify shift linkage', 'Check neutral safety switch'],
      estimatedRepairRange: { parts: 750, laborHours: 3 }
    },
    sourceTrail: ['symptom:transmission']
  },

  // === ELECTRICAL SYMPTOMS ===
  {
    matchers: ['battery light', 'alt light', 'charging light', 'voltage low'],
    issue: {
      title: 'Battery/charging warning light',
      explanation:
        'Battery light indicates charging system issue - could be alternator, voltage regulator, wiring, or battery.',
      severity: 'medium',
      recommendedChecks: ['Test battery voltage', 'Test alternator output', 'Check drive belt', 'Inspect wiring', 'Test voltage regulator'],
      estimatedRepairRange: { parts: 313, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:battery_light']
  },
  {
    matchers: ['dead battery', 'battery dead', 'won\'t hold charge', 'drains overnight'],
    issue: {
      title: 'Battery draining overnight',
      explanation:
        'Parasitic draw is draining the battery. Check for aftermarket accessories, glove box light, or module draw.',
      severity: 'medium',
      recommendedChecks: ['Perform parasitic draw test', 'Check for aftermarket accessories', 'Inspect trunk/door switches', 'Test modules for draw', 'Check battery condition'],
      estimatedRepairRange: { parts: 188, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:battery_drain']
  },

  // === EMISSIONS SYMPTOMS ===
  {
    matchers: ['check engine light', 'mil on', 'cel on', 'service engine soon', 'malfunction light'],
    issue: {
      title: 'Check Engine Light / MIL On',
      explanation:
        'When the MIL is on without obvious drivability issues, it may be an emissions-related fault. Confirm freeze-frame data and check for pending codes before clearing.',
      severity: 'low',
      recommendedChecks: ['Review freeze-frame data', 'Check pending codes', 'Road test under similar conditions', 'Scan all modules'],
      estimatedRepairRange: { parts: 125, laborHours: 1 }
    },
    sourceTrail: ['symptom:mil_only']
  },
  {
    matchers: ['flashing check engine', 'blinking cel', 'flashing mil', 'misfire warning'],
    issue: {
      title: 'Flashing check engine light (misfire detected)',
      explanation:
        'Flashing CEL indicates active misfire that can damage catalytic converter. Drive gently and fix promptly.',
      severity: 'high',
      recommendedChecks: ['Scan for misfire codes', 'Check spark plugs', 'Test ignition coils', 'Verify fuel delivery', 'Check compression'],
      estimatedRepairRange: { parts: 313, laborHours: 2 }
    },
    sourceTrail: ['symptom:flashing_cel']
  },

  // === STEERING/SUSPENSION ===
  {
    matchers: ['steering wheel vibration', 'shakes steering', 'vibration at speed', 'steering wobble'],
    issue: {
      title: 'Steering wheel vibration at speed',
      explanation:
        'Vibration in steering at speed usually points to wheel alignment, balanced tires, or suspension components.',
      severity: 'medium',
      recommendedChecks: ['Balance wheels', 'Check alignment', 'Inspect tie rod ends', 'Check control arms', 'Inspect hub bearings'],
      estimatedRepairRange: { parts: 250, laborHours: 1.5 }
    },
    sourceTrail: ['symptom:steering_vibration']
  },
  {
    matchers: ['squeaks when turning', 'creaks when turning', 'noise steering', 'steering noise'],
    issue: {
      title: 'Noise when turning steering',
      explanation:
        'Squeaking or creaking during turns is often dry ball joints, tie rod ends, or steering gear.',
      severity: 'low',
      recommendedChecks: ['Lubricate ball joints', 'Check tie rod ends', 'Inspect steering gear', 'Check power steering fluid', 'Inspect bushings'],
      estimatedRepairRange: { parts: 188, laborHours: 1.2 }
    },
    sourceTrail: ['symptom:steering_noise']
  },

  // === AC/HEATING ===
  {
    matchers: ['ac not cold', 'air conditioning warm', 'ac doesn\'t work', 'no cold air'],
    issue: {
      title: 'Air conditioning not cooling',
      explanation:
        'AC not cold could be low refrigerant, failed compressor, electrical issue, or cooling fan problem.',
      severity: 'medium',
      recommendedChecks: ['Check refrigerant level', 'Test compressor operation', 'Verify cooling fans', 'Check electrical connections', 'Inspect AC controls'],
      estimatedRepairRange: { parts: 438, laborHours: 2 }
    },
    sourceTrail: ['symptom:ac_not_cold']
  },
  {
    matchers: ['heater not working', 'no heat', 'blows cold air', 'warm car cold'],
    issue: {
      title: 'Heater not producing heat',
      explanation:
        'No heat can be low coolant, faulty heater control valve, or air in cooling system.',
      severity: 'medium',
      recommendedChecks: ['Check coolant level', 'Test heater control valve', 'Bleed air from cooling system', 'Verify thermostat operation', 'Check heater core'],
      estimatedRepairRange: { parts: 250, laborHours: 2 }
    },
    sourceTrail: ['symptom:no_heat']
  }
};

export const defaultDisclaimer =
  'Results are preliminary and based on limited inputs. Schedule a hands-on diagnostic to confirm before performing repairs or extended driving.';

export const defaultNextActions = [
  'Avoid heavy loads or long trips until a technician inspects the vehicle.',
  'Bring any maintenance history or receipts to your appointment.',
  'Schedule a diagnostic visit so we can verify the root cause.'
];