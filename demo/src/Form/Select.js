import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Select = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { children, name, disabled, ...etc } = props;
  // const uniqid = `select-${Math.round(Math.random() * 10000000)}`;

  return (
    <p>
      <select
        type="text"
        value={disabled ? '' : value}
        // id={uniqid}
        onChange={e => {
          setValue(e.target.value);
          setTouched();
          setError(e.target.value ? validator(e.target.value) : '');
        }}
        disabled={disabled}
        {...etc}
      >
        {children}
      </select>
      {!disabled && error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

Select.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  name: 'PropTypes.string',
  disabled: false,
};

export default asField(Select);
