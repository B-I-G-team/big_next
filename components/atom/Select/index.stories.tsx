import { Story } from '@storybook/react';
import Select, { Props } from '.';

export default {
  title: 'Atom/Select',
  component: Select,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultValue: '인기순',
  options: ['인기순', '최신순', '좋아요순'],
  onChange: () => {
    console.log('change');
  },
};
