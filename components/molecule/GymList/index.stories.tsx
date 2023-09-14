import { Story } from '@storybook/react';
import GymList, { Props } from '.';
import GymTemp from '@/public/assets/GymTemp.png';

export default {
  title: 'Molecule/GymList',
  component: GymList,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <GymList {...args} />;

export const Default = Template.bind({});

Default.args = {
  gym: {
    name: '낙산관 실내체육관(낙산관)',
    location: '서울특별시 성북구 삼선교로 16길 116',
    img: GymTemp,
    pay: 72000,
  },
};
