import React from 'react';
import './App.css';
import Time from "./Time";
import {ChatGpt} from "./ChatGpt";



const App: React.FC = () => {
    return (
        <>

            <Time/>
            <ChatGpt/>

        </>
    );
};

export default App;
