import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Textarea = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <textarea
          type="text"
          value={disabled ? '' : value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.value);
            setTouched();
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

Textarea.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  name: 'PropTypes.string',
  disabled: false,
};

export default asField(Textarea);
