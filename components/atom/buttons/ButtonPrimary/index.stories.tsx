import { Story } from '@storybook/react';
import { ReactElement } from 'react';
import { Props } from './';
import ButtonPrimary from './';

export default {
  title: 'Atom/Buttons/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonPrimary {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '주요버튼',
};

export const Size = Template.bind({});

Size.args = {
  children: '크기조절',
  size: 'fit',
};
