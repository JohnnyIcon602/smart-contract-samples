// AUTO-GENERATED FILE. Run `node scripts/generate-dtc-data.mjs` to regenerate.
// Generated on 2026-04-13T13:55:03.067Z
import type { DtcEntry } from '../dtcTypes.js';

const genericRecommendedChecks: string[] = [
  "Review freeze-frame data and duplicating conditions",
  "Inspect related wiring, connectors, and sensors for obvious faults",
  "Perform OEM pinpoint tests for this DTC before replacing parts"
];

export const generatedDtcCatalog: Record<string, DtcEntry> = {
  P0000: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0001: {
    title: 'Fuel Volume Regulator Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Fuel Volume Regulator Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0002: {
    title: 'Fuel Volume Regulator Control Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Volume Regulator Control Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0003: {
    title: 'Fuel Volume Regulator Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Volume Regulator Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0004: {
    title: 'Fuel Volume Regulator Control Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Volume Regulator Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0005: {
    title: 'Fuel Shutoff ValveAControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Fuel Shutoff ValveAControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0006: {
    title: 'Fuel Shutoff ValveAControl Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Shutoff ValveAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0007: {
    title: 'Fuel Shutoff ValveAControl Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Shutoff ValveAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0008: {
    title: 'Engine Positions System Performance Bank 1',
    explanation: 'Generic OBD-II definition: Engine Positions System Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0009: {
    title: 'Engine Position System Performance Bank 2',
    explanation: 'Generic OBD-II definition: Engine Position System Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P000A: {
    title: 'ACamshaft Position Slow Response Bank 1',
    explanation: 'Generic OBD-II definition: ACamshaft Position Slow Response Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P000B: {
    title: 'BCamshaft Position Slow Response Bank 1',
    explanation: 'Generic OBD-II definition: BCamshaft Position Slow Response Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P000C: {
    title: 'ACamshaft Position Slow Response Bank 2',
    explanation: 'Generic OBD-II definition: ACamshaft Position Slow Response Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P000D: {
    title: 'BCamshaft Position Slow Response Bank 2',
    explanation: 'Generic OBD-II definition: BCamshaft Position Slow Response Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P000E: {
    title: 'Fuel Volume Regulator Control Exceeded Learning Limit',
    explanation: 'Generic OBD-II definition: Fuel Volume Regulator Control Exceeded Learning Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P000F: {
    title: 'Fuel System Over Pressure Relief Valve Activated',
    explanation: 'Generic OBD-II definition: Fuel System Over Pressure Relief Valve Activated. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0010: {
    title: 'ACamshaft Position Actuator Circuit (Bank 1)',
    explanation: 'Generic OBD-II definition: ACamshaft Position Actuator Circuit (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0011: {
    title: 'ACamshaft Position - Timing Over-Advanced or System Performance (Bank 1)',
    explanation: 'Generic OBD-II definition: ACamshaft Position - Timing Over-Advanced or System Performance (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0012: {
    title: 'ACamshaft Position - Timing Over-Retarded (Bank 1)',
    explanation: 'Generic OBD-II definition: ACamshaft Position - Timing Over-Retarded (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0013: {
    title: 'BCamshaft Position - Actuator Circuit (Bank 1)',
    explanation: 'Generic OBD-II definition: BCamshaft Position - Actuator Circuit (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0014: {
    title: 'BCamshaft Position - Timing Over-Advanced or System Performance (Bank 1)',
    explanation: 'Generic OBD-II definition: BCamshaft Position - Timing Over-Advanced or System Performance (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0015: {
    title: 'BCamshaft Position -Timing Over-Retarded (Bank 1)',
    explanation: 'Generic OBD-II definition: BCamshaft Position -Timing Over-Retarded (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0016: {
    title: 'Crankshaft Position - Camshaft Position Correlation (Bank 1 Sensor A)',
    explanation: 'Generic OBD-II definition: Crankshaft Position - Camshaft Position Correlation (Bank 1 Sensor A). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0017: {
    title: 'Crankshaft Position - Camshaft Position Correlation (Bank 1 Sensor B)',
    explanation: 'Generic OBD-II definition: Crankshaft Position - Camshaft Position Correlation (Bank 1 Sensor B). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0018: {
    title: 'Crankshaft Position - Camshaft Position Correlation (Bank 2 Sensor A)',
    explanation: 'Generic OBD-II definition: Crankshaft Position - Camshaft Position Correlation (Bank 2 Sensor A). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0019: {
    title: 'Crankshaft Position - Camshaft Position Correlation (Bank 2 Sensor B)',
    explanation: 'Generic OBD-II definition: Crankshaft Position - Camshaft Position Correlation (Bank 2 Sensor B). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P001A: {
    title: 'ACamshaft Profile Control Circuit/Open Bank 1',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Circuit/Open Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P001B: {
    title: 'ACamshaft Profile Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P001C: {
    title: 'ACamshaft Profile Control Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P001D: {
    title: 'ACamshaft Profile Control Circuit/Open Bank 2',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Circuit/Open Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P001E: {
    title: 'ACamshaft Profile Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P001F: {
    title: 'ACamshaft Profile Control Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0020: {
    title: 'ACamshaft Position Actuator Circuit (Bank 2)',
    explanation: 'Generic OBD-II definition: ACamshaft Position Actuator Circuit (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0021: {
    title: 'ACamshaft Position - Timing Over-Advanced or System Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: ACamshaft Position - Timing Over-Advanced or System Performance (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0022: {
    title: 'ACamshaft Position - Timing Over-Retarded (Bank 2)',
    explanation: 'Generic OBD-II definition: ACamshaft Position - Timing Over-Retarded (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0023: {
    title: 'BCamshaft Position - Actuator Circuit (Bank 2)',
    explanation: 'Generic OBD-II definition: BCamshaft Position - Actuator Circuit (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0024: {
    title: 'BCamshaft Position - Timing Over-Advanced or System Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: BCamshaft Position - Timing Over-Advanced or System Performance (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0025: {
    title: 'BCamshaft Position - Timing Over-Retarded (Bank 2)',
    explanation: 'Generic OBD-II definition: BCamshaft Position - Timing Over-Retarded (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0026: {
    title: 'Intake Valve Control Solenoid Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Intake Valve Control Solenoid Circuit Range/Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0027: {
    title: 'Exhaust Valve Control solenoid Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control solenoid Circuit Range/Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0028: {
    title: 'Intake valve Control Solenoid Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Intake valve Control Solenoid Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0029: {
    title: 'Exhaust Valve Control Solenoid Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P002A: {
    title: 'BCamshaft Profile Control Circuit/Open Bank 1',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Circuit/Open Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P002B: {
    title: 'BCamshaft Profile Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P002C: {
    title: 'BCamshaft Profile Control Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P002D: {
    title: 'BCamshaft Profile Control Circuit/Open Bank 2',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Circuit/Open Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P002E: {
    title: 'BCamshaft Profile Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P002F: {
    title: 'BCamshaft Profile Control Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0030: {
    title: 'HO2S Heater Control Circuit (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0031: {
    title: 'HO2S Heater Control Circuit Low (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit Low (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0032: {
    title: 'HO2S Heater Control Circuit High (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit High (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0033: {
    title: 'Turbo Charger Bypass Valve Control Circuit',
    explanation: 'Generic OBD-II definition: Turbo Charger Bypass Valve Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0034: {
    title: 'Turbo Charger Bypass Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Turbo Charger Bypass Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0035: {
    title: 'Turbo Charger Bypass Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Turbo Charger Bypass Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0036: {
    title: 'HO2S Heater Control Circuit (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0037: {
    title: 'HO2S Heater Control Circuit Low (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit Low (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0038: {
    title: 'HO2S Heater Control Circuit High (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit High (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0039: {
    title: 'Turbo/Super Charger Bypass Valve Control Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Turbo/Super Charger Bypass Valve Control Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P003A: {
    title: 'Turbocharger/Supercharger Boost ControlAPosition Exceeded Learning Limit',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlAPosition Exceeded Learning Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P003B: {
    title: 'Turbocharger/Supercharger Boost ControlBPosition Exceeded Learning Limit',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBPosition Exceeded Learning Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P003C: {
    title: 'ACamshaft Profile Control Performance/Stuck Off Bank 1',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Performance/Stuck Off Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P003D: {
    title: 'ACamshaft Profile Control Stuck On Bank 1',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Stuck On Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P003E: {
    title: 'ACamshaft Profile Control Performance/Stuck Off Bank 2',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Performance/Stuck Off Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P003F: {
    title: 'ACamshaft Profile Control Stuck On Bank 2',
    explanation: 'Generic OBD-II definition: ACamshaft Profile Control Stuck On Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0040: {
    title: 'Upstream Oxygen Sensors Swapped From Bank To Bank',
    explanation: 'Generic OBD-II definition: Upstream Oxygen Sensors Swapped From Bank To Bank. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0041: {
    title: 'Downstream Oxygen Sensors Swapped From Bank To Bank',
    explanation: 'Generic OBD-II definition: Downstream Oxygen Sensors Swapped From Bank To Bank. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0042: {
    title: 'HO2S Heater Control Circuit (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0043: {
    title: 'HO2S Heater Control Circuit Low (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit Low (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0044: {
    title: 'HO2S Heater Control Circuit High (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit High (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0045: {
    title: 'Turbocharger/Supercharger Boost ControlACircuit/Open',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlACircuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0046: {
    title: 'Turbocharger/Supercharger Boost ControlACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0047: {
    title: 'Turbocharger/Supercharger Boost ControlACircuit Low',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0048: {
    title: 'Turbocharger/Supercharger Boost ControlACircuit High',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0049: {
    title: 'Turbocharger/Supercharger Turbine Overspeed',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Turbine Overspeed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P004A: {
    title: 'Turbocharger/Supercharger Boost ControlBCircuit/Open',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBCircuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P004B: {
    title: 'Turbocharger/Supercharger Boost ControlBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P004C: {
    title: 'Turbocharger/Supercharger Boost ControlBCircuit Low',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P004D: {
    title: 'Turbocharger/Supercharger Boost ControlBCircuit High',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P004E: {
    title: 'Turbocharger/Supercharger Boost ControlACircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlACircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P004F: {
    title: 'Turbocharger/Supercharger Boost ControlBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0050: {
    title: 'HO2S Heater Control Circuit (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0051: {
    title: 'HO2S Heater Control Circuit Low (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit Low (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0052: {
    title: 'HO2S Heater Control Circuit High (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit High (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0053: {
    title: 'HO2S Heater Resistance (Bank 1, Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Resistance (Bank 1, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0054: {
    title: 'HO2S Heater Resistance (Bank 1, Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Resistance (Bank 1, Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0055: {
    title: 'HO2S Heater Resistance (Bank 1, Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Resistance (Bank 1, Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0056: {
    title: 'HO2S Heater Control Circuit (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0057: {
    title: 'HO2S Heater Control Circuit Low (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit Low (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0058: {
    title: 'HO2S Heater Control Circuit High (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit High (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0059: {
    title: 'HO2S Heater Resistance (Bank 2, Sensor 1)',
    explanation: 'Generic OBD-II definition: HO2S Heater Resistance (Bank 2, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P005A: {
    title: 'BCamshaft Profile Control Performance/Stuck Off Bank 1',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Performance/Stuck Off Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P005B: {
    title: 'BCamshaft Profile Control Stuck On Bank 1',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Stuck On Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P005C: {
    title: 'BCamshaft Profile Control Performance/Stuck Off Bank 2',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Performance/Stuck Off Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P005D: {
    title: 'BCamshaft Profile Control Stuck On Bank 2',
    explanation: 'Generic OBD-II definition: BCamshaft Profile Control Stuck On Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P005E: {
    title: 'Turbocharger/Supercharger Boost ControlBSupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBSupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P005F: {
    title: 'Turbocharger/Supercharger Boost ControlBSupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBSupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0060: {
    title: 'HO2S Heater Resistance (Bank 2, Sensor 2)',
    explanation: 'Generic OBD-II definition: HO2S Heater Resistance (Bank 2, Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0061: {
    title: 'HO2S Heater Resistance (Bank 2, Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Resistance (Bank 2, Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0062: {
    title: 'HO2S Heater Control Circuit (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0063: {
    title: 'HO2S Heater Control Circuit Low (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit Low (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0064: {
    title: 'HO2S Heater Control Circuit High (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: HO2S Heater Control Circuit High (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0065: {
    title: 'Air Assisted Injector Control Range/Performance',
    explanation: 'Generic OBD-II definition: Air Assisted Injector Control Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0066: {
    title: 'Air Assisted Injector Control Circuit or Circuit Low',
    explanation: 'Generic OBD-II definition: Air Assisted Injector Control Circuit or Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0067: {
    title: 'Air Assisted Injector Control Circuit High',
    explanation: 'Generic OBD-II definition: Air Assisted Injector Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0068: {
    title: 'MAP/MAF - Throttle Position Correlation',
    explanation: 'Generic OBD-II definition: MAP/MAF - Throttle Position Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0069: {
    title: 'Manifold Absolute Pressure - Barometric Pressure Correlation',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure - Barometric Pressure Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P006A: {
    title: 'MAP - Mass or Volume Air Flow Correlation Bank 1',
    explanation: 'Generic OBD-II definition: MAP - Mass or Volume Air Flow Correlation Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P006B: {
    title: 'MAP - Exhaust Pressure Correlation',
    explanation: 'Generic OBD-II definition: MAP - Exhaust Pressure Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P006C: {
    title: 'MAP - Turbocharger/Supercharger Inlet Pressure Correlation',
    explanation: 'Generic OBD-II definition: MAP - Turbocharger/Supercharger Inlet Pressure Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P006D: {
    title: 'Barometric Pressure - Turbocharger/Supercharger Inlet Pressure Correlation',
    explanation: 'Generic OBD-II definition: Barometric Pressure - Turbocharger/Supercharger Inlet Pressure Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P006E: {
    title: 'Turbocharger/Supercharger Boost ControlASupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlASupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P006F: {
    title: 'Turbocharger/Supercharger Boost ControlASupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlASupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0070: {
    title: 'Ambient Air Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: Ambient Air Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0071: {
    title: 'Ambient Air Temperature Sensor Range/Performance',
    explanation: 'Generic OBD-II definition: Ambient Air Temperature Sensor Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0072: {
    title: 'Ambient Air Temperature Sensor Circuit Low Input',
    explanation: 'Generic OBD-II definition: Ambient Air Temperature Sensor Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0073: {
    title: 'Ambient Air Temperature Sensor Circuit High Input',
    explanation: 'Generic OBD-II definition: Ambient Air Temperature Sensor Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0074: {
    title: 'Ambient Air Temperature Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Ambient Air Temperature Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0075: {
    title: 'Intake Valve Control Solenoid Circuit (Bank 1)',
    explanation: 'Generic OBD-II definition: Intake Valve Control Solenoid Circuit (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0076: {
    title: 'Intake Valve Control Solenoid Circuit Low (Bank 1)',
    explanation: 'Generic OBD-II definition: Intake Valve Control Solenoid Circuit Low (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0077: {
    title: 'Intake Valve Control Solenoid Circuit High (Bank 1)',
    explanation: 'Generic OBD-II definition: Intake Valve Control Solenoid Circuit High (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0078: {
    title: 'Exhaust Valve Control Solenoid Circuit (Bank 1)',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0079: {
    title: 'Exhaust Valve Control Solenoid Circuit Low (Bank 1)',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit Low (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P007A: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Bank 1',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P007B: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Range/Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P007C: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P007D: {
    title: 'Charge Air Cooler Temperature Sensor Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P007E: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Intermittent/Erratic Bank 1',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Intermittent/Erratic Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P007F: {
    title: 'Charge Air Cooler Temperature Sensor Bank1/Bank2 Correlation',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Bank1/Bank2 Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0080: {
    title: 'Exhaust Valve Control Solenoid Circuit High (Bank 1)',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit High (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0081: {
    title: 'Intake valve Control Solenoid Circuit (Bank 2)',
    explanation: 'Generic OBD-II definition: Intake valve Control Solenoid Circuit (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0082: {
    title: 'Intake Valve Control Solenoid Circuit Low (Bank 2)',
    explanation: 'Generic OBD-II definition: Intake Valve Control Solenoid Circuit Low (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0083: {
    title: 'Intake Valve Control Solenoid Circuit High (Bank 2)',
    explanation: 'Generic OBD-II definition: Intake Valve Control Solenoid Circuit High (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0084: {
    title: 'Exhaust Valve Control Solenoid Circuit (Bank 2)',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0085: {
    title: 'Exhaust Valve Control Solenoid Circuit Low (Bank 2)',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit Low (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0086: {
    title: 'Exhaust Valve Control Solenoid Circuit High (Bank 2)',
    explanation: 'Generic OBD-II definition: Exhaust Valve Control Solenoid Circuit High (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0087: {
    title: 'Fuel Rail/System Pressure - Too Low',
    explanation: 'Generic OBD-II definition: Fuel Rail/System Pressure - Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0088: {
    title: 'Fuel Rail/System Pressure - Too High',
    explanation: 'Generic OBD-II definition: Fuel Rail/System Pressure - Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0089: {
    title: 'Fuel Pressure Regulator 1 Performance',
    explanation: 'Generic OBD-II definition: Fuel Pressure Regulator 1 Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P008A: {
    title: 'Low Pressure Fuel System Pressure - Too Low',
    explanation: 'Generic OBD-II definition: Low Pressure Fuel System Pressure - Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P008B: {
    title: 'Low Pressure Fuel System Pressure - Too High',
    explanation: 'Generic OBD-II definition: Low Pressure Fuel System Pressure - Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P008C: {
    title: 'Fuel Cooler Pump Control Circuit Open',
    explanation: 'Generic OBD-II definition: Fuel Cooler Pump Control Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P008D: {
    title: 'Fuel Cooler Pump Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Cooler Pump Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P008E: {
    title: 'Fuel Cooler Pump Control Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Cooler Pump Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P008F: {
    title: 'Engine Coolant Temperature/Fuel Temperature Correlation',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature/Fuel Temperature Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0090: {
    title: 'Fuel Pressure Regulator 1 Control Circuit',
    explanation: 'Generic OBD-II definition: Fuel Pressure Regulator 1 Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0091: {
    title: 'Fuel Pressure Regulator 1 Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Pressure Regulator 1 Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0092: {
    title: 'Fuel Pressure Regulator 1 Control Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Pressure Regulator 1 Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0093: {
    title: 'Fuel System Leak Detected - Large Leak',
    explanation: 'Generic OBD-II definition: Fuel System Leak Detected - Large Leak. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0094: {
    title: 'Fuel System Leak Detected - Small Leak',
    explanation: 'Generic OBD-II definition: Fuel System Leak Detected - Small Leak. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0095: {
    title: 'Intake Air Temperature Sensor 2 Circuit Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0096: {
    title: 'Intake Air Temperature Sensor 2 Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Range/Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0097: {
    title: 'Intake Air Temperature Sensor 2 Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0098: {
    title: 'Intake Air Temperature Sensor 2 Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0099: {
    title: 'Intake Air Temperature Sensor 2 Circuit Intermittent/Erratic Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Intermittent/Erratic Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P009A: {
    title: 'Intake Air Temperature/Ambient Air Temperature Correlation',
    explanation: 'Generic OBD-II definition: Intake Air Temperature/Ambient Air Temperature Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P009B: {
    title: 'Fuel Pressure Relief Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Fuel Pressure Relief Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P009C: {
    title: 'Fuel Pressure Relief Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Pressure Relief Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P009D: {
    title: 'Fuel Pressure Relief Control Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Pressure Relief Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P009E: {
    title: 'Fuel Pressure Relief Control Performance/Stuck Off',
    explanation: 'Generic OBD-II definition: Fuel Pressure Relief Control Performance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P009F: {
    title: 'Fuel Pressure Relief Control Stuck On',
    explanation: 'Generic OBD-II definition: Fuel Pressure Relief Control Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A0: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Bank 2',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A1: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A2: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A3: {
    title: 'Charge Air Cooler Temperature Sensor Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A4: {
    title: 'Charge Air Cooler Temperature Sensor Circuit Intermittent/Erratic Bank 2',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Temperature Sensor Circuit Intermittent/Erratic Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A5: {
    title: 'Intake Air Temperature Sensor 2 Circuit Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A6: {
    title: 'Intake Air Temperature Sensor 2 Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A7: {
    title: 'Intake Air Temperature Sensor 2 Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A8: {
    title: 'Intake Air Temperature Sensor 2 Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00A9: {
    title: 'Intake Air Temperature Sensor 2 Circuit Intermittent/Erratic Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 2 Circuit Intermittent/Erratic Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00AA: {
    title: 'Intake Air Temperature Sensor 1 Circuit Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 1 Circuit Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00AB: {
    title: 'Intake Air Temperature Sensor 1 Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 1 Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00AC: {
    title: 'Intake Air Temperature Sensor 1 Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 1 Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00AD: {
    title: 'Intake Air Temperature Sensor 1 Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 1 Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00AE: {
    title: 'Intake Air Temperature Sensor 1 Circuit Intermittent/Erratic Bank 2',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Sensor 1 Circuit Intermittent/Erratic Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00AF: {
    title: 'Turbocharger/Supercharger Boost ControlAModule Performance',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlAModule Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B0: {
    title: 'Turbocharger/Supercharger Boost ControlBModule Performance',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Boost ControlBModule Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B1: {
    title: 'Radiator Coolant Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: Radiator Coolant Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B2: {
    title: 'Radiator Coolant Temperature Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Radiator Coolant Temperature Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B3: {
    title: 'Radiator Coolant Temperature Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Radiator Coolant Temperature Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B4: {
    title: 'Radiator Coolant Temperature Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Radiator Coolant Temperature Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B5: {
    title: 'Radiator Coolant Temperature Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Radiator Coolant Temperature Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B6: {
    title: 'Radiator Coolant Temperature/Engine Coolant Temperature Correlation',
    explanation: 'Generic OBD-II definition: Radiator Coolant Temperature/Engine Coolant Temperature Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B7: {
    title: 'Engine Coolant Flow Low/Performance',
    explanation: 'Generic OBD-II definition: Engine Coolant Flow Low/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B8: {
    title: 'MAP - Mass or Volume Air Flow Correlation Bank 2',
    explanation: 'Generic OBD-II definition: MAP - Mass or Volume Air Flow Correlation Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00B9: {
    title: 'Low Pressure Fuel System Pressure - Too Low, Low Ambient Temperature',
    explanation: 'Generic OBD-II definition: Low Pressure Fuel System Pressure - Too Low, Low Ambient Temperature. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00BA: {
    title: 'Low Fuel Pressure - Forced Limited Power',
    explanation: 'Generic OBD-II definition: Low Fuel Pressure - Forced Limited Power. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00BB: {
    title: 'Fuel Injector Insufficient Flow - Forced Limited Power',
    explanation: 'Generic OBD-II definition: Fuel Injector Insufficient Flow - Forced Limited Power. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00BC: {
    title: 'Mass or Volume Air FlowACircuit Range/Performance - Air Flow Too Low',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit Range/Performance - Air Flow Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00BD: {
    title: 'Mass or Volume Air FlowACircuit Range/Performance - Air Flow Too High',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit Range/Performance - Air Flow Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00BE: {
    title: 'Mass or Volume Air FlowBCircuit Range/Performance - Air Flow Too Low',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit Range/Performance - Air Flow Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00BF: {
    title: 'Mass or Volume Air FlowBCircuit Range/Performance - Air Flow Too High',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit Range/Performance - Air Flow Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P00C0: {
    title: 'P00FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P00FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0100: {
    title: 'Mass or Volume Air FlowACircuit Malfunction',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0101: {
    title: 'Mass or Volume Air FlowACircuit Range/Performance Problem',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit Range/Performance Problem. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0102: {
    title: 'Mass or Volume Air FlowACircuit Low Input',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0103: {
    title: 'Mass or Volume Air FlowACircuit High Input',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0104: {
    title: 'Mass or Volume Air FlowACircuit Intermittent',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowACircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0105: {
    title: 'Manifold Absolute Pressure/Barometric Pressure Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure/Barometric Pressure Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0106: {
    title: 'Manifold Absolute Pressure/Barometric Pressure Circuit Range/Performance Problem',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure/Barometric Pressure Circuit Range/Performance Problem. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0107: {
    title: 'Manifold Absolute Pressure/Barometric Pressure Circuit Low Input',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure/Barometric Pressure Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0108: {
    title: 'Manifold Absolute Pressure/Barometric Pressure Circuit High Input',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure/Barometric Pressure Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0109: {
    title: 'Manifold Absolute Pressure/Barometric Pressure Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure/Barometric Pressure Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P010A: {
    title: 'Mass or Volume Air FlowBCircuit',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P010B: {
    title: 'Mass or Volume Air FlowBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P010C: {
    title: 'Mass or Volume Air FlowBCircuit Low',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P010D: {
    title: 'Mass or Volume Air FlowBCircuit High',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P010E: {
    title: 'Mass or Volume Air FlowBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Mass or Volume Air FlowBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P010F: {
    title: 'Mass or Volume Air Flow Sensor A/B Correlation',
    explanation: 'Generic OBD-II definition: Mass or Volume Air Flow Sensor A/B Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0110: {
    title: 'Intake Air Temperature Circuit Malfunction Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Circuit Malfunction Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0111: {
    title: 'Intake Air Temperature Circuit Range/Performance Problem Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Circuit Range/Performance Problem Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0112: {
    title: 'Intake Air Temperature Circuit Low Input Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Circuit Low Input Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0113: {
    title: 'Intake Air Temperature Circuit High Input Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Circuit High Input Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0114: {
    title: 'Intake Air Temperature Circuit Intermittent Bank 1',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Circuit Intermittent Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0115: {
    title: 'Engine Coolant Temperature Sensor Circuit 1 Malfunction',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor Circuit 1 Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0116: {
    title: 'Engine Coolant Temperature Sensor Circuit 1 Range/Performance Problem',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor Circuit 1 Range/Performance Problem. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0117: {
    title: 'Engine Coolant Temperature Sensor Circuit 1 Low Input',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor Circuit 1 Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0118: {
    title: 'Engine Coolant Temperature Sensor Circuit 1 High Input',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor Circuit 1 High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0119: {
    title: 'Engine Coolant Temperature Sensor Circuit 1 Intermittent',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor Circuit 1 Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P011A: {
    title: 'Engine Coolant Temperature Sensor 1/2 Correlation',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor 1/2 Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P011B: {
    title: 'Coolant Temperature/Intake Air Temperature Correlation',
    explanation: 'Generic OBD-II definition: Coolant Temperature/Intake Air Temperature Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P011C: {
    title: 'Charge Air Temperature/Intake Air Temperature Correlation Bank 1',
    explanation: 'Generic OBD-II definition: Charge Air Temperature/Intake Air Temperature Correlation Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P011D: {
    title: 'Charge Air Temperature/Intake Air Temperature Correlation Bank 2',
    explanation: 'Generic OBD-II definition: Charge Air Temperature/Intake Air Temperature Correlation Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P011E,: {
    title: 'P011F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P011F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0120: {
    title: 'Throttle Position Sensor/Switch A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Throttle Position Sensor/Switch A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0121: {
    title: 'Throttle Position Sensor/Switch A Circuit Range/Performance Problem',
    explanation: 'Generic OBD-II definition: Throttle Position Sensor/Switch A Circuit Range/Performance Problem. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0122: {
    title: 'Throttle Position Sensor/Switch A Circuit Low Input',
    explanation: 'Generic OBD-II definition: Throttle Position Sensor/Switch A Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0123: {
    title: 'Throttle Position Sensor/Switch A Circuit High Input',
    explanation: 'Generic OBD-II definition: Throttle Position Sensor/Switch A Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0124: {
    title: 'Throttle Position Sensor/Switch A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Throttle Position Sensor/Switch A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0125: {
    title: 'Insufficient Coolant Temperature for Closed Loop Fuel Control',
    explanation: 'Generic OBD-II definition: Insufficient Coolant Temperature for Closed Loop Fuel Control. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0126: {
    title: 'Insufficient Coolant Temperature for Stable Operation',
    explanation: 'Generic OBD-II definition: Insufficient Coolant Temperature for Stable Operation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0127: {
    title: 'Intake Air Temperature Too High',
    explanation: 'Generic OBD-II definition: Intake Air Temperature Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0128: {
    title: 'Coolant Thermostat (Coolant Temperature Below Thermostat Regulating Temperature)',
    explanation: 'Generic OBD-II definition: Coolant Thermostat (Coolant Temperature Below Thermostat Regulating Temperature). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0129: {
    title: 'Barometric Pressure Too Low',
    explanation: 'Generic OBD-II definition: Barometric Pressure Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P012A: {
    title: 'Turbocharger/Supercharger Inlet Pressure Sensor Circuit (Downstream of throttle valve)',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Inlet Pressure Sensor Circuit (Downstream of throttle valve) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P012B: {
    title: 'Turbocharger/Supercharger Inlet Pressure Sensor Circuit Range/Performance (Downstream of throttle valve)',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Inlet Pressure Sensor Circuit Range/Performance (Downstream of throttle valve) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P012C: {
    title: 'Turbocharger/Supercharger Inlet Pressure Sensor Circuit Low (Downstream of throttle valve)',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Inlet Pressure Sensor Circuit Low (Downstream of throttle valve). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P012D: {
    title: 'Turbocharger/Supercharger Inlet Pressure Sensor Circuit High (Downstream of throttle valve)',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Inlet Pressure Sensor Circuit High (Downstream of throttle valve) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P012E: {
    title: 'Turbocharger/Supercharger Inlet Pressure Sensor Circuit Intermittent/Erratic (Downstream of throttle valve)',
    explanation: 'Generic OBD-II definition: Turbocharger/Supercharger Inlet Pressure Sensor Circuit Intermittent/Erratic (Downstream of throttle valve). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P012F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0130: {
    title: '02 Sensor Circuit Malfunction (Bank I Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Malfunction (Bank I Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0131: {
    title: '02 Sensor Circuit Low Voltage (Bank I Sensor I)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Low Voltage (Bank I Sensor I). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0132: {
    title: '02 Sensor Circuit High Voltage (Bank I Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit High Voltage (Bank I Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0133: {
    title: '02 Sensor Circuit Slow Response (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Slow Response (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0134: {
    title: '02 Sensor Circuit No Activity Detected (Bank I Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit No Activity Detected (Bank I Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0135: {
    title: '02 Sensor Heater Circuit Malfunction (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Heater Circuit Malfunction (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0136: {
    title: '02 Sensor Circuit Malfunction (Bank I Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Malfunction (Bank I Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0137: {
    title: '02 Sensor Circuit Low Voltage (Bank I Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Low Voltage (Bank I Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0138: {
    title: '02 Sensor Circuit High Voltage (Bank I Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit High Voltage (Bank I Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0139: {
    title: '02 Sensor Circuit Slow Response (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Slow Response (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P013A: {
    title: 'O2 Sensor Slow Response - Rich to Lean (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Rich to Lean (Bank 1 Sensor 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P013B: {
    title: 'O2 Sensor Slow Response - Lean to Rich (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Lean to Rich (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P013C: {
    title: 'O2 Sensor Slow Response - Rich to Lean (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Rich to Lean (Bank 2 Sensor 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P013D: {
    title: 'O2 Sensor Slow Response - Lean to Rich (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Lean to Rich (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P013E: {
    title: 'O2 Sensor Delayed Response - Rich to Lean (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Rich to Lean (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P013F: {
    title: 'O2 Sensor Delayed Response - Lean to Rich (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Lean to Rich (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0140: {
    title: '02 Sensor Circuit No Activity Detected (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit No Activity Detected (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0141: {
    title: '02 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0142: {
    title: '02 Sensor Circuit Malfunction (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Malfunction (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0143: {
    title: '02 Sensor Circuit Low Voltage (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Low Voltage (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0144: {
    title: '02 Sensor Circuit High Voltage (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit High Voltage (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0145: {
    title: '02 Sensor Circuit Slow Response (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Slow Response (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0146: {
    title: '02 Sensor Circuit No Activity Detected (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit No Activity Detected (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0147: {
    title: '02 Sensor Heater Circuit Malfunction (Bank 1 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Heater Circuit Malfunction (Bank 1 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0148: {
    title: 'Fuel Delivery Error',
    explanation: 'Generic OBD-II definition: Fuel Delivery Error . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0149: {
    title: 'Fuel Timing Error',
    explanation: 'Generic OBD-II definition: Fuel Timing Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P014A: {
    title: 'O2 Sensor Delayed Response - Rich to Lean (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Rich to Lean (Bank 2 Sensor 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P014B: {
    title: 'O2 Sensor Delayed Response - Lean to Rich (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Lean to Rich (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P014C: {
    title: 'O2 Sensor Slow Response - Rich to Lean (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Rich to Lean (Bank 1 Sensor 1) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P014D: {
    title: 'O2 Sensor Slow Response - Lean to Rich (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Lean to Rich (Bank 1 Sensor 1) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P014E: {
    title: 'O2 Sensor Slow Response - Rich to Lean (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Slow Response - Rich to Lean (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0150: {
    title: '02 Sensor Circuit Malfunction (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Malfunction (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0151: {
    title: '02 Sensor Circuit Low Voltage (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Low Voltage (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0152: {
    title: '02 Sensor Circuit High Voltage (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit High Voltage (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0153: {
    title: '02 Sensor Circuit Slow Response (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Slow Response (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0154: {
    title: '02 Sensor Circuit No Activity Detected (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit No Activity Detected (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0155: {
    title: '02 Sensor Heater Circuit Malfunction (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: 02 Sensor Heater Circuit Malfunction (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0156: {
    title: '02 Sensor Circuit Malfunction (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Malfunction (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0157: {
    title: '02 Sensor Circuit Low Voltage (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Low Voltage (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0158: {
    title: '02 Sensor Circuit High Voltage (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit High Voltage (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0159: {
    title: '02 Sensor Circuit Slow Response (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Slow Response (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P015A: {
    title: 'O2 Sensor Delayed Response - Rich to Lean (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Rich to Lean (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P015B: {
    title: 'O2 Sensor Delayed Response - Lean to Rich (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Lean to Rich (Bank 1 Sensor 1) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P015C: {
    title: 'O2 Sensor Delayed Response - Rich to Lean (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Rich to Lean (Bank 2 Sensor 1) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P015D: {
    title: 'O2 Sensor Delayed Response - Lean to Rich (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: O2 Sensor Delayed Response - Lean to Rich (Bank 2 Sensor 1) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P015E	&: {
    title: 'P015F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P015F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0160: {
    title: '02 Sensor Circuit No Activity Detected (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit No Activity Detected (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0161: {
    title: '02 Sensor Heater Circuit Malfunction (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: 02 Sensor Heater Circuit Malfunction (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0162: {
    title: '02 Sensor Circuit Malfunction (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Malfunction (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0163: {
    title: '02 Sensor Circuit Low Voltage (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Low Voltage (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0164: {
    title: '02 Sensor Circuit High Voltage (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit High Voltage (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0165: {
    title: '02 Sensor Circuit Slow Response (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit Slow Response (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0166: {
    title: '02 Sensor Circuit No Activity Detected (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Circuit No Activity Detected (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0167: {
    title: '02 Sensor Heater Circuit Malfunction (Bank 2 Sensor 3)',
    explanation: 'Generic OBD-II definition: 02 Sensor Heater Circuit Malfunction (Bank 2 Sensor 3). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0168: {
    title: 'Temperature Too High',
    explanation: 'Generic OBD-II definition: Temperature Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0169: {
    title: 'Incorrect Fuel Composition',
    explanation: 'Generic OBD-II definition: Incorrect Fuel Composition . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P016A,: {
    title: 'P016B, P016C, P016D, P016E, P016F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P016B, P016C, P016D, P016E, P016F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0170: {
    title: 'Fuel Trim Malfunction (Bank 1)',
    explanation: 'Generic OBD-II definition: Fuel Trim Malfunction (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0171: {
    title: 'System too Lean (Bank 1)',
    explanation: 'Generic OBD-II definition: System too Lean (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0172: {
    title: 'System too Rich (Bank 1)',
    explanation: 'Generic OBD-II definition: System too Rich (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0173: {
    title: 'Fuel Trim Malfunction (Bank 2)',
    explanation: 'Generic OBD-II definition: Fuel Trim Malfunction (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0174: {
    title: 'System too Lean (Bank 2)',
    explanation: 'Generic OBD-II definition: System too Lean (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0175: {
    title: 'System too Rich (Bank 2)',
    explanation: 'Generic OBD-II definition: System too Rich (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0176: {
    title: 'Fuel Composition Sensor Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Fuel Composition Sensor Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0177: {
    title: 'Fuel Composition Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Composition Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0178: {
    title: 'Fuel Composition Sensor Circuit Low Input',
    explanation: 'Generic OBD-II definition: Fuel Composition Sensor Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0179: {
    title: 'Fuel Composition Sensor Circuit High Input',
    explanation: 'Generic OBD-II definition: Fuel Composition Sensor Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P017A,: {
    title: 'P017B, P017C, P017D, P017E, P017F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P017B, P017C, P017D, P017E, P017F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0180: {
    title: 'Fuel Temperature Sensor A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0181: {
    title: 'Fuel Temperature Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0182: {
    title: 'Fuel Temperature Sensor A Circuit Low Input',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor A Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0183: {
    title: 'Fuel Temperature Sensor A Circuit High Input',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor A Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0184: {
    title: 'Fuel Temperature Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0185: {
    title: 'Fuel Temperature Sensor B Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor B Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0186: {
    title: 'Fuel Temperature Sensor B Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor B Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0187: {
    title: 'Fuel Temperature Sensor B Circuit Low Input',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor B Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0188: {
    title: 'Fuel Temperature Sensor B Circuit High Input',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor B Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0189: {
    title: 'Fuel Temperature Sensor B Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Fuel Temperature Sensor B Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P018A: {
    title: 'Fuel Pressure SensorBCircuit',
    explanation: 'Generic OBD-II definition: Fuel Pressure SensorBCircuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P018B: {
    title: 'Fuel Pressure SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Pressure SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P018C: {
    title: 'Fuel Pressure SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Fuel Pressure SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P018D: {
    title: 'Fuel Pressure SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Fuel Pressure SensorBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P018E: {
    title: 'Fuel Pressure SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Fuel Pressure SensorBCircuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P018F: {
    title: 'Fuel System Over Pressure Relief Valve Frequent Activation',
    explanation: 'Generic OBD-II definition: Fuel System Over Pressure Relief Valve Frequent Activation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0190: {
    title: 'Fuel Rail Pressure Sensor A Circuit',
    explanation: 'Generic OBD-II definition: Fuel Rail Pressure Sensor A Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0191: {
    title: 'Fuel Rail Pressure Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Rail Pressure Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0192: {
    title: 'Fuel Rail Pressure Sensor A Circuit Low Input',
    explanation: 'Generic OBD-II definition: Fuel Rail Pressure Sensor A Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0193: {
    title: 'Fuel Rail Pressure Sensor A Circuit High Input',
    explanation: 'Generic OBD-II definition: Fuel Rail Pressure Sensor A Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0194: {
    title: 'Fuel Rail Pressure Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Fuel Rail Pressure Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0195: {
    title: 'Engine Oil Temperature Sensor Malfunction',
    explanation: 'Generic OBD-II definition: Engine Oil Temperature Sensor Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0196: {
    title: 'Engine Oil Temperature Sensor Range/Performance',
    explanation: 'Generic OBD-II definition: Engine Oil Temperature Sensor Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0197: {
    title: 'Engine Oil Temperature Sensor Low',
    explanation: 'Generic OBD-II definition: Engine Oil Temperature Sensor Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0198: {
    title: 'Engine Oil Temperature Sensor High',
    explanation: 'Generic OBD-II definition: Engine Oil Temperature Sensor High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0199: {
    title: 'Engine Oil Temperature Sensor Intermittent',
    explanation: 'Generic OBD-II definition: Engine Oil Temperature Sensor Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P019A: {
    title: 'P01FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P01FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0200: {
    title: 'Injector Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0201: {
    title: 'Injector Circuit Malfunction - Cylinder 1',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0202: {
    title: 'Injector Circuit Malfunction - Cylinder 2',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0203: {
    title: 'Injector Circuit Malfunction - Cylinder 3',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 3. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0204: {
    title: 'Injector Circuit Malfunction - Cylinder 4',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 4. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0205: {
    title: 'Injector Circuit Malfunction - Cylinder 5',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 5. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0206: {
    title: 'Injector Circuit Malfunction - Cylinder 6',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 6. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0207: {
    title: 'Injector Circuit Malfunction - Cylinder 7',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 7. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0208: {
    title: 'Injector Circuit Malfunction - Cylinder 8',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 8. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0209: {
    title: 'Injector Circuit Malfunction - Cylinder 9',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 9. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P020A: {
    title: 'Cylinder 1 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 1 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P020B: {
    title: 'Cylinder 2 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 2 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P020C: {
    title: 'Cylinder 3 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 3 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P020D: {
    title: 'Cylinder 4 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 4 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P020E: {
    title: 'Cylinder 5 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 5 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P020F: {
    title: 'Cylinder 6 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 6 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0210: {
    title: 'Injector Circuit Malfunction - Cylinder 10',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 10. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0211: {
    title: 'Injector Circuit Malfunction - Cylinder 11',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 11. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0212: {
    title: 'Injector Circuit Malfunction - Cylinder 12',
    explanation: 'Generic OBD-II definition: Injector Circuit Malfunction - Cylinder 12. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0213: {
    title: 'Cold Start Injector 1 Malfunction',
    explanation: 'Generic OBD-II definition: Cold Start Injector 1 Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0214: {
    title: 'Cold Start Injector 2 Malfunction',
    explanation: 'Generic OBD-II definition: Cold Start Injector 2 Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0215: {
    title: 'Engine Shutoff Solenoid Malfunction',
    explanation: 'Generic OBD-II definition: Engine Shutoff Solenoid Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0216: {
    title: 'Injection Timing Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Injection Timing Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0217: {
    title: 'Engine Overtemp Condition',
    explanation: 'Generic OBD-II definition: Engine Overtemp Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0218: {
    title: 'Transmission Over Temperature Condition',
    explanation: 'Generic OBD-II definition: Transmission Over Temperature Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0219: {
    title: 'Engine Overspeed Condition',
    explanation: 'Generic OBD-II definition: Engine Overspeed Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P021A: {
    title: 'Cylinder 7 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 7 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P021B: {
    title: 'Cylinder 8 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 8 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P021C: {
    title: 'Cylinder 9 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 9 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P021D: {
    title: 'Cylinder 10 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 10 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P021E: {
    title: 'Cylinder 11 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 11 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P021F: {
    title: 'Cylinder 12 Injection Timing',
    explanation: 'Generic OBD-II definition: Cylinder 12 Injection Timing. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0220: {
    title: 'Throttle/Pedal Position Sensor/Switch B Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch B Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0221: {
    title: 'Throttle/Pedal Position Sensor/Switch B Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch B Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0222: {
    title: 'Throttle/Pedal Position Sensor/Switch B Circuit Low Input',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch B Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0223: {
    title: 'Throttle/Pedal Position Sensor/Switch B Circuit High Input',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch B Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0224: {
    title: 'Throttle/Pedal Position Sensor/Switch B Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch B Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0225: {
    title: 'Throttle/Pedal Position Sensor/Switch C Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch C Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0226: {
    title: 'Throttle/Pedal Position Sensor/Switch C Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch C Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0227: {
    title: 'Throttle/Pedal Position Sensor/Switch C Circuit Low Input',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch C Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0228: {
    title: 'Throttle/Pedal Position Sensor/Switch C Circuit High Input',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch C Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0229: {
    title: 'Throttle/Pedal Position Sensor/Switch C Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Position Sensor/Switch C Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P022A: {
    title: 'Charge Air Cooler Bypass ControlACircuit Open',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlACircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P022B: {
    title: 'Charge Air Cooler Bypass ControlACircuit Low',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P022C: {
    title: 'Charge Air Cooler Bypass ControlACircuit High',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P022D: {
    title: 'Charge Air Cooler Bypass ControlBCircuit Open',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlBCircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P022E: {
    title: 'Charge Air Cooler Bypass ControlBCircuit Low',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P022F: {
    title: 'Charge Air Cooler Bypass ControlBCircuit High',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0230: {
    title: 'Fuel Pump Primary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Fuel Pump Primary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0231: {
    title: 'Fuel Pump Secondary Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Pump Secondary Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0232: {
    title: 'Fuel Pump Secondary Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Pump Secondary Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0233: {
    title: 'Fuel Pump Secondary Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Fuel Pump Secondary Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0234: {
    title: 'Engine Turbocharger/Supercharger Overboost Condition',
    explanation: 'Generic OBD-II definition: Engine Turbocharger/Supercharger Overboost Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0235: {
    title: 'Turbocharger Boost Sensor A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0236: {
    title: 'Turbocharger Boost Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0237: {
    title: 'Turbocharger Boost Sensor A Circuit Low',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor A Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0238: {
    title: 'Turbocharger Boost Sensor A Circuit High',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor A Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0239: {
    title: 'Turbocharger Boost Sensor B Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor B Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P023A: {
    title: 'Charge Air Cooler Coolant Pump Control Circuit Open',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Coolant Pump Control Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P023B: {
    title: 'Charge Air Cooler Coolant Pump Control Circuit Low',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Coolant Pump Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P023C: {
    title: 'Charge Air Cooler Coolant Pump Control Circuit High',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Coolant Pump Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P023D: {
    title: 'Manifold Absolute Pressure - Turbocharger/Supercharger Boost SensorACorrelation',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure - Turbocharger/Supercharger Boost SensorACorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P023E: {
    title: 'Manifold Absolute Pressure - Turbocharger/Supercharger Boost SensorBCorrelation',
    explanation: 'Generic OBD-II definition: Manifold Absolute Pressure - Turbocharger/Supercharger Boost SensorBCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P023F: {
    title: 'Fuel Pump Secondary Circuit/Open',
    explanation: 'Generic OBD-II definition: Fuel Pump Secondary Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0240: {
    title: 'Turbocharger Boost Sensor B Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor B Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0241: {
    title: 'Turbocharger Boost Sensor B Circuit Low',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor B Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0242: {
    title: 'Turbocharger Boost Sensor B Circuit High',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Sensor B Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0243: {
    title: 'Turbocharger Wastegate Solenoid A Malfunction',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid A Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0244: {
    title: 'Turbocharger Wastegate Solenoid A Range/Performance',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid A Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0245: {
    title: 'Turbocharger Wastegate Solenoid A Low',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid A Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0246: {
    title: 'Turbocharger Wastegate Solenoid A High',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid A High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0247: {
    title: 'Turbocharger Wastegate Solenoid B Malfunction',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid B Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0248: {
    title: 'Turbocharger Wastegate Solenoid B Range/Performance',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid B Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0249: {
    title: 'Turbocharger Wastegate Solenoid B Low',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid B Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P024A: {
    title: 'Charge Air Cooler Bypass ControlARange/Performance',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlARange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P024B: {
    title: 'Charge Air Cooler Bypass ControlAStuck',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass ControlAStuck. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P024C: {
    title: 'Charge Air Cooler Bypass Position SensorACircuit',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass Position SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P024D: {
    title: 'Charge Air Cooler Bypass Position SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass Position SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P024E: {
    title: 'Charge Air Cooler Bypass Position SensorACircuit Low',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass Position SensorACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P024F: {
    title: 'Charge Air Cooler Bypass Position SensorACircuit High',
    explanation: 'Generic OBD-II definition: Charge Air Cooler Bypass Position SensorACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0250: {
    title: 'Turbocharger Wastegate Solenoid B High',
    explanation: 'Generic OBD-II definition: Turbocharger Wastegate Solenoid B High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0251: {
    title: 'Injection Pump Fuel Metering Control A Malfunction (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control A Malfunction (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0252: {
    title: 'Injection Pump Fuel Metering Control A Range/Performance (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control A Range/Performance (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0253: {
    title: 'Injection Pump Fuel Metering Control A Low (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control A Low (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0254: {
    title: 'Injection Pump Fuel Metering Control A High (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control A High (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0255: {
    title: 'Injection Pump Fuel Metering Control A Intermittent (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control A Intermittent (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0256: {
    title: 'Injection Pump Fuel Metering Control B Malfunction (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control B Malfunction (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0257: {
    title: 'Injection Pump Fuel Metering Control B Range/Performance Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control B Range/Performance Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0258: {
    title: 'Injection Pump Fuel Metering Control B Low (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control B Low (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0259: {
    title: 'Injection Pump Fuel Metering Control B High (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering Control B High (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P025A: {
    title: 'Fuel Pump Module Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Fuel Pump Module Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P025B: {
    title: 'Fuel Pump Module Control Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Pump Module Control Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P025C: {
    title: 'Fuel Pump Module Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel Pump Module Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P025D: {
    title: 'Fuel Pump Module Control Circuit High',
    explanation: 'Generic OBD-II definition: Fuel Pump Module Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P025E: {
    title: '& P025F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: & P025F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0260: {
    title: 'Injection Pump Fuel Metering ControlBIntermittent (Cam/Rotor/Injector)',
    explanation: 'Generic OBD-II definition: Injection Pump Fuel Metering ControlBIntermittent (Cam/Rotor/Injector). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0261: {
    title: 'Cylinder 1 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 1 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0262: {
    title: 'Cylinder 1 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 1 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0263: {
    title: 'Cylinder 1 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 1 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0264: {
    title: 'Cylinder 2 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 2 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0265: {
    title: 'Cylinder 2 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 2 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0266: {
    title: 'Cylinder 2 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 2 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0267: {
    title: 'Cylinder 3 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 3 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0268: {
    title: 'Cylinder 3 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 3 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0269: {
    title: 'Cylinder 3 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 3 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P026A,: {
    title: 'P026B, P026C, P026D, P026E, P026F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P026B, P026C, P026D, P026E, P026F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0270: {
    title: 'Cylinder 4 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 4 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0271: {
    title: 'Cylinder 4 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 4 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0272: {
    title: 'Cylinder 4 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 4 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0273: {
    title: 'Cylinder 5 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 5 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0274: {
    title: 'Cylinder 5 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 5 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0275: {
    title: 'Cylinder 5 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 5 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0276: {
    title: 'Cylinder 6 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 6 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0277: {
    title: 'Cylinder 6 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 6 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0278: {
    title: 'Cylinder 6 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 6 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0279: {
    title: 'Cylinder 7 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 7 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P027A,: {
    title: 'P027B, P027C, P027D, P027E, P027F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P027B, P027C, P027D, P027E, P027F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0280: {
    title: 'Cylinder 7 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 7 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0281: {
    title: 'Cylinder 7 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 7 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0282: {
    title: 'Cylinder 8 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 8 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0283: {
    title: 'Cylinder 8 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 8 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0284: {
    title: 'Cylinder 8 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 8 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0285: {
    title: 'Cylinder 9 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 9 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0286: {
    title: 'Cylinder 9 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 9 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0287: {
    title: 'Cylinder 9 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 9 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0288: {
    title: 'Cylinder 10 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 10 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0289: {
    title: 'Cylinder 10 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 10 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P028A,: {
    title: 'P028B, P028C, P028D, P028E, P028F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P028B, P028C, P028D, P028E, P028F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0290: {
    title: 'Cylinder 10 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 10 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0291: {
    title: 'Cylinder 11 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 11 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0292: {
    title: 'Cylinder 11 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 11 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0293: {
    title: 'Cylinder 11 Contribution/Balance Fault',
    explanation: 'Generic OBD-II definition: Cylinder 11 Contribution/Balance Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0294: {
    title: 'Cylinder 12 Injector Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 12 Injector Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0295: {
    title: 'Cylinder 12 Injector Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 12 Injector Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0296: {
    title: 'Cylinder 12 Contribution/Range Fault',
    explanation: 'Generic OBD-II definition: Cylinder 12 Contribution/Range Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0297: {
    title: 'Vehicle Overspeed Condition',
    explanation: 'Generic OBD-II definition: Vehicle Overspeed Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0298: {
    title: 'Engine Oil Over Temperature Condition',
    explanation: 'Generic OBD-II definition: Engine Oil Over Temperature Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0299: {
    title: 'Turbocharger/SuperchargerAUnderboost Condition',
    explanation: 'Generic OBD-II definition: Turbocharger/SuperchargerAUnderboost Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P029A: {
    title: 'Cylinder 1 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 1 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P029B: {
    title: 'Cylinder 1 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 1 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P029C: {
    title: 'Cylinder 1 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 1 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P029D: {
    title: 'Cylinder 1 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 1 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P029E: {
    title: 'Cylinder 2 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 2 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P029F: {
    title: 'Cylinder 2 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 2 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A0: {
    title: 'Cylinder 2 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 2 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A1: {
    title: 'Cylinder 2 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 2 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A2: {
    title: 'Cylinder 3 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 3 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A3: {
    title: 'Cylinder 3 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 3 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A4: {
    title: 'Cylinder 3 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 3 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A5: {
    title: 'Cylinder 3 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 3 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A6: {
    title: 'Cylinder 4 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 4 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A7: {
    title: 'Cylinder 4 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 4 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A8: {
    title: 'Cylinder 4 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 4 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02A9: {
    title: 'Cylinder 4 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 4 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02AA: {
    title: 'Cylinder 5 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 5 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02AB: {
    title: 'Cylinder 5 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 5 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02AC: {
    title: 'Cylinder 5 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 5 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02AD: {
    title: 'Cylinder 5 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 5 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02AE: {
    title: 'Cylinder 6 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 6 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02AF: {
    title: 'Cylinder 6 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 6 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B0: {
    title: 'Cylinder 6 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 6 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B1: {
    title: 'Cylinder 6 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 6 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B2: {
    title: 'Cylinder 7 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 7 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B3: {
    title: 'Cylinder 7 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 7 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B4: {
    title: 'Cylinder 7 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 7 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B5: {
    title: 'Cylinder 7 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 7 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B6: {
    title: 'Cylinder 8 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 8 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B7: {
    title: 'Cylinder 8 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 8 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B8: {
    title: 'Cylinder 8 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 8 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02B9: {
    title: 'Cylinder 8 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 8 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02BA: {
    title: 'Cylinder 9 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 9 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02BB: {
    title: 'Cylinder 9 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 9 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02BC: {
    title: 'Cylinder 9 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 9 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02BD: {
    title: 'Cylinder 9 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 9 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02BE: {
    title: 'Cylinder 10 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 10 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02BF: {
    title: 'Cylinder 10 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 10 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C0: {
    title: 'Cylinder 10 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 10 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C1: {
    title: 'Cylinder 10 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 10 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C2: {
    title: 'Cylinder 11 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 11 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C3: {
    title: 'Cylinder 11 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 11 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C4: {
    title: 'Cylinder 11 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 11 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C5: {
    title: 'Cylinder 11 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 11 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C6: {
    title: 'Cylinder 12 - Fuel Trim at Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 12 - Fuel Trim at Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C7: {
    title: 'Cylinder 12 - Fuel Trim at Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 12 - Fuel Trim at Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C8: {
    title: 'Cylinder 12 - Injector Restricted',
    explanation: 'Generic OBD-II definition: Cylinder 12 - Injector Restricted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02C9: {
    title: 'Cylinder 12 - Injector Leaking',
    explanation: 'Generic OBD-II definition: Cylinder 12 - Injector Leaking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02CA: {
    title: 'Turbocharger/SuperchargerBOverboost Condition',
    explanation: 'Generic OBD-II definition: Turbocharger/SuperchargerBOverboost Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02CB: {
    title: 'Turbocharger/SuperchargerBUnderboost Condition',
    explanation: 'Generic OBD-II definition: Turbocharger/SuperchargerBUnderboost Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02CC: {
    title: 'Cylinder 1 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 1 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02CD: {
    title: 'Cylinder 1 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 1 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02CE: {
    title: 'Cylinder 2 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 2 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02CF: {
    title: 'Cylinder 2 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 2 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D0: {
    title: 'Cylinder 3 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 3 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D1: {
    title: 'Cylinder 3 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 3 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D2: {
    title: 'Cylinder 4 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 4 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D3: {
    title: 'Cylinder 4 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 4 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D4: {
    title: 'Cylinder 5 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 5 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D5: {
    title: 'Cylinder 5 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 5 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D6: {
    title: 'Cylinder 6 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 6 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D7: {
    title: 'Cylinder 6 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 6 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D8: {
    title: 'Cylinder 7 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 7 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02D9: {
    title: 'Cylinder 7 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 7 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02DA: {
    title: 'Cylinder 8 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 8 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02DB: {
    title: 'Cylinder 8 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 8 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02DC: {
    title: 'Cylinder 9 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 9 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02DD: {
    title: 'Cylinder 9 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 9 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02DE: {
    title: 'Cylinder 10 Fuel Injector Offset Learning At Min Limit',
    explanation: 'Generic OBD-II definition: Cylinder 10 Fuel Injector Offset Learning At Min Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02DF: {
    title: 'Cylinder 10 Fuel Injector Offset Learning At Max Limit',
    explanation: 'Generic OBD-II definition: Cylinder 10 Fuel Injector Offset Learning At Max Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E0: {
    title: 'Diesel Intake Air Flow Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E1: {
    title: 'Diesel Intake Air Flow Control Performance',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E2: {
    title: 'Diesel Intake Air Flow Control Circuit Low',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E3: {
    title: 'Diesel Intake Air Flow Control Circuit High',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E4: {
    title: 'Diesel Intake Air Flow Control Stuck Open',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Stuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E5: {
    title: 'Diesel Intake Air Flow Control Stuck Closed',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Stuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E6: {
    title: 'Diesel Intake Air Flow Position Sensor Circuit',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Position Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E7: {
    title: 'Diesel Intake Air Flow Position Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Position Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E8: {
    title: 'Diesel Intake Air Flow Position Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Position Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02E9: {
    title: 'Diesel Intake Air Flow Position Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Position Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02EA: {
    title: 'Diesel Intake Air Flow Position Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Position Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02EB: {
    title: 'Diesel Intake Air Flow Control Motor Current Range/Performance',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control Motor Current Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02EC: {
    title: 'Diesel Intake Air Flow Control System - High Air Flow Detected',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control System - High Air Flow Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02ED: {
    title: 'Diesel Intake Air Flow Control System - Low Air Flow Detected',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Control System - Low Air Flow Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02EE: {
    title: 'Cylinder 1 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 1 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02EF: {
    title: 'Cylinder 2 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 2 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F0: {
    title: 'Cylinder 3 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 3 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F1: {
    title: 'Cylinder 4 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 4 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F2: {
    title: 'Cylinder 5 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 5 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F3: {
    title: 'Cylinder 6 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 6 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F4: {
    title: 'Cylinder 7 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 7 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F5: {
    title: 'Cylinder 8 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 8 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F6: {
    title: 'Cylinder 9 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 9 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F7: {
    title: 'Cylinder 10 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 10 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F8: {
    title: 'Cylinder 11 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 11 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02F9: {
    title: 'Cylinder 12 Injector Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cylinder 12 Injector Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02FA: {
    title: 'Diesel Intake Air Flow Position Sensor Minimum/Maximum Stop Performance',
    explanation: 'Generic OBD-II definition: Diesel Intake Air Flow Position Sensor Minimum/Maximum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P02FB,: {
    title: 'P02FC, P02FD, P02FE, P02FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P02FC, P02FD, P02FE, P02FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0300: {
    title: 'Random/Multiple Cylinder Misfire Detected',
    explanation: 'Generic OBD-II definition: Random/Multiple Cylinder Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0301: {
    title: 'Cylinder 1 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 1 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0302: {
    title: 'Cylinder 2 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 2 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0303: {
    title: 'Cylinder 3 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 3 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0304: {
    title: 'Cylinder 4 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 4 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0305: {
    title: 'Cylinder 5 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 5 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0306: {
    title: 'Cylinder 6 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 6 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0307: {
    title: 'Cylinder 7 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 7 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0308: {
    title: 'Cylinder 8 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 8 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0309: {
    title: 'Cylinder 9 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 9 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0310: {
    title: 'Cylinder 10 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 10 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0311: {
    title: 'Cylinder 11 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 11 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0312: {
    title: 'Cylinder 12 Misfire Detected',
    explanation: 'Generic OBD-II definition: Cylinder 12 Misfire Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0313: {
    title: 'Misfire Detected with Low Fuel',
    explanation: 'Generic OBD-II definition: Misfire Detected with Low Fuel. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0314: {
    title: 'Single Cylinder Misfire (Cylinder not Specified)',
    explanation: 'Generic OBD-II definition: Single Cylinder Misfire (Cylinder not Specified). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0315: {
    title: 'Crankshaft Position System Variation Not Learned',
    explanation: 'Generic OBD-II definition: Crankshaft Position System Variation Not Learned. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0316: {
    title: 'Misfire Detected On Startup (First 1000 Revolutions)',
    explanation: 'Generic OBD-II definition: Misfire Detected On Startup (First 1000 Revolutions). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0317: {
    title: 'Rough Road Hardware Not Present',
    explanation: 'Generic OBD-II definition: Rough Road Hardware Not Present. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0318: {
    title: 'Rough Road Sensor A Signal Circuit',
    explanation: 'Generic OBD-II definition: Rough Road Sensor A Signal Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0319: {
    title: 'Rough Road Sensor B Signal Circuit',
    explanation: 'Generic OBD-II definition: Rough Road Sensor B Signal Circuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P031A: {
    title: 'P031C, P031D, P031E, P031F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P031C, P031D, P031E, P031F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0320: {
    title: 'Ignition/Distributor Engine Speed Input Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition/Distributor Engine Speed Input Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0321: {
    title: 'Ignition/Distributor Engine Speed Input Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Ignition/Distributor Engine Speed Input Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0322: {
    title: 'Ignition/Distributor Engine Speed Input Circuit No Signal',
    explanation: 'Generic OBD-II definition: Ignition/Distributor Engine Speed Input Circuit No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0323: {
    title: 'Ignition/Distributor Engine Speed Input Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Ignition/Distributor Engine Speed Input Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0324: {
    title: 'Knock Control System Error',
    explanation: 'Generic OBD-II definition: Knock Control System Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0325: {
    title: 'Knock Sensor 1 Circuit Malfunction (Bank 1 or Single Sensor)',
    explanation: 'Generic OBD-II definition: Knock Sensor 1 Circuit Malfunction (Bank 1 or Single Sensor). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0326: {
    title: 'Knock Sensor 1 Circuit Range/Performance (Bank 1 or Single Sensor)',
    explanation: 'Generic OBD-II definition: Knock Sensor 1 Circuit Range/Performance (Bank 1 or Single Sensor). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0327: {
    title: 'Knock Sensor 1 Circuit Low Input (Bank 1 or Single Sensor)',
    explanation: 'Generic OBD-II definition: Knock Sensor 1 Circuit Low Input (Bank 1 or Single Sensor). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0328: {
    title: 'Knock Sensor 1 Circuit High Input (Bank 1 or Single Sensor)',
    explanation: 'Generic OBD-II definition: Knock Sensor 1 Circuit High Input (Bank 1 or Single Sensor). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0329: {
    title: 'Knock Sensor 1 Circuit Intermittent (Bank 1 or Single Sensor)',
    explanation: 'Generic OBD-II definition: Knock Sensor 1 Circuit Intermittent (Bank 1 or Single Sensor). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P032A: {
    title: 'Sensor 3 Circuit Bank 1',
    explanation: 'Generic OBD-II definition: Sensor 3 Circuit Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P032B: {
    title: 'Sensor 3 Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Sensor 3 Circuit Range/Performance Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P032C: {
    title: 'Sensor 3 Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Sensor 3 Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P032E: {
    title: 'Sensor 3 Circuit Intermittent Bank 1',
    explanation: 'Generic OBD-II definition: Sensor 3 Circuit Intermittent Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0330: {
    title: 'Knock Sensor 2 Circuit Malfunction (Bank 2)',
    explanation: 'Generic OBD-II definition: Knock Sensor 2 Circuit Malfunction (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0331: {
    title: 'Knock Sensor 2 Circuit Range/Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: Knock Sensor 2 Circuit Range/Performance (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0332: {
    title: 'Knock Sensor 2 Circuit Low Input (Bank 2)',
    explanation: 'Generic OBD-II definition: Knock Sensor 2 Circuit Low Input (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0333: {
    title: 'Knock Sensor 2 Circuit High Input (Bank 2)',
    explanation: 'Generic OBD-II definition: Knock Sensor 2 Circuit High Input (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0334: {
    title: 'Knock Sensor 2 Circuit Intermittent (Bank 2)',
    explanation: 'Generic OBD-II definition: Knock Sensor 2 Circuit Intermittent (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0335: {
    title: 'Crankshaft Position Sensor A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0336: {
    title: 'Crankshaft Position Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0337: {
    title: 'Crankshaft Position Sensor A Circuit Low Input',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor A Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0338: {
    title: 'Crankshaft Position Sensor A Circuit High Input',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor A Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0339: {
    title: 'Crankshaft Position Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P033A: {
    title: 'Sensor 4 Circuit (Bank 2)',
    explanation: 'Generic OBD-II definition: Sensor 4 Circuit (Bank 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P033B: {
    title: 'Sensor 4 Circuit Range/Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: Sensor 4 Circuit Range/Performance (Bank 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P033C: {
    title: 'Sensor 4 Circuit Low (Bank 2)',
    explanation: 'Generic OBD-II definition: Sensor 4 Circuit Low (Bank 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P033D: {
    title: 'Sensor 4 Circuit High (Bank 2)',
    explanation: 'Generic OBD-II definition: Sensor 4 Circuit High (Bank 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P033E: {
    title: 'Sensor 4 Circuit Intermittent (Bank 2)',
    explanation: 'Generic OBD-II definition: Sensor 4 Circuit Intermittent (Bank 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P033F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0340: {
    title: 'Camshaft Position Sensor Circuit Malfunction (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor Circuit Malfunction (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0341: {
    title: 'Camshaft Position Sensor Circuit Range/Performance (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor Circuit Range/Performance (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0342: {
    title: 'Camshaft Position Sensor A Circuit Low Input (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit Low Input (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0343: {
    title: 'Camshaft Position Sensor A Circuit High Input (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit High Input (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0344: {
    title: 'Camshaft Position Sensor A Circuit Intermittent (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit Intermittent (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0345: {
    title: 'Camshaft Position Sensor A Circuit Malfunction (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit Malfunction (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0346: {
    title: 'Camshaft Position Sensor A Circuit Range/Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit Range/Performance (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0347: {
    title: 'Camshaft Position Sensor A Circuit Low Input (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit Low Input (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0348: {
    title: 'Camshaft Position Sensor A Circuit High Input (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit High Input (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0349: {
    title: 'Camshaft Position Sensor A Circuit Intermittent (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position Sensor A Circuit Intermittent (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P034A: {
    title: 'P034C, P034D, P034E, P034F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P034C, P034D, P034E, P034F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0350: {
    title: 'Ignition Coil Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0351: {
    title: 'Ignition Coil A Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil A Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0352: {
    title: 'Ignition Coil B Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil B Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0353: {
    title: 'Ignition Coil C Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil C Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0354: {
    title: 'Ignition Coil D Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil D Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0355: {
    title: 'Ignition Coil E Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil E Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0356: {
    title: 'Ignition Coil F Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil F Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0357: {
    title: 'Ignition Coil G Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil G Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0358: {
    title: 'Ignition Coil H Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil H Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0359: {
    title: 'Ignition Coil I Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil I Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P035A: {
    title: 'P035C, P035D, P035D, P035E, P035F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P035C, P035D, P035D, P035E, P035F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0360: {
    title: 'Ignition Coil J Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil J Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0361: {
    title: 'Ignition Coil K Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil K Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0362: {
    title: 'Ignition Coil L Primary/Secondary Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Ignition Coil L Primary/Secondary Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0363: {
    title: 'Misfire Detected - Fueling Disabled',
    explanation: 'Generic OBD-II definition: Misfire Detected - Fueling Disabled. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0364: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0365: {
    title: 'Camshaft Position SensorBCircuit (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0366: {
    title: 'Camshaft Position SensorBCircuit Range/Performance (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit Range/Performance (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0367: {
    title: 'Camshaft Position SensorBCircuit Low (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit Low (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0368: {
    title: 'Camshaft Position SensorBCircuit High (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit High (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0369: {
    title: 'Camshaft Position SensorBCircuit Intermittent (Bank 1)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit Intermittent (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P036A,: {
    title: 'P036B, P036C, P036D, P036E, P036F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P036B, P036C, P036D, P036E, P036F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0370: {
    title: 'Timing Reference High Resolution Signal A Malfunction',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal A Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0371: {
    title: 'Timing Reference High Resolution Signal A Too Many Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal A Too Many Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0372: {
    title: 'Timing Reference High Resolution Signal A Too Few Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal A Too Few Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0373: {
    title: 'Timing Reference High Resolution Signal A Intermittent/Erratic Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal A Intermittent/Erratic Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0374: {
    title: 'Timing Reference High Resolution Signal A No Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal A No Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0375: {
    title: 'Timing Reference High Resolution Signal B Malfunction',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal B Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0376: {
    title: 'Timing Reference High Resolution Signal B Too Many Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal B Too Many Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0377: {
    title: 'Timing Reference High Resolution Signal B Too Few Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal B Too Few Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0378: {
    title: 'Timing Reference High Resolution Signal B Intermittent/Erratic Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal B Intermittent/Erratic Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0379: {
    title: 'Timing Reference High Resolution Signal B No Pulses',
    explanation: 'Generic OBD-II definition: Timing Reference High Resolution Signal B No Pulses. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P037A: {
    title: 'P037C ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P037C ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P037E: {
    title: 'Plug Sense Circuit Low',
    explanation: 'Generic OBD-II definition: Plug Sense Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P037F: {
    title: 'Plug Sense Circuit High',
    explanation: 'Generic OBD-II definition: Plug Sense Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0380: {
    title: 'Glow Plug/Heater CircuitA',
    explanation: 'Generic OBD-II definition: Glow Plug/Heater CircuitA . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0381: {
    title: 'Glow Plug/Heater Indicator Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Glow Plug/Heater Indicator Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0382: {
    title: 'Glow Plug/Heater CircuitB',
    explanation: 'Generic OBD-II definition: Glow Plug/Heater CircuitB . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0383: {
    title: 'Glow Plug Control Module Control Circuit Low',
    explanation: 'Generic OBD-II definition: Glow Plug Control Module Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0384: {
    title: 'Glow Plug Control Module Control Circuit High',
    explanation: 'Generic OBD-II definition: Glow Plug Control Module Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0385: {
    title: 'Crankshaft Position Sensor B Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor B Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0386: {
    title: 'Crankshaft Position Sensor B Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor B Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0387: {
    title: 'Crankshaft Position Sensor B Circuit Low Input',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor B Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0388: {
    title: 'Crankshaft Position Sensor B Circuit High Input',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor B Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0389: {
    title: 'Crankshaft Position Sensor B Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Crankshaft Position Sensor B Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P038A,: {
    title: 'P038B, P038C, P038D, P038E, P038F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P038B, P038C, P038D, P038E, P038F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0390: {
    title: 'Camshaft Position SensorBCircuit (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0391: {
    title: 'Camshaft Position SensorBCircuit Range/Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit Range/Performance (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0392: {
    title: 'Camshaft Position SensorBCircuit Low (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit Low (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0393: {
    title: 'Camshaft Position SensorBCircuit High (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit High (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0394: {
    title: 'Camshaft Position SensorBCircuit Intermittent (Bank 2)',
    explanation: 'Generic OBD-II definition: Camshaft Position SensorBCircuit Intermittent (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0395: {
    title: 'P03FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P03FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0400: {
    title: 'Exhaust Gas Recirculation Flow Malfunction',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Flow Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0401: {
    title: 'Exhaust Gas Recirculation Flow Insufficient Detected',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Flow Insufficient Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0402: {
    title: 'Exhaust Gas Recirculation Flow Excessive Detected',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Flow Excessive Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0403: {
    title: 'Exhaust Gas Recirculation Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0404: {
    title: 'Exhaust Gas Recirculation Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0405: {
    title: 'Exhaust Gas Recirculation Sensor A Circuit Low',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Sensor A Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0406: {
    title: 'Exhaust Gas Recirculation Sensor A Circuit High',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Sensor A Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0407: {
    title: 'Exhaust Gas Recirculation Sensor B Circuit Low',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Sensor B Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0408: {
    title: 'Exhaust Gas Recirculation Sensor B Circuit High',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Sensor B Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0409: {
    title: 'Exhaust Gas Recirculation SensorACircuit',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P040A: {
    title: 'Gas Recirculation Temperature SensorACircuit',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P040B: {
    title: 'Gas Recirculation Temperature SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P040D: {
    title: 'Gas Recirculation Temperature SensorACircuit High',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P040F: {
    title: 'Gas Recirculation Temperature SensorA / BCorrelation',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0410: {
    title: 'Secondary Air Injection System Malfunction',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0411: {
    title: 'Secondary Air Injection System Incorrect Flow Detected',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Incorrect Flow Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0412: {
    title: 'Secondary Air Injection System Switching Valve A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Switching Valve A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0413: {
    title: 'Secondary Air Injection System Switching Valve A Circuit Open',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Switching Valve A Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0414: {
    title: 'Secondary Air Injection System Switching Valve A Circuit Shorted',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Switching Valve A Circuit Shorted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0415: {
    title: 'Secondary Air Injection System Switching Valve B Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Switching Valve B Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0416: {
    title: 'Secondary Air Injection System Switching Valve B Circuit Open',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Switching Valve B Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0417: {
    title: 'Secondary Air Injection System Switching Valve B Circuit Shorted',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Switching Valve B Circuit Shorted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0418: {
    title: 'Secondary Air Injection System RelayACircuit Malfunction',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System RelayACircuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0419: {
    title: 'Secondary Air Injection System RelayBCircuit Malfunction',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System RelayBCircuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P041A: {
    title: 'Gas Recirculation Temperature SensorBCircuit',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorBCircuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P041B: {
    title: 'Gas Recirculation Temperature SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P041C: {
    title: 'Gas Recirculation Temperature SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P041D: {
    title: 'Gas Recirculation Temperature SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P041E: {
    title: 'Gas Recirculation Temperature SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Gas Recirculation Temperature SensorBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0420: {
    title: 'Catalyst System Efficiency Below Threshold (Bank 1)',
    explanation: 'Generic OBD-II definition: Catalyst System Efficiency Below Threshold (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0421: {
    title: 'Warm Up Catalyst Efficiency Below Threshold (Bank 1)',
    explanation: 'Generic OBD-II definition: Warm Up Catalyst Efficiency Below Threshold (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0422: {
    title: 'Main Catalyst Efficiency Below Threshold (Bank 1)',
    explanation: 'Generic OBD-II definition: Main Catalyst Efficiency Below Threshold (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0423: {
    title: 'Heated Catalyst Efficiency Below Threshold (Bank 1)',
    explanation: 'Generic OBD-II definition: Heated Catalyst Efficiency Below Threshold (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0424: {
    title: 'Heated Catalyst Temperature Below Threshold (Bank 1)',
    explanation: 'Generic OBD-II definition: Heated Catalyst Temperature Below Threshold (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0425: {
    title: 'Catalyst Temperature Sensor (Bank 1, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor (Bank 1, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0426: {
    title: 'Catalyst Temperature Sensor Range/Performance (Bank 1, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor Range/Performance (Bank 1, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0427: {
    title: 'Catalyst Temperature Sensor Low (Bank 1, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor Low (Bank 1, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0428: {
    title: 'Catalyst Temperature Sensor High (Bank 1, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor High (Bank 1, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0429: {
    title: 'Catalyst Heater Control Circuit (Bank 1)',
    explanation: 'Generic OBD-II definition: Catalyst Heater Control Circuit (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P042A: {
    title: 'Temperature Sensor Circuit (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit (Bank 1 Sensor 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P042B: {
    title: 'Temperature Sensor Circuit Range/Performance (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Range/Performance (Bank 1 Sensor 2) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P042C: {
    title: 'Temperature Sensor Circuit Low (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Low (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P042D: {
    title: 'Temperature Sensor Circuit High (Bank 1 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit High (Bank 1 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P042E: {
    title: 'Gas RecirculationAControl Stuck Open',
    explanation: 'Generic OBD-II definition: Gas RecirculationAControl Stuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0430: {
    title: 'Catalyst System Efficiency Below Threshold (Bank 2)',
    explanation: 'Generic OBD-II definition: Catalyst System Efficiency Below Threshold (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0431: {
    title: 'Warm Up Catalyst Efficiency Below Threshold (Bank 2)',
    explanation: 'Generic OBD-II definition: Warm Up Catalyst Efficiency Below Threshold (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0432: {
    title: 'Main Catalyst Efficiency Below Threshold (Bank 2)',
    explanation: 'Generic OBD-II definition: Main Catalyst Efficiency Below Threshold (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0433: {
    title: 'Heated Catalyst Efficiency Below Threshold (Bank 2)',
    explanation: 'Generic OBD-II definition: Heated Catalyst Efficiency Below Threshold (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0434: {
    title: 'Heated Catalyst Temperature Below Threshold (Bank 2)',
    explanation: 'Generic OBD-II definition: Heated Catalyst Temperature Below Threshold (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0435: {
    title: 'Catalyst Temperature Sensor Circuit Malfunction (Bank 2, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor Circuit Malfunction (Bank 2, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0436: {
    title: 'Catalyst Temperature Sensor Circuit Range/Performance (Bank 2, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor Circuit Range/Performance (Bank 2, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0437: {
    title: 'Catalyst Temperature Sensor Circuit Low (Bank 2, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor Circuit Low (Bank 2, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0438: {
    title: 'Catalyst Temperature Sensor Circuit High (Bank 2, Sensor 1)',
    explanation: 'Generic OBD-II definition: Catalyst Temperature Sensor Circuit High (Bank 2, Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0439: {
    title: 'Catalyst Heater Control Circuit (Bank 2)',
    explanation: 'Generic OBD-II definition: Catalyst Heater Control Circuit (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P043A: {
    title: 'Temperature Sensor Circuit (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P043B: {
    title: 'Temperature Sensor Circuit Range/Performance Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Range/Performance Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P043C: {
    title: 'Temperature Sensor Circuit Low (Bank 2 Sensor 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Low (Bank 2 Sensor 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P043E: {
    title: 'Emission System Leak Detection Reference Orifice Low Flow',
    explanation: 'Generic OBD-II definition: Emission System Leak Detection Reference Orifice Low Flow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0440: {
    title: 'Evaporative Emission Control System Malfunction',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0441: {
    title: 'Evaporative Emission Control System Incorrect Purge Flow',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Incorrect Purge Flow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0442: {
    title: 'Evaporative Emission Control System Leak Detected (small leak)',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Leak Detected (small leak). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0443: {
    title: 'Evaporative Emission Control System Purge Control Valve Circuit',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Purge Control Valve Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0444: {
    title: 'Evaporative Emission Control System Purge Control Valve Circuit Open',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Purge Control Valve Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0445: {
    title: 'Evaporative Emission Control System Purge Control Valve Circuit Shorted',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Purge Control Valve Circuit Shorted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0446: {
    title: 'Evaporative Emission Control System Vent Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Vent Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0447: {
    title: 'Evaporative Emission Control System Vent Control Circuit Open',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Vent Control Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0448: {
    title: 'Evaporative Emission Control System Vent Control Circuit Shorted',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Vent Control Circuit Shorted. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0449: {
    title: 'Evaporative Emission Control System Vent Valve/Solenoid Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Vent Valve/Solenoid Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P044A: {
    title: 'Gas Recirculation SensorCCircuit',
    explanation: 'Generic OBD-II definition: Gas Recirculation SensorCCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P044C: {
    title: 'Gas Recirculation SensorCCircuit Low',
    explanation: 'Generic OBD-II definition: Gas Recirculation SensorCCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P044E: {
    title: 'Gas Recirculation SensorCCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Gas Recirculation SensorCCircuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P044F: {
    title: 'Air Injection System Switching ValveACircuit High',
    explanation: 'Generic OBD-II definition: Air Injection System Switching ValveACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0450: {
    title: 'Evaporative Emission Control System Pressure Sensor Malfunction',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Pressure Sensor Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0451: {
    title: 'Evaporative Emission Control System Pressure Sensor Range/Performance',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Pressure Sensor Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0452: {
    title: 'Evaporative Emission Control System Pressure Sensor Low Input',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Pressure Sensor Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0453: {
    title: 'Evaporative Emission Control System Pressure Sensor High Input',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Pressure Sensor High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0454: {
    title: 'Evaporative Emission Control System Pressure Sensor Intermittent',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Pressure Sensor Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0455: {
    title: 'Evaporative Emission Control System Leak Detected (gross leak)',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Leak Detected (gross leak). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0456: {
    title: 'Evaporative Emissions System Small Leak Detected',
    explanation: 'Generic OBD-II definition: Evaporative Emissions System Small Leak Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0457: {
    title: 'Evaporative Emission Control System Leak Detected',
    explanation: 'Generic OBD-II definition: Evaporative Emission Control System Leak Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0458: {
    title: 'Evaporative Emission System Purge Control Valve Circuit Low',
    explanation: 'Generic OBD-II definition: Evaporative Emission System Purge Control Valve Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0459: {
    title: 'Evaporative Emission System Purge Control Valve Circuit High',
    explanation: 'Generic OBD-II definition: Evaporative Emission System Purge Control Valve Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P045A: {
    title: 'Gas RecirculationBControl Circuit',
    explanation: 'Generic OBD-II definition: Gas RecirculationBControl Circuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P045B: {
    title: 'Gas RecirculationBControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Gas RecirculationBControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P045C: {
    title: 'Gas RecirculationBControl Circuit Low',
    explanation: 'Generic OBD-II definition: Gas RecirculationBControl Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P045D: {
    title: 'Gas RecirculationBControl Circuit High',
    explanation: 'Generic OBD-II definition: Gas RecirculationBControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P045F: {
    title: 'Gas RecirculationBControl Stuck Closed',
    explanation: 'Generic OBD-II definition: Gas RecirculationBControl Stuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0460: {
    title: 'Fuel Level Sensor Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Fuel Level Sensor Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0461: {
    title: 'Fuel Level Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fuel Level Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0462: {
    title: 'Fuel Level Sensor Circuit Low Input',
    explanation: 'Generic OBD-II definition: Fuel Level Sensor Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0463: {
    title: 'Fuel Level Sensor Circuit High Input',
    explanation: 'Generic OBD-II definition: Fuel Level Sensor Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0464: {
    title: 'Fuel Level Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Fuel Level Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0465: {
    title: 'Purge Flow Sensor Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Purge Flow Sensor Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0466: {
    title: 'Purge Flow Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Purge Flow Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0467: {
    title: 'Purge Flow Sensor Circuit Low Input',
    explanation: 'Generic OBD-II definition: Purge Flow Sensor Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0468: {
    title: 'Purge Flow Sensor Circuit High Input',
    explanation: 'Generic OBD-II definition: Purge Flow Sensor Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0469: {
    title: 'Purge Flow Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Purge Flow Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P046A: {
    title: 'Temperature Sensor 1/2 Correlation (Bank 1)',
    explanation: 'Generic OBD-II definition: Temperature Sensor 1/2 Correlation (Bank 1) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P046B: {
    title: 'Temperature Sensor 1/2 Correlation (Bank 2)',
    explanation: 'Generic OBD-II definition: Temperature Sensor 1/2 Correlation (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P046D: {
    title: 'Gas Recirculation SensorACircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Gas Recirculation SensorACircuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P046E: {
    title: 'Gas Recirculation SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Gas Recirculation SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P046F: {
    title: 'Gas Recirculation SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Gas Recirculation SensorBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0470: {
    title: 'Exhaust Pressure SensorACircuit',
    explanation: 'Generic OBD-II definition: Exhaust Pressure SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0471: {
    title: 'Exhaust Pressure SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Exhaust Pressure SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0472: {
    title: 'Exhaust Pressure SensorACircuit Low',
    explanation: 'Generic OBD-II definition: Exhaust Pressure SensorACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0473: {
    title: 'Exhaust Pressure SensorACircuit High',
    explanation: 'Generic OBD-II definition: Exhaust Pressure SensorACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0474: {
    title: 'Exhaust Pressure SensorACircuit Intermittent',
    explanation: 'Generic OBD-II definition: Exhaust Pressure SensorACircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0475: {
    title: 'Exhaust Pressure Control ValveA',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveA . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0476: {
    title: 'Exhaust Pressure Control ValveARange/Performance',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveARange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0477: {
    title: 'Exhaust Pressure Control ValveALow',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveALow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0478: {
    title: 'Exhaust Pressure Control ValveAHigh',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveAHigh. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0479: {
    title: 'Exhaust Pressure Control ValveAIntermittent',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveAIntermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P047A: {
    title: 'Pressure SensorBCircuit',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P047B: {
    title: 'Pressure SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P047C: {
    title: 'Pressure SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P047D: {
    title: 'Pressure SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P047E: {
    title: 'Pressure SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0480: {
    title: 'Cooling Fan I Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Cooling Fan I Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0481: {
    title: 'Cooling Fan 2 Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Cooling Fan 2 Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0482: {
    title: 'Cooling Fan 3 Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Cooling Fan 3 Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0483: {
    title: 'Cooling Fan Rationality Check Malfunction',
    explanation: 'Generic OBD-II definition: Cooling Fan Rationality Check Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0484: {
    title: 'Cooling Fan Circuit Over Current',
    explanation: 'Generic OBD-II definition: Cooling Fan Circuit Over Current . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0485: {
    title: 'Cooling Fan Power/Ground Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Cooling Fan Power/Ground Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0486: {
    title: 'Exhaust Gas Recirculation SensorBCircuit',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0487: {
    title: 'Exhaust Gas Recirculation Throttle Control CircuitAOpen',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Throttle Control CircuitAOpen. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0488: {
    title: 'Exhaust Gas Recirculation Throttle Control CircuitARange/Performance',
    explanation: 'Generic OBD-II definition: Exhaust Gas Recirculation Throttle Control CircuitARange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0489: {
    title: 'Exhaust Gas RecirculationAControl Circuit Low',
    explanation: 'Generic OBD-II definition: Exhaust Gas RecirculationAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P048A: {
    title: 'Pressure Control ValveAStuck Closed',
    explanation: 'Generic OBD-II definition: Pressure Control ValveAStuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P048B: {
    title: 'Pressure Control Valve Position Sensor/Switch Circuit',
    explanation: 'Generic OBD-II definition: Pressure Control Valve Position Sensor/Switch Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P048C: {
    title: 'Exhaust Pressure Control Valve Position Sensor/Switch Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control Valve Position Sensor/Switch Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P048D: {
    title: 'Exhaust Pressure Control Valve Position Sensor/Switch Circuit Low',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control Valve Position Sensor/Switch Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P048E: {
    title: 'Pressure Control Valve Position Sensor/Switch Circuit High',
    explanation: 'Generic OBD-II definition: Pressure Control Valve Position Sensor/Switch Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P048F: {
    title: 'Exhaust Pressure Control Valve Position Sensor/Switch Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control Valve Position Sensor/Switch Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0490: {
    title: 'Exhaust Gas RecirculationAControl Circuit High',
    explanation: 'Generic OBD-II definition: Exhaust Gas RecirculationAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0491: {
    title: 'Secondary Air Injection System Insufficient Flow Bank 1',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Insufficient Flow Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0492: {
    title: 'Secondary Air Injection System Insufficient Flow Bank 2',
    explanation: 'Generic OBD-II definition: Secondary Air Injection System Insufficient Flow Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0493: {
    title: 'Fan Overspeed',
    explanation: 'Generic OBD-II definition: Fan Overspeed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0494: {
    title: 'Fan Speed Low',
    explanation: 'Generic OBD-II definition: Fan Speed Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0495: {
    title: 'Fan Speed High',
    explanation: 'Generic OBD-II definition: Fan Speed High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0496: {
    title: 'EVAP Flow During A Non-Purge Condition',
    explanation: 'Generic OBD-II definition: EVAP Flow During A Non-Purge Condition. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0497: {
    title: 'Evaporative Emission System Low Purge Flow',
    explanation: 'Generic OBD-II definition: Evaporative Emission System Low Purge Flow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0498: {
    title: 'Evaporative Emission System Vent Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Evaporative Emission System Vent Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0499: {
    title: 'Evaporative Emission System Vent Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Evaporative Emission System Vent Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P049A: {
    title: 'Gas RecirculationBFlow',
    explanation: 'Generic OBD-II definition: Gas RecirculationBFlow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P049B: {
    title: 'Gas RecirculationBFlow Insufficient Detected',
    explanation: 'Generic OBD-II definition: Gas RecirculationBFlow Insufficient Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P049C: {
    title: 'Gas RecirculationBFlow Excessive Detected',
    explanation: 'Generic OBD-II definition: Gas RecirculationBFlow Excessive Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P049D: {
    title: 'Gas RecirculationAControl Position Exceeded Learning Limit',
    explanation: 'Generic OBD-II definition: Gas RecirculationAControl Position Exceeded Learning Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P049E: {
    title: 'Gas RecirculationBControl Position Exceeded Learning Limit',
    explanation: 'Generic OBD-II definition: Gas RecirculationBControl Position Exceeded Learning Limit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P049F: {
    title: 'Pressure Control ValveB',
    explanation: 'Generic OBD-II definition: Pressure Control ValveB . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A0: {
    title: 'Pressure Control ValveBRange/Performance',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBRange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A1: {
    title: 'Pressure Control ValveBLow',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBLow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A2: {
    title: 'Pressure Control ValveBHigh',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBHigh. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A3: {
    title: 'Pressure Control ValveBIntermittent',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBIntermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A4: {
    title: 'Pressure Control ValveBStuck Open',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBStuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A5: {
    title: 'Pressure Control ValveBStuck Closed',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBStuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A6: {
    title: 'Pressure Control ValveBPosition Sensor/Switch Circuit',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBPosition Sensor/Switch Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A7: {
    title: 'Pressure Control ValveBPosition Sensor/Switch Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBPosition Sensor/Switch Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A8: {
    title: 'Pressure Control ValveBPosition Sensor/Switch Circuit Low',
    explanation: 'Generic OBD-II definition: Pressure Control ValveBPosition Sensor/Switch Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04A9: {
    title: 'Exhaust Pressure Control ValveBPosition Sensor/Switch Circuit High',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveBPosition Sensor/Switch Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04AA: {
    title: 'Exhaust Pressure Control ValveBPosition Sensor/Switch Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Exhaust Pressure Control ValveBPosition Sensor/Switch Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P04AB: {
    title: '- P04FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: - P04FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0500: {
    title: 'Vehicle Speed SensorAMalfunction',
    explanation: 'Generic OBD-II definition: Vehicle Speed SensorAMalfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0501: {
    title: 'Vehicle Speed SensorARange/Performance',
    explanation: 'Generic OBD-II definition: Vehicle Speed SensorARange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0502: {
    title: 'Vehicle Speed SensorALow Input',
    explanation: 'Generic OBD-II definition: Vehicle Speed SensorALow Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0503: {
    title: 'Vehicle Speed SensorAIntermittent/Erratic/High',
    explanation: 'Generic OBD-II definition: Vehicle Speed SensorAIntermittent/Erratic/High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0504: {
    title: 'Brake SwitchA / BCorrelation',
    explanation: 'Generic OBD-II definition: Brake SwitchA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0505: {
    title: 'Idle Control System Malfunction',
    explanation: 'Generic OBD-II definition: Idle Control System Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0506: {
    title: 'Idle Control System RPM Lower Than Expected',
    explanation: 'Generic OBD-II definition: Idle Control System RPM Lower Than Expected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0507: {
    title: 'Idle Control System RPM Higher Than Expected',
    explanation: 'Generic OBD-II definition: Idle Control System RPM Higher Than Expected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0508: {
    title: 'Idle Air Control System Circuit Low',
    explanation: 'Generic OBD-II definition: Idle Air Control System Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0509: {
    title: 'Idle Air Control System Circuit High',
    explanation: 'Generic OBD-II definition: Idle Air Control System Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P050A: {
    title: 'Cold Start Idle Air Control System Performance',
    explanation: 'Generic OBD-II definition: Cold Start Idle Air Control System Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P050B: {
    title: 'Cold Start Ignition Timing Performance',
    explanation: 'Generic OBD-II definition: Cold Start Ignition Timing Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P050C: {
    title: 'Cold Start Engine Coolant Temperature Performance',
    explanation: 'Generic OBD-II definition: Cold Start Engine Coolant Temperature Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P050D: {
    title: 'Cold Start Rough Idle',
    explanation: 'Generic OBD-II definition: Cold Start Rough Idle. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P050E: {
    title: 'Cold Start Engine Exhaust Temperature Too Low',
    explanation: 'Generic OBD-II definition: Cold Start Engine Exhaust Temperature Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P050F: {
    title: 'Brake Assist Vacuum Too Low',
    explanation: 'Generic OBD-II definition: Brake Assist Vacuum Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0510: {
    title: 'Closed Throttle Position Switch Malfunction',
    explanation: 'Generic OBD-II definition: Closed Throttle Position Switch Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0511: {
    title: 'Idle Air Control Circuit',
    explanation: 'Generic OBD-II definition: Idle Air Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0512: {
    title: 'Starter Request Circuit',
    explanation: 'Generic OBD-II definition: Starter Request Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0513: {
    title: 'Incorrect Immobilizer Key',
    explanation: 'Generic OBD-II definition: Incorrect Immobilizer Key. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0514: {
    title: 'Battery Temperature Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Battery Temperature Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0515: {
    title: 'Battery Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: Battery Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0516: {
    title: 'Battery Temperature Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Battery Temperature Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0517: {
    title: 'Battery Temperature Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Battery Temperature Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0518: {
    title: 'Idle Air Control Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Idle Air Control Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0519: {
    title: 'Idle Air Control System Performance',
    explanation: 'Generic OBD-II definition: Idle Air Control System Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P051A: {
    title: 'Crankcase Pressure Sensor Circuit',
    explanation: 'Generic OBD-II definition: Crankcase Pressure Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P051B: {
    title: 'Crankcase Pressure Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Crankcase Pressure Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P051C: {
    title: 'Crankcase Pressure Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Crankcase Pressure Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P051D: {
    title: 'Crankcase Pressure Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Crankcase Pressure Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P051E: {
    title: 'Crankcase Pressure Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Crankcase Pressure Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P051F: {
    title: 'Positive Crankcase Ventilation Filter Restriction',
    explanation: 'Generic OBD-II definition: Positive Crankcase Ventilation Filter Restriction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0520: {
    title: 'Engine Oil Pressure Sensor/Switch Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Engine Oil Pressure Sensor/Switch Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0521: {
    title: 'Engine Oil Pressure Sensor/Switch Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Engine Oil Pressure Sensor/Switch Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0522: {
    title: 'Engine Oil Pressure Sensor/Switch Circuit Low Voltage',
    explanation: 'Generic OBD-II definition: Engine Oil Pressure Sensor/Switch Circuit Low Voltage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0523: {
    title: 'Engine Oil Pressure Sensor/Switch Circuit High Voltage',
    explanation: 'Generic OBD-II definition: Engine Oil Pressure Sensor/Switch Circuit High Voltage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0524: {
    title: 'Engine Oil Pressure Too Low',
    explanation: 'Generic OBD-II definition: Engine Oil Pressure Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0525: {
    title: 'Cruise Control Servo Control Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cruise Control Servo Control Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0526: {
    title: 'Fan Speed Sensor Circuit',
    explanation: 'Generic OBD-II definition: Fan Speed Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0527: {
    title: 'Fan Speed Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fan Speed Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0528: {
    title: 'Fan Speed Sensor Circuit No Signal',
    explanation: 'Generic OBD-II definition: Fan Speed Sensor Circuit No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0529: {
    title: 'Fan Speed Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Fan Speed Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P052A: {
    title: 'Cold StartACamshaft Position Timing Over-Advanced Bank 1',
    explanation: 'Generic OBD-II definition: Cold StartACamshaft Position Timing Over-Advanced Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P052B: {
    title: 'Cold StartACamshaft Position Timing Over-Retarded Bank 1',
    explanation: 'Generic OBD-II definition: Cold StartACamshaft Position Timing Over-Retarded Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P052C: {
    title: 'Cold StartACamshaft Position Timing Over-Advanced Bank 2',
    explanation: 'Generic OBD-II definition: Cold StartACamshaft Position Timing Over-Advanced Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P052D: {
    title: 'Cold StartACamshaft Position Timing Over-Retarded Bank 2',
    explanation: 'Generic OBD-II definition: Cold StartACamshaft Position Timing Over-Retarded Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P052E: {
    title: 'Positive Crankcase Ventilation Regulator Valve Performance',
    explanation: 'Generic OBD-II definition: Positive Crankcase Ventilation Regulator Valve Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P052F: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0530: {
    title: 'A/C Refrigerant Pressure SensorACircuit',
    explanation: 'Generic OBD-II definition: A/C Refrigerant Pressure SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0531: {
    title: 'A/C Refrigerant Pressure SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: A/C Refrigerant Pressure SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0532: {
    title: 'A/C Refrigerant Pressure SensorACircuit Low',
    explanation: 'Generic OBD-II definition: A/C Refrigerant Pressure SensorACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0533: {
    title: 'A/C Refrigerant Pressure SensorACircuit High',
    explanation: 'Generic OBD-II definition: A/C Refrigerant Pressure SensorACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0534: {
    title: 'Air Conditioner Refrigerant Charge Loss',
    explanation: 'Generic OBD-II definition: Air Conditioner Refrigerant Charge Loss. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0535: {
    title: 'A/C Evaporator Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: A/C Evaporator Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0536: {
    title: 'A/C Evaporator Temperature Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: A/C Evaporator Temperature Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0537: {
    title: 'A/C Evaporator Temperature Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: A/C Evaporator Temperature Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0538: {
    title: 'A/C Evaporator Temperature Sensor Circuit High',
    explanation: 'Generic OBD-II definition: A/C Evaporator Temperature Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0539: {
    title: 'A/C Evaporator Temperature Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: A/C Evaporator Temperature Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P053A: {
    title: 'Positive Crankcase Ventilation Heater Control Circuit /Open',
    explanation: 'Generic OBD-II definition: Positive Crankcase Ventilation Heater Control Circuit /Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P053B: {
    title: 'Positive Crankcase Ventilation Heater Control Circuit Low',
    explanation: 'Generic OBD-II definition: Positive Crankcase Ventilation Heater Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P053C: {
    title: 'Positive Crankcase Ventilation Heater Control Circuit High',
    explanation: 'Generic OBD-II definition: Positive Crankcase Ventilation Heater Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P053D,: {
    title: 'P053E, P053F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P053E, P053F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0540: {
    title: 'Intake Air HeaterACircuit',
    explanation: 'Generic OBD-II definition: Intake Air HeaterACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0541: {
    title: 'Intake Air HeaterACircuit Low',
    explanation: 'Generic OBD-II definition: Intake Air HeaterACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0542: {
    title: 'Intake Air HeaterACircuit High',
    explanation: 'Generic OBD-II definition: Intake Air HeaterACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0543: {
    title: 'Intake Air HeaterACircuit Open',
    explanation: 'Generic OBD-II definition: Intake Air HeaterACircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0544: {
    title: 'Exhaust Gas Temperature Sensor Circuit (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0545: {
    title: 'Exhaust Gas Temperature Sensor Circuit Low (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Low (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0546: {
    title: 'Exhaust Gas Temperature Sensor Circuit High (Bank 1 Sensor 1)',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit High (Bank 1 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0547: {
    title: 'Exhaust Gas Temperature Sensor Circuit (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0548: {
    title: 'Exhaust Gas Temperature Sensor Circuit Low (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Low (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0549: {
    title: 'Exhaust Gas Temperature Sensor Circuit High (Bank 2 Sensor 1)',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit High (Bank 2 Sensor 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P054A: {
    title: 'Cold StartBCamshaft Position Timing Over-Advanced Bank 1',
    explanation: 'Generic OBD-II definition: Cold StartBCamshaft Position Timing Over-Advanced Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P054B: {
    title: 'Cold StartBCamshaft Position Timing Over-Retarded Bank 1',
    explanation: 'Generic OBD-II definition: Cold StartBCamshaft Position Timing Over-Retarded Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P054C: {
    title: 'Cold StartBCamshaft Position Timing Over-Advanced Bank 2',
    explanation: 'Generic OBD-II definition: Cold StartBCamshaft Position Timing Over-Advanced Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P054D: {
    title: 'Cold StartBCamshaft Position Timing Over-Retarded Bank 2',
    explanation: 'Generic OBD-II definition: Cold StartBCamshaft Position Timing Over-Retarded Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P054E,: {
    title: 'P054F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P054F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0550: {
    title: 'Power Steering Pressure Sensor Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Power Steering Pressure Sensor Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0551: {
    title: 'Power Steering Pressure Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Power Steering Pressure Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0552: {
    title: 'Power Steering Pressure Sensor Circuit Low Input',
    explanation: 'Generic OBD-II definition: Power Steering Pressure Sensor Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0553: {
    title: 'Power Steering Pressure Sensor Circuit High Input',
    explanation: 'Generic OBD-II definition: Power Steering Pressure Sensor Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0554: {
    title: 'Power Steering Pressure Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Power Steering Pressure Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0555: {
    title: 'Brake Booster Pressure Sensor Circuit',
    explanation: 'Generic OBD-II definition: Brake Booster Pressure Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0556: {
    title: 'Brake Booster Pressure Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Brake Booster Pressure Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0557: {
    title: 'Brake Booster Pressure Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Brake Booster Pressure Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0558: {
    title: 'Brake Booster Pressure Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Brake Booster Pressure Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0559: {
    title: 'Brake Booster Pressure Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Brake Booster Pressure Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P055A,: {
    title: 'P055B, P055C, P055D, P055E, P055F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P055B, P055C, P055D, P055E, P055F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0560: {
    title: 'System Voltage Malfunction',
    explanation: 'Generic OBD-II definition: System Voltage Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0561: {
    title: 'System Voltage Unstable',
    explanation: 'Generic OBD-II definition: System Voltage Unstable. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0562: {
    title: 'System Voltage Low',
    explanation: 'Generic OBD-II definition: System Voltage Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0563: {
    title: 'System Voltage High',
    explanation: 'Generic OBD-II definition: System Voltage High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0564: {
    title: 'Cruise Control Multi-Function InputACircuit',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0565: {
    title: 'Cruise Control On Signal Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control On Signal Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0566: {
    title: 'Cruise Control Off Signal Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control Off Signal Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0567: {
    title: 'Cruise Control Resume Signal Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control Resume Signal Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0568: {
    title: 'Cruise Control Set Signal Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control Set Signal Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0569: {
    title: 'Cruise Control Coast Signal Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control Coast Signal Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P056A: {
    title: 'Cruise ControlIncrease DistanceSignal',
    explanation: 'Generic OBD-II definition: Cruise ControlIncrease DistanceSignal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P056B: {
    title: 'Cruise ControlDecrease DistanceSignal',
    explanation: 'Generic OBD-II definition: Cruise ControlDecrease DistanceSignal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P056C,: {
    title: 'P056D, P056E, P056F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P056D, P056E, P056F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0570: {
    title: 'Cruise Control Accel Signal Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control Accel Signal Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0571: {
    title: 'Cruise Control/Brake Switch A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Cruise Control/Brake Switch A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0572: {
    title: 'Cruise Control/Brake Switch A Circuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control/Brake Switch A Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0573: {
    title: 'Cruise Control/Brake Switch A Circuit High',
    explanation: 'Generic OBD-II definition: Cruise Control/Brake Switch A Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0574: {
    title: 'Cruise Control System - Vehicle Speed Too High',
    explanation: 'Generic OBD-II definition: Cruise Control System - Vehicle Speed Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0575: {
    title: 'Cruise Control Input Circuit',
    explanation: 'Generic OBD-II definition: Cruise Control Input Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0576: {
    title: 'Cruise Control Input Circuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control Input Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0577: {
    title: 'Cruise Control Input Circuit High',
    explanation: 'Generic OBD-II definition: Cruise Control Input Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0578: {
    title: 'Cruise Control Multi-Function InputACircuit Stuck',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputACircuit Stuck. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0579: {
    title: 'Cruise Control Multi-Function InputACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P057A,: {
    title: 'P057B, P057C, P057D, P057E, P057F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P057B, P057C, P057D, P057E, P057F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0580: {
    title: 'Cruise Control Multi-Function InputACircuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0581: {
    title: 'Cruise Control Multi-Function InputACircuit High',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0582: {
    title: 'Cruise Control Vacuum Control Circuit /Open',
    explanation: 'Generic OBD-II definition: Cruise Control Vacuum Control Circuit /Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0583: {
    title: 'Cruise Control Vacuum Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control Vacuum Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0584: {
    title: 'Cruise Control Vacuum Control Circuit High',
    explanation: 'Generic OBD-II definition: Cruise Control Vacuum Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0585: {
    title: 'Cruise Control Multi-Function InputA / BCorrelation',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0586: {
    title: 'Cruise Control Vent Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cruise Control Vent Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0587: {
    title: 'Cruise Control Vent Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control Vent Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0588: {
    title: 'Cruise Control Vent Control Circuit High',
    explanation: 'Generic OBD-II definition: Cruise Control Vent Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0589: {
    title: 'Cruise Control Multi-Function InputBCircuit',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P058A,: {
    title: 'P058B, P058C, P058D, P058E, P058F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P058B, P058C, P058D, P058E, P058F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0590: {
    title: 'Cruise Control Multi-Function InputBCircuit Stuck',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputBCircuit Stuck. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0591: {
    title: 'Cruise Control Multi-Function InputBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0592: {
    title: 'Cruise Control Multi-Function InputBCircuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0593: {
    title: 'Cruise Control Multi-Function InputBCircuit High',
    explanation: 'Generic OBD-II definition: Cruise Control Multi-Function InputBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0594: {
    title: 'Cruise Control Servo Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cruise Control Servo Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0595: {
    title: 'Cruise Control Servo Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cruise Control Servo Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0596: {
    title: 'Cruise Control Servo Control Circuit High',
    explanation: 'Generic OBD-II definition: Cruise Control Servo Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0597: {
    title: 'Thermostat Heater Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Thermostat Heater Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0598: {
    title: 'Thermostat Heater Control Circuit Low',
    explanation: 'Generic OBD-II definition: Thermostat Heater Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0599: {
    title: 'Thermostat Heater Control Circuit High',
    explanation: 'Generic OBD-II definition: Thermostat Heater Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P059A: {
    title: '- P05FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: - P05FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0600: {
    title: 'Serial Communication Link Malfunction',
    explanation: 'Generic OBD-II definition: Serial Communication Link Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0601
INTERNAL: {
    title: 'Control Module Memory Check Sum Error',
    explanation: 'Generic OBD-II definition: Control Module Memory Check Sum Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0602: {
    title: 'Control Module Programming Error',
    explanation: 'Generic OBD-II definition: Control Module Programming Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0603: {
    title: 'Internal Control Module Keep Alive Memory (KAM) Error',
    explanation: 'Generic OBD-II definition: Internal Control Module Keep Alive Memory (KAM) Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0604: {
    title: 'Internal Control Module Random Access Memory (RAM) Error',
    explanation: 'Generic OBD-II definition: Internal Control Module Random Access Memory (RAM) Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0605: {
    title: 'Internal Control Module Read Only Memory (ROM) Error',
    explanation: 'Generic OBD-II definition: Internal Control Module Read Only Memory (ROM) Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0606: {
    title: 'PCM Processor Fault',
    explanation: 'Generic OBD-II definition: PCM Processor Fault. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0607: {
    title: 'Control Module Performance',
    explanation: 'Generic OBD-II definition: Control Module Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0608: {
    title: 'Control Module VSS OutputAMalfunction',
    explanation: 'Generic OBD-II definition: Control Module VSS OutputAMalfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0609: {
    title: 'Control Module VSS OutputBMalfunction',
    explanation: 'Generic OBD-II definition: Control Module VSS OutputBMalfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P060A: {
    title: 'Internal Control Module Monitoring Processor Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module Monitoring Processor Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P060B: {
    title: 'Internal Control Module A/D Processing Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module A/D Processing Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P060C: {
    title: 'Internal Control Module Main Processor Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module Main Processor Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P060D: {
    title: 'Internal Control Module Accelerator Pedal Position Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module Accelerator Pedal Position Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P060E: {
    title: 'Internal Control Module Throttle Position Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module Throttle Position Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P060F: {
    title: 'Internal Control Module Coolant Temperature Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module Coolant Temperature Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0610: {
    title: 'Control Module Vehicle Options Error',
    explanation: 'Generic OBD-II definition: Control Module Vehicle Options Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0611: {
    title: 'Fuel Injector Control Module Performance',
    explanation: 'Generic OBD-II definition: Fuel Injector Control Module Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0612: {
    title: 'Fuel Injector Control Module Relay Control',
    explanation: 'Generic OBD-II definition: Fuel Injector Control Module Relay Control. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0613: {
    title: 'TCM Processor',
    explanation: 'Generic OBD-II definition: TCM Processor. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0614: {
    title: 'ECM / TCM Incompatible',
    explanation: 'Generic OBD-II definition: ECM / TCM Incompatible. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0615: {
    title: 'Starter Relay Circuit',
    explanation: 'Generic OBD-II definition: Starter Relay Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0616: {
    title: 'Starter Relay Circuit Low',
    explanation: 'Generic OBD-II definition: Starter Relay Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0617: {
    title: 'Starter Relay Circuit High',
    explanation: 'Generic OBD-II definition: Starter Relay Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0618: {
    title: 'Alternative Fuel Control Module KAM Error',
    explanation: 'Generic OBD-II definition: Alternative Fuel Control Module KAM Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0619: {
    title: 'Alternative Fuel Control Module RAM/ROM Error',
    explanation: 'Generic OBD-II definition: Alternative Fuel Control Module RAM/ROM Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P061A: {
    title: 'Control Module Torque Performance',
    explanation: 'Generic OBD-II definition: Control Module Torque Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P061D: {
    title: 'Control Module Engine Air Mass Performance',
    explanation: 'Generic OBD-II definition: Control Module Engine Air Mass Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P061E: {
    title: 'Control Module Brake Signal Performance',
    explanation: 'Generic OBD-II definition: Control Module Brake Signal Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0620: {
    title: 'Generator Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Generator Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0621: {
    title: 'Generator LampLControl Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Generator LampLControl Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0622: {
    title: 'Generator FieldFControl Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Generator FieldFControl Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0623: {
    title: 'Generator Lamp Control Circuit',
    explanation: 'Generic OBD-II definition: Generator Lamp Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0624: {
    title: 'Fuel Cap Lamp Control Circuit',
    explanation: 'Generic OBD-II definition: Fuel Cap Lamp Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0625: {
    title: 'Generator Field/F Terminal Circuit Low',
    explanation: 'Generic OBD-II definition: Generator Field/F Terminal Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0626: {
    title: 'Generator Field/F Terminal Circuit High',
    explanation: 'Generic OBD-II definition: Generator Field/F Terminal Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0627: {
    title: 'Fuel PumpAControl Circuit /Open',
    explanation: 'Generic OBD-II definition: Fuel PumpAControl Circuit /Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0628: {
    title: 'Fuel PumpAControl Circuit Low',
    explanation: 'Generic OBD-II definition: Fuel PumpAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0629: {
    title: 'Fuel PumpAControl Circuit High',
    explanation: 'Generic OBD-II definition: Fuel PumpAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P062A: {
    title: 'PumpAControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: PumpAControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P062B: {
    title: 'Internal Control Module Fuel Injector Control Performance',
    explanation: 'Generic OBD-II definition: Internal Control Module Fuel Injector Control Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P062D: {
    title: 'Fuel Injector Driver Circuit Performance Bank 1',
    explanation: 'Generic OBD-II definition: Fuel Injector Driver Circuit Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P062E: {
    title: 'Fuel Injector Driver Circuit Performance Bank 2',
    explanation: 'Generic OBD-II definition: Fuel Injector Driver Circuit Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P062F: {
    title: 'Internal Control Module EEPROM Error',
    explanation: 'Generic OBD-II definition: Internal Control Module EEPROM Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0630: {
    title: 'VIN Not Programmed or Incompatible – ECM/PCM',
    explanation: 'Generic OBD-II definition: VIN Not Programmed or Incompatible – ECM/PCM. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0631: {
    title: 'VIN Not Programmed or Incompatible – TCM',
    explanation: 'Generic OBD-II definition: VIN Not Programmed or Incompatible – TCM. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0632: {
    title: 'Odometer Not Programmed – ECM/PCM',
    explanation: 'Generic OBD-II definition: Odometer Not Programmed – ECM/PCM. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0633: {
    title: 'Immobilizer Key Not Programmed – ECM/PCM',
    explanation: 'Generic OBD-II definition: Immobilizer Key Not Programmed – ECM/PCM. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0634: {
    title: 'PCM/ECM/TCM Internal Temperature Too High',
    explanation: 'Generic OBD-II definition: PCM/ECM/TCM Internal Temperature Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0635: {
    title: 'Power Steering Control Circuit',
    explanation: 'Generic OBD-II definition: Power Steering Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0636: {
    title: 'Power Steering Control Circuit Low',
    explanation: 'Generic OBD-II definition: Power Steering Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0637: {
    title: 'Power Steering Control Circuit High',
    explanation: 'Generic OBD-II definition: Power Steering Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0638: {
    title: 'Throttle Actuator Control Range/Performance (Bank 1)',
    explanation: 'Generic OBD-II definition: Throttle Actuator Control Range/Performance (Bank 1). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0639: {
    title: 'Throttle Actuator Control Range/Performance (Bank 2)',
    explanation: 'Generic OBD-II definition: Throttle Actuator Control Range/Performance (Bank 2). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P063A: {
    title: 'Voltage Sense Circuit',
    explanation: 'Generic OBD-II definition: Voltage Sense Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P063B: {
    title: 'Voltage Sense Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Voltage Sense Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P063C: {
    title: 'Voltage Sense Circuit Low',
    explanation: 'Generic OBD-II definition: Voltage Sense Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P063D: {
    title: 'Voltage Sense Circuit High',
    explanation: 'Generic OBD-II definition: Voltage Sense Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P063E: {
    title: 'Configuration Throttle Input Not Present',
    explanation: 'Generic OBD-II definition: Configuration Throttle Input Not Present . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P063F: {
    title: 'Configuration Engine Coolant Temperature Input Not Present',
    explanation: 'Generic OBD-II definition: Configuration Engine Coolant Temperature Input Not Present. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0640: {
    title: 'Intake Air Heater Control Circuit',
    explanation: 'Generic OBD-II definition: Intake Air Heater Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0641: {
    title: 'Sensor Reference VoltageACircuit Open',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageACircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0642: {
    title: 'Sensor Reference VoltageACircuit Low',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0643: {
    title: 'Sensor Reference VoltageACircuit High',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0644: {
    title: 'Driver Display Serial Communication Circuit',
    explanation: 'Generic OBD-II definition: Driver Display Serial Communication Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0645: {
    title: 'A/C Clutch Relay Control Circuit',
    explanation: 'Generic OBD-II definition: A/C Clutch Relay Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0646: {
    title: 'A/C Clutch Relay Control Circuit Low',
    explanation: 'Generic OBD-II definition: A/C Clutch Relay Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0647: {
    title: 'A/C Clutch Relay Control Circuit High',
    explanation: 'Generic OBD-II definition: A/C Clutch Relay Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0648: {
    title: 'Immobilizer Lamp Control Circuit',
    explanation: 'Generic OBD-II definition: Immobilizer Lamp Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0649: {
    title: 'Speed Control Lamp Control Circuit',
    explanation: 'Generic OBD-II definition: Speed Control Lamp Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P064A: {
    title: 'Pump Control Module',
    explanation: 'Generic OBD-II definition: Pump Control Module. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P064B: {
    title: 'Control Module',
    explanation: 'Generic OBD-II definition: Control Module. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P064D: {
    title: 'Control Module O2 Sensor Processor Performance Bank 1',
    explanation: 'Generic OBD-II definition: Control Module O2 Sensor Processor Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P064E: {
    title: 'Control Module O2 Sensor Processor Performance Bank 2',
    explanation: 'Generic OBD-II definition: Control Module O2 Sensor Processor Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0650: {
    title: 'Malfunction Indicator Lamp (MIL) Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Malfunction Indicator Lamp (MIL) Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0651: {
    title: 'Sensor Reference VoltageBCircuit Open',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageBCircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0652: {
    title: 'Sensor Reference VoltageBCircuit Low',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0653: {
    title: 'Sensor Reference VoltageBCircuit High',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0654: {
    title: 'Engine RPM Output Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Engine RPM Output Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0655: {
    title: 'Engine Hot Lamp Output Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Engine Hot Lamp Output Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0656: {
    title: 'Fuel Level Output Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Fuel Level Output Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0657: {
    title: 'Actuator Supply VoltageACircuit/Open',
    explanation: 'Generic OBD-II definition: Actuator Supply VoltageACircuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0658: {
    title: 'Actuator Supply VoltageACircuit Low',
    explanation: 'Generic OBD-II definition: Actuator Supply VoltageACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0659: {
    title: 'Actuator Supply VoltageACircuit High',
    explanation: 'Generic OBD-II definition: Actuator Supply VoltageACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P065A: {
    title: 'System Performance',
    explanation: 'Generic OBD-II definition: System Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P065C: {
    title: 'Mechanical Performance',
    explanation: 'Generic OBD-II definition: Mechanical Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0660: {
    title: 'Intake Manifold Tuning Valve Control Circuit/Open Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Tuning Valve Control Circuit/Open Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0661: {
    title: 'Intake Manifold Tuning Valve Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Tuning Valve Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0662: {
    title: 'Intake Manifold Tuning Valve Control Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Tuning Valve Control Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0663: {
    title: 'Intake Manifold Tuning Valve Control Circuit/Open Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Tuning Valve Control Circuit/Open Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0664: {
    title: 'Intake Manifold Tuning Valve Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Tuning Valve Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0665: {
    title: 'Intake Manifold Tuning Valve Control Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Tuning Valve Control Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0666: {
    title: 'PCM/ECM/TCM Internal Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: PCM/ECM/TCM Internal Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0667: {
    title: 'PCM/ECM/TCM Internal Temperature Sensor Range/Performance',
    explanation: 'Generic OBD-II definition: PCM/ECM/TCM Internal Temperature Sensor Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0668: {
    title: 'PCM/ECM/TCM Internal Temperature Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: PCM/ECM/TCM Internal Temperature Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0669: {
    title: 'PCM/ECM/TCM Internal Temperature Sensor Circuit High',
    explanation: 'Generic OBD-II definition: PCM/ECM/TCM Internal Temperature Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P066A: {
    title: '1 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 1 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P066C: {
    title: '2 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 2 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P066F: {
    title: '3 Glow Plug Control Circuit High',
    explanation: 'Generic OBD-II definition: 3 Glow Plug Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0670: {
    title: 'Glow Plug Module Control Circuit',
    explanation: 'Generic OBD-II definition: Glow Plug Module Control Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0671: {
    title: 'Cylinder 1 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 1 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0672: {
    title: 'Cylinder 2 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 2 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0673: {
    title: 'Cylinder 3 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 3 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0674: {
    title: 'Cylinder 4 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 4 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0675: {
    title: 'Cylinder 5 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 5 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0676: {
    title: 'Cylinder 6 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 6 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0677: {
    title: 'Cylinder 7 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 7 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0678: {
    title: 'Cylinder 8 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 8 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0679: {
    title: 'Cylinder 9 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 9 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P067A: {
    title: '4 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 4 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P067B: {
    title: '4 Glow Plug Control Circuit High',
    explanation: 'Generic OBD-II definition: 4 Glow Plug Control Circuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P067C: {
    title: '5 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 5 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P067D: {
    title: '5 Glow Plug Control Circuit High',
    explanation: 'Generic OBD-II definition: 5 Glow Plug Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P067E: {
    title: '6 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 6 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0680: {
    title: 'Cylinder 10 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 10 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0681: {
    title: 'Cylinder 11 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 11 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0682: {
    title: 'Cylinder 12 Glow Plug Circuit',
    explanation: 'Generic OBD-II definition: Cylinder 12 Glow Plug Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0683: {
    title: 'Glow Plug Control Module to PCM Communication Circuit',
    explanation: 'Generic OBD-II definition: Glow Plug Control Module to PCM Communication Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0684: {
    title: 'Glow Plug Control Module to PCM Communication Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Glow Plug Control Module to PCM Communication Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0685: {
    title: 'ECM/PCM Power Relay Control Circuit Open',
    explanation: 'Generic OBD-II definition: ECM/PCM Power Relay Control Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0686: {
    title: 'ECM/PCM Power Relay Control Circuit Low',
    explanation: 'Generic OBD-II definition: ECM/PCM Power Relay Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0687: {
    title: 'ECM/PCM Power Relay Control Circuit High',
    explanation: 'Generic OBD-II definition: ECM/PCM Power Relay Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0688: {
    title: 'ECM/PCM Power Relay Sense Circuit Open',
    explanation: 'Generic OBD-II definition: ECM/PCM Power Relay Sense Circuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0689: {
    title: 'ECM/PCM Power Relay Sense Circuit Low',
    explanation: 'Generic OBD-II definition: ECM/PCM Power Relay Sense Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P068A: {
    title: 'Power Relay De-Energized Performance - Too Early',
    explanation: 'Generic OBD-II definition: Power Relay De-Energized Performance - Too Early. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P068E: {
    title: '8 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 8 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0690: {
    title: 'ECM/PCM Power Relay Sense Circuit High',
    explanation: 'Generic OBD-II definition: ECM/PCM Power Relay Sense Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0691: {
    title: 'Fan 1 Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fan 1 Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0692: {
    title: 'Fan 1 Control Circuit High',
    explanation: 'Generic OBD-II definition: Fan 1 Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0693: {
    title: 'Fan 2 Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fan 2 Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0694: {
    title: 'Fan 2 Control Circuit High',
    explanation: 'Generic OBD-II definition: Fan 2 Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0695: {
    title: 'Fan 3 Control Circuit Low',
    explanation: 'Generic OBD-II definition: Fan 3 Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0696: {
    title: 'Fan 3 Control Circuit High',
    explanation: 'Generic OBD-II definition: Fan 3 Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0697: {
    title: 'Sensor Reference VoltageCCircuit Open',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageCCircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0698: {
    title: 'Sensor Reference VoltageCCircuit Low',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageCCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0699: {
    title: 'Sensor Reference VoltageCCircuit High',
    explanation: 'Generic OBD-II definition: Sensor Reference VoltageCCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P069A: {
    title: '9 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 9 Glow Plug Control Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P069B: {
    title: '9 Glow Plug Control Circuit High',
    explanation: 'Generic OBD-II definition: 9 Glow Plug Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P069C: {
    title: '10 Glow Plug Control Circuit Low',
    explanation: 'Generic OBD-II definition: 10 Glow Plug Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P069D: {
    title: '10 Glow Plug Control Circuit High',
    explanation: 'Generic OBD-II definition: 10 Glow Plug Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A1: {
    title: 'A/C Compressor Control Circuit Low',
    explanation: 'Generic OBD-II definition: A/C Compressor Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A2: {
    title: 'A/C Compressor Control Circuit High',
    explanation: 'Generic OBD-II definition: A/C Compressor Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A3: {
    title: 'Reference VoltageDCircuit Open',
    explanation: 'Generic OBD-II definition: Reference VoltageDCircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A5: {
    title: 'Reference VoltageDCircuit High',
    explanation: 'Generic OBD-II definition: Reference VoltageDCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A7: {
    title: 'Reference VoltageBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Reference VoltageBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A8: {
    title: 'Reference VoltageCCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Reference VoltageCCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06A9: {
    title: 'Reference VoltageDCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Reference VoltageDCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06AA: {
    title: 'Internal TemperatureBToo High',
    explanation: 'Generic OBD-II definition: Internal TemperatureBToo High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06AF: {
    title: 'Management System - Forced Engine Shutdown',
    explanation: 'Generic OBD-II definition: Management System - Forced Engine Shutdown. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06B0: {
    title: 'Power SupplyACircuit/Open',
    explanation: 'Generic OBD-II definition: Power SupplyACircuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06B2: {
    title: 'Power SupplyACircuit High',
    explanation: 'Generic OBD-II definition: Power SupplyACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06B6: {
    title: 'Control Module Knock Sensor Processor 1 Performance',
    explanation: 'Generic OBD-II definition: Control Module Knock Sensor Processor 1 Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06B8: {
    title: 'Control Module Non-Volatile Random Access Memory (NVRAM) Error',
    explanation: 'Generic OBD-II definition: Control Module Non-Volatile Random Access Memory (NVRAM) Error . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06B9: {
    title: '1 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 1 Glow Plug Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06BA: {
    title: '2 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 2 Glow Plug Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06BB: {
    title: '3 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 3 Glow Plug Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06BC: {
    title: '4 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 4 Glow Plug Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06BD: {
    title: '5 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 5 Glow Plug Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06BF: {
    title: '7 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 7 Glow Plug Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C0: {
    title: '8 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 8 Glow Plug Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C1: {
    title: '9 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 9 Glow Plug Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C2: {
    title: '10 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 10 Glow Plug Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C4: {
    title: '12 Glow Plug Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: 12 Glow Plug Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C5: {
    title: '1 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 1 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C6: {
    title: '2 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 2 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C7: {
    title: '3 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 3 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C8: {
    title: '4 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 4 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06C9: {
    title: '5 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 5 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06CA: {
    title: '6 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 6 Glow Plug Incorrect. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06CB: {
    title: '7 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 7 Glow Plug Incorrect. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06CC: {
    title: '8 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 8 Glow Plug Incorrect. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06CD: {
    title: '9 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 9 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06CE: {
    title: '10 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 10 Glow Plug Incorrect. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06D0: {
    title: '12 Glow Plug Incorrect',
    explanation: 'Generic OBD-II definition: 12 Glow Plug Incorrect . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P06D1: {
    title: 'Control Module Ignition Coil Control Performance',
    explanation: 'Generic OBD-II definition: Control Module Ignition Coil Control Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0700: {
    title: 'Transmission Control System Malfunction',
    explanation: 'Generic OBD-II definition: Transmission Control System Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0701: {
    title: 'Transmission Control System Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Control System Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0702: {
    title: 'Transmission Control System Electrical',
    explanation: 'Generic OBD-II definition: Transmission Control System Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0703: {
    title: 'Torque Converter/Brake Switch B Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Torque Converter/Brake Switch B Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0704: {
    title: 'Clutch Switch Input Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Clutch Switch Input Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0705: {
    title: 'Transmission Range Sensor A Circuit malfunction (PRNDL Input)',
    explanation: 'Generic OBD-II definition: Transmission Range Sensor A Circuit malfunction (PRNDL Input). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0706: {
    title: 'Transmission Range Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Range Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0707: {
    title: 'Transmission Range Sensor A Circuit Low Input',
    explanation: 'Generic OBD-II definition: Transmission Range Sensor A Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0708: {
    title: 'Transmission Range Sensor A Circuit High Input',
    explanation: 'Generic OBD-II definition: Transmission Range Sensor A Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0709: {
    title: 'Transmission Range Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Range Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P070A: {
    title: 'Transmission Fluid Level Sensor Circuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P070B: {
    title: 'Transmission Fluid Level Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P070C: {
    title: 'Transmission Fluid Level Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P070D: {
    title: 'Transmission Fluid Level Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P070E: {
    title: 'Transmission Fluid Level Sensor Circuit intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Sensor Circuit intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P070F: {
    title: 'Transmission Fluid Level Too Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0710: {
    title: 'Transmission Fluid Temperature Sensor A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Transmission Fluid Temperature Sensor A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0711: {
    title: 'Transmission Fluid Temperature Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Temperature Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0712: {
    title: 'Transmission Fluid Temperature Sensor A Circuit Low Input',
    explanation: 'Generic OBD-II definition: Transmission Fluid Temperature Sensor A Circuit Low Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0713: {
    title: 'Transmission Fluid Temperature Sensor A Circuit High Input',
    explanation: 'Generic OBD-II definition: Transmission Fluid Temperature Sensor A Circuit High Input. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0714: {
    title: 'Transmission Fluid Temperature Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Temperature Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0715: {
    title: 'Input/Turbine Speed Sensor A Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Input/Turbine Speed Sensor A Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0716: {
    title: 'Input/Turbine Speed Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Input/Turbine Speed Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0717: {
    title: 'Input/Turbine Speed Sensor A Circuit No Signal',
    explanation: 'Generic OBD-II definition: Input/Turbine Speed Sensor A Circuit No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0718: {
    title: 'Input/Turbine Speed Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Input/Turbine Speed Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0719: {
    title: 'Torque Converter/Brake Switch B Circuit Low',
    explanation: 'Generic OBD-II definition: Torque Converter/Brake Switch B Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P071A: {
    title: 'Transmission Mode SwitchACircuit',
    explanation: 'Generic OBD-II definition: Transmission Mode SwitchACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P071B: {
    title: 'Transmission Mode SwitchACircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Mode SwitchACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P071C: {
    title: 'Transmission Mode SwitchACircuit High',
    explanation: 'Generic OBD-II definition: Transmission Mode SwitchACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P071D: {
    title: 'Transmission Mode SwitchBCircuit',
    explanation: 'Generic OBD-II definition: Transmission Mode SwitchBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P071E: {
    title: 'Transmission Mode SwitchBCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Mode SwitchBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P071F: {
    title: 'Transmission Mode SwitchBCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Mode SwitchBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0720: {
    title: 'Output Speed Sensor Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Output Speed Sensor Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0721: {
    title: 'Output Speed Sensor Range/Performance',
    explanation: 'Generic OBD-II definition: Output Speed Sensor Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0722: {
    title: 'Output Speed Sensor No Signal',
    explanation: 'Generic OBD-II definition: Output Speed Sensor No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0723: {
    title: 'Output Speed Sensor Intermittent',
    explanation: 'Generic OBD-II definition: Output Speed Sensor Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0724: {
    title: 'Torque Converter/Brake Switch B Circuit High',
    explanation: 'Generic OBD-II definition: Torque Converter/Brake Switch B Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0725: {
    title: 'Engine Speed input Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Engine Speed input Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0726: {
    title: 'Engine Speed Input Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Engine Speed Input Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0727: {
    title: 'Engine Speed Input Circuit No Signal',
    explanation: 'Generic OBD-II definition: Engine Speed Input Circuit No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0728: {
    title: 'Engine Speed Input Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Engine Speed Input Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0729: {
    title: 'Gear 6 Incorrect Ratio',
    explanation: 'Generic OBD-II definition: Gear 6 Incorrect Ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P072A: {
    title: 'Stuck in Neutral',
    explanation: 'Generic OBD-II definition: Stuck in Neutral. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P072B: {
    title: 'Stuck In Reverse',
    explanation: 'Generic OBD-II definition: Stuck In Reverse. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P072C: {
    title: 'Stuck in Gear 1',
    explanation: 'Generic OBD-II definition: Stuck in Gear 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P072D: {
    title: 'Stuck in Gear 2',
    explanation: 'Generic OBD-II definition: Stuck in Gear 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P072E: {
    title: 'Stuck in Gear 3',
    explanation: 'Generic OBD-II definition: Stuck in Gear 3. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P072F: {
    title: 'Stuck in Gear 4',
    explanation: 'Generic OBD-II definition: Stuck in Gear 4. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0730: {
    title: 'Incorrect Gear Ratio',
    explanation: 'Generic OBD-II definition: Incorrect Gear Ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0731: {
    title: 'Gear I Incorrect ratio',
    explanation: 'Generic OBD-II definition: Gear I Incorrect ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0732: {
    title: 'Gear 2 Incorrect ratio',
    explanation: 'Generic OBD-II definition: Gear 2 Incorrect ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0733: {
    title: 'Gear 3 Incorrect ratio',
    explanation: 'Generic OBD-II definition: Gear 3 Incorrect ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0734: {
    title: 'Gear 4 Incorrect ratio',
    explanation: 'Generic OBD-II definition: Gear 4 Incorrect ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0735: {
    title: 'Gear 5 Incorrect ratio',
    explanation: 'Generic OBD-II definition: Gear 5 Incorrect ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0736: {
    title: 'Reverse incorrect gear ratio',
    explanation: 'Generic OBD-II definition: Reverse incorrect gear ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0737: {
    title: 'TCM Engine Speed Output Circuit',
    explanation: 'Generic OBD-II definition: TCM Engine Speed Output Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0738: {
    title: 'TCM Engine Speed Output Circuit Low',
    explanation: 'Generic OBD-II definition: TCM Engine Speed Output Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0739: {
    title: 'TCM Engine Speed Output Circuit High',
    explanation: 'Generic OBD-II definition: TCM Engine Speed Output Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P073A: {
    title: 'Stuck in Gear 5',
    explanation: 'Generic OBD-II definition: Stuck in Gear 5. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P073B: {
    title: 'Stuck in Gear 6',
    explanation: 'Generic OBD-II definition: Stuck in Gear 6. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P073C: {
    title: 'Stuck in Gear 7',
    explanation: 'Generic OBD-II definition: Stuck in Gear 7. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P073D: {
    title: 'Unable to Engage Neutral',
    explanation: 'Generic OBD-II definition: Unable to Engage Neutral. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P073E: {
    title: 'Unable to Engage Reverse',
    explanation: 'Generic OBD-II definition: Unable to Engage Reverse. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P073F: {
    title: 'Unable to Engage Gear 1',
    explanation: 'Generic OBD-II definition: Unable to Engage Gear 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0740: {
    title: 'Torque Converter Clutch Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Torque Converter Clutch Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0741: {
    title: 'Torque Converter Clutch Circuit Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Torque Converter Clutch Circuit Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0742: {
    title: 'Torque Converter Clutch Circuit Stock On',
    explanation: 'Generic OBD-II definition: Torque Converter Clutch Circuit Stock On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0743: {
    title: 'Torque Converter Clutch Circuit Electrical',
    explanation: 'Generic OBD-II definition: Torque Converter Clutch Circuit Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0744: {
    title: 'Torque Converter Clutch Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Torque Converter Clutch Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0745: {
    title: 'Pressure Control Solenoid A Malfunction',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid A Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0746: {
    title: 'Pressure Control Solenoid A Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid A Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0747: {
    title: 'Pressure Control Solenoid A Stuck On',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid A Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0748: {
    title: 'Pressure Control Solenoid A Electrical',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid A Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0749: {
    title: 'Pressure Control Solenoid A Intermittent',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid A Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P074A: {
    title: 'Unable To Engage Gear 2',
    explanation: 'Generic OBD-II definition: Unable To Engage Gear 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P074B: {
    title: 'Unable To Engage Gear 3',
    explanation: 'Generic OBD-II definition: Unable To Engage Gear 3. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P074C: {
    title: 'Unable To Engage Gear 4',
    explanation: 'Generic OBD-II definition: Unable To Engage Gear 4. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P074D: {
    title: 'Unable To Engage Gear 5',
    explanation: 'Generic OBD-II definition: Unable To Engage Gear 5. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P074E: {
    title: 'Unable To Engage Gear 6',
    explanation: 'Generic OBD-II definition: Unable To Engage Gear 6. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P074F: {
    title: 'Unable To Engage Gear 7',
    explanation: 'Generic OBD-II definition: Unable To Engage Gear 7. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0750: {
    title: 'Shift Solenoid A Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid A Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0751: {
    title: 'Shift Solenoid A Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid A Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0752: {
    title: 'Shift Solenoid A Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid A Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0753: {
    title: 'Shift Solenoid A Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid A Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0754: {
    title: 'Shift Solenoid A Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid A Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0755: {
    title: 'Shift Solenoid B Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid B Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0756: {
    title: 'Shift Solenoid B Performance or Stock Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid B Performance or Stock Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0757: {
    title: 'Shift Solenoid B Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid B Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0758: {
    title: 'Shift Solenoid B Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid B Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0759: {
    title: 'Shift Solenoid B Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid B Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P075A: {
    title: 'Shift Solenoid G Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid G Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P075B: {
    title: 'Shift Solenoid G Performance/Stuck Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid G Performance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P075C: {
    title: 'Shift Solenoid G Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid G Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P075D: {
    title: 'Shift Solenoid G Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid G Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P075E: {
    title: 'Shift Solenoid G Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid G Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P075F: {
    title: 'Transmission Fluid Level Too High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Level Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0760: {
    title: 'Shift Solenoid C Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid C Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0761: {
    title: 'Shift Solenoid C Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid C Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0762: {
    title: 'Shift Solenoid C Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid C Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0763: {
    title: 'Shift Solenoid C Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid C Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0764: {
    title: 'Shift Solenoid C Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid C Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0765: {
    title: 'Shift Solenoid D Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid D Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0766: {
    title: 'Shift Solenoid D Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid D Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0767: {
    title: 'Shift Solenoid D Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid D Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0768: {
    title: 'Shift Solenoid D Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid D Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0769: {
    title: 'Shift Solenoid D Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid D Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P076A: {
    title: 'Shift Solenoid H Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid H Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P076B: {
    title: 'Shift Solenoid H Performance/Stuck Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid H Performance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P076C: {
    title: 'Shift Solenoid H Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid H Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P076D: {
    title: 'Shift Solenoid H Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid H Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P076E: {
    title: 'Shift Solenoid H Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid H Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P076F: {
    title: 'Gear 7 Incorrect Ratio',
    explanation: 'Generic OBD-II definition: Gear 7 Incorrect Ratio. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0770: {
    title: 'Shift Solenoid E Malfunction',
    explanation: 'Generic OBD-II definition: Shift Solenoid E Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0771: {
    title: 'Shift Solenoid E Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Shift Solenoid E Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0772: {
    title: 'Shift Solenoid E Stuck On',
    explanation: 'Generic OBD-II definition: Shift Solenoid E Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0773: {
    title: 'Shift Solenoid E Electrical',
    explanation: 'Generic OBD-II definition: Shift Solenoid E Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0774: {
    title: 'Shift Solenoid E Intermittent',
    explanation: 'Generic OBD-II definition: Shift Solenoid E Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0775: {
    title: 'Pressure Control Solenoid B Malfunction',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid B Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0776: {
    title: 'Pressure Control Solenoid B Performance or Stuck Off',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid B Performance or Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0777: {
    title: 'Pressure Control Solenoid B Stuck On',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid B Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0778: {
    title: 'Pressure Control Solenoid B Electrical',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid B Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0779: {
    title: 'Pressure Control Solenoid B Intermittent',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid B Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P077A: {
    title: 'Speed Sensor Circuit - Loss of Direction Signal',
    explanation: 'Generic OBD-II definition: Speed Sensor Circuit - Loss of Direction Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P077B: {
    title: 'Speed Sensor Circuit - Direction Error',
    explanation: 'Generic OBD-II definition: Speed Sensor Circuit - Direction Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P077C,: {
    title: 'P077D, P077E, P077F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P077D, P077E, P077F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0780: {
    title: 'Shift Malfunction',
    explanation: 'Generic OBD-II definition: Shift Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0781: {
    title: '1-2 Shift Malfunction',
    explanation: 'Generic OBD-II definition: 1-2 Shift Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0782: {
    title: '2-3 Shift Malfunction',
    explanation: 'Generic OBD-II definition: 2-3 Shift Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0783: {
    title: '3-4 Shift Malfunction',
    explanation: 'Generic OBD-II definition: 3-4 Shift Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0784: {
    title: '4-5 Shift Malfunction',
    explanation: 'Generic OBD-II definition: 4-5 Shift Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0785: {
    title: 'Shift Timing Solenoid A Malfunction',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid A Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0786: {
    title: 'Shift Timing Solenoid A Range/Performance',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid A Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0787: {
    title: 'Shift Timing Solenoid A Low',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid A Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0788: {
    title: 'Shift Timing Solenoid A High',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid A High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0789: {
    title: 'Shift Timing Solenoid A Intermittent',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid A Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P078A: {
    title: 'Shift Timing Solenoid B Malfunction',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid B Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P078B: {
    title: 'Shift Timing Solenoid B Range/Performance',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid B Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P078C: {
    title: 'Shift Timing Solenoid B Low',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid B Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P078D: {
    title: 'Shift Timing Solenoid B High',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid B High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P078E: {
    title: 'Shift Timing Solenoid B Intermittent',
    explanation: 'Generic OBD-II definition: Shift Timing Solenoid B Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P078F: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0790: {
    title: 'Normal/Performance Switch Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Normal/Performance Switch Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0791: {
    title: 'Intermediate Shaft Speed Sensor A Circuit',
    explanation: 'Generic OBD-II definition: Intermediate Shaft Speed Sensor A Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0792: {
    title: 'Intermediate Shaft Speed Sensor A Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Intermediate Shaft Speed Sensor A Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0793: {
    title: 'Intermediate Shaft Speed Sensor A Circuit No Signal',
    explanation: 'Generic OBD-II definition: Intermediate Shaft Speed Sensor A Circuit No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0794: {
    title: 'Intermediate Shaft Speed Sensor A Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Intermediate Shaft Speed Sensor A Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0795: {
    title: 'Pressure Control Solenoid C Malfunction',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid C Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0796: {
    title: 'Pressure Control Solenoid C Performance or Stuck off',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid C Performance or Stuck off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0797: {
    title: 'Pressure Control Solenoid C Stuck On',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid C Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0798: {
    title: 'Pressure Control Solenoid C Electrical',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid C Electrical. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0799: {
    title: 'Pressure Control Solenoid C Intermittent',
    explanation: 'Generic OBD-II definition: Pressure Control Solenoid C Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P079A: {
    title: 'Transmission Friction ElementASlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementASlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P079B: {
    title: 'Transmission Friction ElementBSlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementBSlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P079C: {
    title: 'Transmission Friction ElementCSlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementCSlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P079D: {
    title: 'Transmission Friction ElementDSlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementDSlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P079E: {
    title: 'Transmission Friction ElementESlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementESlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P079F: {
    title: 'Transmission Friction ElementFSlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementFSlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A0: {
    title: 'Transmission Friction ElementGSlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementGSlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A1: {
    title: 'Transmission Friction ElementHSlip Detected',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementHSlip Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A2: {
    title: 'Transmission Friction ElementAPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementAPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A3: {
    title: 'Transmission Friction ElementAStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementAStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A4: {
    title: 'Transmission Friction ElementBPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementBPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A5: {
    title: 'Transmission Friction ElementBStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementBStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A6: {
    title: 'Transmission Friction ElementCPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementCPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A7: {
    title: 'Transmission Friction ElementCStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementCStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A8: {
    title: 'Transmission Friction ElementDPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementDPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07A9: {
    title: 'Transmission Friction ElementDStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementDStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07AA: {
    title: 'Transmission Friction ElementEPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementEPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07AB: {
    title: 'Transmission Friction ElementEStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementEStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07AC: {
    title: 'Transmission Friction ElementFPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementFPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07AD: {
    title: 'Transmission Friction ElementFStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementFStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07AE: {
    title: 'Transmission Friction ElementGPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementGPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07AF: {
    title: 'Transmission Friction ElementGStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementGStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B0: {
    title: 'Transmission Friction ElementHPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementHPerformance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B1: {
    title: 'Transmission Friction ElementHStuck On',
    explanation: 'Generic OBD-II definition: Transmission Friction ElementHStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B2: {
    title: 'Transmission Park Position Sensor/SwitchACircuit Open',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchACircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B3: {
    title: 'Transmission Park Position Sensor/SwitchACircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B4: {
    title: 'Transmission Park Position Sensor/SwitchACircuit High',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B5: {
    title: 'Transmission Park Position Sensor/SwitchACircuit Performance/Low',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchACircuit Performance/Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B6: {
    title: 'Transmission Park Position Sensor/SwitchACircuit Performance High',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchACircuit Performance High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B7: {
    title: 'Transmission Park Position Sensor/SwitchACircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchACircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B8: {
    title: 'Transmission Park Position Sensor/SwitchBCircuit Open',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchBCircuit Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07B9: {
    title: 'Transmission Park Position Sensor/SwitchBCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07BA: {
    title: 'Transmission Park Position Sensor/SwitchBCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07BB: {
    title: 'Transmission Park Position Sensor/SwitchBCircuit Performance/Low',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchBCircuit Performance/Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07BC: {
    title: 'Transmission Park Position Sensor/SwitchBCircuit Performance High',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchBCircuit Performance High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07BD: {
    title: 'Transmission Park Position Sensor/SwitchBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07BE: {
    title: 'Transmission Park Position Sensor/SwitchA / BCorrelation',
    explanation: 'Generic OBD-II definition: Transmission Park Position Sensor/SwitchA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P07BF: {
    title: '- P07FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: - P07FF ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0800: {
    title: 'Transfer Case Control System (MIL Request)',
    explanation: 'Generic OBD-II definition: Transfer Case Control System (MIL Request). A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0801: {
    title: 'Reverse Inhibit Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: Reverse Inhibit Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0802: {
    title: 'Transmission Control System MIL Request Circuit/Open',
    explanation: 'Generic OBD-II definition: Transmission Control System MIL Request Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0803: {
    title: '1-4 Upshift (Skip Shift) Solenoid Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: 1-4 Upshift (Skip Shift) Solenoid Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0804: {
    title: '1-4 Upshift (Skip Shift) Lamp Control Circuit Malfunction',
    explanation: 'Generic OBD-II definition: 1-4 Upshift (Skip Shift) Lamp Control Circuit Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0805: {
    title: 'Clutch Position Sensor Circuit',
    explanation: 'Generic OBD-II definition: Clutch Position Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0806: {
    title: 'Clutch Position Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Clutch Position Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0807: {
    title: 'Clutch Position Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Clutch Position Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0808: {
    title: 'Clutch Position Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Clutch Position Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0809: {
    title: 'Clutch Position Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Clutch Position Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P080A: {
    title: 'Clutch Position Not Learned',
    explanation: 'Generic OBD-II definition: Clutch Position Not Learned. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P080E,: {
    title: 'P080F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P080F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0810: {
    title: 'Clutch Position Control Error',
    explanation: 'Generic OBD-II definition: Clutch Position Control Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0811: {
    title: 'Excessive Clutch Slippage',
    explanation: 'Generic OBD-II definition: Excessive Clutch Slippage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0812: {
    title: 'Reverse Input Circuit',
    explanation: 'Generic OBD-II definition: Reverse Input Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0813: {
    title: 'Reverse Output Circuit',
    explanation: 'Generic OBD-II definition: Reverse Output Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0814: {
    title: 'Transmission Range Display Circuit',
    explanation: 'Generic OBD-II definition: Transmission Range Display Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0815: {
    title: 'Upshift Switch Circuit',
    explanation: 'Generic OBD-II definition: Upshift Switch Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0816: {
    title: 'Downshift Switch Circuit',
    explanation: 'Generic OBD-II definition: Downshift Switch Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0817: {
    title: 'Starter Disable Circuit',
    explanation: 'Generic OBD-II definition: Starter Disable Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0818: {
    title: 'Driveline Disconnect Switch Input Circuit',
    explanation: 'Generic OBD-II definition: Driveline Disconnect Switch Input Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0819: {
    title: 'Up and Down Shift Switch to Transmission Range Correlation',
    explanation: 'Generic OBD-II definition: Up and Down Shift Switch to Transmission Range Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P081A: {
    title: 'Disable Circuit Low',
    explanation: 'Generic OBD-II definition: Disable Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P081B: {
    title: 'Disable Circuit High',
    explanation: 'Generic OBD-II definition: Disable Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P081C: {
    title: 'Input Circuit',
    explanation: 'Generic OBD-II definition: Input Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P081D: {
    title: 'Neutral Input Circuit',
    explanation: 'Generic OBD-II definition: Neutral Input Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P081E: {
    title: 'Excessive ClutchBSlippage',
    explanation: 'Generic OBD-II definition: Excessive ClutchBSlippage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P081F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0829: {
    title: '5-6 Shift Malfunction',
    explanation: 'Generic OBD-II definition: 5-6 Shift Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0830: {
    title: 'Clutch Pedal SwitchACircuit',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0831: {
    title: 'Clutch Pedal SwitchACircuit Low',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0832: {
    title: 'Clutch Pedal SwitchACircuit High',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0833: {
    title: 'Clutch Pedal SwitchBCircuit',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0834: {
    title: 'Clutch Pedal SwitchBCircuit Low',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0835: {
    title: 'Clutch Pedal SwitchBCircuit High',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0836: {
    title: 'Four Wheel Drive (4WD) Switch Circuit',
    explanation: 'Generic OBD-II definition: Four Wheel Drive (4WD) Switch Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0837: {
    title: 'Four Wheel Drive (4WD) Switch Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Four Wheel Drive (4WD) Switch Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0838: {
    title: 'Four Wheel Drive (4WD) Switch Circuit Low',
    explanation: 'Generic OBD-II definition: Four Wheel Drive (4WD) Switch Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0839: {
    title: 'Four Wheel Drive (4WD) Switch Circuit High',
    explanation: 'Generic OBD-II definition: Four Wheel Drive (4WD) Switch Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P083A: {
    title: 'Transmission Fluid Pressure Sensor/SwitchGCircuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchGCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P083B: {
    title: 'Transmission Fluid Pressure Sensor/SwitchGCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchGCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P083C: {
    title: 'Transmission Fluid Pressure Sensor/SwitchGCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchGCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P083D: {
    title: 'Transmission Fluid Pressure Sensor/SwitchGCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchGCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P083E: {
    title: 'Transmission Fluid Pressure Sensor/SwitchGCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchGCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P083F: {
    title: 'Clutch Pedal SwitchA / BCorrelation',
    explanation: 'Generic OBD-II definition: Clutch Pedal SwitchA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0840: {
    title: 'Transmission Fluid Pressure Sensor/SwitchACircuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0841: {
    title: 'Transmission Fluid Pressure Sensor/SwitchACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0842: {
    title: 'Transmission Fluid Pressure Sensor/SwitchACircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0843: {
    title: 'Transmission Fluid Pressure Sensor/SwitchACircuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0844: {
    title: 'Transmission Fluid Pressure Sensor/SwitchACircuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchACircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0845: {
    title: 'Transmission Fluid Pressure Sensor/SwitchBCircuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0846: {
    title: 'Transmission Fluid Pressure Sensor/SwitchBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0847: {
    title: 'Transmission Fluid Pressure Sensor/SwitchBCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0848: {
    title: 'Transmission Fluid Pressure Sensor/SwitchBCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0849: {
    title: 'Transmission Fluid Pressure Sensor/SwitchBCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchBCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P084A: {
    title: 'Transmission Fluid Pressure Sensor/SwitchHCircuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchHCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P084B: {
    title: 'Transmission Fluid Pressure Sensor/SwitchHCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchHCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P084C: {
    title: 'Transmission Fluid Pressure Sensor/SwitchHCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchHCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P084D: {
    title: 'Transmission Fluid Pressure Sensor/SwitchHCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchHCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P084E: {
    title: 'Transmission Fluid Pressure Sensor/SwitchHCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchHCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P085F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0863: {
    title: 'TCM Communication Circuit',
    explanation: 'Generic OBD-II definition: TCM Communication Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0864: {
    title: 'TCM Communication Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: TCM Communication Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0865: {
    title: 'TCM Communication Circuit Low',
    explanation: 'Generic OBD-II definition: TCM Communication Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0866: {
    title: 'TCM Communication Circuit High',
    explanation: 'Generic OBD-II definition: TCM Communication Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P086A: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0870: {
    title: 'Transmission Fluid Pressure Sensor/SwitchCCircuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchCCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0871: {
    title: 'Transmission Fluid Pressure Sensor/SwitchCCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchCCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0872: {
    title: 'Transmission Fluid Pressure Sensor/SwitchCCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchCCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0873: {
    title: 'Transmission Fluid Pressure Sensor/SwitchCCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchCCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0874: {
    title: 'Transmission Fluid Pressure Sensor/SwitchCCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchCCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0875: {
    title: 'Transmission Fluid Pressure Sensor/SwitchDCircuit',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchDCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0876: {
    title: 'Transmission Fluid Pressure Sensor/SwitchDCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchDCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0877: {
    title: 'Transmission Fluid Pressure Sensor/SwitchDCircuit Low',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchDCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0878: {
    title: 'Transmission Fluid Pressure Sensor/SwitchDCircuit High',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchDCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0879: {
    title: 'Transmission Fluid Pressure Sensor/SwitchDCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Transmission Fluid Pressure Sensor/SwitchDCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P087A,: {
    title: 'P087B, P087C, P087D, P087E, P087F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P087B, P087C, P087D, P087E, P087F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0880: {
    title: 'TCM Power Input Signal',
    explanation: 'Generic OBD-II definition: TCM Power Input Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0881: {
    title: 'TCM Power Input Signal Range/Performance',
    explanation: 'Generic OBD-II definition: TCM Power Input Signal Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0882: {
    title: 'TCM Power Input Signal Low',
    explanation: 'Generic OBD-II definition: TCM Power Input Signal Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0883: {
    title: 'TCM Power Input Signal High',
    explanation: 'Generic OBD-II definition: TCM Power Input Signal High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0884: {
    title: 'TCM Power Input Signal Intermittent',
    explanation: 'Generic OBD-II definition: TCM Power Input Signal Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0885: {
    title: 'TCM Power Relay Control Circuit/Open',
    explanation: 'Generic OBD-II definition: TCM Power Relay Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0886: {
    title: 'TCM Power Relay Control Circuit Low',
    explanation: 'Generic OBD-II definition: TCM Power Relay Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0887: {
    title: 'TCM Power Relay Control Circuit High',
    explanation: 'Generic OBD-II definition: TCM Power Relay Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0888: {
    title: 'TCM Power Relay Sense Circuit',
    explanation: 'Generic OBD-II definition: TCM Power Relay Sense Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0889: {
    title: 'TCM Power Relay Sense Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: TCM Power Relay Sense Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P088C: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0890: {
    title: 'TCM Power Relay Sense Circuit Low',
    explanation: 'Generic OBD-II definition: TCM Power Relay Sense Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0891: {
    title: 'TCM Power Relay Sense Circuit High',
    explanation: 'Generic OBD-II definition: TCM Power Relay Sense Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0892: {
    title: 'TCM Power Relay Sense Circuit Intermittent',
    explanation: 'Generic OBD-II definition: TCM Power Relay Sense Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0893: {
    title: 'Multiple Gears Engaged',
    explanation: 'Generic OBD-II definition: Multiple Gears Engaged. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0894: {
    title: 'Transmission Component Slipping',
    explanation: 'Generic OBD-II definition: Transmission Component Slipping. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0895: {
    title: 'Shift Time Too Short',
    explanation: 'Generic OBD-II definition: Shift Time Too Short. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0896: {
    title: 'Shift Time Too Long',
    explanation: 'Generic OBD-II definition: Shift Time Too Long. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P089A: {
    title: 'P08FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P08FF ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0900: {
    title: 'Actuator Circuit/Open',
    explanation: 'Generic OBD-II definition: Actuator Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0901: {
    title: 'Actuator Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Actuator Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0902: {
    title: 'Actuator Circuit Low',
    explanation: 'Generic OBD-II definition: Actuator Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P092E,: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P095A: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0962: {
    title: 'Control SolenoidAControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0963: {
    title: 'Control SolenoidAControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0964: {
    title: 'Control SolenoidBControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidBControl Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0965: {
    title: 'Control SolenoidBControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidBControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0966: {
    title: 'Control SolenoidBControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidBControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0967: {
    title: 'Control SolenoidBControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidBControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0969: {
    title: 'Control SolenoidCControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidCControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P096A: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P097A: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P098A: {
    title: 'ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0993: {
    title: 'Fluid Pressure Sensor/SwitchFCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fluid Pressure Sensor/SwitchFCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0995: {
    title: 'Fluid Pressure Sensor/SwitchFCircuit High',
    explanation: 'Generic OBD-II definition: Fluid Pressure Sensor/SwitchFCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P09A0: {
    title: 'P09FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P09FF ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0A7E: {
    title: 'Battery Pack Over Temperature',
    explanation: 'Generic OBD-II definition: Battery Pack Over Temperature. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0A7F: {
    title: 'Battery Pack Deterioration',
    explanation: 'Generic OBD-II definition: Battery Pack Deterioration. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P0C2F: {
    title: 'Control Module Drive Motor/Generator - Engine Speed Sensor Performance',
    explanation: 'Generic OBD-II definition: Control Module Drive Motor/Generator - Engine Speed Sensor Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2000: {
    title: 'NOx Adsorber Efficiency Below Threshold Bank 1',
    explanation: 'Generic OBD-II definition: NOx Adsorber Efficiency Below Threshold Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2001: {
    title: 'NOx Adsorber Efficiency Below Threshold Bank 2',
    explanation: 'Generic OBD-II definition: NOx Adsorber Efficiency Below Threshold Bank 2 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2002: {
    title: 'Diesel Particulate Filter Efficiency Below Threshold Bank 1',
    explanation: 'Generic OBD-II definition: Diesel Particulate Filter Efficiency Below Threshold Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2003: {
    title: 'Diesel Particulate Filter Efficiency Below Threshold Bank 2',
    explanation: 'Generic OBD-II definition: Diesel Particulate Filter Efficiency Below Threshold Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2004: {
    title: 'Intake Manifold Runner Control Stuck Open Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Stuck Open Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2005: {
    title: 'Intake Manifold Runner Control Stuck Open Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Stuck Open Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2006: {
    title: 'Intake Manifold Runner Control Stuck Closed Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Stuck Closed Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2007: {
    title: 'Intake Manifold Runner Control Stuck Closed Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Stuck Closed Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2008: {
    title: 'Intake Manifold Runner Control Circuit/Open Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Circuit/Open Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2009: {
    title: 'Intake Manifold Runner Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P200A: {
    title: 'Intake Manifold Runner Performance Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P200B: {
    title: 'Intake Manifold Runner Performance Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P200C: {
    title: 'Diesel Particulate Filter Over Temperature Bank 1',
    explanation: 'Generic OBD-II definition: Diesel Particulate Filter Over Temperature Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P200D: {
    title: 'Diesel Particulate Filter Over Temperature Bank 2',
    explanation: 'Generic OBD-II definition: Diesel Particulate Filter Over Temperature Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P200E: {
    title: 'Catalyst System Over Temperature Bank 1',
    explanation: 'Generic OBD-II definition: Catalyst System Over Temperature Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P200F: {
    title: 'Catalyst System Over Temperature Bank 2',
    explanation: 'Generic OBD-II definition: Catalyst System Over Temperature Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2010: {
    title: 'Intake Manifold Runner Control Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2011: {
    title: 'Intake Manifold Runner Control Circuit/Open Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Circuit/Open Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2012: {
    title: 'Intake Manifold Runner Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2013: {
    title: 'Intake Manifold Runner Control Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Control Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2014: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2015: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Range/Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2016: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2017: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2018: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Intermittent Bank 1',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Intermittent Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2019: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P201A: {
    title: 'Injection Valve Circuit Range/Performance Bank 2 Unit 1',
    explanation: 'Generic OBD-II definition: Injection Valve Circuit Range/Performance Bank 2 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P201B,: {
    title: 'P201C, P201D, P201E, P201F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P201C, P201D, P201E, P201F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2020: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2021: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2022: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2023: {
    title: 'Intake Manifold Runner Position Sensor/Switch Circuit Intermittent Bank 2',
    explanation: 'Generic OBD-II definition: Intake Manifold Runner Position Sensor/Switch Circuit Intermittent Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2024: {
    title: 'Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2025: {
    title: 'Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Performance',
    explanation: 'Generic OBD-II definition: Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2026: {
    title: 'Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit Low Voltage',
    explanation: 'Generic OBD-II definition: Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit Low Voltage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2027: {
    title: 'Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit High Voltage',
    explanation: 'Generic OBD-II definition: Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit High Voltage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2028: {
    title: 'Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2029: {
    title: 'Fired Heater Disabled',
    explanation: 'Generic OBD-II definition: Fired Heater Disabled. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P202A: {
    title: 'Tank Heater Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Tank Heater Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P202B: {
    title: 'Tank Heater Control Circuit Low',
    explanation: 'Generic OBD-II definition: Tank Heater Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P202C: {
    title: 'Tank Heater Control Circuit High',
    explanation: 'Generic OBD-II definition: Tank Heater Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P202D: {
    title: 'Leakage',
    explanation: 'Generic OBD-II definition: Leakage. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P202E: {
    title: 'Injection Valve Circuit Range/Performance Bank 1 Unit 1',
    explanation: 'Generic OBD-II definition: Injection Valve Circuit Range/Performance Bank 1 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P202F: {
    title: 'Supply Control Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Supply Control Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2030: {
    title: 'Fired Heater Performance',
    explanation: 'Generic OBD-II definition: Fired Heater Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2031: {
    title: 'Exhaust Gas Temperature Sensor Circuit Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2032: {
    title: 'Exhaust Gas Temperature Sensor Circuit Low Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Low Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2033: {
    title: 'Exhaust Gas Temperature Sensor Circuit High Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit High Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2034: {
    title: 'Exhaust Gas Temperature Sensor Circuit Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2035: {
    title: 'Exhaust Gas Temperature Sensor Circuit Low Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Low Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2036: {
    title: 'Exhaust Gas Temperature Sensor Circuit High Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit High Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2037: {
    title: 'Injection Air Pressure SensorACircuit',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2038: {
    title: 'Injection Air Pressure SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2039: {
    title: 'Injection Air Pressure SensorACircuit Low',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P203A: {
    title: 'Reductant Level Sensor Circuit',
    explanation: 'Generic OBD-II definition: Reductant Level Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P203B: {
    title: 'Reductant Level Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Reductant Level Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P203C: {
    title: 'Reductant Level Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Reductant Level Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P203D: {
    title: 'Reductant Level Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Reductant Level Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P203E: {
    title: 'Reductant Level Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Reductant Level Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P203F: {
    title: 'Reductant Level Too Low',
    explanation: 'Generic OBD-II definition: Reductant Level Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2040: {
    title: 'Injection Air Pressure SensorACircuit High',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2041: {
    title: 'Injection Air Pressure SensorACircuit Intermittent',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorACircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2042: {
    title: 'Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2043: {
    title: 'Temperature Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2044: {
    title: 'Temperature Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2045: {
    title: 'Temperature Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2046: {
    title: 'Temperature Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Temperature Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2047: {
    title: 'Reductant Injection Valve Circuit/Open Bank 1 Unit 1',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit/Open Bank 1 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2048: {
    title: 'Reductant Injection Valve Circuit Low Bank 1 Unit 1',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit Low Bank 1 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2049: {
    title: 'Reductant Injection Valve Circuit High Bank 1 Unit 1',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit High Bank 1 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P204A: {
    title: 'Pressure Sensor Circuit',
    explanation: 'Generic OBD-II definition: Pressure Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P204B: {
    title: 'Pressure Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Pressure Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P204C: {
    title: 'Pressure Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Pressure Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P204D: {
    title: 'Pressure Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Pressure Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P204E: {
    title: 'Pressure Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Pressure Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P204F: {
    title: 'System Performance Bank 1',
    explanation: 'Generic OBD-II definition: System Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2050: {
    title: 'Reductant Injection Valve Circuit/Open Bank 2 Unit 1',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit/Open Bank 2 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2051: {
    title: 'Reductant Injection Valve Circuit Low Bank 2 Unit 1',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit Low Bank 2 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2052: {
    title: 'Reductant Injection Valve Circuit High Bank 2 Unit 1',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit High Bank 2 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2053: {
    title: 'Reductant Injection Valve Circuit/Open Bank 1 Unit 2',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit/Open Bank 1 Unit 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2054: {
    title: 'Reductant Injection Valve Circuit Low Bank 1 Unit 2',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit Low Bank 1 Unit 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2055: {
    title: 'Reductant Injection Valve Circuit High Bank 1 Unit 2',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit High Bank 1 Unit 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2056: {
    title: 'Reductant Injection Valve Circuit/Open Bank 2 Unit 2',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit/Open Bank 2 Unit 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2057: {
    title: 'Reductant Injection Valve Circuit Low Bank 2 Unit 2',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit Low Bank 2 Unit 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2058: {
    title: 'Reductant Injection Valve Circuit High Bank 2 Unit 2',
    explanation: 'Generic OBD-II definition: Reductant Injection Valve Circuit High Bank 2 Unit 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2059: {
    title: 'Injection Air Pump Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Injection Air Pump Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P205A: {
    title: 'Tank Temperature Sensor Circuit',
    explanation: 'Generic OBD-II definition: Tank Temperature Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P205B: {
    title: 'Tank Temperature Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Tank Temperature Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P205C: {
    title: 'Tank Temperature Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Tank Temperature Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P205D: {
    title: 'Tank Temperature Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Tank Temperature Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P205E: {
    title: 'Tank Temperature Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Tank Temperature Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P205F: {
    title: 'System Performance Bank 2',
    explanation: 'Generic OBD-II definition: System Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2060: {
    title: 'Injection Air Pump Control Circuit Low',
    explanation: 'Generic OBD-II definition: Injection Air Pump Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2061: {
    title: 'Injection Air Pump Control Circuit High',
    explanation: 'Generic OBD-II definition: Injection Air Pump Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2062: {
    title: 'Supply Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Supply Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2063: {
    title: 'Supply Control Circuit Low',
    explanation: 'Generic OBD-II definition: Supply Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2064: {
    title: 'Supply Control Circuit High',
    explanation: 'Generic OBD-II definition: Supply Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2065: {
    title: 'Fuel Level SensorBCircuit',
    explanation: 'Generic OBD-II definition: Fuel Level SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2066: {
    title: 'Fuel Level SensorBCircuit Performance',
    explanation: 'Generic OBD-II definition: Fuel Level SensorBCircuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2067: {
    title: 'Fuel Level SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Fuel Level SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2068: {
    title: 'Fuel Level SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Fuel Level SensorBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2069: {
    title: 'Fuel Level SensorBCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Fuel Level SensorBCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P206E: {
    title: 'Manifold Tuning (IMT) Valve Stuck Open Bank 2',
    explanation: 'Generic OBD-II definition: Manifold Tuning (IMT) Valve Stuck Open Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P206F: {
    title: 'Manifold Tuning (IMT) Valve Stuck Closed Bank 2',
    explanation: 'Generic OBD-II definition: Manifold Tuning (IMT) Valve Stuck Closed Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2070: {
    title: 'Manifold Tuning (IMT) Valve Stuck Open Bank 1',
    explanation: 'Generic OBD-II definition: Manifold Tuning (IMT) Valve Stuck Open Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2071: {
    title: 'Manifold Tuning (IMT) Valve Stuck Closed Bank 1',
    explanation: 'Generic OBD-II definition: Manifold Tuning (IMT) Valve Stuck Closed Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2080: {
    title: 'Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2081: {
    title: 'Exhaust Gas Temperature Sensor Circuit Intermittent Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Intermittent Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2082: {
    title: 'Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2083: {
    title: 'Exhaust Gas Temperature Sensor Circuit Intermittent Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Intermittent Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2084: {
    title: 'Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2085: {
    title: 'Exhaust Gas Temperature Sensor Circuit Intermittent Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Intermittent Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2086: {
    title: 'Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2087: {
    title: 'Exhaust Gas Temperature Sensor Circuit Intermittent Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Exhaust Gas Temperature Sensor Circuit Intermittent Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2088: {
    title: 'A Camshaft Position Actuator Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: A Camshaft Position Actuator Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2089: {
    title: 'A Camshaft Position Actuator Control Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: A Camshaft Position Actuator Control Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2090: {
    title: 'B Camshaft Position Actuator Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: B Camshaft Position Actuator Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2091: {
    title: 'B Camshaft Position Actuator Control Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: B Camshaft Position Actuator Control Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2092: {
    title: 'A Camshaft Position Actuator Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: A Camshaft Position Actuator Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2093: {
    title: 'A Camshaft Position Actuator Control Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: A Camshaft Position Actuator Control Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2094: {
    title: 'B Camshaft Position Actuator Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: B Camshaft Position Actuator Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2095: {
    title: 'B Camshaft Position Actuator Control Circuit High Bank 2',
    explanation: 'Generic OBD-II definition: B Camshaft Position Actuator Control Circuit High Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2096: {
    title: 'Post Catalyst Fuel Trim System Too Lean Bank 1',
    explanation: 'Generic OBD-II definition: Post Catalyst Fuel Trim System Too Lean Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2097: {
    title: 'Post Catalyst Fuel Trim System Too Rich Bank 1',
    explanation: 'Generic OBD-II definition: Post Catalyst Fuel Trim System Too Rich Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2098: {
    title: 'Post Catalyst Fuel Trim System Too Lean Bank 2',
    explanation: 'Generic OBD-II definition: Post Catalyst Fuel Trim System Too Lean Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2099: {
    title: 'Post Catalyst Fuel Trim System Too Rich Bank 2',
    explanation: 'Generic OBD-II definition: Post Catalyst Fuel Trim System Too Rich Bank 2 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P209A: {
    title: 'Injection Air Pressure SensorBCircuit',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P209B: {
    title: 'Injection Air Pressure SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Injection Air Pressure SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P209C: {
    title: 'Reductant Injection Air Pressure SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Reductant Injection Air Pressure SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P209D: {
    title: 'Reductant Injection Air Pressure SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Reductant Injection Air Pressure SensorBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P209E: {
    title: 'Reductant Injection Air Pressure SensorA / BCorrelation',
    explanation: 'Generic OBD-II definition: Reductant Injection Air Pressure SensorA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20A0: {
    title: 'Reductant Purge Control Valve Circuit /Open',
    explanation: 'Generic OBD-II definition: Reductant Purge Control Valve Circuit /Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20A1: {
    title: 'Reductant Purge Control Valve Performance',
    explanation: 'Generic OBD-II definition: Reductant Purge Control Valve Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20A2: {
    title: 'Reductant Purge Control Valve Circuit Low',
    explanation: 'Generic OBD-II definition: Reductant Purge Control Valve Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20A3: {
    title: 'Reductant Purge Control Valve Circuit High',
    explanation: 'Generic OBD-II definition: Reductant Purge Control Valve Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20A4: {
    title: 'Reductant Purge Control Valve Stuck Open',
    explanation: 'Generic OBD-II definition: Reductant Purge Control Valve Stuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20A5: {
    title: 'Reductant Purge Control Valve Stuck Closed',
    explanation: 'Generic OBD-II definition: Reductant Purge Control Valve Stuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20B9: {
    title: 'Reductant HeaterAControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Reductant HeaterAControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20BA: {
    title: 'Reductant HeaterAControl Circuit Performance',
    explanation: 'Generic OBD-II definition: Reductant HeaterAControl Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20BB: {
    title: 'Reductant HeaterAControl Circuit Low',
    explanation: 'Generic OBD-II definition: Reductant HeaterAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20BC: {
    title: 'Reductant HeaterAControl Circuit High',
    explanation: 'Generic OBD-II definition: Reductant HeaterAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20BD: {
    title: 'Reductant HeaterBControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Reductant HeaterBControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20BE: {
    title: 'Reductant HeaterBControl Circuit Performance',
    explanation: 'Generic OBD-II definition: Reductant HeaterBControl Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20BF: {
    title: 'Reductant HeaterBControl Circuit Low',
    explanation: 'Generic OBD-II definition: Reductant HeaterBControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C0: {
    title: 'Reductant HeaterBControl Circuit High',
    explanation: 'Generic OBD-II definition: Reductant HeaterBControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C1: {
    title: 'Reductant HeaterCControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Reductant HeaterCControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C2: {
    title: 'Reductant HeaterCControl Circuit Performance',
    explanation: 'Generic OBD-II definition: Reductant HeaterCControl Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C3: {
    title: 'Reductant HeaterCControl Circuit Low',
    explanation: 'Generic OBD-II definition: Reductant HeaterCControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C4: {
    title: 'Reductant HeaterCControl Circuit High',
    explanation: 'Generic OBD-II definition: Reductant HeaterCControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C5: {
    title: 'Reductant HeaterDControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Reductant HeaterDControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C6: {
    title: 'Reductant HeaterDControl Circuit Performance',
    explanation: 'Generic OBD-II definition: Reductant HeaterDControl Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C7: {
    title: 'Reductant HeaterDControl Circuit Low',
    explanation: 'Generic OBD-II definition: Reductant HeaterDControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20C8: {
    title: 'Reductant HeaterDControl Circuit High',
    explanation: 'Generic OBD-II definition: Reductant HeaterDControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20CB: {
    title: 'Aftertreatment Fuel InjectorAControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorAControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20CC: {
    title: 'Aftertreatment Fuel InjectorAControl Performance',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorAControl Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20CD: {
    title: 'Aftertreatment Fuel InjectorAControl Circuit Low',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20CE: {
    title: 'Aftertreatment Fuel InjectorAControl Circuit High',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20CF: {
    title: 'Aftertreatment Fuel InjectorAStuck Open',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorAStuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D0: {
    title: 'Aftertreatment Fuel InjectorAStuck Closed',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorAStuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D1: {
    title: 'Aftertreatment Fuel InjectorBControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorBControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D2: {
    title: 'Aftertreatment Fuel InjectorBControl Performance',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorBControl Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D3: {
    title: 'Aftertreatment Fuel InjectorBControl Circuit Low',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorBControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D4: {
    title: 'Aftertreatment Fuel InjectorBControl Circuit High',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorBControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D5: {
    title: 'Aftertreatment Fuel InjectorBStuck Open',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorBStuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D6: {
    title: 'Aftertreatment Fuel InjectorBStuck Closed',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel InjectorBStuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D7: {
    title: 'Aftertreatment Fuel Supply Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Supply Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D8: {
    title: 'Aftertreatment Fuel Supply Control Performance',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Supply Control Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20D9: {
    title: 'Aftertreatment Fuel Supply Control Circuit Low',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Supply Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20DA: {
    title: 'Aftertreatment Fuel Supply Control Circuit High',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Supply Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20DB: {
    title: 'Aftertreatment Fuel Supply Control Stuck Open',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Supply Control Stuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20DC: {
    title: 'Aftertreatment Fuel Supply Control Stuck Closed',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Supply Control Stuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20DD: {
    title: 'Aftertreatment Fuel Pressure Sensor Circuit',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Pressure Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20DE: {
    title: 'Aftertreatment Fuel Pressure Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Pressure Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20DF: {
    title: 'Aftertreatment Fuel Pressure Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Pressure Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20E0: {
    title: 'Aftertreatment Fuel Pressure Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Pressure Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20E1: {
    title: 'Aftertreatment Fuel Pressure Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Aftertreatment Fuel Pressure Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20E6: {
    title: 'Injection Air Pressure Too Low',
    explanation: 'Generic OBD-II definition: Injection Air Pressure Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20E7: {
    title: 'Injection Air Pressure Too High',
    explanation: 'Generic OBD-II definition: Injection Air Pressure Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20EC: {
    title: 'SCR NOx Catalyst - Over Temperature Bank 1',
    explanation: 'Generic OBD-II definition: SCR NOx Catalyst - Over Temperature Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20ED: {
    title: 'SCR NOx Pre-Catalyst - Over Temperature Bank 1',
    explanation: 'Generic OBD-II definition: SCR NOx Pre-Catalyst - Over Temperature Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20EE: {
    title: 'SCR NOx Catalyst Efficiency Below Threshold Bank 1',
    explanation: 'Generic OBD-II definition: SCR NOx Catalyst Efficiency Below Threshold Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20EF: {
    title: 'SCR NOx Pre- Catalyst Efficiency Below Threshold Bank 1',
    explanation: 'Generic OBD-II definition: SCR NOx Pre- Catalyst Efficiency Below Threshold Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F0: {
    title: 'SCR NOx Catalyst - Over Temperature Bank 2',
    explanation: 'Generic OBD-II definition: SCR NOx Catalyst - Over Temperature Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F1: {
    title: 'SCR NOx Pre-Catalyst - Over Temperature Bank 2',
    explanation: 'Generic OBD-II definition: SCR NOx Pre-Catalyst - Over Temperature Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F2: {
    title: 'SCR NOx Catalyst Efficiency Below Threshold Bank 2',
    explanation: 'Generic OBD-II definition: SCR NOx Catalyst Efficiency Below Threshold Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F3: {
    title: 'SCR NOx Pre- Catalyst Efficiency Below Threshold Bank 2',
    explanation: 'Generic OBD-II definition: SCR NOx Pre- Catalyst Efficiency Below Threshold Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F6: {
    title: 'Injection Valve Stuck Open Bank 1 Unit 1',
    explanation: 'Generic OBD-II definition: Injection Valve Stuck Open Bank 1 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F7: {
    title: 'Injection Valve Stuck Open Bank 2 Unit 1',
    explanation: 'Generic OBD-II definition: Injection Valve Stuck Open Bank 2 Unit 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P20F8: {
    title: 'P20FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P20FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2100: {
    title: 'ActuatorAControl Motor Circuit/Open',
    explanation: 'Generic OBD-II definition: ActuatorAControl Motor Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2101: {
    title: 'ActuatorAControl Motor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: ActuatorAControl Motor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2102: {
    title: 'ActuatorAControl Motor Circuit Low',
    explanation: 'Generic OBD-II definition: ActuatorAControl Motor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2103: {
    title: 'ActuatorAControl Motor Circuit High',
    explanation: 'Generic OBD-II definition: ActuatorAControl Motor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2104: {
    title: 'Actuator Control System - Forced Idle',
    explanation: 'Generic OBD-II definition: Actuator Control System - Forced Idle. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2105: {
    title: 'Actuator Control System - Forced Engine Shutdown',
    explanation: 'Generic OBD-II definition: Actuator Control System - Forced Engine Shutdown. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2107: {
    title: 'Actuator Control Module Processor',
    explanation: 'Generic OBD-II definition: Actuator Control Module Processor. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2108: {
    title: 'Actuator Control Module Performance',
    explanation: 'Generic OBD-II definition: Actuator Control Module Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P210A: {
    title: 'ActuatorBControl Motor Circuit/Open',
    explanation: 'Generic OBD-II definition: ActuatorBControl Motor Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P210C: {
    title: 'ActuatorBControl Motor Circuit Low',
    explanation: 'Generic OBD-II definition: ActuatorBControl Motor Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P210D: {
    title: 'ActuatorBControl Motor Circuit High',
    explanation: 'Generic OBD-II definition: ActuatorBControl Motor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P210E: {
    title: 'Position Sensor/SwitchC / FVoltage Correlation',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchC / FVoltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P210F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2110: {
    title: 'Actuator Control System - Forced Limited RPM',
    explanation: 'Generic OBD-II definition: Actuator Control System - Forced Limited RPM . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2111: {
    title: 'Actuator Control System - Stuck Open',
    explanation: 'Generic OBD-II definition: Actuator Control System - Stuck Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2112: {
    title: 'Actuator Control System - Stuck Closed',
    explanation: 'Generic OBD-II definition: Actuator Control System - Stuck Closed. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2113: {
    title: 'Position SensorBMinimum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorBMinimum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2114: {
    title: 'Position SensorCMinimum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorCMinimum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2115: {
    title: 'Position SensorDMinimum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorDMinimum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2116: {
    title: 'Position SensorEMinimum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorEMinimum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2118: {
    title: 'Actuator Control Motor Current Range/Performance',
    explanation: 'Generic OBD-II definition: Actuator Control Motor Current Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P211A,: {
    title: 'P211B, P211C, P211D, P211E, P211F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P211B, P211C, P211D, P211E, P211F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2120: {
    title: 'Position Sensor/SwitchDCircuit',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchDCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2126: {
    title: 'Position Sensor/SwitchECircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchECircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P212A: {
    title: 'Position Sensor/SwitchGCircuit',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchGCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P212D: {
    title: 'Position Sensor/SwitchGCircuit High',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchGCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2130: {
    title: 'Position Sensor/SwitchFCircuit',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchFCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2132: {
    title: 'Position Sensor/SwitchFCircuit Low',
    explanation: 'Generic OBD-II definition: Position Sensor/SwitchFCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2135: {
    title: 'Throttle/Pedal Pos Sensor/Switch A / B Voltage Correlation',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Pos Sensor/Switch A / B Voltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2136: {
    title: 'Throttle/Pedal Pos Sensor/Switch A / C Voltage Correlation',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Pos Sensor/Switch A / C Voltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2137: {
    title: 'Throttle/Pedal Pos Sensor/Switch B / C Voltage Correlation',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Pos Sensor/Switch B / C Voltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2138: {
    title: 'Throttle/Pedal Pos Sensor/Switch D / E Voltage Correlation',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Pos Sensor/Switch D / E Voltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2139: {
    title: 'Throttle/Pedal Pos Sensor/Switch D / F Voltage Correlation',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Pos Sensor/Switch D / F Voltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P213A: {
    title: 'Gas Recirculation Throttle Control CircuitB/Open',
    explanation: 'Generic OBD-II definition: Gas Recirculation Throttle Control CircuitB/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P213B: {
    title: 'Gas Recirculation Throttle Control CircuitBRange/Performance',
    explanation: 'Generic OBD-II definition: Gas Recirculation Throttle Control CircuitBRange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2140: {
    title: 'Throttle/Pedal Pos Sensor/Switch E / F Voltage Correlation',
    explanation: 'Generic OBD-II definition: Throttle/Pedal Pos Sensor/Switch E / F Voltage Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2141: {
    title: 'Gas Recirculation Throttle Control CircuitALow',
    explanation: 'Generic OBD-II definition: Gas Recirculation Throttle Control CircuitALow. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2142: {
    title: 'Gas Recirculation Throttle Control CircuitAHigh',
    explanation: 'Generic OBD-II definition: Gas Recirculation Throttle Control CircuitAHigh. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2143: {
    title: 'Gas Recirculation Vent Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Gas Recirculation Vent Control Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2144: {
    title: 'Gas Recirculation Vent Control Circuit Low',
    explanation: 'Generic OBD-II definition: Gas Recirculation Vent Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2145: {
    title: 'Gas Recirculation Vent Control Circuit High',
    explanation: 'Generic OBD-II definition: Gas Recirculation Vent Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2147: {
    title: 'Injector GroupASupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Injector GroupASupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2149: {
    title: 'Injector GroupBSupply Voltage Circuit/Open',
    explanation: 'Generic OBD-II definition: Injector GroupBSupply Voltage Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P214A,: {
    title: 'P214B, P214C, P214D, P214E, P214F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P214B, P214C, P214D, P214E, P214F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2150: {
    title: 'Injector GroupBSupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Injector GroupBSupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2151: {
    title: 'Injector GroupBSupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Injector GroupBSupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2153: {
    title: 'Injector GroupCSupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Injector GroupCSupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2154: {
    title: 'Injector GroupCSupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Injector GroupCSupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2159: {
    title: 'Speed SensorBRange/Performance',
    explanation: 'Generic OBD-II definition: Speed SensorBRange/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P215B: {
    title: 'Speed - Output Shaft Speed Correlation',
    explanation: 'Generic OBD-II definition: Speed - Output Shaft Speed Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P215D,: {
    title: 'P215E, P215F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P215E, P215F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2160: {
    title: 'Speed SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Speed SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2163: {
    title: 'Position SensorAMaximum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorAMaximum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2164: {
    title: 'Position SensorBMaximum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorBMaximum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2165: {
    title: 'Position SensorCMaximum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorCMaximum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2167: {
    title: 'Position SensorEMaximum Stop Performance',
    explanation: 'Generic OBD-II definition: Position SensorEMaximum Stop Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P216C: {
    title: 'Injector GroupESupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Injector GroupESupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P216E: {
    title: 'Injector GroupFSupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Injector GroupFSupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P216F: {
    title: 'Injector GroupFSupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Injector GroupFSupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2172: {
    title: 'Actuator Control System - Sudden High Air Flow Detected',
    explanation: 'Generic OBD-II definition: Actuator Control System - Sudden High Air Flow Detected . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2173: {
    title: 'Actuator Control System - High Air Flow Detected',
    explanation: 'Generic OBD-II definition: Actuator Control System - High Air Flow Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2174: {
    title: 'Actuator Control System - Sudden Low Air Flow Detected',
    explanation: 'Generic OBD-II definition: Actuator Control System - Sudden Low Air Flow Detected . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2175: {
    title: 'Actuator Control System - Low Air Flow Detected',
    explanation: 'Generic OBD-II definition: Actuator Control System - Low Air Flow Detected. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2177: {
    title: 'System Too Lean Off Idle Bank 1',
    explanation: 'Generic OBD-II definition: System Too Lean Off Idle Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2178: {
    title: 'System Too Rich Off Idle Bank 1',
    explanation: 'Generic OBD-II definition: System Too Rich Off Idle Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2179: {
    title: 'System Too Lean Off Idle Bank 2',
    explanation: 'Generic OBD-II definition: System Too Lean Off Idle Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P217B: {
    title: 'Injector GroupGSupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Injector GroupGSupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P217C: {
    title: 'Injector GroupGSupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Injector GroupGSupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P217D: {
    title: 'Injector GroupHSupply Voltage Circuit/Open',
    explanation: 'Generic OBD-II definition: Injector GroupHSupply Voltage Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P217E: {
    title: 'Injector GroupHSupply Voltage Circuit Low',
    explanation: 'Generic OBD-II definition: Injector GroupHSupply Voltage Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P217F: {
    title: 'Injector GroupHSupply Voltage Circuit High',
    explanation: 'Generic OBD-II definition: Injector GroupHSupply Voltage Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2180: {
    title: 'System Too Rich Off Idle Bank 2',
    explanation: 'Generic OBD-II definition: System Too Rich Off Idle Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2181: {
    title: 'Cooling System Performance',
    explanation: 'Generic OBD-II definition: Cooling System Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2182: {
    title: 'Engine Coolant Temperature Sensor 2 Circuit',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor 2 Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2183: {
    title: 'Engine Coolant Temperature Sensor 2 Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor 2 Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2184: {
    title: 'Engine Coolant Temperature Sensor 2 Circuit Low',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor 2 Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2185: {
    title: 'Engine Coolant Temperature Sensor 2 Circuit High',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor 2 Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2186: {
    title: 'Engine Coolant Temperature Sensor 2 Circuit Interm/Erratic',
    explanation: 'Generic OBD-II definition: Engine Coolant Temperature Sensor 2 Circuit Interm/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2187: {
    title: 'System Too Lean at Idle Bank 1',
    explanation: 'Generic OBD-II definition: System Too Lean at Idle Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2188: {
    title: 'System Too Rich at Idle Bank 1',
    explanation: 'Generic OBD-II definition: System Too Rich at Idle Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2189: {
    title: 'System Too Lean at Idle Bank 2',
    explanation: 'Generic OBD-II definition: System Too Lean at Idle Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P218A,: {
    title: 'P218B, P218C, P218D, P218E, P218F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P218B, P218C, P218D, P218E, P218F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2190: {
    title: 'System Too Rich at Idle Bank 2',
    explanation: 'Generic OBD-II definition: System Too Rich at Idle Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2191: {
    title: 'System Too Lean at Higher Load Bank 1',
    explanation: 'Generic OBD-II definition: System Too Lean at Higher Load Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2192: {
    title: 'System Too Rich at Higher Load Bank 1',
    explanation: 'Generic OBD-II definition: System Too Rich at Higher Load Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2193: {
    title: 'System Too Lean at Higher Load Bank 2',
    explanation: 'Generic OBD-II definition: System Too Lean at Higher Load Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2194: {
    title: 'System Too Rich at Higher Load Bank 2',
    explanation: 'Generic OBD-II definition: System Too Rich at Higher Load Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2195: {
    title: 'O2 Sensor Signal Stuck Lean Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: O2 Sensor Signal Stuck Lean Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2196: {
    title: 'O2 Sensor Signal Stuck Rich Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: O2 Sensor Signal Stuck Rich Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2197: {
    title: 'O2 Sensor Signal Stuck Lean Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: O2 Sensor Signal Stuck Lean Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2198: {
    title: 'O2 Sensor Signal Stuck Rich Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: O2 Sensor Signal Stuck Rich Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2199: {
    title: 'Air Temperature Sensor 1/2 Correlation',
    explanation: 'Generic OBD-II definition: Air Temperature Sensor 1/2 Correlation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P219A: {
    title: 'Bank 1 Air/Fuel Ratio Imbalance',
    explanation: 'Generic OBD-II definition: Bank 1 Air/Fuel Ratio Imbalance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P219B: {
    title: 'Bank 2 Air/Fuel Ratio Imbalance',
    explanation: 'Generic OBD-II definition: Bank 2 Air/Fuel Ratio Imbalance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P219C: {
    title: 'Cylinder #1 Imbalance Error',
    explanation: 'Generic OBD-II definition: Cylinder #1 Imbalance Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P219D: {
    title: 'Cylinder #2 Imbalance Error',
    explanation: 'Generic OBD-II definition: Cylinder #2 Imbalance Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P219E: {
    title: 'Cylinder #3 Imbalance Error',
    explanation: 'Generic OBD-II definition: Cylinder #3 Imbalance Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P219F: {
    title: 'Cylinder #4 Imbalance Error',
    explanation: 'Generic OBD-II definition: Cylinder #4 Imbalance Error. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P21AA: {
    title: 'P21FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P21FF ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2200: {
    title: 'Sensor Circuit Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Circuit Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2201: {
    title: 'Sensor Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Circuit Range/Performance Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2202: {
    title: 'Sensor Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Circuit Low Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2203: {
    title: 'Sensor Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Circuit High Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2204: {
    title: 'Sensor Circuit Intermittent Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Circuit Intermittent Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2205: {
    title: 'Sensor Heater Control Circuit/Open Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Heater Control Circuit/Open Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2206: {
    title: 'Sensor Heater Control Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Heater Control Circuit Low Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2209: {
    title: 'Sensor Heater Sense Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Heater Sense Circuit Range/Performance Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P220A,: {
    title: 'P220B, P220C, P220D, P220E, P220F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P220B, P220C, P220D, P220E, P220F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2211: {
    title: 'Sensor Heater Sense Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Heater Sense Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2212: {
    title: 'Sensor Heater Sense Circuit Intermittent Bank 1',
    explanation: 'Generic OBD-II definition: Sensor Heater Sense Circuit Intermittent Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2213: {
    title: 'Sensor Circuit Bank 2',
    explanation: 'Generic OBD-II definition: Sensor Circuit Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2214: {
    title: 'Sensor Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Sensor Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2219: {
    title: 'Sensor Heater Control Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Sensor Heater Control Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P221A,: {
    title: 'P221B, P221C, P221D, P221E, P221F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P221B, P221C, P221D, P221E, P221F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2222: {
    title: 'Sensor Heater Sense Circuit Range/Performance Bank 2',
    explanation: 'Generic OBD-II definition: Sensor Heater Sense Circuit Range/Performance Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2225: {
    title: 'Sensor Heater Sense Circuit Intermittent Bank 2',
    explanation: 'Generic OBD-II definition: Sensor Heater Sense Circuit Intermittent Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2226: {
    title: 'Pressure SensorACircuit',
    explanation: 'Generic OBD-II definition: Pressure SensorACircuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2227: {
    title: 'Pressure SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Pressure SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P222A: {
    title: 'Pressure SensorBCircuit',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P222E: {
    title: 'Pressure SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Pressure SensorBCircuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P222F: {
    title: 'Pressure SensorA / BCorrelation',
    explanation: 'Generic OBD-II definition: Pressure SensorA / BCorrelation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2230: {
    title: 'Pressure SensorACircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Pressure SensorACircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2231: {
    title: 'Sensor Signal Circuit Shorted to Heater Circuit Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Signal Circuit Shorted to Heater Circuit Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2234: {
    title: 'Sensor Signal Circuit Shorted to Heater Circuit Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Signal Circuit Shorted to Heater Circuit Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2235: {
    title: 'Sensor Signal Circuit Shorted to Heater Circuit Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Sensor Signal Circuit Shorted to Heater Circuit Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2237: {
    title: 'Sensor Positive Current Control Circuit/Open Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Positive Current Control Circuit/Open Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2241: {
    title: 'Sensor Positive Current Control Circuit Low Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Positive Current Control Circuit Low Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2242: {
    title: 'Sensor Positive Current Control Circuit High Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Positive Current Control Circuit High Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2243: {
    title: 'Sensor Reference Voltage Circuit/Open Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Circuit/Open Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2244: {
    title: 'Sensor Reference Voltage Performance Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Performance Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2245: {
    title: 'Sensor Reference Voltage Circuit Low Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Circuit Low Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2246: {
    title: 'Sensor Reference Voltage Circuit High Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Circuit High Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2247: {
    title: 'Sensor Reference Voltage Circuit/Open Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Circuit/Open Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2248: {
    title: 'Sensor Reference Voltage Performance Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Performance Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2249: {
    title: 'Sensor Reference Voltage Circuit Low Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Circuit Low Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P224A,: {
    title: 'P224B, P224C, P224D, P224E, P224F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P224B, P224C, P224D, P224E, P224F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2250: {
    title: 'Sensor Reference Voltage Circuit High Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Reference Voltage Circuit High Bank 2 Sensor 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2251: {
    title: 'Sensor Negative Current Control Circuit/Open Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Negative Current Control Circuit/Open Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2252: {
    title: 'Sensor Negative Current Control Circuit Low Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Negative Current Control Circuit Low Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2253: {
    title: 'Sensor Negative Current Control Circuit High Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Negative Current Control Circuit High Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2254: {
    title: 'Sensor Negative Current Control Circuit/Open Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Negative Current Control Circuit/Open Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2255: {
    title: 'Sensor Negative Current Control Circuit Low Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Negative Current Control Circuit Low Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2256: {
    title: 'Sensor Negative Current Control Circuit High Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Negative Current Control Circuit High Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2257: {
    title: 'Air Injection System ControlACircuit Low',
    explanation: 'Generic OBD-II definition: Air Injection System ControlACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2258: {
    title: 'Air Injection System ControlACircuit High',
    explanation: 'Generic OBD-II definition: Air Injection System ControlACircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2259: {
    title: 'Air Injection System ControlBCircuit Low',
    explanation: 'Generic OBD-II definition: Air Injection System ControlBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P225A,: {
    title: 'P225B, P225C, P225D, P225E, P225F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P225B, P225C, P225D, P225E, P225F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2260: {
    title: 'Air Injection System ControlBCircuit High',
    explanation: 'Generic OBD-II definition: Air Injection System ControlBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2263: {
    title: 'Boost System Performance',
    explanation: 'Generic OBD-II definition: Boost System Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2265: {
    title: 'in Fuel Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: in Fuel Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2266: {
    title: 'in Fuel Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: in Fuel Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2267: {
    title: 'in Fuel Sensor Circuit High',
    explanation: 'Generic OBD-II definition: in Fuel Sensor Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2268: {
    title: 'in Fuel Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: in Fuel Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P226A: {
    title: 'in Fuel Lamp Control Circuit',
    explanation: 'Generic OBD-II definition: in Fuel Lamp Control Circuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2271: {
    title: 'Sensor Signal Biased/Stuck Rich Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Sensor Signal Biased/Stuck Rich Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2273: {
    title: 'Sensor Signal Biased/Stuck Rich Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Sensor Signal Biased/Stuck Rich Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2274: {
    title: 'Sensor Signal Biased/Stuck Lean Bank 1 Sensor 3',
    explanation: 'Generic OBD-II definition: Sensor Signal Biased/Stuck Lean Bank 1 Sensor 3. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P227A,: {
    title: 'P227B, P227C, P227D, P227E, P227F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P227B, P227C, P227D, P227E, P227F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2280: {
    title: 'Flow Restriction/Air Leak Between Air Filter and MAF',
    explanation: 'Generic OBD-II definition: Flow Restriction/Air Leak Between Air Filter and MAF. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2283: {
    title: 'Control Pressure Sensor Circuit',
    explanation: 'Generic OBD-II definition: Control Pressure Sensor Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2284: {
    title: 'Control Pressure Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control Pressure Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2287: {
    title: 'Control Pressure Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Control Pressure Sensor Circuit Intermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2288: {
    title: 'Control Pressure Too High',
    explanation: 'Generic OBD-II definition: Control Pressure Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2289: {
    title: 'Control Pressure Too High - Engine Off',
    explanation: 'Generic OBD-II definition: Control Pressure Too High - Engine Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P228C: {
    title: 'Pressure Regulator 1 Exceeded Control Limits - Pressure Too Low',
    explanation: 'Generic OBD-II definition: Pressure Regulator 1 Exceeded Control Limits - Pressure Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P228F: {
    title: 'Pressure Regulator 1 Exceeded Learning Limits - Too High',
    explanation: 'Generic OBD-II definition: Pressure Regulator 1 Exceeded Learning Limits - Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2290: {
    title: 'Control Pressure Too Low',
    explanation: 'Generic OBD-II definition: Control Pressure Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2291: {
    title: 'Control Pressure Too Low - Engine Cranking',
    explanation: 'Generic OBD-II definition: Control Pressure Too Low - Engine Cranking. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P229A: {
    title: 'Pressure Regulator 2 Exceeded Control Limits - Pressure Too Low',
    explanation: 'Generic OBD-II definition: Pressure Regulator 2 Exceeded Control Limits - Pressure Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P229C: {
    title: 'Pressure Regulator 2 Exceeded Learning Limits - Too Low',
    explanation: 'Generic OBD-II definition: Pressure Regulator 2 Exceeded Learning Limits - Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P229E: {
    title: 'P22FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P22FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2300: {
    title: 'Ignition CoilAPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilAPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2301: {
    title: 'Ignition CoilAPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilAPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2302: {
    title: 'Ignition CoilASecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilASecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2303: {
    title: 'Ignition CoilBPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilBPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2304: {
    title: 'Ignition CoilBPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilBPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2305: {
    title: 'Ignition CoilBSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilBSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2306: {
    title: 'Ignition CoilCPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilCPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2307: {
    title: 'Ignition CoilCPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilCPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2308: {
    title: 'Ignition CoilCSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilCSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2309: {
    title: 'Ignition CoilDPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilDPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2310: {
    title: 'Ignition CoilDPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilDPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2311: {
    title: 'Ignition CoilDSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilDSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2312: {
    title: 'Ignition CoilEPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilEPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2313: {
    title: 'Ignition CoilEPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilEPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2314: {
    title: 'Ignition CoilESecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilESecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2315: {
    title: 'Ignition CoilFPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilFPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2316: {
    title: 'Ignition CoilFPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilFPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2317: {
    title: 'Ignition CoilFSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilFSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2318: {
    title: 'Ignition CoilGPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilGPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2319: {
    title: 'Ignition CoilGPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilGPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P231A,: {
    title: 'P231B, P231C, P231D, P231E, P231F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P231B, P231C, P231D, P231E, P231F ISO/SAE Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2320: {
    title: 'Ignition CoilGSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilGSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2321: {
    title: 'Ignition CoilHPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilHPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2322: {
    title: 'Ignition CoilHPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilHPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2323: {
    title: 'Ignition CoilHSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilHSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2324: {
    title: 'Ignition CoilIPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilIPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2325: {
    title: 'Ignition CoilIPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilIPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2326: {
    title: 'Ignition CoilISecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilISecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2327: {
    title: 'Ignition CoilJPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilJPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2328: {
    title: 'Ignition CoilJPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilJPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2329: {
    title: 'Ignition CoilJSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilJSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2330: {
    title: 'Ignition CoilKPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilKPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2331: {
    title: 'Ignition CoilKPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilKPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2332: {
    title: 'Ignition CoilKSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilKSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2333: {
    title: 'Ignition CoilLPrimary Control Circuit Low',
    explanation: 'Generic OBD-II definition: Ignition CoilLPrimary Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2334: {
    title: 'Ignition CoilLPrimary Control Circuit High',
    explanation: 'Generic OBD-II definition: Ignition CoilLPrimary Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2335: {
    title: 'Ignition CoilLSecondary Circuit',
    explanation: 'Generic OBD-II definition: Ignition CoilLSecondary Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2336: {
    title: '1 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 1 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2337: {
    title: '2 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 2 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2338: {
    title: '3 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 3 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2339: {
    title: '4 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 4 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P233A,: {
    title: 'P233B, P233C, P233D, P233E, P233F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P233B, P233C, P233D, P233E, P233F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2340: {
    title: '5 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 5 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2341: {
    title: '6 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 6 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2342: {
    title: '7 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 7 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2343: {
    title: '8 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 8 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2344: {
    title: '9 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 9 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2345: {
    title: '10 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 10 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2346: {
    title: '11 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 11 Above Knock Threshold. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2347: {
    title: '12 Above Knock Threshold',
    explanation: 'Generic OBD-II definition: 12 Above Knock Threshold . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2348: {
    title: 'P23FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P23FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P240D,: {
    title: 'P240E, P240F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P240E, P240F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P241A,: {
    title: 'P241B, P241C, P241D, P241E, P241F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P241B, P241C, P241D, P241E, P241F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2425: {
    title: 'Gas Recirculation Cooling Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooling Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2426: {
    title: 'Gas Recirculation Cooling Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooling Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2427: {
    title: 'Gas Recirculation Cooling Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooling Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P242F: {
    title: 'Diesel Particulate Filter Restriction - Ash Accumulation',
    explanation: 'Generic OBD-II definition: Diesel Particulate Filter Restriction - Ash Accumulation . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2430: {
    title: 'Air Injection System Air Flow/Pressure Sensor Circuit Bank 1',
    explanation: 'Generic OBD-II definition: Air Injection System Air Flow/Pressure Sensor Circuit Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2431: {
    title: 'Air Injection System Air Flow/Pressure Sensor Circuit Range/Performance Bank 1',
    explanation: 'Generic OBD-II definition: Air Injection System Air Flow/Pressure Sensor Circuit Range/Performance Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2432: {
    title: 'Air Injection System Air Flow/Pressure Sensor Circuit Low Bank 1',
    explanation: 'Generic OBD-II definition: Air Injection System Air Flow/Pressure Sensor Circuit Low Bank 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2433: {
    title: 'Air Injection System Air Flow/Pressure Sensor Circuit High Bank 1',
    explanation: 'Generic OBD-II definition: Air Injection System Air Flow/Pressure Sensor Circuit High Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2435: {
    title: 'Air Injection System Air Flow/Pressure Sensor Circuit Bank 2',
    explanation: 'Generic OBD-II definition: Air Injection System Air Flow/Pressure Sensor Circuit Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2437: {
    title: 'Air Injection System Air Flow/Pressure Sensor Circuit Low Bank 2',
    explanation: 'Generic OBD-II definition: Air Injection System Air Flow/Pressure Sensor Circuit Low Bank 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2452: {
    title: 'Particulate Filter Pressure SensorACircuit',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorACircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2453: {
    title: 'Particulate Filter Pressure SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2454: {
    title: 'Particulate Filter Pressure SensorACircuit Low',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2455: {
    title: 'Particulate Filter Pressure SensorACircuit High',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorACircuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2456: {
    title: 'Particulate Filter Pressure SensorACircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorACircuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2457: {
    title: 'Gas Recirculation Cooling System Performance',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooling System Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2458: {
    title: 'Particulate Filter Regeneration Duration',
    explanation: 'Generic OBD-II definition: Particulate Filter Regeneration Duration . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2459: {
    title: 'Particulate Filter Regeneration Frequency',
    explanation: 'Generic OBD-II definition: Particulate Filter Regeneration Frequency . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P245A: {
    title: 'Gas Recirculation Cooler Bypass Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooler Bypass Control Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P245B: {
    title: 'Gas Recirculation Cooler Bypass Control Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooler Bypass Control Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P245C: {
    title: 'Gas Recirculation Cooler Bypass Control Circuit Low',
    explanation: 'Generic OBD-II definition: Gas Recirculation Cooler Bypass Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P245E: {
    title: 'Particulate Filter Pressure SensorBCircuit',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorBCircuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P245F: {
    title: 'Particulate Filter Pressure SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2461: {
    title: 'Particulate Filter Pressure SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorBCircuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2462: {
    title: 'Particulate Filter Pressure SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Particulate Filter Pressure SensorBCircuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2463: {
    title: 'Particulate Filter Restriction - Soot Accumulation',
    explanation: 'Generic OBD-II definition: Particulate Filter Restriction - Soot Accumulation. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2478: {
    title: 'Gas Temperature Out of Range Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2479: {
    title: 'Gas Temperature Out of Range Bank 1 Sensor 2',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 1 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P247A: {
    title: 'Gas Temperature Out of Range Bank 1 Sensor 3',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 1 Sensor 3. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P247B: {
    title: 'Gas Temperature Out of Range Bank 1 Sensor 4',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 1 Sensor 4. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P247C: {
    title: 'Gas Temperature Out of Range Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 2 Sensor 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P247D: {
    title: 'Gas Temperature Out of Range Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 2 Sensor 2. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P247E: {
    title: 'Gas Temperature Out of Range Bank 2 Sensor 3',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 2 Sensor 3. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P247F: {
    title: 'Gas Temperature Out of Range Bank 2 Sensor 4',
    explanation: 'Generic OBD-II definition: Gas Temperature Out of Range Bank 2 Sensor 4. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P248A: {
    title: 'P24FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P24FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2500: {
    title: 'Lamp/L-Terminal Circuit Low',
    explanation: 'Generic OBD-II definition: Lamp/L-Terminal Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2501: {
    title: 'Lamp/L-Terminal Circuit High',
    explanation: 'Generic OBD-II definition: Lamp/L-Terminal Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2509: {
    title: 'Power Input Signal Intermittent',
    explanation: 'Generic OBD-II definition: Power Input Signal Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P250A: {
    title: 'Oil Level Sensor Circuit',
    explanation: 'Generic OBD-II definition: Oil Level Sensor Circuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P250B: {
    title: 'Oil Level Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Oil Level Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P250C: {
    title: 'Oil Level Sensor Circuit Low',
    explanation: 'Generic OBD-II definition: Oil Level Sensor Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P250E: {
    title: 'Oil Level Sensor Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Oil Level Sensor Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P250F: {
    title: 'Oil Level Too Low',
    explanation: 'Generic OBD-II definition: Oil Level Too Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2515: {
    title: 'Refrigerant Pressure SensorBCircuit',
    explanation: 'Generic OBD-II definition: Refrigerant Pressure SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P252E: {
    title: 'Oil Quality Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Oil Quality Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P252F: {
    title: 'Oil Level Too High',
    explanation: 'Generic OBD-II definition: Oil Level Too High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P253A: {
    title: 'Sense Circuit/Open',
    explanation: 'Generic OBD-II definition: Sense Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P253C: {
    title: 'Sense Circuit Low',
    explanation: 'Generic OBD-II definition: Sense Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P253D: {
    title: 'Sense Circuit High',
    explanation: 'Generic OBD-II definition: Sense Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P253E: {
    title: 'Sense Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Sense Circuit Intermittent/Erratic . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P253F: {
    title: 'Oil Deteriorated',
    explanation: 'Generic OBD-II definition: Oil Deteriorated . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2540: {
    title: 'Pressure Fuel System Sensor Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Pressure Fuel System Sensor Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2542: {
    title: 'Pressure Fuel System Sensor Circuit High',
    explanation: 'Generic OBD-II definition: Pressure Fuel System Sensor Circuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2543: {
    title: 'Pressure Fuel System Sensor Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Pressure Fuel System Sensor Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P254A: {
    title: 'Speed Selector Sensor/Switch 1 Circuit/Open',
    explanation: 'Generic OBD-II definition: Speed Selector Sensor/Switch 1 Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P254B: {
    title: 'Speed Selector Sensor/Switch 1 Range/Performance',
    explanation: 'Generic OBD-II definition: Speed Selector Sensor/Switch 1 Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P254C: {
    title: 'Speed Selector Sensor/Switch 1 Circuit Low',
    explanation: 'Generic OBD-II definition: Speed Selector Sensor/Switch 1 Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2556: {
    title: 'Coolant Level Sensor/Switch Circuit',
    explanation: 'Generic OBD-II definition: Coolant Level Sensor/Switch Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2558: {
    title: 'Coolant Level Sensor/Switch Circuit Low',
    explanation: 'Generic OBD-II definition: Coolant Level Sensor/Switch Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P255D: {
    title: 'Speed Selector Sensor/Switch 2 Circuit High',
    explanation: 'Generic OBD-II definition: Speed Selector Sensor/Switch 2 Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P255E: {
    title: 'Speed Selector Sensor/Switch 2 Circuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Speed Selector Sensor/Switch 2 Circuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2560: {
    title: 'Coolant Level Low',
    explanation: 'Generic OBD-II definition: Coolant Level Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2563: {
    title: 'Boost Control Position SensorACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Boost Control Position SensorACircuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2564: {
    title: 'Boost Control Position SensorACircuit Low',
    explanation: 'Generic OBD-II definition: Boost Control Position SensorACircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2566: {
    title: 'Boost Control Position SensorACircuit Intermittent',
    explanation: 'Generic OBD-II definition: Boost Control Position SensorACircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2586: {
    title: 'Boost Control Position SensorBCircuit',
    explanation: 'Generic OBD-II definition: Boost Control Position SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2588: {
    title: 'Boost Control Position SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Boost Control Position SensorBCircuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2589: {
    title: 'Turbocharger Boost Control Position SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Turbocharger Boost Control Position SensorBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2590: {
    title: 'Boost Control Position SensorBCircuit Intermittent/Erratic',
    explanation: 'Generic OBD-II definition: Boost Control Position SensorBCircuit Intermittent/Erratic. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2600: {
    title: 'PumpAControl Circuit/Open',
    explanation: 'Generic OBD-II definition: PumpAControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2601: {
    title: 'PumpAControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: PumpAControl Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2602: {
    title: 'PumpAControl Circuit Low',
    explanation: 'Generic OBD-II definition: PumpAControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2603: {
    title: 'PumpAControl Circuit High',
    explanation: 'Generic OBD-II definition: PumpAControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2604: {
    title: 'Air HeaterACircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Air HeaterACircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2605: {
    title: 'Air HeaterBCircuit/Open',
    explanation: 'Generic OBD-II definition: Air HeaterBCircuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2606: {
    title: 'Air HeaterBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Air HeaterBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2607: {
    title: 'Air HeaterBCircuit Low',
    explanation: 'Generic OBD-II definition: Air HeaterBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2609: {
    title: 'Air Heater System Performance',
    explanation: 'Generic OBD-II definition: Air Heater System Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P260A: {
    title: 'Control Circuit /Open',
    explanation: 'Generic OBD-II definition: Control Circuit /Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P260B: {
    title: 'Control Circuit Low',
    explanation: 'Generic OBD-II definition: Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P260D: {
    title: 'Engaged Lamp Control Circuit',
    explanation: 'Generic OBD-II definition: Engaged Lamp Control Circuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2610: {
    title: 'Internal Engine Off Timer Performance',
    explanation: 'Generic OBD-II definition: Internal Engine Off Timer Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P261A: {
    title: 'PumpBControl Circuit/Open',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P261B: {
    title: 'PumpBControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P261C: {
    title: 'PumpBControl Circuit Low',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P261D: {
    title: 'PumpBControl Circuit High',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P261E,: {
    title: 'P261F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P261F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2626: {
    title: 'Sensor Pumping Current Trim Circuit/Open Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Pumping Current Trim Circuit/Open Bank 1 Sensor 1 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2627: {
    title: 'Sensor Pumping Current Trim Circuit Low Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Pumping Current Trim Circuit Low Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2628: {
    title: 'Sensor Pumping Current Trim Circuit High Bank 1 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Pumping Current Trim Circuit High Bank 1 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P262A,: {
    title: 'P262B, P262C, P262D, P262E, P262F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P262B, P262C, P262D, P262E, P262F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2630: {
    title: 'Sensor Pumping Current Trim Circuit Low Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Pumping Current Trim Circuit Low Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2631: {
    title: 'Sensor Pumping Current Trim Circuit High Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Pumping Current Trim Circuit High Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2632: {
    title: 'PumpBControl Circuit /Open',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit /Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2633: {
    title: 'PumpBControl Circuit Low',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2634: {
    title: 'PumpBControl Circuit High',
    explanation: 'Generic OBD-II definition: PumpBControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P264F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P265F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2669: {
    title: 'Supply VoltageBCircuit /Open',
    explanation: 'Generic OBD-II definition: Supply VoltageBCircuit /Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P266F: {
    title: 'Reserved',
    explanation: 'Generic OBD-II definition: Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2671: {
    title: 'Supply VoltageBCircuit High',
    explanation: 'Generic OBD-II definition: Supply VoltageBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2684: {
    title: 'Supply VoltageCCircuit/Open',
    explanation: 'Generic OBD-II definition: Supply VoltageCCircuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2685: {
    title: 'Supply VoltageCCircuit Low',
    explanation: 'Generic OBD-II definition: Supply VoltageCCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2686: {
    title: 'Supply VoltageCCircuit High',
    explanation: 'Generic OBD-II definition: Supply VoltageCCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P26A3: {
    title: 'P26FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P26FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2700: {
    title: 'Friction ElementAApply Time Range/Performance',
    explanation: 'Generic OBD-II definition: Friction ElementAApply Time Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2701: {
    title: 'Friction ElementBApply Time Range/Performance',
    explanation: 'Generic OBD-II definition: Friction ElementBApply Time Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2703: {
    title: 'Friction ElementDApply Time Range/Performance',
    explanation: 'Generic OBD-II definition: Friction ElementDApply Time Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2704: {
    title: 'Friction ElementEApply Time Range/Performance',
    explanation: 'Generic OBD-II definition: Friction ElementEApply Time Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2705: {
    title: 'Friction ElementFApply Time Range/Performance',
    explanation: 'Generic OBD-II definition: Friction ElementFApply Time Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2706: {
    title: 'Solenoid F Malfunction',
    explanation: 'Generic OBD-II definition: Solenoid F Malfunction. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2707: {
    title: 'Solenoid F Performance/Stuck Off',
    explanation: 'Generic OBD-II definition: Solenoid F Performance/Stuck Off. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2708: {
    title: 'Solenoid F Stuck On',
    explanation: 'Generic OBD-II definition: Solenoid F Stuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2709: {
    title: 'Solenoid F Electrical',
    explanation: 'Generic OBD-II definition: Solenoid F Electrical . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P270A,: {
    title: 'P270B, P270C, P270D, P270E, P270F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P270B, P270C, P270D, P270E, P270F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2714: {
    title: 'Control SolenoidDPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidDPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2715: {
    title: 'Control SolenoidDStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidDStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2716: {
    title: 'Control SolenoidDElectrical',
    explanation: 'Generic OBD-II definition: Control SolenoidDElectrical . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2717: {
    title: 'Control SolenoidDIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidDIntermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2718: {
    title: 'Control SolenoidDControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidDControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2719: {
    title: 'Control SolenoidDControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidDControl Circuit Range/Performance . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P271A,: {
    title: 'P271B, P271C, P271D, P271E, P271F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P271B, P271C, P271D, P271E, P271F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2720: {
    title: 'Control SolenoidDControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidDControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2721: {
    title: 'Control SolenoidDControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidDControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2722: {
    title: 'Control SolenoidE',
    explanation: 'Generic OBD-II definition: Control SolenoidE. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2723: {
    title: 'Control SolenoidEPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidEPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2724: {
    title: 'Control SolenoidEStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidEStuck On . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2725: {
    title: 'Control SolenoidEElectrical',
    explanation: 'Generic OBD-II definition: Control SolenoidEElectrical . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2726: {
    title: 'Control SolenoidEIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidEIntermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2727: {
    title: 'Control SolenoidEControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidEControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2728: {
    title: 'Control SolenoidEControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidEControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2729: {
    title: 'Control SolenoidEControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidEControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2730: {
    title: 'Control SolenoidEControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidEControl Circuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2731: {
    title: 'Control SolenoidF',
    explanation: 'Generic OBD-II definition: Control SolenoidF. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2732: {
    title: 'Control SolenoidFPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidFPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2733: {
    title: 'Control SolenoidFStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidFStuck On . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2734: {
    title: 'Control SolenoidFElectrical',
    explanation: 'Generic OBD-II definition: Control SolenoidFElectrical . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2735: {
    title: 'Control SolenoidFIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidFIntermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2737: {
    title: 'Control SolenoidFControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidFControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2738: {
    title: 'Control SolenoidFControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidFControl Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2739: {
    title: 'Control SolenoidFControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidFControl Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2740: {
    title: 'Fluid Temperature SensorBCircuit',
    explanation: 'Generic OBD-II definition: Fluid Temperature SensorBCircuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2741: {
    title: 'Fluid Temperature SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Fluid Temperature SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2743: {
    title: 'Fluid Temperature SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Fluid Temperature SensorBCircuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2744: {
    title: 'Fluid Temperature SensorBCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Fluid Temperature SensorBCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2745: {
    title: 'Shaft Speed Sensor B Circuit',
    explanation: 'Generic OBD-II definition: Shaft Speed Sensor B Circuit. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2748: {
    title: 'Shaft Speed Sensor B Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Shaft Speed Sensor B Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2749: {
    title: 'Shaft Speed Sensor C Circuit',
    explanation: 'Generic OBD-II definition: Shaft Speed Sensor C Circuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P274A,: {
    title: 'P274B, P274C, P274D, P274E, P274F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P274B, P274C, P274D, P274E, P274F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2750: {
    title: 'Shaft Speed Sensor C Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Shaft Speed Sensor C Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2751: {
    title: 'Shaft Speed Sensor C Circuit No Signal',
    explanation: 'Generic OBD-II definition: Shaft Speed Sensor C Circuit No Signal. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2752: {
    title: 'Shaft Speed Sensor C Circuit Intermittent',
    explanation: 'Generic OBD-II definition: Shaft Speed Sensor C Circuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P275A,: {
    title: 'P275B, P275C, P275D, P275E, P275F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P275B, P275C, P275D, P275E, P275F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2765: {
    title: 'Speed SensorBCircuit',
    explanation: 'Generic OBD-II definition: Speed SensorBCircuit . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2766: {
    title: 'Speed SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Speed SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2768: {
    title: 'Speed SensorBCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Speed SensorBCircuit Intermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2769: {
    title: 'Converter Clutch Circuit Low',
    explanation: 'Generic OBD-II definition: Converter Clutch Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P276A,: {
    title: 'P276B, P276C, P276D, P276E, P276F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P276B, P276C, P276D, P276E, P276F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2770: {
    title: 'Converter Clutch Circuit High',
    explanation: 'Generic OBD-II definition: Converter Clutch Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P277A,: {
    title: 'P277B, P277C, P277D, P277E, P277F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P277B, P277C, P277D, P277E, P277F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P27A1: {
    title: 'P27FF ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P27FF ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2800: {
    title: 'Range SensorBCircuit (PRNDL Input)',
    explanation: 'Generic OBD-II definition: Range SensorBCircuit (PRNDL Input) . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2801: {
    title: 'Range SensorBCircuit Range/Performance',
    explanation: 'Generic OBD-II definition: Range SensorBCircuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2802: {
    title: 'Range SensorBCircuit Low',
    explanation: 'Generic OBD-II definition: Range SensorBCircuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2803: {
    title: 'Range SensorBCircuit High',
    explanation: 'Generic OBD-II definition: Range SensorBCircuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2804: {
    title: 'Range SensorBCircuit Intermittent',
    explanation: 'Generic OBD-II definition: Range SensorBCircuit Intermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2808: {
    title: 'Control SolenoidGPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidGPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2809: {
    title: 'Control SolenoidGStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidGStuck On . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P280C,: {
    title: 'P280D, P280E, P280F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P280D, P280E, P280F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2811: {
    title: 'Control SolenoidGIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidGIntermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2812: {
    title: 'Control SolenoidGControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidGControl Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2813: {
    title: 'Control SolenoidGControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidGControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2814: {
    title: 'Control SolenoidGControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidGControl Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2815: {
    title: 'Control SolenoidGControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidGControl Circuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2816: {
    title: 'Control SolenoidH',
    explanation: 'Generic OBD-II definition: Control SolenoidH. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2817: {
    title: 'Control SolenoidHPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidHPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2818: {
    title: 'Control SolenoidHStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidHStuck On. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P281A: {
    title: 'Control SolenoidHIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidHIntermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P281B: {
    title: 'Control SolenoidHControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidHControl Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P281C: {
    title: 'Control SolenoidHControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidHControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P281D: {
    title: 'Control SolenoidHControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidHControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P281F: {
    title: 'Control SolenoidJ',
    explanation: 'Generic OBD-II definition: Control SolenoidJ. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2820: {
    title: 'Control SolenoidJPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidJPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2821: {
    title: 'Control SolenoidJStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidJStuck On . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2822: {
    title: 'Control SolenoidJElectrical',
    explanation: 'Generic OBD-II definition: Control SolenoidJElectrical . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2823: {
    title: 'Control SolenoidJIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidJIntermittent . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2824: {
    title: 'Control SolenoidJControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidJControl Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2825: {
    title: 'Control SolenoidJControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidJControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2826: {
    title: 'Control SolenoidJControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidJControl Circuit Low . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2827: {
    title: 'Control SolenoidJControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidJControl Circuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2828: {
    title: 'Control SolenoidK',
    explanation: 'Generic OBD-II definition: Control SolenoidK. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2829: {
    title: 'Control SolenoidKPerformance/Stuck Off',
    explanation: 'Generic OBD-II definition: Control SolenoidKPerformance/Stuck Off . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P282A: {
    title: 'Control SolenoidKStuck On',
    explanation: 'Generic OBD-II definition: Control SolenoidKStuck On . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P282B: {
    title: 'Control SolenoidKElectrical',
    explanation: 'Generic OBD-II definition: Control SolenoidKElectrical . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P282C: {
    title: 'Control SolenoidKIntermittent',
    explanation: 'Generic OBD-II definition: Control SolenoidKIntermittent. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P282D: {
    title: 'Control SolenoidKControl Circuit/Open',
    explanation: 'Generic OBD-II definition: Control SolenoidKControl Circuit/Open . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P282E: {
    title: 'Control SolenoidKControl Circuit Range/Performance',
    explanation: 'Generic OBD-II definition: Control SolenoidKControl Circuit Range/Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P282F: {
    title: 'Control SolenoidKControl Circuit Low',
    explanation: 'Generic OBD-II definition: Control SolenoidKControl Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2830: {
    title: 'Control SolenoidKControl Circuit High',
    explanation: 'Generic OBD-II definition: Control SolenoidKControl Circuit High . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2A02: {
    title: 'Sensor Circuit Range/Performance Bank 1 Sensor 3',
    explanation: 'Generic OBD-II definition: Sensor Circuit Range/Performance Bank 1 Sensor 3 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2A03: {
    title: 'Sensor Circuit Range/Performance Bank 2 Sensor 1',
    explanation: 'Generic OBD-II definition: Sensor Circuit Range/Performance Bank 2 Sensor 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2A04: {
    title: 'Sensor Circuit Range/Performance Bank 2 Sensor 2',
    explanation: 'Generic OBD-II definition: Sensor Circuit Range/Performance Bank 2 Sensor 2 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2A05: {
    title: 'Sensor Circuit Range/Performance Bank 2 Sensor 3',
    explanation: 'Generic OBD-II definition: Sensor Circuit Range/Performance Bank 2 Sensor 3 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2A0A,: {
    title: 'P2A0B, P2A0C, P2A0D, P2A0E, P2A0F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P2A0B, P2A0C, P2A0D, P2A0E, P2A0F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2BAC: {
    title: 'Exceedence - Deactivation of EGR',
    explanation: 'Generic OBD-II definition: Exceedence - Deactivation of EGR. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P2BAF: {
    title: 'P2BFF, P2C00, P2D00, P2E00, P2F00 ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P2BFF, P2C00, P2D00, P2E00, P2F00 ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3400: {
    title: 'Cylinder Deactivation System Bank 1',
    explanation: 'Generic OBD-II definition: Cylinder Deactivation System Bank 1. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3401: {
    title: 'Cylinder 1 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 1 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3402: {
    title: 'Cylinder 1 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 1 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3403: {
    title: 'Cylinder 1 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 1 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3404: {
    title: 'Cylinder 1 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 1 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3405: {
    title: 'Cylinder 1 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 1 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3406: {
    title: 'Cylinder 1 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 1 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3407: {
    title: 'Cylinder 1 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 1 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3408: {
    title: 'Cylinder 1 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 1 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3409: {
    title: 'Cylinder 2 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 2 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P340A,: {
    title: 'P340B, P340C, P340D, P340E, P340F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P340B, P340C, P340D, P340E, P340F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3410: {
    title: 'Cylinder 2 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 2 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3411: {
    title: 'Cylinder 2 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 2 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3412: {
    title: 'Cylinder 2 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 2 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3413: {
    title: 'Cylinder 2 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 2 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3414: {
    title: 'Cylinder 2 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 2 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3415: {
    title: 'Cylinder 2 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 2 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3416: {
    title: 'Cylinder 2 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 2 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3417: {
    title: 'Cylinder 3 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 3 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3418: {
    title: 'Cylinder 3 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 3 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3419: {
    title: 'Cylinder 3 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 3 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P341A,: {
    title: 'P341B, P341C, P341D, P341E, P341F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P341B, P341C, P341D, P341E, P341F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3420: {
    title: 'Cylinder 3 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 3 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3421: {
    title: 'Cylinder 3 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 3 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3422: {
    title: 'Cylinder 3 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 3 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3423: {
    title: 'Cylinder 3 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 3 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3424: {
    title: 'Cylinder 3 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 3 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3425: {
    title: 'Cylinder 4 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 4 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3426: {
    title: 'Cylinder 4 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 4 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3427: {
    title: 'Cylinder 4 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 4 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3428: {
    title: 'Cylinder 4 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 4 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3429: {
    title: 'Cylinder 4 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 4 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P342A,: {
    title: 'P342B, P342C, P342D, P342E, P342F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P342B, P342C, P342D, P342E, P342F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3430: {
    title: 'Cylinder 4 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 4 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3431: {
    title: 'Cylinder 4 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 4 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3432: {
    title: 'Cylinder 4 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 4 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3433: {
    title: 'Cylinder 5 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 5 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3434: {
    title: 'Cylinder 5 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 5 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3435: {
    title: 'Cylinder 5 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 5 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3436: {
    title: 'Cylinder 5 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 5 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3437: {
    title: 'Cylinder 5 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 5 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3438: {
    title: 'Cylinder 5 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 5 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3439: {
    title: 'Cylinder 5 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 5 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P343A,: {
    title: 'P343B, P343C, P343D, P343E, P343F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P343B, P343C, P343D, P343E, P343F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3440: {
    title: 'Cylinder 5 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 5 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3441: {
    title: 'Cylinder 6 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 6 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3442: {
    title: 'Cylinder 6 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 6 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3443: {
    title: 'Cylinder 6 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 6 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3444: {
    title: 'Cylinder 6 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 6 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3445: {
    title: 'Cylinder 6 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 6 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3446: {
    title: 'Cylinder 6 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 6 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3447: {
    title: 'Cylinder 6 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 6 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3448: {
    title: 'Cylinder 6 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 6 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3449: {
    title: 'Cylinder 7 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 7 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P344A,: {
    title: 'P344B, P344C, P344D, P344E, P344F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P344B, P344C, P344D, P344E, P344F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3450: {
    title: 'Cylinder 7 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 7 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3451: {
    title: 'Cylinder 7 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 7 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3452: {
    title: 'Cylinder 7 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 7 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3453: {
    title: 'Cylinder 7 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 7 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3454: {
    title: 'Cylinder 7 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 7 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3455: {
    title: 'Cylinder 7 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 7 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3456: {
    title: 'Cylinder 7 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 7 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3457: {
    title: 'Cylinder 8 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 8 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3458: {
    title: 'Cylinder 8 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 8 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3459: {
    title: 'Cylinder 8 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 8 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P345A,: {
    title: 'P345B, P345C, P345D, P345E, P345F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P345B, P345C, P345D, P345E, P345F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3460: {
    title: 'Cylinder 8 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 8 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3461: {
    title: 'Cylinder 8 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 8 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3462: {
    title: 'Cylinder 8 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 8 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3463: {
    title: 'Cylinder 8 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 8 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3464: {
    title: 'Cylinder 8 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 8 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3465: {
    title: 'Cylinder 9 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 9 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3466: {
    title: 'Cylinder 9 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 9 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3467: {
    title: 'Cylinder 9 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 9 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3468: {
    title: 'Cylinder 9 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 9 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3469: {
    title: 'Cylinder 9 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 9 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P346A,: {
    title: 'P346B, P346C, P346D, P346E, P346F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P346B, P346C, P346D, P346E, P346F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3470: {
    title: 'Cylinder 9 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 9 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3471: {
    title: 'Cylinder 9 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 9 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3472: {
    title: 'Cylinder 9 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 9 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3473: {
    title: 'Cylinder 10 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 10 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3474: {
    title: 'Cylinder 10 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 10 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3475: {
    title: 'Cylinder 10 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 10 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3476: {
    title: 'Cylinder 10 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 10 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3477: {
    title: 'Cylinder 10 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 10 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3478: {
    title: 'Cylinder 10 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 10 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3479: {
    title: 'Cylinder 10 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 10 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P347A,: {
    title: 'P347B, P347C, P347D, P347E, P347F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P347B, P347C, P347D, P347E, P347F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3480: {
    title: 'Cylinder 10 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 10 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3481: {
    title: 'Cylinder 11 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 11 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3482: {
    title: 'Cylinder 11 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 11 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3483: {
    title: 'Cylinder 11 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 11 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3484: {
    title: 'Cylinder 11 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 11 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3485: {
    title: 'Cylinder 11 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 11 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3486: {
    title: 'Cylinder 11 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 11 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3487: {
    title: 'Cylinder 11 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 11 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3488: {
    title: 'Cylinder 11 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 11 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3489: {
    title: 'Cylinder 12 Deactivation/Intake Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 12 Deactivation/Intake Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P348A,: {
    title: 'P348B, P348C, P348D, P348E, P348F ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P348B, P348C, P348D, P348E, P348F ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3490: {
    title: 'Cylinder 12 Deactivation/Intake Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 12 Deactivation/Intake Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3491: {
    title: 'Cylinder 12 Deactivation/Intake Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 12 Deactivation/Intake Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3492: {
    title: 'Cylinder 12 Deactivation/Intake Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 12 Deactivation/Intake Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3493: {
    title: 'Cylinder 12 Exhaust Valve Control Circuit/Open',
    explanation: 'Generic OBD-II definition: Cylinder 12 Exhaust Valve Control Circuit/Open. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3494: {
    title: 'Cylinder 12 Exhaust Valve Control Circuit Performance',
    explanation: 'Generic OBD-II definition: Cylinder 12 Exhaust Valve Control Circuit Performance. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3495: {
    title: 'Cylinder 12 Exhaust Valve Control Circuit Low',
    explanation: 'Generic OBD-II definition: Cylinder 12 Exhaust Valve Control Circuit Low. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3496: {
    title: 'Cylinder 12 Exhaust Valve Control Circuit High',
    explanation: 'Generic OBD-II definition: Cylinder 12 Exhaust Valve Control Circuit High. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3497: {
    title: 'Cylinder Deactivation System Bank 2',
    explanation: 'Generic OBD-II definition: Cylinder Deactivation System Bank 2 . A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
  P3498: {
    title: 'P34FF, P3500, P3600, P3700, P3800, P3900, P3A00, P3B00, P3C00, P3D00, P3E00, P3F00 ISO/SAE Reserved',
    explanation: 'Generic OBD-II definition: P34FF, P3500, P3600, P3700, P3800, P3900, P3A00, P3B00, P3C00, P3D00, P3E00, P3F00 ISO/SAE Reserved. A technician should capture live data and follow the diagnostic flow.',
    severity: 'medium',
    recommendedChecks: [...genericRecommendedChecks]
  },
};
