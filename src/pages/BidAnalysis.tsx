import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

function BidAnalysis() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Bid Analysis</h1>

      {/* Analysis Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Opportunity Analysis</h2>
        
        {/* Basic Information */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Basic Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Opportunity ID
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Opportunity ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Value
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter expected contract value"
              />
            </div>
          </div>
        </div>

        {/* Evaluation Criteria */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Evaluation Criteria</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-4" />
              <div className="flex-1">
                <p className="font-medium">Technical Capability</p>
                <p className="text-sm text-gray-500">Company has required technical expertise</p>
              </div>
              <select className="border rounded-lg p-2">
                <option>Yes</option>
                <option>No</option>
                <option>Partial</option>
              </select>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-4" />
              <div className="flex-1">
                <p className="font-medium">Past Performance</p>
                <p className="text-sm text-gray-500">Similar projects completed successfully</p>
              </div>
              <select className="border rounded-lg p-2">
                <option>Yes</option>
                <option>No</option>
                <option>Partial</option>
              </select>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <XCircle className="w-6 h-6 text-red-500 mr-4" />
              <div className="flex-1">
                <p className="font-medium">Resource Availability</p>
                <p className="text-sm text-gray-500">Required resources are available</p>
              </div>
              <select className="border rounded-lg p-2">
                <option>Yes</option>
                <option>No</option>
                <option>Partial</option>
              </select>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Risk Assessment</h3>
          <textarea
            className="w-full p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter risk assessment notes..."
          ></textarea>
        </div>

        {/* Decision */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Bid Decision</h3>
          <div className="flex gap-4">
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Proceed with Bid
            </button>
            <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              No Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidAnalysis;