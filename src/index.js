import React from 'react';
import FormContext from './Context';
import { useForm } from './Hooks';
import asField from './Field';

const Form = ({ children, onSubmit, onChange, getApi }) => {
  const [form, setForm] = useForm();

  const setValue = (value, name) => {
    setForm(name, value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit({ ...form });
  }

  function handleChange(e) {
    e.preventDefault();
    if (onChange) onChange({ ...form });
  }

  getApi('coucou');

  return (
    <FormContext.Provider value={{ form, setValue }}>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
export { asField };
