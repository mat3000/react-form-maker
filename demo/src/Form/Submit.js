import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Submit = ({ state, api, ...props }) => {
  const { onSubmit } = api;
  const { children, ...etc } = props;

  function handleClick(event) {
    event.preventDefault();
    if (onSubmit) onSubmit();
  }

  return (
    <button type="submit" onClick={handleClick} {...etc}>
      {children}
    </button>
  );
};

Submit.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
};
Submit.defaultProps = {
  children: null,
};

export default asField(Submit);
