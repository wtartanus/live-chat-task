import React from 'react';
import PropTypes from 'prop-types';

function AppInput({ label, type, name, id }) {
    return (
        <>
          <label for={name}>{label}</label>
          <input type={type} name={name} id={id} />
        </>
    );
};

AppInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

AppInput.defaultProps = {
  label: '',
  type: 'text',
}

export default AppInput;