import { DateTime } from 'luxon';//'./luxon.js'
export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
};
