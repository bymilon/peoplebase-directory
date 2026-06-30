import React from 'react';
import { MessageSquare, Target, MessageCircle, CalendarDays } from 'lucide-react';

const kpis = [
  {
    title: 'Candidate message',
    value: '64',
    subtitle: '+12% vs last month',
    icon: MessageSquare,
    iconColor: 'text-purple-500',
  },
  {
    title: 'Open rate',
    value: '58.3%',
    subtitle: '+2.4% vs last month',
    icon: Target,
    iconColor: 'text-purple-500',
  },
  {
    title: 'Candidate replied',
    value: '12',
    subtitle: '+4% vs last month',
    icon: MessageCircle,
    iconColor: 'text-purple-500',
  },
  {
    title: 'Meeting scheduled',
    value: '2',
    subtitle: 'No change',
    icon: CalendarDays,
    iconColor: 'text-purple-500',
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-200 dark:bg-gray-800 gap-px border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
      {kpis.map((kpi) => (
        <div
          key={kpi.title}
          className="p-4 md:p-6 flex flex-col h-full bg-white dark:bg-slate-900"
        >
          <div className="flex items-start gap-2 mb-4">
            <kpi.icon className={`w-4 h-4 shrink-0 mt-0.5 ${kpi.iconColor}`} />
            <span className="text-sm leading-tight text-gray-500 dark:text-gray-400 font-medium">{kpi.title}</span>
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
              <div className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{kpi.value}</div>
              <div className={`text-sm font-medium ${kpi.subtitle.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'}`}>
                {kpi.subtitle}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
