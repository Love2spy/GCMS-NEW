import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Opportunities from './pages/Opportunities';
import BidAnalysis from './pages/BidAnalysis';
import Vendors from './pages/Vendors';
import Proposals from './pages/Proposals';
import ContractTracking from './pages/ContractTracking';
import Templates from './pages/Templates';
import Resources from './pages/Resources';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="bid-analysis" element={<BidAnalysis />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="contract-tracking" element={<ContractTracking />} />
            <Route path="templates" element={<Templates />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;