import { Story } from '@storybook/react';
import { Props } from './';
import ButtonLogin from './';

export default {
  title: 'Atom/Buttons/ButtonLogin',
  component: ButtonLogin,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonLogin {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '로그인',
};
