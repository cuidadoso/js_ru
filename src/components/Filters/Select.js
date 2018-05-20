import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { setSelection } from '../../AC';
import { mapToArr } from '../../helpers';

class SelectFilter extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array,
    selection: PropTypes.array,
    setSelection: PropTypes.func.isRequired
  };

  changeSelection = (selection) => {
    const { setSelection } = this.props;
    setSelection(selection.map((option) => option.value));
  };

  render() {
    const options = this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }));
    return (
      <div>
        <Select
          options={options}
          value={this.props.selection}
          onChange={this.changeSelection}
          multi
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    articles: mapToArr(state.articles),
    selection: state.filters.selection
  }),
  { setSelection }
)(SelectFilter);
