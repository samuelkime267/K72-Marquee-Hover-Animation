import { MenuItem } from "./menu-item";

export class Menu {
  constructor(el) {
    // .menu element
    this.DOM = { el: el };
    // the menu items
    this.DOM.menuItems = this.DOM.el.querySelectorAll(".menu-item");
    // array of MenuItem
    this.menuItems = [];
    this.DOM.menuItems.forEach((menuItem) =>
      this.menuItems.push(new MenuItem(menuItem))
    );
  }
}
