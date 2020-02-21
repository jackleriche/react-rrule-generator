import React, { useState } from 'react';

import 'moment/min/locales';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function StartOnDate({ handleChange }) {
    const [startDate, setStartDate] = useState();
    const handleDateChange = date => {
        // strip date
        const day = date.getDate();
        const month = date.getMonth(); //Be careful! January is 0 not 1
        const year = date.getFullYear();

        const cleanDate = new Date();
        cleanDate.setUTCFullYear(year);
        cleanDate.setUTCMonth(month);
        cleanDate.setUTCDate(day);
        cleanDate.setUTCHours(0, 0, 0, 0);

        setStartDate(cleanDate);

        const editedEvent = {
            target: {
                value: cleanDate,
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
}

export default StartOnDate;
