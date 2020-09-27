import React from 'react';
import PropTypes from 'prop-types';

import './AppCheckbox.css';

function AppCheckbox({ label, name, id }) {
    return (
        <div className="app-checkobox">
          <input type="checkbox" name="remember" id={id} />
          <label htmlFor={name}>{label}</label>
        </div>
    );
};

AppCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

AppCheckbox.defaultProps = {
  label: '',
}

export default AppCheckbox;