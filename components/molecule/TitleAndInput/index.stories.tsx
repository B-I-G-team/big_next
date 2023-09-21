import { Story } from '@storybook/react';
import TitleAndInput, { Props } from '.';

export default {
  title: 'Molecule/TitleAndInput',
  component: TitleAndInput,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <TitleAndInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '이름',
  placeholder: '김민석',
};
