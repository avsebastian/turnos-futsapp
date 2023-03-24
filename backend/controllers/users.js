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

const createUserBooking = async (req, res) => {
  try {
    const bookings = await userRepository.createUserBooking(req.body, req.params.userId)

    res.json({ bookings })
  } catch (error) {
    res.status(500).json({ error });
  }
}

const getAllBookingsByUserId = async (req, res) => {
  try {
    const bookings = await userRepository.getAllBookingsByUserId(req.params.userId)

    res.json({ bookings })
  } catch (error) {
    res.status(500).json({ error });
  }
}

const login = async (req, res) => {
  try {
    const user = await userRepository.login(req.body);

    if (user) {
      res.json("Ingreso exitoso")
    } else {
      res.status(401).json("Ingreso no autorizado");
    }
  } catch (error)  {
    res.status(401).json("Ingreso no autorizado");
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  createUserBooking,
  getAllBookingsByUserId,
  login
}