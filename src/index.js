import React, { useState, useEffect, Component } from 'react';
import FormContext from './Context';
import { useForm } from './Hooks';
import asField from './Field';

/* function useForm() {
  const [state, setState] = useState({});

  function setForm(key, value) {
    const newState = state;
    newState[key] = value;
    setState(newState);
  }

  return [state, setForm];
} */

const Form = ({ children, onSubmit, onChange, form, setForm }) => {
  // const [form, setForm] = useForm();

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

  return (
    <FormContext.Provider value={{ form, setValue }}>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
export { asField, useForm };
