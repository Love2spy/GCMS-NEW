import React, { useState } from 'react';
import { FileText, Plus, Search, Filter } from 'lucide-react';
import { useStore } from '../store';
import TemplateEditor from '../components/templates/TemplateEditor';

const TEMPLATE_CATEGORIES = {
  past_performance: 'Past Performance',
  technical: 'Technical Proposal',
  pricing: 'Pricing',
  quote_request: 'Quote Request',
  cover_letter: 'Cover Letter',
  capability_statement: 'Capability Statement'
};

function Templates() {
  const [showEditor, setShowEditor] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const templates = useStore(state => state.templates);
  const addTemplate = useStore(state => state.addTemplate);

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || template.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleSave = (template) => {
    addTemplate(template);
    setShowEditor(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Document Templates</h1>
        <button 
          onClick={() => setShowEditor(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Template
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {Object.entries(TEMPLATE_CATEGORIES).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-500">{TEMPLATE_CATEGORIES[template.category]}</p>
              </div>
              <FileText className="w-6 h-6 text-blue-500" />
            </div>

            <div className="mb-4">
              <p className="text-gray-600 text-sm line-clamp-3">{template.content}</p>
            </div>

            {template.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {template.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                Edit
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Template Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Create Template</h2>
            <TemplateEditor
              onSave={handleSave}
              onCancel={() => setShowEditor(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Templates;