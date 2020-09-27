import React from 'react';

import AppInput from './components/AppInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <AppInput label="Email" name="email" id="email" />
          <AppInput label="Password" name="password" id="password" />
          <label for="remember">Remember me</label>
          <input type="checkbox" name="remember" id="remember" />
          <input type="submit" value="login" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
