import React from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Checkbox = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, ...etc } = props;
  const uniqid = `checkbox-${Math.round(Math.random() * 10000000)}`;

  return (
    <p>
      <label htmlFor={uniqid}>
        <input
          type="checkbox"
          value={disabled ? '' : value}
          id={uniqid}
          onChange={e => {
            setValue(e.target.checked);
            setTouched();
            setError(validator(e.target.checked));
          }}
          disabled={disabled}
          {...etc}
        />
        test
      </label>
      {!disabled && error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

Checkbox.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  name: 'PropTypes.string',
  disabled: false,
};

export default asField(Checkbox);
