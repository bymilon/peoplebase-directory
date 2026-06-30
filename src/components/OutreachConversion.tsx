import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sent', value: 64, percentage: 48, color: '#60b6d1' },
  { name: 'Opened', value: 19, percentage: 16.3, color: '#5ccb96' },
  { name: 'Replied', value: 12, percentage: 10.5, color: '#5178e1' },
  { name: 'Scheduled', value: 2, percentage: 8.2, color: '#b062eb' },
];

export default function OutreachConversion() {
  return (
    <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm flex flex-col h-full transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Outreach conversion</h2>
        <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-between mt-4">
        <div className="w-[200px] h-[200px] relative -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
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
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-4 flex-1 pl-4">
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
