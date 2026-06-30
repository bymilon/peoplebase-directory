import React from 'react';
import { cn } from '../../lib/utils';

export function Brand({ 
  isExpanded = false,
  name = "PeopleBase",
  subtitle = "Directory"
}: { 
  isExpanded?: boolean;
  name?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("flex items-center w-full transition-all duration-300", isExpanded ? "justify-start px-2 gap-3" : "justify-center px-0 gap-0")}>
      <div className={cn(
        "rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-800 dark:border-gray-200 transition-all duration-300",
        isExpanded ? "w-8 h-8" : "w-[48px] h-[48px]"
      )}>
        <svg width={isExpanded ? "18" : "24"} height={isExpanded ? "18" : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 text-white dark:text-gray-900">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className={cn(
        "flex flex-col min-w-0 transition-all duration-300 overflow-hidden",
        isExpanded ? "opacity-100 w-auto translate-x-0" : "opacity-0 w-0 -translate-x-4"
      )}>
        <span className="text-[15px] font-semibold text-gray-900 dark:text-white tracking-tight truncate">
          {name}
        </span>
        <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase truncate">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
