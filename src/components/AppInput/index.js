import React from 'react';
import PropTypes from 'prop-types';

function AppInput({
  value,
  handleChange,
  label,
  type,
  name,
  id,
  error,
}) {
    return (
        <div className="app-input-container">
          <label htmlFor={name}>{label}</label>
          <input
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            type={type}
            name={name}
            id={id}
            className={`app-input ${error ? 'error' : ''}`}
          />
          {error && <span className="input-error">{error}</span> /**TODO: jumps when error shows **/} 
        </div>
    );
};

AppInput.propTypes = {
  value: PropTypes.string, //TODO: It can be a number?
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

AppInput.defaultProps = {
  value: null,
  handleChange() {},
  label: '',
  type: 'text',
  error: null,
}

export default AppInput;