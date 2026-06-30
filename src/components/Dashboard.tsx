import React from 'react';
import KpiCards from './KpiCards';
import CommunicationFunnel from './CommunicationFunnel';
import OutreachConversion from './OutreachConversion';
import SequenceStepActivity from './SequenceStepActivity';
import MessageSentChart from './MessageSentChart';

export default function Dashboard() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-6">
      <KpiCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
        <CommunicationFunnel />
        <OutreachConversion />
      </div>

      <SequenceStepActivity />
      
      <MessageSentChart />
    </div>
  );
}
