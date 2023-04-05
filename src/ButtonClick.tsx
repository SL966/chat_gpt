import {useState} from "react";


export function ButtonClick () {
  const [isVisible, setIsVisible] = useState(true);

  return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>TEST</button>
        {isVisible && <div>My Text</div>}
      </div>
  );
}