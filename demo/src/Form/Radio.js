import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { asField } from '../../../src';
import { RadioContext } from './RadioGroup';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    // const { validator, name, onChange, defaultValue, ...etc } = this.context;
    const { validator, name, onChange, defaultValue, ...etc } = this.context;
    const { state, api, children, propsValue, checked } = this.props;
    const { setValue, setTouched, setError } = api;
    const { value } = state;
    const uniqid = `label-${Math.round(Math.random() * 100000)}`;

    etc.defaultChecked = checked || defaultValue === value;

    console.log('---->', etc.defaultChecked, value, defaultValue);

    // if (etc.defaultChecked && value !== valueState) {
    // console.log(value);
    // setValue(value, name);
    // }
    // if (etc.defaultChecked && value === defaultValue) {
    // console.log(value);
    // setTimeout(() => {
    //   setValue(value, name);
    // }, 5000);
    // }
    //
    return (
      <label htmlFor={uniqid}>
        <input
          type="radio"
          name={name}
          value={value}
          id={uniqid}
          onChange={e => {
            // console.log(value, name);
            setValue(e.target.value, name);
            // setValue(value, 'name');
            // setTouched(name);
            // setError(validator(e.target.value), name);
            // if (onChange) onChange(e.target.value);
          }}
          {...etc}
        />
        {children || value}
      </label>
    );
  }
}

export default asField(Radio);
