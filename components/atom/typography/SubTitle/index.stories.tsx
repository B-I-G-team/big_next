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
