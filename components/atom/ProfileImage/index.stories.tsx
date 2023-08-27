import { Story } from '@storybook/react';
import { ReactElement } from 'react';
import ProfileImage, { Props } from './';
import TempProfileImage from '@/public/assets/ProfileTemp.jpeg';

export default {
  title: 'Atom/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ProfileImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: TempProfileImage,
  size: 'md',
  active: false,
};

export const SmallActive = Template.bind({});

SmallActive.args = {
  src: TempProfileImage,
  size: 'sm',
  active: true,
};

export const Larage = Template.bind({});

Larage.args = {
  src: TempProfileImage,
  size: 'lg',
};
