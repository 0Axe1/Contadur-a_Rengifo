import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { Inventory } from './pages/Inventory';
import { DailyReports } from './pages/DailyReports';
import { Sales } from './pages/Sales';
import { Purchases } from './pages/Purchases';
import { Suppliers } from './pages/Suppliers';
import { Receivables } from './pages/Receivables';
import { Payables } from './pages/Payables';
import { AccountSelector } from './pages/AccountSelector';
import { PlaceholderPage } from './pages/PlaceholderPage';

export default function App() {
  const [selectedAccount, setSelectedAccount] = useState<any>(null);

  return (
    <Router>
      {!selectedAccount ? (
        <AccountSelector onSelect={setSelectedAccount} />
      ) : (
        <Routes>
          <Route path="/" element={<Layout selectedAccount={selectedAccount} onSwitchAccount={() => setSelectedAccount(null)} />}>
            <Route index element={<Dashboard />} />
            <Route path="sales" element={<Sales />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customers" element={<Customers />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="receivable" element={<Receivables />} />
            <Route path="payable" element={<Payables />} />
            <Route path="daily-reports" element={<DailyReports />} />
            <Route path="settings" element={<PlaceholderPage title="Configuración del Sistema" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}
