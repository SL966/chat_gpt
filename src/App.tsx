import React from 'react';
import './App.css';
import Time from "./Time";
import {Chatgpt} from "./Chatgpt";



const App: React.FC = () => {
  return (
      <>
        <Time/>
        <Chatgpt/>
      </>
  );
};

export default App;
