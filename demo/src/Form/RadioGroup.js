import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const RadioContext = React.createContext();

const RadioGroup = props => {
  const { api, state, ...thisProps } = props;
  const { children, name, disabled, ...etc } = thisProps;
  const { error } = state;

  return (
    <RadioContext.Provider value={{ ...props }}>
      <p {...etc}>
        {children}
        {!disabled && error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </p>
    </RadioContext.Provider>
  );
};

RadioGroup.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
};

export default asField(RadioGroup);
export { RadioContext };
