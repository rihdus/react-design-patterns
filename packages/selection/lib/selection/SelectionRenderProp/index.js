import React from 'react'
import Button from '../Button'

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

export const Sample = () => <SelectionContainer>
  {({ selectedKey, getItemProps }) => {
    return (
      <div>
        {Array(5)
          .fill(0)
          .map((val, i) => {
            const { key, onClick } = getItemProps(i)
            return (
              <Button {...getItemProps(i)} selected={selectedKey == key}>
                Button {i}
              </Button>
            )
          })}
      </div>
    )
  }}
</SelectionContainer>

