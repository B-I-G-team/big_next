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
  standard: '인기순',
};
