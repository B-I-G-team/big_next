import { Story } from '@storybook/react';
import { Props } from './';
import PaymentRadio from './';

export default {
  title: 'Atom/RadioButton/PaymentRadio',
  component: PaymentRadio,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <PaymentRadio {...args} />;

export const Default = Template.bind({});

Default.args = {};
