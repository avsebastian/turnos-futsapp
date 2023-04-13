const dateRepository = require('../repositories/date');

const getAllDates = async (req, res) => {
  const dates = await dateRepository.getAllDates();

  res.status(200).json({ dates });
};

module.exports = { getAllDates };
