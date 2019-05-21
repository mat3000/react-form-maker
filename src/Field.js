import React, { useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useRefValue } from './Hooks';
import FormContext from './Context';

const asField = Component => ({ name, value: propsValue, ...etc }) => {
  const formContext = useContext(FormContext);
  const [val, setVal] = useState(propsValue || '');
  const [refValue, setRefValue] = useRefValue();

  // console.log('asField()');

  const setValue = value => {
    setVal(value || '');
    formContext.setValue(value, name);
  };

  useEffect(() => {
    if (propsValue && refValue(name) !== propsValue) {
      setRefValue(name, propsValue);
      setValue(propsValue);
    }
  });

  const props = {
    ...etc,
    name,
    api: { setValue },
    state: { value: val },
  };

  return <Component {...props} />;
};

export default asField;
