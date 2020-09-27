import React, { useState } from 'react';

import AppInput from './components/AppInput';
import AppCheckbox from './components/AppCheckbox';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Invalid email');
    }

    if (!password) {
      setPasswordError('Invalid password');
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setEmailError('Invalid email');
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setPasswordError('Invalid password');
    }
  }

  return (
    <div className="app">
      <form className="login-form">
        <fieldset className="login-form-fieldset">
          <AppInput
            value={email}
            handleChange={setEmail}
            label="Email"
            name="email"
            id="email"
            error={emailError}
          />
          <AppInput
            value={password}
            handleChange={setPassword}
            label="Password"
            type="password"
            name="password"
            id="password"
            error={passwordError}
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
