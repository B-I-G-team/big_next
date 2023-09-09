import { Story } from '@storybook/react';
import NavHeader from '.';

export default {
  title: 'Molecule/NavHeader',
  component: NavHeader,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <NavHeader {...args} />;

export const Default = Template.bind({});

Default.args = {};
