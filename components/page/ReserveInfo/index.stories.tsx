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

Default.args = {
  isUsed: true,
  gym: {
    name: '낙산관 실내체육관(낙산관)',
    location: '서울특별시 성북구 삼선교로 16길 116',
    img: GymTemp,
  },
  date: '2023. 07. 31 (월)',
  startTime: 17,
  endTime: 19,
};
