import { Story } from '@storybook/react';
import { Props } from './';
import ButtonWhite from './';

export default {
  title: 'Atom/Buttons/ButtonWhite',
  component: ButtonWhite,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonWhite {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '주요버튼',
};

export const Size = Template.bind({});

Size.args = {
  children: '크기조절',
  size: 'fit',
};
