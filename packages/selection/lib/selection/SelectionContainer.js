import React from 'react'

class SelectionContainer extends React.PureComponent {
  state = {
    selectedKey: null,
  }

  getItemProps = key => {
    return {
      key,
      onClick: () => this.onItemClick(key)
    }
  }

  onItemClick = key => {
    this.setState({ selectedKey: key })
  }

  render() {
    return this.props.children({
      selectedKey: this.state.selectedKey,
      getItemProps: this.getItemProps,
    })
  }
}

export default SelectionContainer
