import { createContext, useState, useEffect } from 'react';
import { AuthService } from '../services/AuthService';

const LOCAL_STORAGE_KEY = 'auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null
  );
  const isLoggedIn = !!currentUser;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUser));
  }, [currentUser]);

  const signup = async (email, password) => {
    try {
      const user = await AuthService.signup(email, password);
      setCurrentUser(user);
    } catch (error) {
      console.error(error);
      throw new Error('Error al registrarse');
    }
  };

  const login = async (email, password) => {
    try {
      const user = await AuthService.login(email, password);
      setCurrentUser(user);
    } catch (error) {
      console.error(error);
      throw new Error('Error al iniciar sesión');
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
      throw new Error('Error al cerrar sesión');
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, isLoggedIn, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
