import React, { useState, useContext, useEffect } from 'react';
// import Test1 from './Test1';
// import Test2 from './Test2';

const TestContext = React.createContext([]);

const asField = Component => ({ name, value, ...etc }) => {
  const context = useContext(TestContext);
  const [val, setVal] = useState('');

  const setValue = e => {
    setVal(e);
    context.setValue(e, name);
  };

  useEffect(() => {
    setValue(value);
  }, []);

  // console.log('asField', props);
  return <Component {...etc} name={name} value={val} setValue={setValue} />;
};

const Input1 = asField(({ value, setValue }) => (
  <p>
    <input
      type="text"
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
    />
    {Math.random()}
  </p>
));

const Submit = () => {
  const context = useContext(TestContext);

  return (
    <button type="button" onClick={() => console.log(context.fields)}>
      Valider
    </button>
  );
};

const Test = () => {
  const test = {
    fields: {},
    setValue: (value, name) => {
      test.fields[name] = value;
    },
  };

  return (
    <div>
      <TestContext.Provider value={test}>
        <Input1 name="test1" value="value1" />
        <Input1 name="test2" value="value2" />
        {Math.random()}
        <Submit />
      </TestContext.Provider>
    </div>
  );
};
export default Test;
