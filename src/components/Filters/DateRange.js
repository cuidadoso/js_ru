import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './dateRange.css';

class DateRange extends PureComponent {
    static defaultProps = {
        numberOfMonths: 2,
    };

    static propTypes = {
        numberOfMonths: PropTypes.number,
    };

    state = {
        from: null,
        to: null,
    };

    handleDayClick = (day) => {
        this.setState(DateUtils.addDayToRange(day, this.state));
    };

    handleResetClick = () => {
        this.setState({
            from: null,
            to: null,
        });
    };

    getInfoControll = () => {
        const { from, to } = this.state;
        return <p>
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
        </p>;
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
       return(
         <div  className="date-range">
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
    };
}

export default DateRange;
