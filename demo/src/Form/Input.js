import React from 'react';
// import PropTypes from 'prop-types';
import { asField } from '../../../src';

const Input = ({ api, state, ...props }) => {
  console.log('api', api);
  console.log('state', state);
  console.log('props', props);

  return (
    <p>
      <input
        type="text"
        value={state.value}
        onChange={e => api.setValue(e.target.value)}
      />
      {Math.random()}
    </p>
  );
};

export default asField(Input);
