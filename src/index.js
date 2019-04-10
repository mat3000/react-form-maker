import React from 'react';
import FormContext from './Context';
import asField from './Field';

const Form = ({ children, onSubmit }) => {
  console.log('Form()');

  const form = {};

  const setValue = (value, name) => {
    console.log('Form() setValue()', value, name);
    form[name] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form() handleSubmit()', form);
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
