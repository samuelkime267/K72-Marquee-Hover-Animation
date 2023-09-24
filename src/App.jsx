import "./style/App.css";
import { Menu } from "./logic/menu";
import { useEffect, useRef } from "react";

function App() {
  const menu = useRef(null);

  useEffect(() => {
    new Menu(menu.current);
  }, []);

  return (
    <nav ref={menu} className="menu">
      <div className="menu__item">
        <a className="menu__item-link">Guayaquil</a>
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__item">
        <a className="menu__item-link">Guayaquil</a>
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__item">
        <a className="menu__item-link">Guayaquil</a>
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__item">
        <a className="menu__item-link">Guayaquil</a>
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__item">
        <a className="menu__item-link">Guayaquil</a>
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__item">
        <a className="menu__item-link">Guayaquil</a>
        <div className="marquee">
          <div className="marquee__inner-wrap">
            <div className="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
              <span>Frank Tower</span>
              <div className="marquee__img">
                <img src="/img/1.jpg" className="img" alt="" />
              </div>
              <span>Dom Dom</span>
              <div className="marquee__img">
                <img src="/img/2.jpg" className="img" alt="" />
              </div>
              <span>Santa Maria</span>
              <div className="marquee__img">
                <img src="/img/3.jpg" className="img" alt="" />
              </div>
              <span>Big Molly</span>
              <div className="marquee__img">
                <img src="/img/4.jpg" className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
