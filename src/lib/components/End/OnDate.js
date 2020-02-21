import React, { useState } from 'react';

import 'moment/min/locales';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EndOnDate({ handleChange }) {
    const [endDate, setEndDate] = useState();
    const handleDateChange = date => {
        const day = date.getDate();
        const month = date.getMonth(); //Be careful! January is 0 not 1
        const year = date.getFullYear();

        const cleanDate = new Date();
        cleanDate.setUTCFullYear(year);
        cleanDate.setUTCMonth(month);
        cleanDate.setUTCDate(day);
        cleanDate.setUTCHours(0, 0, 0, 0);

        setEndDate(cleanDate);
        const editedEvent = {
            target: {
                value: cleanDate,
                name: 'end.onDate.date',
            },
        };

        handleChange(editedEvent);
    };

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
}

export default EndOnDate;
