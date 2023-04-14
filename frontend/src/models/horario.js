import apiServices from '../services/apiServices';
import authStorage from '../utils/localStorage';

import { store } from '../store';

const initialState = {
  horarios: null,
};

const model = {
  state: initialState,
  reducers: {},
  effects: (dispatch) => ({
    async getAllTimesByCanchaId(formData) {
      try {      
        const resBack = await apiServices.getAllTimesByCanchaId(formData.canchaId, formData.fecha);
      
        this.setState({
          horarios: resBack,
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
