import apiServices from '../services/apiServices';
import authStorage from '../utils/localStorage';

import { store } from '../store';

const initialState = {
  reservas: null,
};

const model = {
  state: initialState,
  reducers: {},
  effects: (dispatch) => ({
    async getAllDatesByCanchaId(formData) {
      try {
        const resBack = await apiServices.getAllDatesByCanchaId(formData);
        this.setState({
          fechas: resBack,
        });
      } catch (error) {
        this.setState({
          error: error.messageError,
        });
      }
    },
    clearState() {
      this.setState(initialState);
    },

    clearError() {
      this.setState({
        error: null,
        message: null,
      });
    },
  }),
};

export default model;
