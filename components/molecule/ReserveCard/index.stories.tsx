import { Story } from '@storybook/react';
import ReserveCard from '.';

export default {
  title: 'Molecule/ReserveCard',
  component: ReserveCard,
  tags: ['autodocs'],
};

const Template: Story<any> = (args: any) => <ReserveCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
