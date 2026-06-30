import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sent', value: 64, percentage: 48, color: '#5EC0E0', gradientId: 'cyanGradient', strokeColor: 'rgba(47, 161, 190, 0.3)' },
  { name: 'Opened', value: 19, percentage: 16.3, color: '#66DCA4', gradientId: 'greenGradient', strokeColor: 'rgba(37, 178, 122, 0.3)' },
  { name: 'Replied', value: 12, percentage: 10.5, color: '#5B8CF1', gradientId: 'blueGradient', strokeColor: 'rgba(61, 111, 214, 0.3)' },
  { name: 'Scheduled', value: 2, percentage: 8.2, color: '#B06AF4', gradientId: 'purpleGradient', strokeColor: 'rgba(142, 61, 224, 0.3)' },
];

export default function OutreachConversion() {
  return (
    <div className="chart-container h-full" role="region" aria-label="Pie chart showing outreach conversion rates">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Outreach conversion</h2>
        <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-ring-safe cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-between mt-4">
        <div className="w-[200px] h-[200px] relative md:-ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5EC0E0" />
                  <stop offset="100%" stopColor="#41A8C9" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#66DCA4" />
                  <stop offset="100%" stopColor="#36C48C" />
                </linearGradient>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B8CF1" />
                  <stop offset="100%" stopColor="#4378E9" />
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B06AF4" />
                  <stop offset="100%" stopColor="#9A46EB" />
                </linearGradient>
                <filter id="pieGelEffect" x="-20%" y="-20%" width="140%" height="140%">
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
              </defs>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#${entry.gradientId})`} 
                    filter="url(#pieGelEffect)" 
                    stroke={entry.strokeColor} 
                    strokeWidth={1}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-4 w-full md:flex-1 md:pl-4 mt-6 md:mt-0">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-900 dark:text-gray-100 font-medium">{item.name}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">{item.value}</span>
                <span className="text-gray-400 dark:text-gray-500 ml-1">({item.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
