import React from "react";
import Image from "next/image";

export default function MarqueeItems({ text, img }) {
  return (
    <>
      <span>{text}</span>
      <div className="marquee-img">
        <Image src={img} className="img" alt={text} />
      </div>
    </>
  );
}
