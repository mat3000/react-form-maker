import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { asField } from '../../../src';
import { RadioContext } from './RadioGroup';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    // const { validator, name, onChange, defaultValue, ...etc } = this.context;
    const {
      // validator,
      name,
      onChange,
      // defaultValue,
      checkedValue,
    } = this.context;
    const {
      state,
      api,
      children,
      propsValue,
      checked,
      name: propsName,
      ...etc
    } = this.props;
    const { setValue, setTouched, setError } = api;
    const { value, error } = state;
    const uniqid = `radio-${Math.round(Math.random() * 100000)}`;

    console.log('-->', checkedValue, value, propsValue);

    return (
      <label htmlFor={uniqid}>
        <input
          type="radio"
          name={name}
          value={propsValue}
          id={uniqid}
          onChange={e => {
            // console.log('onChange() ->', name, e.target.value);
            setValue(e.target.value, name);
            // setValue(value, 'name');
            // setTouched(name);
            // setError(validator(e.target.value), name);
            if (onChange) onChange(e.target.value);
          }}
          // defaultChecked={checkedValue === value}
          {...etc}
        />
        {children || value}
      </label>
    );
  }
}

export default asField(Radio);
