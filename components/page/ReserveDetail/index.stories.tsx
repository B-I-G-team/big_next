import { Story } from '@storybook/react';
import ReserveDetail, { Props } from '.';
import GymTemp from '@/public/assets/GymTemp.png';
export default {
  title: 'Page/ReserveDetail',
  component: ReserveDetail,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ReserveDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  reserveInfo: {
    reserveKey: 1,
    is_used: true,
    gym: {
      name: '낙산관 실내체육관(낙산관)',
      location: '서울특별시 성북구 삼선교로 16길 116',
      img: GymTemp,
    },
    date: '2023. 07. 31 (월)',
    startTime: 17,
    endTime: 19,
  },
  detailInfo: {
    name: '김민석',
    phonenumber: '010-8651-2385',
    pay: 140000,
    payment: '카카오페이',
  },
};
