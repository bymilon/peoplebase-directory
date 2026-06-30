import React from 'react';
import { Calendar, Filter, MoreHorizontal, MessageSquare, PenTool, User } from 'lucide-react';

const tableData = [
  {
    subject: 'Software Engineer',
    subjectIcon: MessageSquare,
    subjectIconColor: 'text-[#5EC0E0]',
    subjectIconBg: 'bg-[#E6F6FB] dark:bg-[rgba(94,192,224,0.12)]',
    senderName: 'Anthony beane',
    sent: 21,
    sentPercentage: 92,
    opened: 13,
    openedPercentage: 71,
    replied: 7,
    repliedPercentage: 45,
    scheduled: 0,
    scheduledPercentage: 0,
  },
  {
    subject: 'Copywriter',
    subjectIcon: PenTool,
    subjectIconColor: 'text-[#B06AF4]',
    subjectIconBg: 'bg-[#F1E6FB] dark:bg-[rgba(176,106,244,0.12)]',
    senderName: 'Anthony beane',
    sent: 19,
    sentPercentage: 83,
    opened: 9,
    openedPercentage: 37,
    replied: 5,
    repliedPercentage: 56,
    scheduled: 2,
    scheduledPercentage: 5,
  },
];

export default function SequenceStepActivity() {
  return (
    <div className="chart-container !p-0 overflow-hidden">
      <div className="p-4 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800/50">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Sequence step activity</h2>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer">
            <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            Weekly
            <div className="ml-1">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-500" />
              </svg>
            </div>
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer">
            <Filter className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            Filter
          </button>
          <button className="p-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 cursor-pointer">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[700px]">
          <thead className="text-gray-400 dark:text-gray-500 font-medium bg-gray-50/50 dark:bg-gray-900/20">
            <tr>
              <th className="px-4 md:px-5 py-3 font-normal">Subject</th>
              <th className="px-4 md:px-5 py-3 font-normal">Sender</th>
              <th className="px-4 md:px-5 py-3 font-normal text-right">Sent</th>
              <th className="px-4 md:px-5 py-3 font-normal text-right">Opened</th>
              <th className="px-4 md:px-5 py-3 font-normal text-right">Replied</th>
              <th className="px-4 md:px-5 py-3 font-normal text-right">Scheduled</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-400">
            {tableData.map((row, index) => (
              <tr key={index} className="border-t border-gray-100 dark:border-gray-800/50 hover:bg-gray-50/80 dark:hover:bg-gray-900/50 transition-colors">
                <td className="px-4 md:px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${row.subjectIconBg}`}>
                      <row.subjectIcon className={`w-3.5 h-3.5 ${row.subjectIconColor}`} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{row.subject}</span>
                  </div>
                </td>
                <td className="px-4 md:px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">{row.senderName}</span>
                  </div>
                </td>
                <td className="px-4 md:px-5 py-4 whitespace-nowrap text-right">
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{row.sent}</span>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">({row.sentPercentage}%)</span>
                </td>
                <td className="px-4 md:px-5 py-4 whitespace-nowrap text-right">
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{row.opened}</span>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">({row.openedPercentage}%)</span>
                </td>
                <td className="px-4 md:px-5 py-4 whitespace-nowrap text-right">
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{row.replied}</span>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">({row.repliedPercentage}%)</span>
                </td>
                <td className="px-4 md:px-5 py-4 whitespace-nowrap text-right">
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{row.scheduled}</span>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">({row.scheduledPercentage}%)</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
