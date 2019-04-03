import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Input = ({ state, api, ...props }) => {
  const { setValue, setTouched } = api;
  const { value, error } = state;
  const { name, disabled, onChange, onBlur, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <input
          value={value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.value);
            setTouched();
            if (onChange) onChange(e);
          }}
          onBlur={e => {
            if (onBlur) onBlur(e);
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
