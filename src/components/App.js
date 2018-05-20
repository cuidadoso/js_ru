import React, { Component } from 'react';

import { ArticleList, Counter, Filters, UserForm } from './';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters />
        <ArticleList />
      </div>
    );
  }
}

export default App;
