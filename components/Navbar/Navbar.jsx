import MenuItem from "./index/menu-item.sub";
import { useRef, useEffect } from "react";
import { Menu } from "./logic/menu";
import { NAVBAR_DATA } from "@/data/navbar.data";

export default function Navbar() {
  const menu = useRef();
  useEffect(() => {
    new Menu(menu.current);
  }, []);

  return (
    <nav ref={menu} className="menu">
      {NAVBAR_DATA.map((data, i) => (
        <MenuItem key={i} {...data} />
      ))}
    </nav>
  );
}
