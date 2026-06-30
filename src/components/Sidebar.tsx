import React from 'react';
import {
  Home,
  Users,
  CircleDollarSign,
  BarChart2,
  Settings,
  Workflow,
  Moon,
  Sun,
  User,
  HelpCircle,
  Menu
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';
import { Brand } from './ui/Brand';

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'Employees', icon: Users },
  { name: 'Payroll', icon: CircleDollarSign },
  { name: 'Reports', icon: BarChart2, active: true },
  { name: 'HR', icon: Settings },
  { name: 'Workflow', icon: Workflow },
];

export default function Sidebar({ isOpen, setIsOpen }: { isOpen?: boolean; setIsOpen?: (isOpen: boolean) => void }) {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(true); // Default to expanded on desktop

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50 dark:bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsOpen?.(false)}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 border-r border-gray-200 dark:border-gray-800 bg-[#F8FAFC] dark:bg-[#0B0F19] flex flex-col justify-between flex-shrink-0 h-full overflow-y-auto transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 shadow-[1px_0_10px_rgba(0,0,0,0.02)] dark:shadow-[1px_0_10px_rgba(0,0,0,0.2)]",
        isOpen ? "translate-x-0" : "-translate-x-full",
        isExpanded ? "w-[260px]" : "w-[80px]"
      )}>
        <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar">
          {/* Header Actions & Branding */}
          <div className={cn("flex items-center pt-3 pb-1 shrink-0", isExpanded ? "flex-row justify-between px-5" : "flex-col gap-3")}>
            <div className={cn("flex w-full items-center", isExpanded ? "gap-2" : "flex-col gap-3")}>
              <button 
                onClick={() => {
                  // On mobile, just close the sidebar entirely. On desktop, toggle expansion.
                  if (window.innerWidth < 1024) {
                    setIsOpen?.(!isOpen);
                  } else {
                    setIsExpanded(!isExpanded);
                  }
                }}
                className={cn(
                  "p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer",
                  isExpanded ? "order-last ml-auto -mr-2" : ""
                )}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className={cn(isExpanded ? "w-auto" : "mt-1")}>
                <Brand isExpanded={isExpanded} />
              </div>
            </div>
          </div>

          {/* Navigation Structure */}
          <nav className={cn(
            "flex mt-2 pb-2 flex-1",
            isExpanded ? "flex-col px-3 gap-1" : "flex-col items-center gap-1 px-2"
          )}>
            {isExpanded && (
              <div className="px-3 mb-2 mt-2">
                <h3 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.1em] transition-opacity duration-300">Main Menu</h3>
              </div>
            )}
            {navItems.map((item) => (
              <button
                key={item.name}
                className={cn(
                  "flex transition-all focus:outline-none cursor-pointer group",
                  isExpanded 
                    ? "w-full flex-row items-center gap-3 px-3 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500/20"
                    : "w-full flex-col items-center justify-center gap-1 py-2 rounded-xl",
                  isExpanded && item.active ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200/80 dark:border-gray-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2)]' : '',
                  isExpanded && !item.active ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 border border-transparent' : ''
                )}
              >
                {isExpanded ? (
                  <>
                    <item.icon className={cn(
                      "w-[18px] h-[18px] shrink-0 transition-colors", 
                      item.active 
                        ? "text-[#004A77] dark:text-[#C2E7FF]" 
                        : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                    )} strokeWidth={item.active ? 2.5 : 2} />
                    <span className="text-sm font-medium tracking-tight whitespace-nowrap">{item.name}</span>
                  </>
                ) : (
                  <>
                    <div className={cn(
                      "w-[56px] h-[32px] rounded-full flex items-center justify-center transition-all",
                      item.active 
                        ? "bg-[#C2E7FF] dark:bg-[#004A77] text-[#001D35] dark:text-[#C2E7FF]" 
                        : "text-gray-600 dark:text-gray-400 group-hover:bg-gray-200/50 dark:group-hover:bg-gray-800"
                    )}>
                      <item.icon className="w-6 h-6" strokeWidth={item.active ? 2.5 : 2} />
                    </div>
                    <span className={cn(
                      "text-[12px] font-medium tracking-wide transition-colors text-center px-1 whitespace-nowrap",
                      item.active 
                        ? "text-gray-900 dark:text-gray-100" 
                        : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                    )}>
                      {item.name}
                    </span>
                  </>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className={cn(
          "flex pb-2 pt-2 border-t border-gray-200/60 dark:border-gray-800/60 bg-[#F8FAFC]/50 dark:bg-[#0B0F19]/50 backdrop-blur-sm shrink-0",
          isExpanded ? "flex-col p-3 gap-1" : "flex-col items-center gap-1"
        )}>
          {isExpanded ? (
            <>
              <div 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-between px-3 py-2 text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                  }
                }}
              >
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Moon className="w-[18px] h-[18px] shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                  Dark mode
                </div>
                <div className={cn("w-8 h-4.5 rounded-full relative transition-colors border shrink-0", theme === 'dark' ? 'bg-[#C2E7FF] dark:bg-[#004A77] border-[#001D35] dark:border-[#C2E7FF]' : 'bg-gray-200 border-gray-300')}>
                  <div className={cn("w-3.5 h-3.5 bg-white dark:bg-[#C2E7FF] rounded-full absolute top-[1px] shadow-sm transition-all", theme === 'dark' ? 'left-[15px]' : 'left-[1px]')}></div>
                </div>
              </div>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer group whitespace-nowrap">
                <User className="w-[18px] h-[18px] shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                Profile
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer group whitespace-nowrap">
                <HelpCircle className="w-[18px] h-[18px] shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                Help and resource
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-[22px] h-[22px]" /> : <Moon className="w-[22px] h-[22px]" />}
              </button>
              <button 
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer"
                aria-label="Profile"
              >
                <User className="w-[22px] h-[22px]" />
              </button>
              <button 
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer"
                aria-label="Help"
              >
                <HelpCircle className="w-[22px] h-[22px]" />
              </button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
