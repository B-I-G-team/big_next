import { Story } from '@storybook/react';
import MypageHeader from '.';

export default {
  title: 'Molecule/MypageHeader',
  component: MypageHeader,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <MypageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {};
