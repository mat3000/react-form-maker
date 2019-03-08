import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { asField } from '../../../src';
import { RadioContext } from './RadioGroup';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    // const { validator, name, onChange, defaultValue, ...etc } = this.context;

    const { validator, name, value, onChange } = this.context;

    const {
      state,
      api,
      children,
      value: propsValue,
      name: propsName,
      ...etc
    } = this.props;
    const { setValue, setTouched, setError } = api;
    const uniqid = `radio-${Math.round(Math.random() * 100000)}`;

    // const stateValue = getFieldByName(name).value;

    console.log('-->', value, propsValue);
    // console.log('==>', value, getFieldByName(name).value);

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
          defaultChecked={propsValue === value}
          {...etc}
        />
        {children || value}
      </label>
    );
  }
}

export default asField(Radio);
