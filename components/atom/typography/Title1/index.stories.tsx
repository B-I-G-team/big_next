import { Story } from '@storybook/react';
import { ReactElement } from 'react';
import Title1, { Props } from './';

export default {
  title: 'Atom/Typography/Title1',
  component: Title1,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Title1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '제목1',
};
