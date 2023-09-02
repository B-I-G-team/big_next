import { Story } from '@storybook/react';
import { Props } from './';
import PrimaryInput from './';

export default {
  title: 'Atom/Inputs/PrimaryInput',
  component: PrimaryInput,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <PrimaryInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
