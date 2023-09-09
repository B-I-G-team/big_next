import { Story } from '@storybook/react';
import Body1, { Props } from './';

export default {
  title: 'Atom/Typography/Body1',
  component: Body1,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Body1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '본문1',
};

export const Bold = Template.bind({});

Bold.args = {
  children: '본문1_강조',
  bold: true,
};

export const Color = Template.bind({});

Color.args = {
  children: '본문1',
  color: 'blue',
};
