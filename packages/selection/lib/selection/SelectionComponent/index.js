import React, { Component } from 'react'
import Button from '../Button'

class SelectionComponent extends Component {
  state = {
    selectedKey: null,
  }

  constructor(props) {
    super(props)
  }

  setSelection = key =>
    this.setState({
      selectedKey: key,
    })
}

export default SelectionComponent

export class Sample extends SelectionComponent {
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