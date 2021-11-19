import React from 'react';
import "./Accordion.css"

export default function AccordionSingle({ items }) {
  //items массив объектов
  if (!items?.length > 0) {
    return <></>;
  }

  return <div className="accordions">
    <h1>Single Accordion</h1>
    {items.map((item) => <AccordionItemSingle onClick={() => {console.log('clicked')}} show={item.title} key={item.title} title={item.title} text={item.text}/>)}

    </div>;                       
}
;
//item.title string

function AccordionItemSingle({ show, title, text }) {
  if (show !== title) {
    return <></>
//    return  <div className="accordion-item">
//    <div className="accordion-title">{title}</div>
//    <p className="accordion-text">{text}</p>
//  </div>
  }
console.log(typeof show);

  return (
    <div className="accordion-item">
      <div className="accordion-title">{title}</div>
      {!<p className="accordion-text">{text}</p>}
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

