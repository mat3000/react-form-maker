import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContext from './Context';
import asField from './Field';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        // name : { value: 'String', touched: false, disabled: false, error: 'String' }
      },
      setValidator: (validator, name) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].validator = validator;
          return { fields, ...state };
        });
      },
      setValue: (value, name) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].value = value;
          return { fields, ...state };
        });
      },
      setDisabled: (value, name) => {
        const { fields } = this.state;
        if (fields[name]) fields[name].disabled = value;
      },
      setError: (value, name) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].error = value;
          return { fields, ...state };
        });
      },
      setTouched: (value, name) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].touched = value;
          return { fields, ...state };
        });
      },
      onSubmit: () => this.handleClick(),
    };
  }

  handleClick() {
    const { onSubmit } = this.props;
    const { fields, setError } = this.state;
    const form = {};

    Object.keys(fields).forEach(key => {
      const field = fields[key];

      /* test all inputs */
      if (field.validator) {
        const result = field.disabled ? false : field.validator(field.value);
        setError(result, key);
      }

      /* remove fields who are disaled */
      if (!field.disabled) {
        form[key] = field.value;
      }
    });

    setTimeout(() => {
      if (!this.checkError()) {
        onSubmit(form);
      }
    });
  }

  handleChange() {
    const { onChange } = this.props;
    const { fields } = this.state;

    setTimeout(() => {
      if (onChange) onChange(fields);
    });
  }

  checkError() {
    const { fields } = this.state;
    const err = Object.keys(fields).filter(key => fields[key].error);
    return err.length;
  }

  render() {
    const { children, onSubmit, onChange, ...etc } = this.props;

    return (
      <FormContext.Provider value={{ ...this.state }}>
        <form onChange={e => this.handleChange(e)} {...etc}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
  onChange: () => {},
};

export default Form;
export { asField };
