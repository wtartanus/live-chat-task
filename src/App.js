import React, { useState, useEffect } from 'react';

import Loader from './components/Loader';
import ErrorBanner from './components/ErrorBanner';
import LoginSuccessful from './components/LoginSuccessful';
import LoginForm from './components/LoginForm';
import { signIn } from './api';

import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  APP_STATUS,
  UNAUTHORIZED_ERROR,
} from './utils/constants';
import './App.css';

function App() {
  const [appStatus, setAppStatus] = useState(APP_STATUS.REGULAR);
  const [email, setEmail] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isInvalidPassword, setIsInvalidPasswrod] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      setEmail(username);
      setPassword(password);
      setRememberMe(true);
    }
  }, []);

  const handleEmailChange = (email) => {
    setAppStatus(APP_STATUS.REGULAR);
    setEmail(email);
    setIsInvalidEmail(false);
  }

  const handlePasswordChange = (password) => {
    setAppStatus(APP_STATUS.REGULAR);
    setPassword(password);
    setIsInvalidPasswrod(false);
  }

  const proccessValuesValidation = () => {
    let valid = true;
    if (!email || !EMAIL_REGEX.test(email)) {
      valid = false;
      setIsInvalidEmail(true);
    }

    if (!password || !PASSWORD_REGEX.test(password)) {
      valid = false;
      setIsInvalidPasswrod(true);
    }

    return valid;
  }


  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      if (rememberMe) {
        localStorage.setItem('username', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.clear();
      }

      if (proccessValuesValidation()) {
          setAppStatus(APP_STATUS.LOADING);
          await signIn(email, password);
          setAppStatus(APP_STATUS.LOGGED);
      };
    } catch (error) {
      setAppStatus(APP_STATUS.ERROR);
    }
  }

  return (
    <div className="app">
      { appStatus === APP_STATUS.LOGGED && <LoginSuccessful /> }
      { appStatus === APP_STATUS.LOADING && <Loader />}
      { appStatus === APP_STATUS.ERROR && <ErrorBanner message={UNAUTHORIZED_ERROR} /> }
      { appStatus !== APP_STATUS.LOGGED && (
        <LoginForm 
          email={email}
          password={password}
          rememberMe={rememberMe}
          isInvalidEmail={isInvalidEmail}
          isInvalidPassword={isInvalidPassword}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleRememberMeChange={(value) => setRememberMe(value)}
          handleFormSubmit={handleFormSubmit}
        /> 
      )}
    </div>
  );
}

export default App;
