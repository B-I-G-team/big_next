import { Story } from '@storybook/react';
import { Props } from './';
import ButtonBack from './';

export default {
  title: 'Atom/Buttons/ButtonBack',
  component: ButtonBack,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonBack {...args} />;

export const Default = Template.bind({});

Default.args = {};
