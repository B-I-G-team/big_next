import { Story } from '@storybook/react';
import Logo from '.';

export default {
  title: 'Atom/Logo',
  component: Logo,
  tags: ['autodocs'],
};

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
