import { Story } from '@storybook/react';
import { Props } from '.';
import DrawerButton from '.';

export default {
  title: 'Atom/Buttons/DrawerButton',
  component: DrawerButton,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <DrawerButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClick: () => {},
};
