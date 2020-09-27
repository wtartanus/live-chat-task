import React, { useState } from 'react';

import Loader from './components/Loader';
import ErrorBanner from './components/ErrorBanner';
import LoginSuccessful from './components/LoginSuccessful';
import LoginForm from './components/LoginForm';
import { signIn } from './api';

import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  APP_STATUS,
} from './utils/constants';
import './App.css';

function App() {
  const [appStatus, setAppStatus] = useState(APP_STATUS.REGULAR);
  const [email, setEmail] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isInvalidPassword, setIsInvalidPasswrod] = useState(false);

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
      valid = true;
      setIsInvalidEmail(true);
    }

    if (!password || !PASSWORD_REGEX.test(password)) {
      valid = true;
      setIsInvalidPasswrod(true);
    }
    return valid;
  }


  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      if (proccessValuesValidation()) {
          setAppStatus(APP_STATUS.LOADING);
          await signIn(email, password);
          setAppStatus(APP_STATUS.LOGGED);
      };
    } catch (error) {
      setAppStatus(APP_STATUS.ERROR);
      console.log('error', error);
    }
  }

  return (
    <div className="app">
      { appStatus === APP_STATUS.LOGGED && <LoginSuccessful /> }
      { appStatus === APP_STATUS.LOADING && <Loader />}
      { appStatus === APP_STATUS.ERROR && <ErrorBanner message="Invalid email or password" /> }
      { appStatus !== APP_STATUS.LOGGED && (
        <LoginForm 
          email={email}
          password={password}
          isInvalidEmail={isInvalidEmail}
          isInvalidPassword={isInvalidPassword}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleFormSubmit={handleFormSubmit}
        /> 
      )}
    </div>
  );
}

export default App;
