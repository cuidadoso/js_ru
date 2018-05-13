import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Root} from './components';
import {articles} from './data';

ReactDOM.render(<Root articles = {articles}/>, document.getElementById('root'));
