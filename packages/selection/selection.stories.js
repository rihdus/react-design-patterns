import React from 'react'
import { storiesOf } from '@storybook/react'
import { Sample as SelectionContainerSample } from './render_prop_pattern'
import { Sample as SelectionComponentSample } from './custom_react_component'
import { Sample as HookSample } from './with_react_hooks'
import SelectionContainerReadme from './render_prop_pattern/index.md'
import SelectionComponentReadme from './custom_react_component/index.md'
import HookSampleReadme from './with_react_hooks/index.md'

storiesOf('Selection', module)
  .add('Using Hook', () => <HookSample />, {
    readme: {
      sidebar: HookSampleReadme,
    },
  })
  .add('Render Prop', () => <SelectionContainerSample />, {
    readme: {
      sidebar: SelectionContainerReadme,
    },
  })
  .add('Extended Component', () => <SelectionComponentSample />, {
    readme: {
      sidebar: SelectionComponentReadme,
    },
  })
