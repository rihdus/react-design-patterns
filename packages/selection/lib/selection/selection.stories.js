import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Sample as SelectionContainerSample } from './SelectionRenderProp'
import { Sample as SelectionComponentSample } from './SelectionComponent'
import SelectionContainerReadme from './SelectionRenderProp/index.md'
import SelectionComponentReadme from './SelectionComponent/index.md'

storiesOf('Selection', module)
  .add(
    'SelectionContainer',
    () => <SelectionContainerSample />, {
      readme: {
        sidebar: SelectionContainerReadme
      }
    })
  .add(
    'SelectionComponent',
    () => <SelectionComponentSample />, {
      readme: {
        sidebar: SelectionComponentReadme
      }
    })
