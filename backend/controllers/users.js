const userRepository = require('../repositories/users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();

  res.status(200).json({ users });
};

const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.userId);

  res.json({ user });
};

const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = userRepository.deleteUser(req.params.userId);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userRepository.updateUser(req.body, req.params.userId);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createUserBooking = async (req, res) => {
  try {
    const bookings = await userRepository.createUserBooking(
      req.body,
      req.params.userId
    );

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllBookingsByUserId = async (req, res) => {
  try {
    const bookings = await userRepository.getAllBookingsByUserId(
      req.params.userId
    );

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userRepository.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Fallo la autenticacion' });
    }
        
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Fallo la autenticacion' });
    }

    const token = jwt.sign(
      { userId: user.id, name: user.name, lastname: user.lastname },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Autenticacion exitosa',
      token: token,
      expiresIn: 86400,
    });
    // if (user) {
    //   res.json('Ingreso exitoso');
    // } else {
    //   res.status(401).json('Ingreso no autorizado');
    // }
  } catch (error) {
    res.status(401).json({ message: 'Ingreso no autorizado' });
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isAlreadyAdded = await userRepository.getUserByEmail(email);

    if (isAlreadyAdded) {
      return res.status(400).json({
        status: 'FAILED',
        message: `Ya existe Usuario con el email '${email}'`,
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userRepository.createUser({
      ...req.body,
      password: hash,
    });

    const token = jwt.sign(
      { userId: user.id, name: user.name, lastname: user.lastname },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'Usuario creado con exito',
      token: token,
      expiresIn: 86400,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  createUserBooking,
  getAllBookingsByUserId,
  login,
  signup,
};
