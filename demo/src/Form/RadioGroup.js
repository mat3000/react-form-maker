import React from 'react';
// import PropTypes from 'prop-types';
// import { RadioContext } from '../FormContext';
import { asField } from '../../../src';

const RadioContext = React.createContext();

const RadioGroup = ({ state, api, ...props }) => {
  const { validator } = api;
  const { error } = state;
  const { children, name, disabled, checkedValue, ...etc } = props;

  console.log('==>', checkedValue);

  return (
    <RadioContext.Provider value={{ name, validator, checkedValue, disabled }}>
      <p {...etc}>
        {children}
        {!disabled && error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </p>
    </RadioContext.Provider>
  );
};

export default asField(RadioGroup);
export { RadioContext };
