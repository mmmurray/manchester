```js
initialState = { value: undefined }
;<TextInput
  label="Name"
  value={state.value}
  onChange={value => setState({ value })}
/>
```

```js
initialState = { value: 'Alan Turing' }
;<TextInput
  label="Name"
  value={state.value}
  onChange={value => setState({ value })}
/>
```
