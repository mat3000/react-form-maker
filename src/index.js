import React, { useState, useEffect, Component } from 'react';
import FormContext from './Context';
import asField from './Field';

/* class Form extends Component {
  constructor(props) {
    super(props);

    this.form = {};
  }

  setValue(value, name) {
    this.form[name] = value;
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;
    e.preventDefault();
    console.log('Form() handleSubmit()', this.form);
    if (onSubmit) onSubmit(this.form);
  }

  render() {
    const { children } = this.props;

    return (
      <FormContext.Provider
        value={{ form: this.form, setValue: this.setValue }}
      >
        <form onSubmit={e => this.handleSubmit(e)}>{children}</form>
      </FormContext.Provider>
    );
  }
} */

function useForm() {
  const [state, setState] = useState({});

  function setForm(key, value) {
    const newState = state;
    newState[key] = value;
    setState(newState);
  }

  return [state, setForm];
}

const Form = ({ children, onSubmit }) => {
  // const [state, setState] = useState({});

  const [form, setForm] = useForm();

  // const form = {};

  const setValue = (value, name) => {
    console.log('Form() setValue()', value, name);
    // form[name] = value;
    setForm(name, value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form() handleSubmit()', form);

    if (onSubmit) onSubmit(form);

    // setState(form);
    // if (onSubmit) onSubmit(state);
  }
  return (
    <FormContext.Provider value={{ form, setValue }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export default Form;
export { asField };
