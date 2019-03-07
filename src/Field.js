import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContext from './Context';

class Field extends Component {
  static contextType = FormContext;

  componentDidMount() {
    const { fields, setValue, setValidator } = this.context;
    const { name, validator, value: defaultValue, checkedValue } = this.props;
    const { value } = fields[name] || {};

    if (name && validator) {
      setValidator(validator, name);
    }
    // console.log('name ----->', name, value, defaultValue, checkedValue);
    if (name) {
      setValue(value || defaultValue || checkedValue || '', name);
    }
  }

  render() {
    const {
      name,
      children,
      component,
      validator,
      disabled,
      value: defaultValue,
      checkedValue,
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

    // console.log(defaultValue);

    const props = {
      api: {
        setValue: (val, n = name) => setValue(val, n),
        setDisabled: (val, n = name) => setDisabled(val, n),
        setTouched: (n = name) => setTouched(true, n),
        setError: (val, n = name) => setError(val, n),
        validator: val => (validator ? validator(val) : ''),
        onSubmit,
      },
      state: {
        // value: value || (defaultValue && !touched ? defaultValue : ''),
        value,
        error,
        fields,
      },
      name,
      disabled,
      // checkedValue,
      // value: defaultValue,
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
  checkedValue: PropTypes.string,
  disabled: PropTypes.bool,
  component: PropTypes.func,
  children: PropTypes.node,
};

Field.defaultProps = {
  name: '',
  value: '',
  checkedValue: '',
  disabled: false,
  children: null,
  component: null,
  validator: null,
};

export default asField;
