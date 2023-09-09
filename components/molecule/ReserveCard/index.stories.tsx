import { Story } from '@storybook/react';
import ReserveCard from '.';
import GymTemp from '@/public/assets/GymTemp.png';
export default {
  title: 'Molecule/ReserveCard',
  component: ReserveCard,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <ReserveCard {...args} />;

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
};
