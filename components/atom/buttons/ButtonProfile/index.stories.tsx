import { Story } from '@storybook/react';
import { Props } from './';
import ButtonProfile from './';

export default {
  title: 'Atom/Buttons/ButtonProfile',
  component: ButtonProfile,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonProfile {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '프로필버튼',
};
