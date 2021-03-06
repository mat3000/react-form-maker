import React from 'react';
import { asField } from '../../../src';

const Input = ({ api, state }) => (
  // console.log('Input()');

  <p>
    <input
      type="text"
      value={state.value}
      onChange={e => api.setValue(e.target.value)}
    />
    {Math.random()}
  </p>
);
export default asField(Input);
