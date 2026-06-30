import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="flex h-screen w-full bg-[#fdfdfd] dark:bg-gray-950 overflow-hidden font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden bg-[#fafafa] dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
