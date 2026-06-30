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

export interface NavItem {
  name: string;
  icon: React.ElementType;
  active?: boolean;
}

export interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  items?: NavItem[];
  onItemClick?: (item: NavItem) => void;
  brandName?: string;
  brandSubtitle?: string;
}

export default function Sidebar({ 
  isOpen, 
  setIsOpen, 
  items = [], 
  onItemClick,
  brandName = "PeopleBase",
  brandSubtitle = "Directory"
}: SidebarProps) {
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
        "fixed inset-y-0 left-0 z-50 border-r border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-slate-950 flex flex-col justify-between flex-shrink-0 h-full overflow-hidden transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 shadow-sm",
        isOpen ? "translate-x-0" : "-translate-x-full",
        isExpanded ? "w-[260px]" : "w-[80px]"
      )}>
        <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden hide-scrollbar">
          {/* Header Actions & Branding */}
          <div className={cn("flex items-center pt-3 pb-1 shrink-0", isExpanded ? "flex-row justify-between px-5" : "flex-col gap-3")}>
            <div className={cn("flex w-full items-center", isExpanded ? "gap-2" : "flex-col gap-3")}>
              {/* Mobile Close Button */}
              <button 
                onClick={() => setIsOpen?.(false)}
                className={cn(
                  "p-2 min-h-[44px] min-w-[44px] rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-colors focus-ring-safe cursor-pointer lg:hidden flex items-center justify-center"
                )}
                aria-label="Close Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              {/* Desktop Toggle Button */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "p-2 min-h-[44px] min-w-[44px] rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-colors focus-ring-safe cursor-pointer hidden lg:flex items-center justify-center",
                  isExpanded ? "order-last ml-auto -mr-2" : ""
                )}
                aria-label="Toggle Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className={cn(isExpanded ? "w-auto" : "mt-1")}>
                <Brand isExpanded={isExpanded} name={brandName} subtitle={brandSubtitle} />
              </div>
            </div>
          </div>

          {/* Navigation Structure */}
          <nav className={cn(
            "flex mt-2 pb-2 flex-1 transition-all duration-300",
            isExpanded ? "flex-col px-3 gap-1" : "flex-col items-center gap-1 px-2"
          )}>
            <div className={cn(
              "px-3 transition-all duration-300 overflow-hidden",
              isExpanded ? "mb-2 mt-2 opacity-100 max-h-8" : "mb-0 mt-0 opacity-0 max-h-0"
            )}>
              <h3 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.1em] whitespace-nowrap">Main Menu</h3>
            </div>
            {items.map((item) => (
              <button
                key={item.name}
                onClick={() => onItemClick?.(item)}
                className={cn(
                  "flex items-center w-full transition-all duration-300 focus:outline-none cursor-pointer group min-h-[44px] rounded-xl overflow-hidden",
                  isExpanded ? "px-3 gap-3" : "px-0 justify-center",
                  item.active ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2)]' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                )}
                title={!isExpanded ? item.name : undefined}
                aria-label={item.name}
              >
                <item.icon className={cn(
                  "shrink-0 transition-colors", 
                  isExpanded ? "w-[18px] h-[18px]" : "w-6 h-6",
                  item.active 
                    ? "text-sky-800 dark:text-sky-200" 
                    : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                )} strokeWidth={item.active ? 2.5 : 2} />
                
                <span className={cn(
                  "text-sm font-medium tracking-tight whitespace-nowrap transition-all duration-300",
                  isExpanded ? "opacity-100 translate-x-0 w-auto" : "opacity-0 -translate-x-4 w-0"
                )}>
                  {item.name}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className={cn(
          "flex pb-2 pt-2 border-t border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-slate-950 shrink-0 overflow-hidden",
          isExpanded ? "flex-col p-3 gap-1" : "flex-col items-center gap-1 p-2"
        )}>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={cn(
              "w-full flex items-center min-h-[44px] text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer transition-all duration-300 focus-ring-safe group overflow-hidden",
              isExpanded ? "px-3 justify-between" : "px-0 justify-center"
            )}
            title={!isExpanded ? "Toggle theme" : undefined}
            aria-label="Toggle theme"
          >
            <div className={cn("flex items-center whitespace-nowrap transition-all duration-300", isExpanded ? "gap-3" : "gap-0")}>
              {theme === 'dark' && !isExpanded ? (
                <Sun className={cn("shrink-0 transition-colors text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300", isExpanded ? "w-[18px] h-[18px]" : "w-6 h-6")} />
              ) : (
                <Moon className={cn("shrink-0 transition-colors text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300", isExpanded ? "w-[18px] h-[18px]" : "w-6 h-6")} />
              )}
              
              <span className={cn(
                "transition-all duration-300",
                isExpanded ? "opacity-100 w-auto translate-x-0" : "opacity-0 w-0 -translate-x-4"
              )}>
                Dark mode
              </span>
            </div>
            {isExpanded && (
              <div className={cn("w-8 h-4.5 rounded-full relative transition-colors shrink-0", theme === 'dark' ? 'bg-sky-500' : 'bg-gray-200')}>
                <div className={cn("w-3.5 h-3.5 bg-white rounded-full absolute top-[2px] shadow-sm transition-all", theme === 'dark' ? 'left-[16px]' : 'left-[2px]')}></div>
              </div>
            )}
          </button>
          <button 
            className={cn(
              "w-full flex items-center min-h-[44px] text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 focus-ring-safe cursor-pointer group whitespace-nowrap overflow-hidden",
              isExpanded ? "px-3 gap-3" : "px-0 justify-center gap-0"
            )}
            title={!isExpanded ? "Profile" : undefined}
            aria-label="Profile"
          >
            <User className={cn("shrink-0 transition-colors text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300", isExpanded ? "w-[18px] h-[18px]" : "w-6 h-6")} />
            <span className={cn(
              "transition-all duration-300",
              isExpanded ? "opacity-100 w-auto translate-x-0" : "opacity-0 w-0 -translate-x-4"
            )}>
              Profile
            </span>
          </button>
          <button 
            className={cn(
              "w-full flex items-center min-h-[44px] text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 focus-ring-safe cursor-pointer group whitespace-nowrap overflow-hidden",
              isExpanded ? "px-3 gap-3" : "px-0 justify-center gap-0"
            )}
            title={!isExpanded ? "Help" : undefined}
            aria-label="Help"
          >
            <HelpCircle className={cn("shrink-0 transition-colors text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300", isExpanded ? "w-[18px] h-[18px]" : "w-6 h-6")} />
            <span className={cn(
              "transition-all duration-300",
              isExpanded ? "opacity-100 w-auto translate-x-0" : "opacity-0 w-0 -translate-x-4"
            )}>
              Help and resource
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
