import gsap from "gsap";
import { closestEdge } from "./closestEdge";

export class MenuItem {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.link = this.DOM.el.querySelector("a.menu-item-link");
    this.DOM.marquee = this.DOM.el.querySelector(".marquee");
    this.DOM.marqueeInner = this.DOM.marquee.querySelector(
      ".marquee-inner-wrap"
    );
    this.animationDefaults = { duration: 0.6, ease: "expo" };
    this.initEvents();
  }
  initEvents() {
    this.onMouseEnterFn = (ev) => this.mouseEnter(ev);
    this.DOM.link.addEventListener("mouseenter", this.onMouseEnterFn);
    this.onMouseLeaveFn = (ev) => this.mouseLeave(ev);
    this.DOM.link.addEventListener("mouseleave", this.onMouseLeaveFn);
  }
  mouseEnter(ev) {
    const edge = this.findClosestEdge(ev);

    // set the initial y position for both the marquee and marqueeInner elements
    // for the reveal effect to happen, both start at opposite positions
    // the directions are different depending on the direction the cursor enters the element (bottom or top)
    gsap
      .timeline({ defaults: this.animationDefaults })
      .set(this.DOM.marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(this.DOM.marqueeInner, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([this.DOM.marquee, this.DOM.marqueeInner], { y: "0%" }, 0);
  }
  mouseLeave(ev) {
    const edge = this.findClosestEdge(ev);

    gsap
      .timeline({ defaults: this.animationDefaults })
      .to(this.DOM.marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(this.DOM.marqueeInner, { y: edge === "top" ? "101%" : "-101%" }, 0);
  }
  findClosestEdge(ev) {
    const x = ev.pageX - this.DOM.el.offsetLeft;
    const y = ev.pageY - this.DOM.el.offsetTop;
    return closestEdge(x, y, this.DOM.el.clientWidth, this.DOM.el.clientHeight);
  }
}
