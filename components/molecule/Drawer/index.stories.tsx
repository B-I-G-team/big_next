import { Story } from '@storybook/react';
import Drawer, { Props } from '.';

export default {
  title: 'Molecule/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => (
  <Drawer {...args}>{args.children}</Drawer>
);

export const Default = Template.bind({});

Default.args = {
  title: '예약자 정보',
  children: (
    <div style={{ height: '100px', width: '100%', border: `1px solid black` }}>
      <span>Information</span>
    </div>
  ),
};
