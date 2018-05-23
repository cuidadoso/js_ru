import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import { ArticleList, Counter, Filters, UserForm } from './';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>Main menu</h2>
            <div>
              <NavLink activeStyle={{ color: 'red' }} to="/counter">
                Counter
              </NavLink>
            </div>
            <div>
              <NavLink activeStyle={{ color: 'red' }} to="/filters">
                Filters
              </NavLink>
            </div>
            <div>
              <NavLink activeStyle={{ color: 'red' }} to="/articles">
                Articles
              </NavLink>
            </div>
          </div>
          <UserForm />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={ArticleList} />
        </div>
      </Router>
    );
  }
}

export default App;
