import { Story } from '@storybook/react';
import NavHeader, { Props } from '.';

export default {
  title: 'Molecule/NavHeader',
  component: NavHeader,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <NavHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  pageName: '프로필 수정',
  isSaveButton: true,
};
