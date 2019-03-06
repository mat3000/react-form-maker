import React from 'react';
import PropTypes from 'prop-types';
import FormMaker from '../../../src';
import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Select from './Select';
import Option from './Option';
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import Submit from './Submit';

const Form = ({ children, ...etc }) => (
  <FormMaker {...etc}>{children}</FormMaker>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
export { Input, Textarea, Checkbox, Select, Option, RadioGroup, Radio, Submit };
