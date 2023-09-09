import { Story } from '@storybook/react';
import Profile, { Props } from '.';
import Image from '@/public/assets/ProfileTemp.jpeg';

export default {
  title: 'Molecule/Profile',
  component: Profile,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: Image,
  userName: '김대환',
};
