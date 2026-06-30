import React, { useState } from 'react';
import {
  Home,
  Users,
  CircleDollarSign,
  BarChart2,
  Settings,
  Workflow
} from 'lucide-react';
import Sidebar, { NavItem } from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItemName, setActiveItemName] = useState('Reports');

  const navItems: NavItem[] = [
    { name: 'Home', icon: Home, active: activeItemName === 'Home' },
    { name: 'Employees', icon: Users, active: activeItemName === 'Employees' },
    { name: 'Payroll', icon: CircleDollarSign, active: activeItemName === 'Payroll' },
    { name: 'Reports', icon: BarChart2, active: activeItemName === 'Reports' },
    { name: 'HR', icon: Settings, active: activeItemName === 'HR' },
    { name: 'Workflow', icon: Workflow, active: activeItemName === 'Workflow' },
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        items={navItems}
        onItemClick={(item) => setActiveItemName(item.name)}
      />
      <div className="flex flex-col flex-1 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 transition-colors w-full min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
