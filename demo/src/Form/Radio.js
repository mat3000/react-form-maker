import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioContext } from './RadioGroup';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    const { state, api, ...props } = this.context;
    const { value } = state;
    const { setValue, setTouched, setError, validator } = api;
    const { name, onChange } = props;
    const { children, value: initialValue } = this.props;
    const uniqid = `radio-${Math.round(Math.random() * 10000000)}`;

    return (
      <label htmlFor={uniqid}>
        <input
          type="radio"
          name={name}
          value={initialValue}
          id={uniqid}
          onChange={e => {
            setValue(e.target.value, name);
            setTouched(name);
            setError(validator(e.target.value), name);
            if (onChange) onChange(e.target.value);
          }}
          defaultChecked={initialValue === value}
        />
        {children || value}
      </label>
    );
  }
}

Radio.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
};

Radio.defaultProps = {
  value: '',
};

export default Radio;
