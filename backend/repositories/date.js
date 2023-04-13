const Date = require('../models/date.js');

const getAllDates = async () => {
  const dates = await Date.findAll();

  return dates;
};

module.exports = { getAllDates };
