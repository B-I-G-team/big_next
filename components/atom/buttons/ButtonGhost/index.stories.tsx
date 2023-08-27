import { Story } from '@storybook/react';
import { Props } from './';
import ButtonGhost from './';

export default {
  title: 'Atom/Buttons/ButtonGhost',
  component: ButtonGhost,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonGhost {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '주요버튼',
};

export const Disable = Template.bind({});

Disable.args = {
  children: 'Disable',
  disabled: true,
};

export const Size = Template.bind({});

Size.args = {
  children: '크기조절',
  size: 'fit',
};
