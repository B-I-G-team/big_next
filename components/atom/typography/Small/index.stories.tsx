import { Story } from '@storybook/react';
import Small, { Props } from './';

export default {
  title: 'Atom/Typography/Small',
  component: Small,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Small {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '작음',
};

export const Bold = Template.bind({});

Bold.args = {
  children: '작음_강조',
  bold: true,
};

export const Color = Template.bind({});

Color.args = {
  children: '작음',
  color: 'blue',
};
