// https://blog.getshoutout.com/how-to-create-a-react-module-an-actual-example-b6e53a7ec073

// https://medium.freecodecamp.org/yarn starthow-to-detect-an-outside-click-with-react-and-hooks-25dbaa30abcd

import React, { useState } from 'react';
import { render } from 'react-dom';
import Form, { Input, useForm } from './Form/Form';

const Demo = () => {
  const [form, setForm] = useForm();
  const [res1, setRes1] = useState({});

  console.log(form);

  return (
    <div>
      <h1>react-form-maker Demo</h1>

      <button
        onClick={() => {
          setForm('input_2', 'coucou');
        }}
      >
        test
      </button>

      <Form
        form={form}
        setForm={setForm}
        onSubmit={e => {
          setRes1(e);
        }}
      >
        <Input name="input_1" value="test" />
        <Input name="input_2" />

        <p>{Math.random()}</p>

        <button type="submit">Valider</button>

        <code>{JSON.stringify(res1)}</code>
      </Form>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
