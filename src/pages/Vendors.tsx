import React, { useState } from 'react';
import { Search, Plus, MapPin, Phone, Mail, Building2, Clock, CheckCircle2, XCircle, MessageCircle } from 'lucide-react';
import { Subcontractor } from '../types';
import { format } from 'date-fns';

function Vendors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<Subcontractor['status'] | 'all'>('all');
  
  const mockSubcontractors: Subcontractor[] = [
    {
      id: 'v1',
      name: 'TechServ Solutions',
      location: 'Arlington, VA',
      contact: '(703) 555-0123',
      email: 'contact@techserv.com',
      specialties: ['IT Services', 'Cybersecurity', 'Cloud Solutions'],
      rating: 4.8,
      status: 'quoted',
      statusUpdatedAt: '2024-03-01T10:00:00Z',
      notes: 'Reliable partner for IT projects',
      pastPerformance: [
        {
          projectName: 'Federal Cloud Migration',
          contractValue: 2500000,
          completionDate: '2023-12-31',
          description: 'Successfully migrated federal agency systems to cloud infrastructure'
        }
      ],
      quotes: [
        {
          opportunityId: 'OPP-2024-001',
          amount: 150000,
          submittedAt: '2024-03-01T10:00:00Z',
          validUntil: '2024-04-01T10:00:00Z',
          status: 'pending'
        }
      ]
    },
    {
      id: 'v2',
      name: 'MedEquip Pro',
      location: 'Baltimore, MD',
      contact: '(410) 555-0189',
      email: 'sales@medequippro.com',
      specialties: ['Medical Equipment', 'Healthcare Supplies'],
      rating: 4.5,
      status: 'waiting_response',
      statusUpdatedAt: '2024-02-28T15:30:00Z',
      notes: 'Specializes in VA contracts',
      pastPerformance: [
        {
          projectName: 'VA Hospital Equipment Supply',
          contractValue: 1800000,
          completionDate: '2023-10-15',
          description: 'Ongoing medical equipment supply and maintenance contract'
        }
      ]
    }
  ];

  const getStatusIcon = (status: Subcontractor['status']) => {
    switch (status) {
      case 'new':
        return <Plus className="w-4 h-4 text-blue-500" />;
      case 'contacted':
        return <MessageCircle className="w-4 h-4 text-purple-500" />;
      case 'waiting_response':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'quoted':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'approved':
        return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusText = (status: Subcontractor['status']) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Subcontractor Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add New Subcontractor
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search subcontractors by name, location, or specialty..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Subcontractor['status'] | 'all')}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="waiting_response">Waiting Response</option>
            <option value="quoted">Quoted</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Subcontractor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSubcontractors.map((sub) => (
          <div key={sub.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{sub.name}</h3>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{sub.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
                {getStatusIcon(sub.status)}
                <span className="text-sm font-medium">{getStatusText(sub.status)}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">{sub.contact}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">{sub.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Building2 className="w-4 h-4 mr-2" />
                <span className="text-sm">{sub.specialties.join(', ')}</span>
              </div>
              {sub.quotes && sub.quotes.length > 0 && (
                <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-700">Latest Quote</p>
                  <p className="text-sm text-blue-600">
                    ${sub.quotes[0].amount.toLocaleString()} - Valid until {format(new Date(sub.quotes[0].validUntil), 'MMM d, yyyy')}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                View Details
              </button>
              <button className="flex-1 bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vendors;