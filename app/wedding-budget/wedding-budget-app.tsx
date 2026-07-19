'use client';

import { startTransition, useEffect, useState } from 'react';

const STORAGE_KEY = 'wedding-budget-data';
const CATEGORIES = [
  'Venue',
  'Catering',
  'Decor & fabric',
  'Attire',
  'Flowers',
  'Photography',
  'Music & DJ',
  'Stationery',
  'Favors',
  'Other',
] as const;

type Expense = {
  id: string;
  item: string;
  category: string;
  amount: number;
  date: string;
};

type BudgetData = {
  totalBudget: number;
  expenses: Expense[];
};

const SEED_BUDGET = 2600;
const SEED_EXPENSES: Omit<Expense, 'date'>[] = [
  { id: 'seed-tulle', item: 'Tulle fabric (10 rolls)', category: 'Decor & fabric', amount: 100 },
  { id: 'seed-flowers', item: 'Flowers', category: 'Flowers', amount: 250 },
  { id: 'seed-cake', item: 'Cake (estimate)', category: 'Catering', amount: 500 },
  { id: 'seed-furs', item: 'Fake furs (6 pcs)', category: 'Decor & fabric', amount: 60 },
  { id: 'seed-antlers', item: 'Reindeer antlers (decor)', category: 'Decor & fabric', amount: 210 },
  { id: 'seed-silver', item: 'Silver decor items', category: 'Decor & fabric', amount: 57 },
];

const EMPTY_DATA: BudgetData = { totalBudget: 0, expenses: [] };

function fmt(n: number) {
  return (
    '€' +
    Number(n || 0).toLocaleString('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })
  );
}

function fmtDate(d?: string) {
  if (!d) return '';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function loadFromStorage(): BudgetData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as BudgetData;
  } catch {
    // ignore corrupt storage
  }
  return { ...EMPTY_DATA, expenses: [] };
}

function saveToStorage(data: BudgetData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Storage error:', e);
  }
}

function withSeedData(data: BudgetData): { data: BudgetData; changed: boolean } {
  const next: BudgetData = {
    totalBudget: data.totalBudget,
    expenses: [...data.expenses],
  };
  let changed = false;
  const existingIds = new Set(next.expenses.map((x) => String(x.id)));
  const today = new Date().toISOString().slice(0, 10);

  SEED_EXPENSES.forEach((s) => {
    if (!existingIds.has(s.id)) {
      next.expenses.push({ ...s, date: today });
      changed = true;
    }
  });

  if (!next.totalBudget) {
    next.totalBudget = SEED_BUDGET;
    changed = true;
  }

  return { data: next, changed };
}

export default function WeddingBudgetApp() {
  const [data, setData] = useState<BudgetData | null>(null);
  const [item, setItem] = useState('');
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const stored = loadFromStorage();
    const { data: seeded, changed } = withSeedData(stored);
    if (changed) saveToStorage(seeded);
    startTransition(() => setData(seeded));
  }, []);

  function persist(next: BudgetData) {
    setData(next);
    saveToStorage(next);
  }

  if (!data) {
    return (
      <div className="wedding-budget">
        <div className="loading">Loading your budget…</div>
      </div>
    );
  }

  const spent = data.expenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const remaining = Number(data.totalBudget || 0) - spent;
  const pct =
    data.totalBudget > 0
      ? Math.min(100, (spent / data.totalBudget) * 100)
      : 0;
  const over = remaining < 0;

  function onBudgetChange(value: string) {
    const next = { ...data!, totalBudget: Number(value) || 0 };
    persist(next);
  }

  function addExpense() {
    const trimmed = item.trim();
    const amt = Number(amount);
    if (!trimmed || !amt) return;

    const next: BudgetData = {
      ...data!,
      expenses: [
        ...data!.expenses,
        {
          id: String(Date.now()),
          item: trimmed,
          category,
          amount: amt,
          date: new Date().toISOString().slice(0, 10),
        },
      ],
    };
    persist(next);
    setItem('');
    setAmount('');
  }

  function removeExpense(id: string) {
    const next: BudgetData = {
      ...data!,
      expenses: data!.expenses.filter((e) => String(e.id) !== String(id)),
    };
    persist(next);
  }

  function resetAll() {
    if (!confirm('Clear your budget and all expenses? This cannot be undone.')) {
      return;
    }
    persist({ totalBudget: 0, expenses: [] });
  }

  const rows = [...data.expenses].reverse();

  return (
    <div className="wedding-budget">
      <h1>Wedding budget</h1>
      <p className="sub">Track what you&apos;ve spent and what&apos;s left to plan</p>
      <svg
        className="divider"
        width="140"
        height="14"
        viewBox="0 0 140 14"
        aria-hidden="true"
      >
        <path
          d="M0,4 Q17.5,14 35,4 T70,4 T105,4 T140,4"
          fill="none"
          stroke="#6B1E2E"
          strokeWidth="1"
        />
      </svg>

      <div className="stats">
        <div className="stat budget">
          <div className="label">Budget</div>
          <input
            type="number"
            min={0}
            step={1}
            value={data.totalBudget || ''}
            placeholder="0"
            onChange={(e) => onBudgetChange(e.target.value)}
          />
        </div>
        <div className="stat">
          <div className="label">Spent</div>
          <div className="value">{fmt(spent)}</div>
        </div>
        <div className={`stat remaining ${over ? 'neg' : 'pos'}`}>
          <div className="label">Remaining</div>
          <div className="value">{fmt(remaining)}</div>
        </div>
      </div>
      <div className="bar-track">
        <div
          className={`bar-fill${over ? ' over' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="card">
        <h2>Add an expense</h2>
        <div className="form-row">
          <input
            type="text"
            value={item}
            placeholder="What is it?"
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                (e.target as HTMLInputElement)
                  .closest('.card')
                  ?.querySelector<HTMLInputElement>('input[type="number"]')
                  ?.focus();
              }
            }}
          />
        </div>
        <div className="form-row">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            placeholder="€"
            min={0}
            step={0.01}
            style={{ maxWidth: 100 }}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addExpense();
            }}
          />
        </div>
        <button type="button" className="add" onClick={addExpense}>
          Add expense
        </button>
      </div>

      <div className="card">
        <h2>Expenses</h2>
        {rows.length === 0 ? (
          <div className="empty">No expenses yet — add your first one below.</div>
        ) : (
          rows.map((e) => (
            <div className="expense" key={e.id}>
              <div>
                <div className="item">{e.item}</div>
                <span className="cat">{e.category}</span>
                <span className="date">{fmtDate(e.date)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div className="amt">{fmt(e.amount)}</div>
                <button
                  type="button"
                  className="del"
                  onClick={() => removeExpense(e.id)}
                  aria-label="Delete expense"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <button type="button" className="reset" onClick={resetAll}>
        Clear all data
      </button>
    </div>
  );
}
