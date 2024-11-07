import React, { useState } from 'react';
import { FileText, Plus, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface Proposal {
  id: string;
  title: string;
  opportunityId: string;
  dueDate: string;
  status: 'draft' | 'in_review' | 'submitted' | 'won' | 'lost';
  progress: number;
}

function Proposals() {
  const [activeTab, setActiveTab] = useState<'active' | 'archived'>('active');

  const mockProposals: Proposal[] = [
    {
      id: 'p1',
      title: 'Medical Equipment Supply Chain Management',
      opportunityId: '36C10B23Q0234',
      dueDate: '2024-03-15',
      status: 'in_review',
      progress: 75
    },
    {
      id: 'p2',
      title: 'IT Infrastructure Upgrade',
      opportunityId: 'GS-35F-0511T',
      dueDate: '2024-03-20',
      status: 'draft',
      progress: 30
    }
  ];

  const getStatusIcon = (status: Proposal['status']) => {
    switch (status) {
      case 'draft':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'in_review':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'submitted':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'won':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'lost':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusText = (status: Proposal['status']) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Proposals</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          New Proposal
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'active'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('active')}
        >
          Active Proposals
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'archived'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('archived')}
        >
          Archived
        </button>
      </div>

      {/* Proposals Grid */}
      <div className="grid gap-6">
        {mockProposals.map((proposal) => (
          <div key={proposal.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {proposal.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Opportunity ID: {proposal.opportunityId}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(proposal.status)}
                <span className="text-sm font-medium">
                  {getStatusText(proposal.status)}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-gray-700">
                  {proposal.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${proposal.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Due: {new Date(proposal.dueDate).toLocaleDateString()}</span>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800">
                  Edit
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proposals;