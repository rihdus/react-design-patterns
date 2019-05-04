import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import { addReadme } from 'storybook-readme';

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(addReadme);

addDecorator(
  withOptions({
    name: 'React Primitives'
  })
);

configure(loadStories, module);
