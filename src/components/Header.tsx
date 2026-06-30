import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, ChevronDown, Menu } from 'lucide-react';
import { Button } from './ui/Button';

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 flex items-center justify-between px-4 md:px-6 shrink-0 transition-colors gap-4">
      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-[44px]">
        <button 
          onClick={onMenuClick}
          className="lg:hidden shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors focus-ring-safe"
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:flex items-center gap-1 shrink-0">
          <button className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors focus-ring-safe cursor-pointer" aria-label="Go Back">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full text-gray-300 dark:text-gray-600 transition-colors cursor-not-allowed" aria-label="Go Forward" disabled>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center text-sm font-medium whitespace-nowrap overflow-hidden">
          <span className="text-gray-500 dark:text-gray-400 hidden sm:inline shrink-0">Reports</span>
          <span className="mx-2.5 text-gray-300 dark:text-gray-600 hidden sm:inline shrink-0">/</span>
          <span className="text-gray-900 dark:text-gray-100 truncate">Pipeline insights</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <button className="flex items-center gap-2 px-3 py-1.5 min-h-[44px] md:px-4 md:py-2 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-800 shadow-sm transition-all focus-ring-safe cursor-pointer whitespace-nowrap shrink-0" aria-label="Select Date Range">
          <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
          <span className="text-gray-400 dark:text-gray-500 font-normal hidden lg:inline">Date range:</span>
          <span className="text-gray-700 dark:text-gray-300 hidden md:inline">May 6, 2026 - June 6, 2026</span>
          <span className="text-gray-700 dark:text-gray-300 md:hidden">May 6 - Jun 6</span>
          <div className="flex flex-col ml-0.5 md:ml-1 opacity-60 shrink-0">
            <ChevronDown className="w-[10px] h-[10px] text-gray-500 dark:text-gray-400 rotate-180 -mb-[2px]" strokeWidth={3} />
            <ChevronDown className="w-[10px] h-[10px] text-gray-500 dark:text-gray-400" strokeWidth={3} />
          </div>
        </button>
        <div className="hidden md:block shrink-0">
          <Button className="whitespace-nowrap min-h-[44px] w-full">
            Upgrade plan
          </Button>
        </div>
      </div>
    </header>
  );
}
