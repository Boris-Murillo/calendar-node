const { getDataCalendar } = require("../services/calendar");

const getList = (req, res) => {
    res.send( {data: getDataCalendar()} );
};

const getById = (req, res) => {
    res.send({
        id: 1,
        name: 'John Doe',
    });
}

module.exports = { getList, getById }