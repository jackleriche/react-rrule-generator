import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DatePicker from 'react-datepicker';

import 'moment/min/locales';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DATE_TIME_FORMAT } from '../../constants/index';
import translateLabel from '../../utils/translateLabel';

const EndOnDate = ({
    id,
    onDate: { date, options },
    handleChange,
    translations,
}) => {
    const CustomCalendar = options.calendarComponent;

    const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
    const calendarAttributes = {
        'aria-label': translateLabel(translations, 'end.tooltip'),
        value: date,
        dateFormat: DATE_TIME_FORMAT,
        locale,
        readOnly: true,
    };

    const [endDate, setEndDate] = useState();
    const handleDateChange = date => {
        setEndDate(date);

        const editedEvent = {
            target: {
                value: moment(date),
                name: 'end.onDate.date',
            },
        };

        handleChange(editedEvent);
    };
    const [endDate, setEndDate] = useState(new Date());
    const handleDateChange = date => {
        setEndDate(date);

    return (
        <div className="col-6 col-sm-3">
            <DatePicker
                selected={endDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Please select an end date"
            />

        </div>
    );
};

EndOnDate.propTypes = {
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

export default EndOnDate;
