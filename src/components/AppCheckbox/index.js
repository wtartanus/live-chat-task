import React from 'react';
import PropTypes from 'prop-types';

function AppCheckbox({ label, name, id }) {
    return (
        <>
          <label for={name}>{label}</label>
          <input type="checkbox" name="remember" id={id} />
        </>
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