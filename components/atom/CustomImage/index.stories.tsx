import { Story } from '@storybook/react';
import { Props } from './';
import CustomImage from './';
import tempImg from '@/public/assets/ProfileTemp.jpeg';

export default {
  title: 'Atom/CustomImage',
  component: CustomImage,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <CustomImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: tempImg,
};
