import React from "react";
import MarqueeItems from "./marquee-items.sub";

export default function Marquee({ data }) {
  return (
    <div className="marquee">
      <div className="marquee-inner-wrap">
        <div className="marquee-inner" aria-hidden="true">
          {data.map((data, i) => (
            <MarqueeItems key={i} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
