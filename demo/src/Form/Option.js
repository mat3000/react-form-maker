import React from 'react';
import PropTypes from 'prop-types';

const Option = props => {
  const { children, ...other } = props;
  return <option {...other}>{children}</option>;
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Option;
