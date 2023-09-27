import { Story } from '@storybook/react';
import LoginPage, { Props } from './';

export default {
  title: 'Page/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <LoginPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
