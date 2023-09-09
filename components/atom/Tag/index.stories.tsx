import { Story } from '@storybook/react';
import Tag, { Props } from '.';

export default {
  title: 'Atom/Tag',
  component: Tag,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '이용완료',
};
