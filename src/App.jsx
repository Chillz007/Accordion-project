import React from "react";
import Accordion from "./components/Accordion";
import { faqs } from "./constant/data";
// import "./assets/index.css";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
