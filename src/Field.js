import React, { useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import FormContext from './Context';

const asField = Component => ({ name, value: propsValue, ...etc }) => {
  const formContext = useContext(FormContext);
  const [val, setVal] = useState('');

  const setValue = e => {
    setVal(e || '');
    formContext.setValue(e, name);
  };

  useEffect(() => {
    setValue(propsValue);
  }, []);

  const props = {
    ...etc,
    name,
    api: { setValue },
    state: { value: val },
  };

  console.log(props);

  return <Component {...props} />;
};

export default asField;
