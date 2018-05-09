import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Article from './Article';
import {articles} from './data';

function HelloWorld() {
    return <h1>Hello world</h1>
}

ReactDOM.render(<Article article = { articles[0]} />, document.getElementById('root'));
// registerServiceWorker();
