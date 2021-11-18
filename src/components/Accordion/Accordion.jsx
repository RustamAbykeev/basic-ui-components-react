import React from 'react';

export default function Accordion({ items }) {
  //items массив объектов
  if (!items?.length > 0) {
    return <></>;
  }

  return <div className="accordions">
    {items.map((item) => <AccordionItem onClick={} show={} key={item.title} title={item.title} text={item.text} />)}
    </div>;
}

function AccordionItem({ title, text, show }) {
  if (show !== title) {
    return <></>
  }
  return (
    <div className="accordion-item">
      <div className="accordion-title">{title}</div>
      <p className="accordion-text">{text}</p>
    </div>
  );
}

// []
// map
// title 

const accItems = [
  { title: 'Acc 1', text: 'Acc 1 text' },
  { title: 'Acc 2', text: 'Acc 2 text' },
  { title: 'Acc 3', text: 'Acc 3 text' },
  { title: 'Acc 4', text: 'Acc 4 text' },
];

{
  /* <Accordion items={accItems}/> */
}
