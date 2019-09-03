```js
initialState = { division: 0.4 }
;<SplitPanel
  leftPanel={
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.22)',
        padding: '100px 10px',
      }}
    >
      Left
    </div>
  }
  rightPanel={
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.22)',
        padding: '100px 10px',
      }}
    >
      Right
    </div>
  }
  minimumDivision={0.1}
  maximumDivision={0.9}
  division={state.division}
  onDivisionChange={division => setState({ division })}
/>
```
