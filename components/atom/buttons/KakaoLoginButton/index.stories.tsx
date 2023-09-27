import { Story } from '@storybook/react';
import { Props } from '.';
import KakaoLoginButton from '.';

export default {
  title: 'Atom/Buttons/KakaoLoginButton',
  component: KakaoLoginButton,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <KakaoLoginButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
