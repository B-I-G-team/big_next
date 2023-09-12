import { Story } from '@storybook/react';
import ReserveCardMain, { Props } from '.';
import GymTemp from '@/public/assets/GymTemp.png';
export default {
  title: 'Molecule/ReserveCardMain',
  component: ReserveCardMain,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ReserveCardMain {...args} />;

export const Default = Template.bind({});

Default.args = {
  is_used: true,
  gym: {
    name: '낙산관 실내체육관(낙산관)',
    location: '서울특별시 성북구 삼선교로 16길 116',
    img: GymTemp,
  },
  date: '2023. 07. 31 (월)',
  startTime: 17,
  endTime: 19,
};
