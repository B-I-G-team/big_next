import { Story } from '@storybook/react';
import ReserveInfo from '.';
import GymTemp from '@/public/assets/GymTemp.png';
export default {
  title: 'Page/ReserveInfo',
  component: ReserveInfo,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <ReserveInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};