import { Story } from '@storybook/react';
import Home, { Props } from './';

export default {
  title: 'Page/Home',
  component: Home,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Home {...args} />;

export const Default = Template.bind({});

Default.args = {};
