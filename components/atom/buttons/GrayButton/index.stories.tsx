import { Story } from '@storybook/react';
import { Props } from '.';
import GrayButton from '.';

export default {
  title: 'Atom/Buttons/GrayButton',
  component: GrayButton,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <GrayButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '프로필버튼',
};
