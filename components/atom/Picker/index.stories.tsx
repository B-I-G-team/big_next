import { Story } from '@storybook/react';
import { Props } from './';
import Picker from './';

export default {
  title: 'Atom/Picker',
  component: Picker,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Picker {...args} />;

export const Default = Template.bind({});
