// https://blog.getshoutout.com/how-to-create-a-react-module-an-actual-example-b6e53a7ec073

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
  // Autocomplete,
  Submit,
} from './Form/Form';

const Demo = () => {
  const [res, setRes] = useState();
  return (
    <div>
      <h1>react-form-maker Demo</h1>
      <Form
        onSubmit={form => setRes(JSON.stringify(form))}
        // onChange={form => setRes(JSON.stringify(form))}
      >
        <Input name="input_1" placeholder="Text..." value="mon texte" />
        <Input name="input_2" placeholder="disabled..." disabled />
        <Input name="input_3" defaultValue="default value" />
        {/* <Input name="input_5" validator={e => (!e ? 'error' : null)} /> */}
        <Input
          name="input_6"
          validator={e => (!e ? 'error' : null)}
          validator={e => console.log('validator()', e)}
          validateOnBlur
          validateOnChange
          // validateOnMount
          // validateOnSubmit
        />

        {/* <Textarea name="textarea" /> */}

        {/* <Checkbox name="checkbox" /> */}

        {/* <Select name="select-1">
          <Option value="option_1">option 1</Option>
          <Option value="option_2">option 2</Option>
          <Option value="option_3">option 3</Option>
        </Select> */}

        {/* <Select name="select-2" multiple>
          <Option value="option_1">option 1</Option>
          <Option value="option_2">option 2</Option>
          <Option value="option_3">option 3</Option>
        </Select> */}

        {/* <RadioGroup name="radio_A" validator={e => (!e ? 'error' : '')}>
          <Radio value="radio_1">radio 1</Radio>
          <Radio value="radio_2">radio 2</Radio>
        </RadioGroup> */}

        {/* <RadioGroup name="radio_B" defaultValue="radio_2">
          <Radio value="radio_1">radio 1</Radio>
          <Radio value="radio_2">radio 2</Radio>
        </RadioGroup> */}

        {/* <Autocomplete
          name="autocomplete_1"
          placeholder="Mon placeholder"
          options={['un', 'deux', 'trois']}
          defaultValue="un"
          validator={e => (e ? '' : 'error')}
          size="10"
        /> */}

        {/* <Autocomplete
          name="autocomplete_2"
          placeholder="Mon placeholder"
          asyncOptions={() => setTimeout(() => ['un', 'deux', 'trois'], 2000)}
          defaultValue="un"
          validator={e => (e ? '' : 'error')}
        /> */}

        <Submit>Valider</Submit>
      </Form>

      <code>{res}</code>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));

// 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
