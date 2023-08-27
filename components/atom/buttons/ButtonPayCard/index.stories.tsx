import { Story } from '@storybook/react';
import { Props } from './';
import ButtonPayCard from './';

export default {
  title: 'Atom/Buttons/ButtonPayCard',
  component: ButtonPayCard,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <ButtonPayCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
