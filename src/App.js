import React from 'react';
import Header from "./components/Header/Header";

import './app.scss'


function App() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
    return (
        <Header link="Привет" > </Header>

    );
}

export default App;
