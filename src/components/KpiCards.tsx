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
    <div className="grid grid-cols-4 gap-0 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-950 overflow-hidden shadow-sm transition-colors">
      {kpis.map((kpi, index) => (
        <div
          key={kpi.title}
          className={`p-5 flex flex-col ${
            index !== kpis.length - 1 ? 'border-r border-gray-200 dark:border-gray-800' : ''
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <kpi.icon className={`w-4 h-4 ${kpi.iconColor}`} />
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{kpi.title}</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{kpi.value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{kpi.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
