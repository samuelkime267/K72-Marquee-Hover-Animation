import React from "react";
import Marquee from "./marquee.sub";

export default function MenuItem({ title, marquee }) {
  return (
    <div className="menu-item">
      <a className="menu-item-link">{title}</a>
      <Marquee data={marquee} />
    </div>
  );
}
