import { Story } from '@storybook/react';
import ReserveCardMain from '.';

export default {
  title: 'Molecule/ReserveCardMain',
  component: ReserveCardMain,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <ReserveCardMain {...args} />;

export const Default = Template.bind({});

Default.args = {};
