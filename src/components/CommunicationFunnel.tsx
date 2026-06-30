import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const funnelData = [
  { label: 'Sent', value: 64, percentage: 48, color: 'bg-[#60b6d1]', lightColor: 'bg-[#d8eff5] dark:bg-[#60b6d1]/20' },
  { label: 'Opened', value: 19, percentage: 16.3, color: 'bg-[#5ccb96]', lightColor: 'bg-[#dcf4e9] dark:bg-[#5ccb96]/20' },
  { label: 'Replied', value: 12, percentage: 10.5, color: 'bg-[#5178e1]', lightColor: 'bg-[#dde4fa] dark:bg-[#5178e1]/20' },
  { label: 'Scheduled', value: 2, percentage: 8.2, color: 'bg-[#b062eb]', lightColor: 'bg-[#f1e0fc] dark:bg-[#b062eb]/20' },
];

export default function CommunicationFunnel() {
  return (
    <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm flex flex-col h-full transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Communication Funnel</h2>
        <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col justify-between flex-1 gap-4">
        {funnelData.map((item) => (
          <div key={item.label} className="flex items-center text-sm">
            <div className="w-24 text-gray-900 dark:text-gray-100 font-medium">{item.label}</div>
            
            <div className="flex-1 flex items-center mx-4">
              <div className="w-full flex h-8 rounded-full overflow-hidden">
                <div 
                  className={`${item.color} h-full rounded-full relative z-10`} 
                  style={{ width: `${item.percentage * 1.5}%`, minWidth: '40px' }} 
                />
                <div 
                  className={`${item.lightColor} h-full -ml-4 rounded-r-full`} 
                  style={{ width: `${100 - (item.percentage * 1.5)}%` }} 
                />
              </div>
            </div>

            <div className="w-20 text-right">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{item.value}</span>
              <span className="text-gray-400 dark:text-gray-500 ml-1">({item.percentage}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
