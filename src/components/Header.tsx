import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex items-center justify-between px-6 shrink-0 transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-full text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-full text-gray-300 dark:text-gray-600 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">Reports</span>
          <span className="mx-2 text-gray-300 dark:text-gray-600">/</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">Pipeline insights</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 shadow-sm transition-colors">
          <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <span className="text-gray-400 dark:text-gray-500 font-normal">Date range:</span>
          <span className="text-gray-700 dark:text-gray-300">May 6, 2026 - June 6, 2026</span>
          <div className="flex flex-col ml-1">
            <ChevronDown className="w-3 h-3 text-gray-400 dark:text-gray-500 rotate-180 -mb-1" />
            <ChevronDown className="w-3 h-3 text-gray-400 dark:text-gray-500" />
          </div>
        </button>
        <button className="bg-[#4eb4cc] hover:bg-[#45a4ba] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm transition-colors">
          Upgrade plan
        </button>
      </div>
    </header>
  );
}
