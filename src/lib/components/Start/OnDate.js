import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import 'moment/min/locales';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DATE_TIME_FORMAT } from '../../constants/index';
import translateLabel from '../../utils/translateLabel';

const StartOnDate = ({
    id,
    onDate: { date, options },
    handleChange,
    translations,
}) => {
    const CustomCalendar = options.calendarComponent;

    const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
    const calendarAttributes = {
        'aria-label': translateLabel(translations, 'start.tooltip'),
        value: date,
        dateFormat: DATE_TIME_FORMAT,
        locale,
        readOnly: true,
    };

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = date => {
        setStartDate(date);

        const editedEvent = {
            target: {
                value: moment.utc(date),
                name: 'start.onDate.date',
            },
        };

        handleChange(editedEvent);
    };

    return (
        <div className="col-6 col-sm-3">
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Please select a start date"
            />
        </div>
    );
};

StartOnDate.propTypes = {
    id: PropTypes.string.isRequired,
    onDate: PropTypes.shape({
        date: PropTypes.string.isRequired,
        options: PropTypes.shape({
            weekStartsOnSunday: PropTypes.bool,
            calendarComponent: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.func,
            ]),
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired,
};

export default StartOnDate;
