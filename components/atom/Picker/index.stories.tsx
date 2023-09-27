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

Default.args = {
  placeholder: '시작시간',
  is_icon: true,
  type: 'Time',
};
