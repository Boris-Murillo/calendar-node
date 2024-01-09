const { MOCK_CALENDAR } = require("../models/calendar")

const getDataCalendar = () => {
    console.log('getDataCalendar');
    return MOCK_CALENDAR;
}

module.exports = { getDataCalendar };