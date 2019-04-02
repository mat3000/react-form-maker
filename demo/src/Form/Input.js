import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Input = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, onChange, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <input
          value={value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.value);
            setTouched();
            if (onChange) onChange(e.target.value);
          }}
          onBlur={e => {
            setError(e.target.value ? validator(e.target.value) : '');
          }}
          disabled={disabled}
          {...etc}
        />
      </label>
      {!disabled && error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

Input.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  disabled: false,
  onChange: null,
};

export default asField(Input);
