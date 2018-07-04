import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from '../src/index';

storiesOf('Hello', module).add('default usage', () => <Hello />);
