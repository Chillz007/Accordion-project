import React, { useState } from "react";

export default function AccordionItem({
  num,
  title,
  currentOpen,
  onOpen,
  children,
}) {
  const isOpen = num === currentOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}{" "}
    </div>
  );
}
