import { Story } from '@storybook/react';
import { Props } from './';
import PaymentCheckbox from './';

export default {
  title: 'Atom/Checkbox/PaymentCheckbox',
  component: PaymentCheckbox,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <PaymentCheckbox {...args} />;

export const Default = Template.bind({});

Default.args = {};
