import React from 'react';
import './App.css';
import Time from "./Time";
import {ChatGpt} from "./ChatGpt";
import {ButtonClick} from "./ButtonClick";


const App: React.FC = () => {
    return (
        <>
            <Time/>
            <ChatGpt/>
            <ButtonClick/>
        </>
    );
};

export default App;
