import { Story } from '@storybook/react';
import { Props } from './';
import ButtonMenu from './';

export default {
  title: 'Atom/Buttons/ButtonMenu',
  component: ButtonMenu,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonMenu {...args} />;

export const Default = Template.bind({});

Default.args = {};
