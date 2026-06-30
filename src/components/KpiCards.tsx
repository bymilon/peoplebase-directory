import React from 'react';
import { MessageSquare, Target, MessageCircle, CalendarDays } from 'lucide-react';

const kpis = [
  {
    title: 'Candidate message',
    value: '64',
    subtitle: 'Candidate message',
    icon: MessageSquare,
    iconColor: 'text-purple-500',
  },
  {
    title: 'Open rate',
    value: '58.3%',
    subtitle: 'Open rate',
    icon: Target,
    iconColor: 'text-purple-500',
  },
  {
    title: 'Candidate replied',
    value: '12',
    subtitle: 'Candidate replied',
    icon: MessageCircle,
    iconColor: 'text-purple-500',
  },
  {
    title: 'Meeting scheduled',
    value: '2',
    subtitle: 'Meeting scheduled',
    icon: CalendarDays,
    iconColor: 'text-purple-500',
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border border-gray-200/80 dark:border-gray-800/60 rounded-2xl bg-white dark:bg-[#111827]/80 backdrop-blur-sm overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-300">
      {kpis.map((kpi, index) => (
        <div
          key={kpi.title}
          className={`p-5 md:p-6 flex flex-col border-gray-200/80 dark:border-gray-800/60 ${
            index % 2 === 0 ? 'border-r' : ''
          } ${index < 2 ? 'border-b lg:border-b-0' : ''} ${
            index !== 3 ? 'lg:border-r' : 'lg:border-r-0'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <kpi.icon className={`w-4 h-4 ${kpi.iconColor}`} />
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{kpi.title}</span>
          </div>
          <div className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-1">{kpi.value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{kpi.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
