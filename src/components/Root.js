import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

import store from '../store';
import {App} from './';

function Root() {
  return (
    <div>
        <Provider store = {store}>
            <App />
        </Provider>
    </div>
  );
}

Root.propTypes = {
    articles: PropTypes.array.isRequired
};
Root.defaultProps = {
    articles: []
};

export default Root;
