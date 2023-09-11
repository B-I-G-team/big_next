import { Story } from '@storybook/react';
import Mypage, { Props } from './';

export default {
  title: 'Page/Mypage',
  component: Mypage,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Mypage {...args} />;

export const Default = Template.bind({});

Default.args = {};
