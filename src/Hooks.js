import { useState } from 'react';

const useForm = () => {
  const [state, setState] = useState({});

  function setForm(key, value) {
    const newState = state;
    newState[key] = value;
    setState(newState);
  }

  return [state, setForm];
};

const useRefValue = () => {
  const [state, setState] = useState({});

  function setRefValue(value) {
    setState(value);
  }

  return [state, setRefValue];
};

export { useForm, useRefValue };
