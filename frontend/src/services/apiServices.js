import { API_URL_PRODUCTION as URL_API } from '../config/api';

export default {
  loginEmail: async (data) => {
    try {
      const getDataUser = await fetch(`${URL_API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const respuesta = await getDataUser.json();

      //Error
      if (respuesta.msg) {
        throw respuesta.msg;
      }
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  registerUser: async (data) => {
    try {
      const getDataUser = await fetch(`${URL_API}/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const respuesta = await getDataUser.json();
      //Error
      if (respuesta.msg) {
        throw respuesta.msg;
      }
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  forgotPassword: async (email) => {
    try {
      const responseBack = await fetch(`${URL_API}/forgotPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      });
      const respuesta = await responseBack.json();

      //Error
      if (respuesta.error) {
        throw respuesta;
      }
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  getAllSoccerFields: async () => {
    try {
      
      const res =  await fetch(`${URL_API}/soccerfields`);

      const soccerFields = await res.json();

      console.log('soccerFields fom file apiServices', soccerFields);

      // if (!soccerFields.ok) {
      //   throw soccerFields;
      // }

      return res;
    } catch (error) {
      console.log('getReportes error', error);
      throw error;
    }
  },
};
