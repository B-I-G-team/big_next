import { Story } from '@storybook/react';
import { Props } from '.';
import ButtonPayKakao from '.';

export default {
  title: 'Atom/Radio-Buttons/ButtonPayKakao',
  component: ButtonPayKakao,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonPayKakao {...args} />;

export const Default = Template.bind({});

Default.args = {};
