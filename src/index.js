import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ArticleList} from './components';
import {articles} from './data';

function HelloWorld() {
    return <h1>Hello world</h1>
}

ReactDOM.render(<ArticleList articles = { articles} />, document.getElementById('root'));
// registerServiceWorker();
