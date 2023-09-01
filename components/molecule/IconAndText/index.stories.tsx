import CalenderIcon from '@/components/icons/CalenderIcon';
import DocumentIcon from '@/components/icons/DocumentIcon';
import { Story } from '@storybook/react';
import IconAndText, { Props } from '.';

export default {
  title: 'Molecule/IconAndText',
  component: IconAndText,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <IconAndText {...args} />;

export const 예약내역 = Template.bind({});

예약내역.args = {
  IconComponent: DocumentIcon,
  text: '예약내역',
};

export const 체육관관리 = Template.bind({});

체육관관리.args = {
  IconComponent: CalenderIcon,
  text: '체육관 관리',
};
