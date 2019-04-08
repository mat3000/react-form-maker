import React from 'react';

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const form = {};

  const setValue = (value, name) => {
    form[name] = value;
  };

  return (
    <FormContext.Provider value={{ form, setValue }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
export { FormProvider };
