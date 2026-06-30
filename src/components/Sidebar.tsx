import React from 'react';
import {
  Home,
  Users,
  CircleDollarSign,
  BarChart2,
  Settings,
  Workflow,
  Moon,
  User,
  HelpCircle,
  ArrowLeftToLine,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Employee', icon: Users },
  { name: 'Payroll', icon: CircleDollarSign },
  {
    name: 'Reports',
    icon: BarChart2,
    active: true,
    subItems: [
      { name: 'Communications insights', active: true },
      { name: 'Pipeline insights' },
      { name: 'Team activity' },
    ],
  },
  { name: 'HR settings', icon: Settings },
  { name: 'Workflow automation', icon: Workflow },
];

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <aside className="w-[240px] border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col justify-between flex-shrink-0 h-full overflow-y-auto transition-colors">
      <div className="flex-1 overflow-y-auto">
        <div className="h-16 flex items-center justify-between px-6 border-b border-transparent">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center text-blue-600 dark:text-blue-400 blur-[2px] opacity-70">
            </div>
            <div className="h-3.5 w-16 bg-gray-300 dark:bg-gray-700 rounded blur-[1.5px]"></div>
          </div>
          <button className="p-1 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md text-gray-400 dark:text-gray-500 transition-colors">
            <ArrowLeftToLine className="w-3.5 h-3.5" />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              <button
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  item.active
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                )}
              >
                <item.icon className={cn("w-4 h-4 shrink-0", item.active ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500")} />
                {item.name}
              </button>
              {item.subItems && (
                <div className="mt-1 ml-4 border-l border-gray-200 dark:border-gray-800 pl-4 py-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.name}
                      className={cn(
                        'w-full text-left px-3 py-1.5 text-sm font-medium rounded-lg transition-colors',
                        subItem.active
                          ? 'bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      )}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 space-y-1">
        <div 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center justify-between px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <Moon className="w-4 h-4 shrink-0" />
            Dark mode
          </div>
          <div className={cn("w-9 h-5 rounded-full relative transition-colors", theme === 'dark' ? 'bg-[#4eb4cc]' : 'bg-gray-200')}>
            <div className={cn("w-4 h-4 bg-white rounded-full absolute top-0.5 shadow-sm transition-all", theme === 'dark' ? 'left-[18px]' : 'left-0.5')}></div>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
          <User className="w-4 h-4 shrink-0" />
          Profile
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
          <HelpCircle className="w-4 h-4 shrink-0" />
          Help and resource
        </button>
      </div>
    </aside>
  );
}
