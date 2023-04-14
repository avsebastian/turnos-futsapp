import axios from 'axios';

const API_BASE_URL = '';

export const AuthService = {
  signup: async (email, password) => {
    try {
      // TODO: agregar un metodo signup al back o usar el create
      const response = await axios.post(`${API_BASE_URL}/create`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al registrarse');
    }
  },
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al iniciar sesión');
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al cerrar sesión');
    }
  },
  getCurrentUser: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el usuario actual');
    }
  },
};
