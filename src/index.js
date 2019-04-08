import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import FormContext, { FormProvider } from './Context';
import asField from './Field';

const Form = ({ children, onSubmit }) => {
  // const formContext = useContext(FormContext);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formContext);
    // if (onSubmit) onSubmit(formContext);
  }
  return (
    <FormProvider>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormProvider>
  );
};
export default Form;
export { asField };
