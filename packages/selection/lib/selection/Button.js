import styled from 'styled-components';

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
export default Button;
