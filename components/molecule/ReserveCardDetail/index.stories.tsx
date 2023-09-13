import { Story } from '@storybook/react';
import ReserveCardDetail, { Props } from '.';
export default {
  title: 'Molecule/ReserveCardDetail',
  component: ReserveCardDetail,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ReserveCardDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  detailInfo: {
    name: '김민석',
    phonenumber: '010-8651-2385',
    pay: 140000,
    payment: '카카오페이',
  },
};
