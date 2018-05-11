import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {articles} from './data';
import {App} from './components';

ReactDOM.render(<App articles = {articles}/>, document.getElementById('root'));
