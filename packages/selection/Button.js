import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid crimson;
  color: crimson;
  margin: 0 1em 1em;
  padding: 0.25em 1em;
  
  &:focus {
    outline: 1px auto crimson;
    outline-offset: 1px;
  }

  ${props =>
    props.selected &&
    css`
      background: crimson;
      color: white;
    `};
`

Button.propTypes = {
  selected: PropTypes.bool
}

export default Button
