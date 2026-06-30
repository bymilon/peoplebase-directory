import React from 'react';
import { Filter, MoreHorizontal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jun 1', email: 12, linkedin: 18 },
  { name: 'Jun 2', email: 15, linkedin: 14 },
  { name: 'Jun 3', email: 24, linkedin: 12 },
  { name: 'Jun 4', email: 18, linkedin: 25 },
  { name: 'Jun 5', email: 20, linkedin: 22 },
  { name: 'Jun 6', email: 15, linkedin: 18 },
  { name: 'Jun 7', email: 10, linkedin: 14 },
  { name: 'Jun 8', email: 25, linkedin: 16 },
  { name: 'Jun 9', email: 22, linkedin: 20 },
  { name: 'Jun 10', email: 14, linkedin: 28 },
  { name: 'Jun 11', email: 25, linkedin: 19 },
  { name: 'Jun 12', email: 13, linkedin: 24 },
  { name: 'Jun 13', email: 20, linkedin: 28 },
];

export default function MessageSentChart() {
  return (
    <div className="chart-container h-[400px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Message sent</h2>
        <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-6">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#5EC0E0]" />
              <span className="text-gray-600 dark:text-gray-400">Email</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#5B8CF1]" />
              <span className="text-gray-600 dark:text-gray-400">LinkedIn</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer">
              <Filter className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              Filter
            </button>
            <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
            barSize={32}
          >
            <defs>
              <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5EC0E0" />
                <stop offset="100%" stopColor="#41A8C9" />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5B8CF1" />
                <stop offset="100%" stopColor="#4378E9" />
              </linearGradient>
              <filter id="gelEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow in="SourceGraphic" dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.06" result="drop"/>
                <feOffset dx="0" dy="2" in="SourceAlpha" result="offset1"/>
                <feComposite operator="out" in="SourceAlpha" in2="offset1" result="inverse1"/>
                <feFlood floodColor="white" floodOpacity="0.4" result="color1"/>
                <feComposite operator="in" in="color1" in2="inverse1" result="highlight"/>
                <feOffset dx="0" dy="-2" in="SourceAlpha" result="offset2"/>
                <feComposite operator="out" in="SourceAlpha" in2="offset2" result="inverse2"/>
                <feFlood floodColor="black" floodOpacity="0.1" result="color2"/>
                <feComposite operator="in" in="color2" in2="inverse2" result="shadow"/>
                <feMerge>
                  <feMergeNode in="drop"/>
                  <feMergeNode in="highlight"/>
                  <feMergeNode in="shadow"/>
                </feMerge>
              </filter>
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="url(#blueGradient)" />
                <line x1="0" y1="0" x2="0" y2="8" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
              </pattern>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" strokeOpacity={0.1} className="text-gray-200 dark:text-gray-800" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              ticks={[0, 10, 20, 30, 40, 50]}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(156, 163, 175, 0.05)' }}
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(8px)',
                borderRadius: '8px', 
                border: '1px solid rgba(229, 231, 235, 0.8)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              itemStyle={{ color: '#111827', fontSize: '14px', fontWeight: 500 }}
              labelStyle={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px' }}
            />
            {/* The base stack item */}
            <Bar dataKey="email" stackId="a" fill="url(#cyanGradient)" filter="url(#gelEffect)" radius={[0, 0, 4, 4]} stroke="rgba(47, 161, 190, 0.3)" strokeWidth={1} />
            {/* The top stack item with pattern */}
            <Bar dataKey="linkedin" stackId="a" fill="url(#diagonalHatch)" filter="url(#gelEffect)" radius={[4, 4, 0, 0]} stroke="rgba(61, 111, 214, 0.3)" strokeWidth={1} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
