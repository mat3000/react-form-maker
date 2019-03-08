import React, { useState } from 'react';
import { render } from 'react-dom';
import Form, {
  Input,
  Textarea,
  Checkbox,
  Select,
  Option,
  RadioGroup,
  Radio,
  Submit,
} from './Form/Form';

const Demo = () => {
  const [res, setRes] = useState();
  return (
    <div>
      <h1>react-form-maker Demo</h1>
      <Form onSubmit={form => setRes(JSON.stringify(form))}>
        <Input name="input_0" />
        <Input name="input_1" value="coucou" />
        <Input name="input_2" defaultValue="caca" />
        {/*  <Input
          name="input"
          value="coucou"
          validator={e => (!e ? 'error' : '')}
        />

        <Textarea name="textarea" />

        <Checkbox name="checkbox" />

        <Select name="select">
          <Option value="option_1">option 1</Option>
          <Option value="option_2">option 2</Option>
          <Option value="option_3">option 3</Option>
        </Select> */}

        <RadioGroup name="radio_A">
          <Radio value="radio_1">radio 1</Radio>
          <Radio value="radio_2">radio 2</Radio>
        </RadioGroup>

        <RadioGroup name="radio_B" defaultValue="radio_2">
          <Radio value="radio_1">radio 1</Radio>
          <Radio value="radio_2">radio 2</Radio>
        </RadioGroup>

        <Submit>Valider</Submit>
      </Form>

      <pre>{res}</pre>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
