import { Story } from '@storybook/react';
import TitleAndValue, { Props } from '.';

export default {
  title: 'Molecule/TitleAndValue',
  component: TitleAndValue,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <TitleAndValue {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '이름',
  value: '김민석',
};
