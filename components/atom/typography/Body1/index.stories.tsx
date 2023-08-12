import { Story } from '@storybook/react';
import { ReactElement } from 'react';
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
  children: '본문1',
  bold: true,
};
