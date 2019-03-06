import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Option = props => {
  const { children, ...other } = props;
  return <option {...other}>{children}</option>;
};

export default Option;
