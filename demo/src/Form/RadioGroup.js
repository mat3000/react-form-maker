import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const RadioContext = React.createContext();

const RadioGroup = ({ api, state, ...props }) => {
  const { children, name, disabled, ...etc } = props;
  const { error } = state;

  return (
    <RadioContext.Provider value={{ api, state, ...props }}>
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
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

RadioGroup.defaultProps = {
  name: 'PropTypes.string',
  disabled: false,
};

export default asField(RadioGroup);
export { RadioContext };
