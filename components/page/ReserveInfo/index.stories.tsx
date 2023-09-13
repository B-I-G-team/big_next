import { Story } from '@storybook/react';
import ReserveInfo, { Props } from '.';
export default {
  title: 'Page/ReserveInfo',
  component: ReserveInfo,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ReserveInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};
