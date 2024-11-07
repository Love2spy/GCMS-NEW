import React from 'react';
import { Calendar, DollarSign, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Contract {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  value: number;
  status: 'active' | 'completed' | 'at_risk';
  progress: number;
}

function ContractTracking() {
  const mockContracts: Contract[] = [
    {
      id: 'c1',
      title: 'Medical Equipment Supply Chain Management',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      value: 1200000,
      status: 'active',
      progress: 25
    },
    {
      id: 'c2',
      title: 'IT Infrastructure Upgrade',
      startDate: '2024-02-01',
      endDate: '2024-08-31',
      value: 850000,
      status: 'at_risk',
      progress: 40
    }
  ];

  const getStatusIcon = (status: Contract['status']) => {
    switch (status) {
      case 'active':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
      case 'at_risk':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contract Tracking</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Contracts</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Value</p>
              <h3 className="text-2xl font-bold">$4.2M</h3>
            </div>
            <DollarSign className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Contracts Ending Soon</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
            <Calendar className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Contracts List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Active Contracts</h2>
          <div className="space-y-6">
            {mockContracts.map((contract) => (
              <div
                key={contract.id}
                className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {contract.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Contract ID: {contract.id}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(contract.status)}
                    <span className="text-sm font-medium">
                      {contract.status.charAt(0).toUpperCase() +
                        contract.status.slice(1).replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Contract Value</p>
                    <p className="font-medium">
                      {formatCurrency(contract.value)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-medium">
                      {new Date(contract.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="font-medium">
                      {new Date(contract.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {contract.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${contract.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractTracking;