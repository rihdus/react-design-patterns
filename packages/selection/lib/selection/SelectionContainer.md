__RenderProp Container implementing the SelectionApi__

`SelectionApi`
- `selectedKey` {any} Currently selected key.
- `getItemProps` {function} get selection api for item in the list
  - `onClick` {function}
  - `key` {any}

```js
function TabSelector() {
  return <SelectionContainer>{({
    selectedKey,
    getItemProps
  }) => {
    return <div>
      {Array(5).fill(0).map((val, i) => {
        return <Button
          {...getItemProps(i)}
          selected={selectedKey == key}>Button {i}</Button>
      })}
    </div>
  }}</SelectionContainer>
}
```