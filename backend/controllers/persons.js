const personRepository = require ("../repositories/persons.js");


const getAllPersons = async (req, res) => {
  const persons = await personRepository.getAllPersons();

  res.status(200).json({ persons });
};

const getPersonById = async (req, res) => {
  const person = await personRepository.getPersonById(req.params.personId);

  res.json({ person });
}

const createPerson = async (req, res) => {
  try {
    const person = await personRepository.createPerson(req.body);

    res.json({ person });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deletePerson = async (req, res) => {
  try {
    const person = personRepository.deletePerson(req.params.personId)

    res.json({ person });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updatePerson = async (req, res) => {
  try {
    const person = await personRepository.updatePerson(req.body, req.params.personId);

    res.json({ person })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
  getPersonById,
}