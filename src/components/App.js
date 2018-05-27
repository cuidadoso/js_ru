import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import history from '../history';
import { Counter, Filters, UserForm } from './';
import { ArticlesRoute, NotFoundRoute, CommentsPageRoute } from './routes';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
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
      </ConnectedRouter>
    );
  }
}

export default App;
