import { Story } from '@storybook/react';
import Body3, { Props } from './';

export default {
  title: 'Atom/Typography/Body3',
  component: Body3,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Body3 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '본문3',
};

export const Bold = Template.bind({});

Bold.args = {
  children: '본문3_강조',
  bold: true,
};

export const Color = Template.bind({});

Color.args = {
  children: '본문3',
  color: 'blue',
};
