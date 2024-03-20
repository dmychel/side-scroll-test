import { useEffect, useState } from "react";
import "/src/index.css";
import { ssrExportAllKey } from "vite/runtime";

function App() {
  const elementArr = ['yellow', 'orange', 'red']
  const [element, setElement] = useState('orange')



  useEffect(() => {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth' })
  }, [element])

  function scrollTo(direction) {
    const index = elementArr.indexOf(element)
    if (direction === true) {
      const newEl = elementArr[index + 1]
      setElement(newEl)
      console.log(newEl)
    }
    else {
      const newEl = elementArr[index - 1]
      setElement(newEl)
      console.log(newEl)
    }
    // console.log(index)
    console.log(direction)
    // console.log(element)
  }

  return (
    <div className="app">
      <div className="sprite-container">
        <span className="sprite"></span>
        <nav>
          <button onClick={() => scrollTo(false)}>scroll Left</button>
          <button onClick={() => scrollTo(true)}>scroll right</button>
        </nav>
      </div>
      <section className="yellow" id="yellow">
        <h1>Left</h1>
      </section>

      <section className="orange" id="orange">
        <h1>Middle</h1>
      </section>

      <section className="red" id="red">
        <h1>Right</h1>
      </section>
    </div>
  );
}

export default App;
