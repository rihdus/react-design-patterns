import { Component } from 'react'

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
