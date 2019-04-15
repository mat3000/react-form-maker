// https://blog.getshoutout.com/how-to-create-a-react-module-an-actual-example-b6e53a7ec073

// https://medium.freecodecamp.org/how-to-detect-an-outside-click-with-react-and-hooks-25dbaa30abcd

import React, { useState } from 'react';
import { render } from 'react-dom';
import Form, { Input } from './Form/Form';

const Demo = () => {
  const [res1, setRes1] = useState({});
  // const [res2, setRes2] = useState({});
  const [val, setVal] = useState('coucou');

  return (
    <div>
      <h1>react-form-maker Demo</h1>

      <button onClick={() => setVal('ca va ?')}>Update value</button>

      <Form
        onSubmit={e => {
          // console.log(e);
          setRes1(e);
        }}
      >
        <Input name="input_1" value={val} />
        <Input name="input_2" />
        <p>{Math.random()}</p>
        <button type="submit">Valider</button>
      </Form>
      <code>{JSON.stringify(res1)}</code>

      <hr />

      {/* <Form onSubmit={e => setRes2(e)}>
        <Input name="input_1" value="zzzzzzz" />
        <p>{Math.random()}</p>
        <button type="submit">Valider</button>
      </Form> */}
      {/* <code>{JSON.stringify(res2)}</code> */}
      {/* {resTest} */}
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
