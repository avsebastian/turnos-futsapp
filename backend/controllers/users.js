const userRepository = require ("../repositories/users.js");


const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();

  res.status(200).json({ users });
};

const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.userId);

  res.json({ user });
}

const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = userRepository.deleteUser(req.params.userId)

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await userRepository.updateUser(req.body, req.params.userId);

    res.json({ user })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
}