import React from 'react';
import PropTypes from 'prop-types';

import './AppCheckbox.css';

function AppCheckbox({
  label,
  name,
  id,
  handleChange,
  checked,
}) {
    return (
        <div className="app-checkobox">
          <input
            checked={checked}
            type="checkbox"
            name="remember"
            id={id}
            onChange={(event) => {handleChange(event.target.checked)}}
          />
          <label htmlFor={name}>{label}</label>
        </div>
    );
};

AppCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
};

AppCheckbox.defaultProps = {
  label: '',
  handleChange() {},
  checked: false,
};

export default AppCheckbox;