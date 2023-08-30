import { Story } from '@storybook/react';
import Header from '.';

export default {
  title: 'Molecule/Header',
  component: Header,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};
