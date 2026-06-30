import React from 'react';
import { cn } from '../../lib/utils';

export function Brand({ isExpanded = false }: { isExpanded?: boolean }) {
  return (
    <div className={cn("flex items-center w-full", isExpanded ? "justify-start px-2 gap-3" : "justify-center")}>
      <div className={cn(
        "rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] dark:from-white dark:to-gray-200 flex items-center justify-center shrink-0 shadow-sm border border-gray-200/50 dark:border-gray-800/50 transition-all",
        isExpanded ? "w-8 h-8" : "w-[48px] h-[48px]"
      )}>
        <svg width={isExpanded ? "18" : "24"} height={isExpanded ? "18" : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all text-white dark:text-gray-900">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
      {isExpanded && (
        <div className="flex flex-col min-w-0 transition-opacity duration-300">
          <span className="text-[15px] font-semibold text-gray-900 dark:text-white tracking-tight truncate">
            PeopleBase
          </span>
          <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase truncate">
            Directory
          </span>
        </div>
      )}
    </div>
  );
}
