import { Story } from '@storybook/react';
import ReserveInfo from '.';
export default {
  title: 'Page/ReserveInfo',
  component: ReserveInfo,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <ReserveInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};
