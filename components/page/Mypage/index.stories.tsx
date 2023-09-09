import { Story } from '@storybook/react';
import { ReactElement } from 'react';
import Mypage, { Props } from './';
import TempMypage from '@/public/assets/ProfileTemp.jpeg';

export default {
  title: 'Page/Mypage',
  component: Mypage,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Mypage {...args} />;

export const Default = Template.bind({});

Default.args = {};
