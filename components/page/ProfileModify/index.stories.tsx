import { Story } from '@storybook/react';
import PropfileModify, { Props } from './';

export default {
  title: 'Page/PropfileModify',
  component: PropfileModify,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <PropfileModify {...args} />;

export const Default = Template.bind({});

Default.args = {};
