import { useEffect, useState } from "react";
import "/src/index.css";

function App() {
  const elementArr = ["yellow", "orange", "red"];
  const [element, setElement] = useState("orange");

  useEffect(() => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  }, [element]);

  function scrollTo(direction) {
    const index = elementArr.indexOf(element);
    if (direction === true) {
      const newEl = elementArr[index + 1];
      setElement(newEl);
      animate(true);
    } else {
      const newEl = elementArr[index - 1];
      setElement(newEl);
      animate(false);
    }
  }

  function animate(direction) {
    const sprite = document.getElementById("sprite");
    if (direction === true) {
      sprite.classList.add("slide_left");
      setTimeout(() => {
        sprite.classList.remove("slide_left");
      }, "1500");
    } else {
      sprite.classList.add("slide_right");
      setTimeout(() => {
        sprite.classList.remove("slide_right");
      }, "1500");
    }
  }

  return (
    <div className="app">
      <nav className="nav_container">
        <button onClick={() => scrollTo(false)}>scroll Left</button>
        <button onClick={() => scrollTo(true)}>scroll right</button>
      </nav>

      <div className="sprite_container">
        <img src="/assets/karatecat.png" className="sprite" id="sprite" />
        <span className="path"></span>
      </div>

      <section className="yellow" id="yellow">
        <img src="/assets/tree.png" />
        <img src="/assets/tree.png" className="tree" />
        <img src="/assets/tree.png" className="tree_2" />
      </section>

      <section className="orange" id="orange">
        <img src="/assets/tree.png" alt="" />
        <img src="/assets/house.png" alt="" />
        <img src="/assets/tree.png" alt="" />
      </section>

      <section className="red" id="red">
        <img src="/assets/house.png" alt="" />
      </section>
    </div>
  );
}

export default App;
