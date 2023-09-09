import { Story } from '@storybook/react';
import Body2, { Props } from './';

export default {
  title: 'Atom/Typography/Body2',
  component: Body2,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Body2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '본문2',
};

export const Bold = Template.bind({});

Bold.args = {
  children: '본문2_강조',
  bold: true,
};

export const Color = Template.bind({});

Color.args = {
  children: '본문2',
  color: 'blue',
};
