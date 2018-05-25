import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

import { Counter, Filters, UserForm } from './';
import { ArticlesRoute, NotFoundRoute, CommentsPageRoute } from './routes';

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
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles" component={ArticlesRoute} />
            <Route path="/comments" component={CommentsPageRoute} />
            {/*<Redirect from = '/comments/' to = '/comments/1' />*/}
            <Route path="*" component={NotFoundRoute} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
