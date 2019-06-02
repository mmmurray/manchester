```js
initialState = { value: undefined }
;<SelectInput
  label="Fruit"
  options={[
    { name: 'Apple', value: 'apple' },
    { name: 'Banana', value: 'banana' },
    { name: 'Grape', value: 'grape' },
    { name: 'Mango', value: 'mango' },
    { name: 'Watermelon', value: 'watermelon' },
  ]}
  value={state.value}
  onChange={value => setState({ value })}
/>
```
