import React from 'react';
import PropTypes from 'prop-types';
import FormMaker, { useForm } from '../../../src';
import Input from './Input';

const Form = ({ children, ...etc }) => (
  <FormMaker {...etc}>{children}</FormMaker>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
export { Input, useForm };
