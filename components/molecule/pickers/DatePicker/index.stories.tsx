import { Story } from '@storybook/react';
import DatePicker, { Props } from './';

export default {
  title: 'Molecule/Pickers/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <DatePicker {...args} />;

export const Default = Template.bind({});
