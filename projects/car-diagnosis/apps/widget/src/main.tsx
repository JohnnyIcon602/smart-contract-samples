import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type {
  DiagnoseRequest,
  DiagnoseResponse,
  VehicleCatalog
} from '@tomsauto/common';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3333';

const steps = ['Vehicle', 'Details', 'Results'] as const;
type Step = (typeof steps)[number];

const defaultFormState = {
  year: '',
  make: '',
  model: '',
  mileage: '',
  dtcInput: '',
  dtc: [] as string[],
  symptomsText: '',
  recentWork: ''
};

type FormState = typeof defaultFormState;

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.65rem 0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid #d0d5dd',
  fontSize: '0.95rem'
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#262626',
  display: 'block',
  marginBottom: '0.35rem'
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children
}) => (
  <section style={{ marginBottom: '1.25rem' }}>
    <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
    {children}
  </section>
);

const Chip: React.FC<{ label: string; onRemove: () => void }> = ({
  label,
  onRemove
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      background: '#eef2ff',
      color: '#312e81',
      borderRadius: '999px',
      padding: '0.2rem 0.65rem',
      fontSize: '0.85rem',
      marginRight: '0.4rem',
      marginBottom: '0.3rem'
    }}
  >
    {label}
    <button
      onClick={onRemove}
      aria-label={`Remove ${label}`}
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'inherit',
        fontSize: '0.95rem'
      }}
    >
      ×
    </button>
  </span>
);

