import React, {useState} from "react";
import reactLogo from "./assets/react.svg";


export function ButtonClick () {
  const [isVisible, setIsVisible] = useState(false);

  return (
      <div>
          <div>
              <button onClick={() => setIsVisible(!isVisible)}> click learn the 'React' </button>
              {isVisible && <div>
                  <a href="https://reactjs.org" >
                      <img src={reactLogo} className="logo react" alt="React logo"/>
                  </a>
              </div>}
          </div>
      </div>
  );
}