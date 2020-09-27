import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBanner.css';

function ErrorBanner({ message }) {
  return (
    <div className="error-banner">
      <p>{message}</p>
    </div>
  );
}

ErrorBanner.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorBanner;
