import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { setRange, resetDateRange } from '../../AC';

import './dateRange.css';

class DateRange extends PureComponent {
  static defaultProps = {
    numberOfMonths: 2
  };

  static propTypes = {
    numberOfMonths: PropTypes.number,
    // from connect
    range: PropTypes.shape({
      from: PropTypes.date,
      to: PropTypes.date
    }),
    setRange: PropTypes.func.isRequired,
    resetDateRange: PropTypes.func.isRequired
  };

  handleDayClick = (day) => {
    const { range, setRange } = this.props;
    setRange(DateUtils.addDayToRange(day, range));
  };

  handleResetClick = () => {
    const { resetDateRange } = this.props;
    resetDateRange();
  };

  getInfoControll = () => {
    const { from, to } = this.props.range;
    return (
      <p>
        {!from && !to && 'Please select the first day.'}
        {from && !to && 'Please select the last day.'}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
        {from &&
          to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
      </p>
    );
  };

  render() {
    const { from, to } = this.props.range;
    const modifiers = { start: from, end: to };
    return (
      <div className="date-range">
        {this.getInfoControll()}
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    range: state.filters.dateRange
  }),
  {
    setRange,
    resetDateRange
  }
)(DateRange);
