import React from 'react'
import { storiesOf } from '@storybook/react'
import { Sample as SelectionContainerSample } from './SelectionRenderProp'
import { Sample as SelectionComponentSample } from './SelectionComponent'
import SelectionContainerReadme from './SelectionRenderProp/index.md'
import SelectionComponentReadme from './SelectionComponent/index.md'

storiesOf('Selection', module)
  .add(
    'Render Prop',
    () => <SelectionContainerSample />, {
      readme: {
        sidebar: SelectionContainerReadme
      }
    })
  .add(
    'Extended Component',
    () => <SelectionComponentSample />, {
      readme: {
        sidebar: SelectionComponentReadme
      }
    })
