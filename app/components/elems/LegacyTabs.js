import React from 'react';

export default function LegacyTabs({ activeTab, setActiveTab }) {
  const items = [
    { label: 'All legacy', styles: '' },
    { label: 'My legacy', styles: 'pl-6'},
  ]
  return (
    <div className="flex flex-row justify-center items-center underline underline-offset-8 decoration-2 decoration-slate-400 opacity-99">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`${index+1 === activeTab ? `text-primary underline underline-offset-8 decoration-2` : 'text-white hover:text-primary  '} ${item.styles} font-amiger uppercase text-[27px] cursor-pointer`}
          onClick={() => setActiveTab(index+1)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}