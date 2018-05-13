import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
  static defaultProps = {
      articles:[]
  };

  static propTypes = {
      articles: PropTypes.array
  };

  state = {
      selection: null
  };

  changeSelection = selection => {
      this.setState({
          selection
      });
  };

  render() {
      const options = this.props.articles.map(article => ({
          label: article.title,
          value: article.id
      }));
    return (
      <div>
      <Select options = {options}
              value = {this.state.selection}
              onChange = {this.changeSelection}
              multi />
      </div>
    );
  }
}

export default SelectFilter;
