```js
initialState = { value: undefined }
;<NumberInput
  label="Count"
  value={state.value}
  onChange={value => setState({ value })}
/>
```

```js
initialState = { value: 22 }
;<NumberInput
  label="Count"
  value={state.value}
  onChange={value => setState({ value })}
/>
```
