import React from 'react';

import AppInput from '../AppInput';
import AppCheckbox from '../AppCheckbox';
import {
  INVALID_PASSWORD_ERROR,
  INVALID_EMAIL_ERROR,
} from '../../utils/constants';

import './LoginForm.css';

function LoginForm({
  email,
  password,
  rememberMe,
  handleFormSubmit,
  handleEmailChange,
  handleRememberMeChange,
  handlePasswordChange,
  isInvalidEmail,
  isInvalidPassword,
}) {
  return (
    <form className="login-form">
      <fieldset className="login-form-fieldset">
        <AppInput
          value={email}
          handleChange={handleEmailChange}
          label="Email"
          name="email"
          id="email"
          error={isInvalidEmail ? INVALID_EMAIL_ERROR : null}
        />
        <AppInput
          value={password}
          handleChange={handlePasswordChange}
          label="Password"
          type="password"
          name="password"
          id="password"
          error={isInvalidPassword ? INVALID_PASSWORD_ERROR : null}
        />
        <AppCheckbox
          checked={rememberMe}
          handleChange={handleRememberMeChange}
          label="Remember me"
          name="remember"
          id="remember"
        />
        <input
          onClick={handleFormSubmit}
          type="submit"
          value="login"
          className="form-submit"
        />
      </fieldset>
    </form>
  );
}
//TODO: add props validation
export default LoginForm;