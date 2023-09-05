import { Story } from '@storybook/react';
import ReserveCardHeader, { Props } from '.';

export default {
  title: 'Molecule/ReserveCardHeader',
  component: ReserveCardHeader,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: Props) => <ReserveCardHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: '2023.09.05 (화)',
};
