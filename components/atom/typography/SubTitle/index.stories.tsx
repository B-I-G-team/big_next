import { Story } from '@storybook/react';
import SubTitle, { Props } from './';

export default {
  title: 'Atom/Typography/SubTitle',
  component: SubTitle,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <SubTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '부제목',
};

export const Color = Template.bind({});

Color.args = {
  children: '부제목',
  color: 'blue',
};
