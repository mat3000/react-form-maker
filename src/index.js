import React from 'react';
// import PropTypes from 'prop-types';
import FormContext from './Context';
import asField from './Field';

const Form = ({ children, onSubmit }) => {
  const form = {};

  const setValue = (value, name) => {
    form[name] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    if (onSubmit) onSubmit(form);
  }

  return (
    <FormContext.Provider value={{ form, setValue }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};
export default Form;
export { asField };
