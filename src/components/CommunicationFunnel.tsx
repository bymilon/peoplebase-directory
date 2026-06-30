import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const funnelData = [
  { 
    label: 'Sent', value: 64, percentage: 48, 
    gradient: 'linear-gradient(90deg, #5EC0E0 0%, #41A8C9 100%)', 
    trackLight: '#E6F6FB', trackDark: 'rgba(94, 192, 224, 0.12)',
    stroke: 'inset 0 0 0 1px rgba(47, 161, 190, 0.3)',
    shadow: '0px 2px 4px rgba(0, 0, 0, 0.06)'
  },
  { 
    label: 'Opened', value: 19, percentage: 16.3, 
    gradient: 'linear-gradient(90deg, #66DCA4 0%, #36C48C 100%)', 
    trackLight: '#E7FAF2', trackDark: 'rgba(102, 220, 164, 0.12)',
    stroke: 'inset 0 0 0 1px rgba(37, 178, 122, 0.3)',
    shadow: '0px 2px 4px rgba(0, 0, 0, 0.06)'
  },
  { 
    label: 'Replied', value: 12, percentage: 10.5, 
    gradient: 'linear-gradient(90deg, #5B8CF1 0%, #4378E9 100%)', 
    trackLight: '#E7EEFD', trackDark: 'rgba(91, 140, 241, 0.12)',
    stroke: 'inset 0 0 0 1px rgba(61, 111, 214, 0.3)',
    shadow: '0px 2px 4px rgba(0, 0, 0, 0.06)'
  },
  { 
    label: 'Scheduled', value: 2, percentage: 8.2, 
    gradient: 'linear-gradient(90deg, #B06AF4 0%, #9A46EB 100%)', 
    trackLight: '#F1E6FB', trackDark: 'rgba(176, 106, 244, 0.12)',
    stroke: 'inset 0 0 0 1px rgba(142, 61, 224, 0.3)',
    shadow: '0px 2px 4px rgba(0, 0, 0, 0.06)'
  },
];

export default function CommunicationFunnel() {
  return (
    <div className="chart-container h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Communication Funnel</h2>
        <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col justify-between flex-1 gap-4">
        {funnelData.map((item) => (
          <div key={item.label} className="flex items-center text-sm">
            <div className="w-24 text-gray-900 dark:text-gray-100 font-medium">{item.label}</div>
            
            <div className="flex-1 flex items-center mx-4">
              <div 
                className="w-full flex h-[32px] rounded-full overflow-hidden transition-colors bg-[var(--track-bg-light)] dark:bg-[var(--track-bg-dark)]"
                style={{
                  '--track-bg-light': item.trackLight,
                  '--track-bg-dark': item.trackDark,
                } as React.CSSProperties}
              >
                <div 
                  className="h-full rounded-full relative z-10 dark:opacity-90" 
                  style={{ 
                    width: `${item.percentage * 1.5}%`, 
                    minWidth: '40px',
                    background: item.gradient,
                    boxShadow: `${item.stroke}, ${item.shadow}`
                  }} 
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
