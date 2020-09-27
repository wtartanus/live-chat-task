import React from 'react';
import PropTypes from 'prop-types';

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
