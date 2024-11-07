import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  BarChart2, 
  Users, 
  FileText, 
  ClipboardCheck,
  BookOpen,
  FileType,
  LogOut 
} from 'lucide-react';

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">GCMS</h1>
          <p className="text-sm text-gray-500">Contract Management System</p>
        </div>
        
        <nav className="mt-8">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </NavLink>
          
          <NavLink 
            to="/opportunities" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <Search className="w-5 h-5 mr-3" />
            Opportunities
          </NavLink>
          
          <NavLink 
            to="/bid-analysis" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            Bid Analysis
          </NavLink>
          
          <NavLink 
            to="/vendors" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <Users className="w-5 h-5 mr-3" />
            Vendors
          </NavLink>
          
          <NavLink 
            to="/proposals" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <FileText className="w-5 h-5 mr-3" />
            Proposals
          </NavLink>
          
          <NavLink 
            to="/contract-tracking" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <ClipboardCheck className="w-5 h-5 mr-3" />
            Contract Tracking
          </NavLink>

          <NavLink 
            to="/templates" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <FileType className="w-5 h-5 mr-3" />
            Templates
          </NavLink>

          <NavLink 
            to="/resources" 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Resources
          </NavLink>
        </nav>
        
        <div className="absolute bottom-0 w-64 p-4">
          <button className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;