const App: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<FormState>(defaultFormState);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<DiagnoseResponse | null>(null);
  const [diagnosticError, setDiagnosticError] = useState<string | null>(null);
  const [catalog, setCatalog] = useState<VehicleCatalog | null>(null);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [catalogError, setCatalogError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setCatalogLoading(true);
        const response = await fetch(`${API_BASE}/v1/meta/vehicles`, {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error('Failed to load vehicle catalog.');
        }
        const data = (await response.json()) as VehicleCatalog;
        setCatalog(data);
        setCatalogError(null);
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        console.error(err);
        setCatalogError('Unable to load vehicle list. Refresh and try again.');
      } finally {
        setCatalogLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, []);

  const step: Step = steps[stepIndex];

  const yearOptions = useMemo(() => (catalog?.years ?? []).map((entry) => entry.year), [catalog]);
  const selectedYear = useMemo(
    () => catalog?.years.find((entry) => `${entry.year}` === form.year),
    [catalog, form.year]
  );
  const makeOptions = selectedYear?.makes ?? [];
  const selectedMake = useMemo(
    () => selectedYear?.makes.find((entry) => entry.make === form.make),
    [selectedYear, form.make]
  );
  const modelOptions = selectedMake?.models ?? [];

  const progress = `${Math.round(((stepIndex + 1) / steps.length) * 100)}%`;

  const addDtc = () => {
    const candidate = form.dtcInput.trim().toUpperCase();
    if (!candidate) return;
    if (form.dtc.includes(candidate)) {
      setForm((prev) => ({ ...prev, dtcInput: '' }));
      return;
    }
    setForm((prev) => ({
      ...prev,
      dtc: [...prev.dtc, candidate],
      dtcInput: ''
    }));
  };

  const removeDtc = (code: string) => {
    setForm((prev) => ({
      ...prev,
      dtc: prev.dtc.filter((entry) => entry !== code)
    }));
  };

  const parsedSymptoms = useMemo(() => {
    return form.symptomsText
      .split(/\n|,/)
      .map((symptom) => symptom.trim())
      .filter(Boolean);
  }, [form.symptomsText]);

  const goNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const goBack = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setDiagnosticError(null);

    const payload: DiagnoseRequest = {
      vehicle: {
        year: form.year ? Number(form.year) : undefined,
        make: form.make || undefined,
        model: form.model || undefined,
        mileage: form.mileage ? Number(form.mileage) : undefined
      },
      dtc: form.dtc,
      symptoms: parsedSymptoms,
      recentWork: form.recentWork || undefined
    };

    if (!payload.dtc?.length && !payload.symptoms?.length) {
      setDiagnosticError('Add at least one trouble code or describe the symptom.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/v1/diagnose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Unable to reach diagnostic service.');
      }

      const data = (await response.json()) as DiagnoseResponse;
      setResult(data);
      setStepIndex(2);
    } catch (err) {
      console.error(err);
      setDiagnosticError(err instanceof Error ? err.message : 'Unknown error.');
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(defaultFormState);
    setResult(null);
    setDiagnosticError(null);
    setStepIndex(0);
  };

  return (
    <div
      style={{
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        maxWidth: '32rem',
        margin: '0 auto',
        border: '1px solid #e4e4e7',
        borderRadius: '1rem',
        padding: '1.5rem',
        background: '#ffffff',
        boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)'
      }}
    >
      <header style={{ marginBottom: '1.5rem' }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#6b7280'
        }}>
          Tom's Auto
        </p>
        <h2 style={{ margin: '0.25rem 0 0.5rem', fontSize: '1.5rem' }}>
          Diagnostic Assistant
        </h2>
        <p style={{ color: '#4b5563', margin: 0 }}>
          Tell us what the car is doing and we’ll outline the likely causes before you
          ever step into the shop.
        </p>
        <div
          style={{
            marginTop: '1rem',
            width: '100%',
            height: '6px',
            background: '#f4f4f5',
            borderRadius: '999px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: progress,
              height: '100%',
              background: '#4f46e5',
              transition: 'width 220ms ease'
            }}
          />
        </div>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
          Step {stepIndex + 1} of {steps.length}: {step}
        </p>
      </header>

      {catalogError && (
        <div
          role="alert"
          style={{
            background: '#fffbeb',
            border: '1px solid #fcd34d',
            color: '#92400e',
            padding: '0.75rem 1rem',
            borderRadius: '0.75rem',
            marginBottom: '1rem'
          }}
        >
          {catalogError}
        </div>
      )}

      {diagnosticError && (
        <div
          role="alert"
          style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#991b1b',
            padding: '0.75rem 1rem',
            borderRadius: '0.75rem',
            marginBottom: '1rem'
          }}
        >
          {diagnosticError}
        </div>
      )}

      {step === 'Vehicle' && (
        <>
          <Section title="Vehicle basics">
            <div style={{ display: 'grid', gap: '0.9rem' }}>
              <label>
                <span style={labelStyle}>Year</span>
                <select
                  style={inputStyle}
                  value={form.year}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      year: e.target.value,
                      make: '',
                      model: ''
                    })
                  }
                  disabled={catalogLoading || !yearOptions.length}
                >
                  <option value="" disabled>
                    {catalogLoading
                      ? 'Loading vehicle data…'
                      : yearOptions.length
                        ? 'Select year'
                        : 'No data available'}
                  </option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span style={labelStyle}>Make</span>
                <select
                  style={inputStyle}
                  value={form.make}
                  onChange={(e) =>
                    setForm({ ...form, make: e.target.value, model: '' })
                  }
                  disabled={catalogLoading || !form.year || !makeOptions.length}
                >
                  <option value="" disabled>
                    {!form.year
                      ? 'Select year first'
                      : makeOptions.length
                      ? 'Select make'
                      : 'No makes available'}
                  </option>
                  {makeOptions.map(({ make }) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span style={labelStyle}>Model</span>
                <select
                  style={inputStyle}
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                  disabled={catalogLoading || !form.make || !modelOptions.length}
                >
                  <option value="" disabled>
                    {!form.make
                      ? 'Select make first'
                      : modelOptions.length
                      ? 'Select model'
                      : 'No models available'}
                  </option>
                  {modelOptions.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span style={labelStyle}>Mileage</span>
                <input
                  style={inputStyle}
                  type="number"
                  inputMode="numeric"
                  placeholder="128000"
                  value={form.mileage}
                  onChange={(e) => setForm({ ...form, mileage: e.target.value })}
                />
              </label>
            </div>
          </Section>
        </>
      )}

      {step === 'Details' && (
        <>
          <Section title="Trouble codes">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <input
                style={{ ...inputStyle, flex: 1 }}
                placeholder="P0300"
                value={form.dtcInput}
                onChange={(e) => setForm({ ...form, dtcInput: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addDtc();
                  }
                }}
              />
              <button
                type="button"
                onClick={addDtc}
                style={{
                  background: '#4f46e5',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.55rem',
                  padding: '0 1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Add
              </button>
            </div>
            <div>
              {form.dtc.length ? (
                form.dtc.map((code) => (
                  <Chip key={code} label={code} onRemove={() => removeDtc(code)} />
                ))
              ) : (
                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                  Enter up to 5 codes from your scanner (optional)
                </p>
              )}
            </div>
          </Section>

          <Section title="Symptoms">
            <label>
              <span style={labelStyle}>Describe what the car is doing</span>
              <textarea
                style={{ ...inputStyle, minHeight: '6rem', resize: 'vertical' }}
                placeholder="Loss of power on hills, engine shaking at idle, strange smell..."
                value={form.symptomsText}
                onChange={(e) => setForm({ ...form, symptomsText: e.target.value })}
              />
            </label>
          </Section>

          <Section title="Recent work (optional)">
            <label>
              <textarea
                style={{ ...inputStyle, minHeight: '4rem', resize: 'vertical' }}
                placeholder="Spark plugs replaced 2 months ago"
                value={form.recentWork}
                onChange={(e) => setForm({ ...form, recentWork: e.target.value })}
              />
            </label>
          </Section>
        </>
      )}

      {step === 'Results' && (
        <div>
          {submitting && !result && (
            <p style={{ color: '#4b5563' }}>Crunching the data…</p>
          )}
          {result && (
            <div>
              <Section title="Likely issues">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {result.issues.map((issue) => (
                    <article
                      key={issue.title}
                      style={{
                        border: '1px solid #e4e4e7',
                        borderRadius: '0.75rem',
                        padding: '0.9rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.4rem'
                        }}
                      >
                        <strong>{issue.title}</strong>
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                          {(issue.likelihood * 100).toFixed(0)}% match
                        </span>
                      </div>
                      <p style={{ margin: '0 0 0.6rem', color: '#4b5563' }}>
                        {issue.explanation}
                      </p>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Recommended checks
                      </p>
                      <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#4b5563' }}>
                        {issue.recommendedChecks.map((check) => (
                          <li key={check}>{check}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </Section>

              <Section title="Next actions">
                <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#4b5563' }}>
                  {result.nextActions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Disclaimer">
                <p style={{ margin: 0, color: '#6b7280' }}>{result.disclaimer}</p>
              </Section>
            </div>
          )}
        </div>
      )}

      <footer style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {stepIndex > 0 && step !== 'Results' && (
            <button
              type="button"
              onClick={goBack}
              style={{
                flex: 1,
                minWidth: '6rem',
                border: '1px solid #d4d4d8',
                borderRadius: '0.7rem',
                background: '#fff',
                cursor: 'pointer',
                padding: '0.8rem 1rem'
              }}
            >
              Back
            </button>
          )}

          {step === 'Results' ? (
            <>
              <button
                type="button"
                onClick={reset}
                style={{
                  flex: 1,
                  border: '1px solid #d4d4d8',
                  borderRadius: '0.7rem',
                  background: '#fff',
                  cursor: 'pointer',
                  padding: '0.8rem 1rem'
                }}
              >
                Run another check
              </button>
              <button
                type="button"
                style={{
                  flex: 2,
                  border: 'none',
                  borderRadius: '0.7rem',
                  background: '#16a34a',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'not-allowed',
                  padding: '0.8rem 1rem'
                }}
                disabled
                title="Scheduling link coming soon"
              >
                Schedule with Tom's Auto (coming soon)
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={step === 'Details' ? handleSubmit : goNext}
              disabled={submitting}
              style={{
                flex: 1,
                minWidth: '8rem',
                border: 'none',
                borderRadius: '0.7rem',
                background: '#4f46e5',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '0.9rem 1.2rem',
                opacity: submitting ? 0.6 : 1
              }}
            >
              {step === 'Details' ? (submitting ? 'Analyzing…' : 'See results') : 'Continue'}
            </button>
          )}
        </div>
        <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
          Powered by Tom's Auto preliminary diagnostic engine
        </p>
      </footer>
    </div>
  );
};

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<App />);
  return root;
};

if (import.meta.env.DEV) {
  const el = document.getElementById('root');
  if (el) {
    mount(el);
  }
}

export { mount };
