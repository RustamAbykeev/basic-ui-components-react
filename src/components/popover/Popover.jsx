import { useState } from "react";
import "./popover.css"

export default function Popover({ message, btnText, position }) {

  const [show, setShow] = useState(false);

  return <div className="popover">
    <button className="popover-btn" onClick={() => setShow(!show)}>{btnText}</button>
    {show && <div className={`popover-message ${position || 'right'}`}>{message}</div>}
  </div>;
}

// document.addEventListener('click', () => sum(2,2))

// function sum(x,y) {
//   return x + y
// }

// let result = sum(2,2)

  /* <Popover message="Popover text" btnText="Click me" position="top"/> */

