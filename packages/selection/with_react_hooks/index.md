`SelectionApi`
- `selectedItem` {any} Currently selected item.
- `getItemProps` {function} get selection props for item in the list
  - `onClick` {function}
  - `key` {any}

```js
const App = () => {

  const [selectedItem, getItemProps] = useSelection(0)

  return (
    <div>
      {Array(5)
        .fill(0)
        .map((val, i) => {
          const selectItemProps = getItemProps(i)
          return (
            <Button selected={i === selectedItem} {...selectItemProps}>
              Button {i}
            </Button>
          )
        })}
    </div>
  )
}
```

__Selection hook implementation__
```js
const useSelection = initialSelectedItem => {
  const [selectedItem, selectItem] = useState(initialSelectedItem)
  return [
    selectedItem,
    key => ({
      key,
      onClick: () => selectItem(key),
    }),
  ]
}
```