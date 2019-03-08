import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asField } from '../../../src';

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    const { options } = this.props;

    this.state = {
      options,
      status: false,
    };
  }

  filter(value) {
    const { options } = this.props;
    const filtered = options.filter(e => new RegExp(value, 'gi').test(e));
    this.setState({ options: filtered });
  }

  render() {
    const { options, status } = this.state;
    const { state, api, ...props } = this.props;
    const { setValue, setTouched, setError, validator } = api;
    const { value, error } = state;
    const { name, disabled, onChange, size, ...etc } = props;

    return (
      <div>
        <label htmlFor={`label-${name}`}>
          <input
            type="text"
            value={disabled ? '' : value}
            id={`label-${name}`}
            onChange={e => {
              this.filter(e.target.value);
              setValue(e.target.value);
              setTouched();
              if (onChange) onChange(e.target.value);
            }}
            onBlur={e => {
              setError(e.target.value ? validator(e.target.value) : '');
              // setTimeout(() => this.setState({ status: false }), 200);
            }}
            onFocus={e => {
              this.filter(e.target.value);
              this.setState({ status: true });
            }}
            disabled={disabled}
            {...etc}
          />
        </label>
        {status && (
          <div>
            <select
              size={size}
              onChange={e => {
                this.setState({ status: false });
                setValue(e.target.value);
              }}
            >
              {!options.length && <option disabled>Aucun résultat...</option>}
              {options.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
              <option value="" disabled selected />
            </select>
          </div>
        )}

        {status && (
          <div>
            {!options.length && <div>Aucun résultat...</div>}
            {options.map((option, i) => (
              <div
                onClick={() => {
                  this.setState({ status: false });
                  setValue(option);
                }}
                key={i}
                role="button"
                tabIndex="0"
              >
                {option}
              </div>
            ))}
          </div>
        )}
        {!disabled && error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </div>
    );
  }
}

Autocomplete.propTypes = {
  state: PropTypes.shape({}).isRequired,
  api: PropTypes.shape({}).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

Autocomplete.defaultProps = {
  name: 'PropTypes.string',
  disabled: false,
  options: [],
};

export default asField(Autocomplete);
