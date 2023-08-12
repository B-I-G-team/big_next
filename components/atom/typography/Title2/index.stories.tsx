import { Story } from '@storybook/react';
import Title2, { Props } from './';

export default {
  title: 'Atom/Typography/Title2',
  component: Title2,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => (
  <Title2 {...args}>{args.children}</Title2>
);

export const Default = Template.bind({});

Default.args = {
  children: '제목2',
};
