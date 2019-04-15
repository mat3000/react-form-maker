import React, { useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useRefValue } from './Hooks';
import FormContext from './Context';

const asField = Component => ({ name, value: propsValue, ...etc }) => {
  const formContext = useContext(FormContext);
  const [val, setVal] = useState('');
  const [refValue, setRefValue] = useRefValue();

  const setValue = e => {
    setVal(e || '');
    formContext.setValue(e, name);
  };

  useEffect(() => {
    if (refValue !== propsValue) {
      setRefValue(propsValue);
      setValue(propsValue);
    }
  });

  useEffect(() => {
    setRefValue(propsValue);
    setValue(propsValue);
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
