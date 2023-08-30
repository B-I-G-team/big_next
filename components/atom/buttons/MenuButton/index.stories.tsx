import { Story } from '@storybook/react';
import { Props } from '.';
import MenuButton from '.';

export default {
  title: 'Atom/Buttons/ButtonMenu',
  component: MenuButton,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <MenuButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
