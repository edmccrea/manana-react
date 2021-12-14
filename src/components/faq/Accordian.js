import React, { useState } from 'react';
import faqs from '../../utils/faq';

import './Accordian.scss';

const Accordian = () => {
  const toggle = (i) => {
    if (activeTab === i) {
      return setActiveTab(null);
    }

    setActiveTab(i);
  };
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className='accordian'>
      {faqs.map((item, i) => (
        <div className='accordian-item' onClick={() => toggle(i)} key={i}>
          <div className='item-title'>
            <h3>{item.question}</h3>
            <span>{activeTab === i ? '-' : '+'}</span>
          </div>
          <div
            className={activeTab === i ? 'item-content active' : 'item-content'}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
