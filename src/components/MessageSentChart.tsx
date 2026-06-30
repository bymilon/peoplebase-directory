import React from 'react';
import { Filter, MoreHorizontal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jun 1', email: 8, linkedin: 13 },
  { name: 'Jun 2', email: 0, linkedin: 0 },
  { name: 'Jun 3', email: 0, linkedin: 0 },
  { name: 'Jun 4', email: 0, linkedin: 0 },
  { name: 'Jun 5', email: 10, linkedin: 13 },
  { name: 'Jun 6', email: 0, linkedin: 0 },
  { name: 'Jun 7', email: 0, linkedin: 0 },
  { name: 'Jun 8', email: 5, linkedin: 6 },
  { name: 'Jun 9', email: 0, linkedin: 0 },
  { name: 'Jun 10', email: 14, linkedin: 8 },
  { name: 'Jun 11', email: 5, linkedin: 9 },
  { name: 'Jun 12', email: 3, linkedin: 4 },
  { name: 'Jun 13', email: 20, linkedin: 12 },
];

export default function MessageSentChart() {
  return (
    <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-5 flex flex-col h-[400px] transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Message sent</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#4eb4cc]" />
              <span className="text-gray-600 dark:text-gray-400">Email</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#5178e1]" />
              <span className="text-gray-600 dark:text-gray-400">LinkedIn</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Filter className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              Filter
            </button>
            <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
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
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="#5178e1" />
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
            {/* The base stack item */}
            <Bar dataKey="email" stackId="a" fill="#4eb4cc" radius={[0, 0, 4, 4]} />
            {/* The top stack item with pattern */}
            <Bar dataKey="linkedin" stackId="a" fill="url(#diagonalHatch)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
