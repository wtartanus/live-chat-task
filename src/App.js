import React, { useState } from 'react';

import AppInput from './components/AppInput';
import AppCheckbox from './components/AppCheckbox';
import Loader from './components/Loader';
import { signIn } from './api';

import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  INVALID_PASSWORD_ERROR,
  INVALID_EMAIL_ERROR,
  APP_STATUS,
} from './utils/constants';
import './App.css';

function App() {
  const [appStatus, setAppStatus] = useState(APP_STATUS.REGULAR);
  const [email, setEmail] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isInvalidPassword, setIsInvalidPasswrod] = useState(false);


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!email || !EMAIL_REGEX.test(email)) {
      setIsInvalidEmail(true);
    }

    if (!password || !PASSWORD_REGEX.test(password)) {
      setIsInvalidPasswrod(true);
    }

    if (isInvalidEmail || isInvalidPassword) return;

    try {
      setAppStatus(APP_STATUS.LOADING);
      await signIn(email, password);
      setAppStatus(APP_STATUS.REGULAR);
    } catch (error) {
      setAppStatus(APP_STATUS.ERROR);
      console.log('error', error);
    }
  }

  return (
    <div className="app">
      <form className="login-form">
        <fieldset className="login-form-fieldset">
          {appStatus === APP_STATUS.LOADING && <Loader />}
          <AppInput
            value={email}
            handleChange={(email) => {
              setEmail(email);
              setIsInvalidEmail(null);
            }}
            label="Email"
            name="email"
            id="email"
            error={isInvalidEmail ? INVALID_EMAIL_ERROR : null}
          />
          <AppInput
            value={password}
            handleChange={(password) => {
              setPassword(password);
              setIsInvalidPasswrod(null);
            }}
            label="Password"
            type="password"
            name="password"
            id="password"
            error={isInvalidPassword ? INVALID_PASSWORD_ERROR : null}
          />
          <AppCheckbox label="Remember me" name="remember" id="remember" />
          <input
            onClick={handleFormSubmit}
            type="submit"
            value="login"
            className="form-submit"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
