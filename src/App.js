import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';



function App({articles}) {

    return (
        <div className="App">
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
