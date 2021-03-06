import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import history from '../history';
import { Counter, Filters, LangProvider, UserForm } from './';
import { ArticlesRoute, NotFoundRoute, CommentsPageRoute } from './routes';

class App extends Component {
  static childContextTypes = {
    user: PropTypes.string
  };

  state = {
    userName: '',
    language: 'ru'
  };

  getChildContext() {
    return {
      user: this.state.userName
    };
  }

  handleUserChange = (userName) => {
    this.setState({
      userName
    });
  };

  changeLanguage = (language) => (ev) => this.setState({ language });

  render() {
    return (
      <ConnectedRouter history={history}>
        <LangProvider language={this.state.language}>
          <div>
            <ul>
              <li onClick={this.changeLanguage('en')}>English</li>
              <li onClick={this.changeLanguage('ru')}>Русский</li>
            </ul>
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
            <UserForm
              value={this.state.userName}
              onChange={this.handleUserChange}
            />
            <Switch>
              <Route path="/counter" component={Counter} />
              <Route path="/filters" component={Filters} />
              <Route path="/articles" component={ArticlesRoute} />
              <Route path="/comments" component={CommentsPageRoute} />
              {/*<Redirect from = '/comments/' to = '/comments/1' />*/}
              <Route path="*" component={NotFoundRoute} />
            </Switch>
          </div>
        </LangProvider>
      </ConnectedRouter>
    );
  }
}

export default App;
