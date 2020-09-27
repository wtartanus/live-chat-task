import React from 'react';

import AppInput from './components/AppInput';
import AppCheckbox from './components/AppCheckbox';
import './App.css';

function App() {
  return (
    <div className="app">
      <form className="login-form">
        <fieldset className="login-form-fieldset">
          <AppInput label="Email" type="email" name="email" id="email" />
          <AppInput label="Password" type="password" name="password" id="password" />
          <AppCheckbox label="Remember me" name="remember" id="remember" />
          <input type="submit" value="login" className="form-submit" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
