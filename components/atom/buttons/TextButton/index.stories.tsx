import { Story } from '@storybook/react';
import { Props } from '.';
import TextButton from '.';

export default {
  title: 'Atom/Buttons/TextButton',
  component: TextButton,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <TextButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '로그인',
};
