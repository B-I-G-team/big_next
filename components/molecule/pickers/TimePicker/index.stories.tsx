import { Story } from '@storybook/react';
import TimePicker, { Props } from './';

export default {
  title: 'Molecule/Pickers/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <TimePicker {...args} />;

export const Default = Template.bind({});
