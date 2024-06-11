import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => {
        return (
          <AccordionItem
            currentOpen={currentOpen}
            onOpen={setCurrentOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        );
      })}

      <AccordionItem
        currentOpen={currentOpen}
        onOpen={setCurrentOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li> Make components reuseable </li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
