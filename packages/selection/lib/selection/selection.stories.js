import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { SelectionContainer } from '.'
import SelectionComponent from './SelectionComponent'
import SelectionContainerReadme from './SelectionContainer.md'
import SelectionComponentReadme from './SelectionComponent.md'

storiesOf('Selection', module)
  .add(
    'SelectionContainer',
    () => <TabSelector />, {
      readme: {
        sidebar: SelectionContainerReadme
      }
    })
  .add(
    'SelectionComponent',
    () => <ButtonSelector />, {
      readme: {
        sidebar: SelectionComponentReadme
      }
    })

function TabSelector() {
  return (
    <SelectionContainer>
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
  )
}

class ButtonSelector extends SelectionComponent {
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

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid crimson;
  color: crimson;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.selected &&
    css`
      background: crimson;
      color: white;
    `};
`
