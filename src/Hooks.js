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

  function setRefValue(key, value) {
    const newState = state;
    newState[key] = value;
    setState(newState);
  }
  function getRefValue(key) {
    return state[key];
    // const newState = state;
    // newState[key] = value;
    // setState(newState);
  }

  return [getRefValue, setRefValue];
};

export { useForm, useRefValue };
