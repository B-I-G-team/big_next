import { Story } from '@storybook/react';
import GymSummary, { Props } from '.';
import GymTemp from '@/public/assets/GymTemp.png';
export default {
  title: 'Molecule/GymSummary',
  component: GymSummary,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => (
  <GymSummary {...args}></GymSummary>
);

export const Default = Template.bind({});

Default.args = {
  gym: {
    img: GymTemp,
    name: '낙산관 실내체육관(낙산관)',
    location: '서울 종로구 낙산성곽서길 184',
    size: '코트 1개 ＊ 골대 4개',
  },
};
