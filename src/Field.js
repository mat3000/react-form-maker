import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContext from './Context';

class Field extends Component {
  static contextType = FormContext;

  componentDidMount() {
    const { fields, setValue, setValidator } = this.context;
    const { name, validator, value: propsValue, defaultValue } = this.props;
    const { value } = fields[name] || {};

    if (name && validator) {
      setValidator(validator, name);
    }
    // console.log('name ----->', name, value, defaultValue, checkedValue);
    if (name) {
      setValue(value || propsValue || defaultValue || '', name);
    }
  }

  render() {
    const {
      name,
      children,
      component,
      validator,
      disabled,
      defaultValue,
      value: propsValue,
      ...etc
    } = this.props;

    const {
      setValue,
      setDisabled,
      setTouched,
      setError,
      fields,
      onSubmit,
    } = this.context;

    const { value, error, touched } = fields[name] || {};

    const props = {
      api: {
        setValue: (val, n = name) => setValue(val, n),
        setDisabled: (val, n = name) => setDisabled(val, n),
        setTouched: (n = name) => setTouched(true, n),
        setError: (val, n = name) => setError(val, n),
        // getFieldByName: (n = name) => fields[n] || {},
        validator: val => (validator ? validator(val) : ''),
        onSubmit,
      },
      state: {
        // value: value || (defaultValue && !touched ? defaultValue : ''),
        value: value || propsValue || defaultValue,
        // value,
        error,
        fields,
      },
      name,
      disabled,
      // checkedValue,
      value: propsValue || defaultValue,
      ...etc,
    };

    setDisabled(!!disabled, name);

    if (component) {
      return React.createElement(component, props, children);
    }

    return children;
  }
}

const asField = Comp => {
  const AsField = props => <Field component={Comp} {...props} />;
  return AsField;
};

Field.propTypes = {
  name: PropTypes.string,
  validator: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  component: PropTypes.func,
  children: PropTypes.node,
};

Field.defaultProps = {
  name: '',
  value: '',
  defaultValue: '',
  disabled: false,
  children: null,
  component: null,
  validator: null,
};

export default asField;
