import RRule from 'rrule';

import computeStart from './computeStart';
import computeRepeat from './computeRepeat';
import computeEnd from './computeEnd';
import computeOptions from './computeOptions';

const computeRRule = ({ start, repeat, end, options }) => {
    const rruleObject = {
        ...computeStart(start),
        ...computeRepeat(repeat),
        ...computeEnd(end),
        ...computeOptions(options),
        tzid: 'Europe/London',
    };

    console.log({ rruleObject });
    const rrule = new RRule(rruleObject);
    return rrule.toString();
};

export default computeRRule;
