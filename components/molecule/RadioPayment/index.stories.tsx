import { Story } from '@storybook/react';
import RadioPayment from '.';

export default {
  title: 'Molecule/RadioPayment',
  component: RadioPayment,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <RadioPayment {...args} />;

export const Default = Template.bind({});

Default.args = {};
