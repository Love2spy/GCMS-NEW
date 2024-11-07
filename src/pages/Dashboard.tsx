import React from 'react';
import { 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Ban,
  TrendingUp 
} from 'lucide-react';

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Opportunities</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Analysis</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Won Contracts</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">No-Bid Decisions</p>
              <h3 className="text-2xl font-bold">16</h3>
            </div>
            <Ban className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-500 mr-4" />
            <div>
              <p className="font-medium">New Opportunity Found</p>
              <p className="text-sm text-gray-500">Construction Services - $1.2M</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">2 hours ago</span>
          </div>
          
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-blue-500 mr-4" />
            <div>
              <p className="font-medium">Bid Analysis Completed</p>
              <p className="text-sm text-gray-500">IT Services Contract #GS-35F-0511T</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">1 day ago</span>
          </div>
          
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <AlertCircle className="w-6 h-6 text-yellow-500 mr-4" />
            <div>
              <p className="font-medium">Proposal Due Soon</p>
              <p className="text-sm text-gray-500">Medical Equipment Supply - Due in 3 days</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">2 days ago</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <h3 className="font-medium text-blue-700">Import from SAM.gov</h3>
            <p className="text-sm text-blue-600">Search and import new opportunities</p>
          </button>
          
          <button className="p-4 text-left bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <h3 className="font-medium text-green-700">Start New Analysis</h3>
            <p className="text-sm text-green-600">Begin bid/no-bid analysis</p>
          </button>
          
          <button className="p-4 text-left bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <h3 className="font-medium text-purple-700">Create Proposal</h3>
            <p className="text-sm text-purple-600">Start a new proposal draft</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;