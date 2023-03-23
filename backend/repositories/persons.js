const Person = require("../models/person.js");

const getAllPersons = async () => {
  const persons = await Person.findAll();

  return persons;
};

const getPersonById = async (personId) => {
  const person = await Person.findByPk(personId);

  return person;
};

/**
 * Create persons
 * @param {*} personData 
 * @returns 
 */
const createPerson = async (personData) => {
  try {
    const person = await Person.create(personData);

    return person;
  } catch (error) {
    return error;
  }
};

const deletePerson = async (personId) => {
  try {
    const person = await Person.destroy({
      where: {
        id: personId,
      },
    });

    return person;
  } catch (error) {
    return error;
  }
};

const updatePerson = async (personData, personId) => {
  try {
    await Person.update(personData, {
      where: {
        id: personId,
      },
    });

    const person = await Person.findByPk(personId);

    return person;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
  getPersonById,
};
