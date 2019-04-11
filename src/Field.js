import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
// import PropTypes from 'prop-types';
import FormContext from './Context';

const asField = Component => ({ name, value, ...etc }) => {
  const formContext = useContext(FormContext);
  const [val, setVal] = useState('');

  const setValue = e => {
    setVal(e || '');
    formContext.setValue(e, name);
  };

  useEffect(() => {
    setValue(value);
  }, []);

  const props = {
    ...etc,
    name,
    api: { setValue },
    state: { value: val },
  };

  return <Component {...props} />;
};

export default asField;
