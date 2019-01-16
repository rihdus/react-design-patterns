# SelectionComponent

```js
class SelectorComponentSample extends SelectionComponent {
  render() {
    return Array(5)
      .fill(0)
      .map((val, i) => {
        return (
          <Button
            key={i}
            onClick={() => this.setSelection(i)}
            selected={this.state.selectedKey == i}
          >
            Button {i}
          </Button>
        )
      })
  }
}
```