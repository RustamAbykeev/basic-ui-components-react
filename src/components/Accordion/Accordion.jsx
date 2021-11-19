import React from 'react';
import "./Accordion.css"
import { useState } from 'react';

export default function Accordion({ items }) {
  //items массив объектов
  if (!items?.length > 0) {
    return <></>;
  }
//show true or false - не булево значение???
// если true то рендерим текстовый блок
//if acccordeon item is clicked show changes its value

  return <div className="accordions">
    <h1>Multi Accordion</h1>
    {items.map((item) => <AccordionItem key={item.title} title={item.title} text={item.text}/>)}

    </div>;                       
}
;
//item.title string

function AccordionItem({ title, text }) {
  
  // if (show !== title) {
  //  return <></>
  // }
  const [showAcc, setShowAcc] = useState(false);

  return (
    
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setShowAcc(!showAcc)}>{title}</div>
      {showAcc && <p className="accordion-text">{text}</p>}
    </div>
    
  );
}



// const accItems = [
//   { title: 'Acc 1', text: 'Acc 1 text' },
//   { title: 'Acc 2', text: 'Acc 2 text' },
//   { title: 'Acc 3', text: 'Acc 3 text' },
//   { title: 'Acc 4', text: 'Acc 4 text' },
// ];


  /* <Accordion items={accItems}/> */

