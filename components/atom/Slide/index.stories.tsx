import { Story } from '@storybook/react';
import Slide, { Props } from './';
import TempProfileImage from '@/public/assets/ProfileTemp.jpeg';
import Temp1 from '@/public/assets/Temp1.png';

export default {
  title: 'Atom/Slide',
  component: Slide,
  tags: ['autodocs'],
};

const Template: Story<Props> = (args: Props) => <Slide {...args} />;

/**
 *
 * **사용법 예시**
 *
 * ```tsx
 * import TempProfileImage from '@/public/assets/ProfileTemp.jpeg';
 * import Temp1 from '@/public/assets/Temp1.png';
 * ...
 * const items=[{
 *   image: TempProfileImage,
 * },{
 *   image: Temp1,
 * }]
 * <Slide items={items} />
 * ```
 */
export const Default = Template.bind({});

Default.args = {
  items: [
    { image: TempProfileImage },
    { image: Temp1 },
    { image: TempProfileImage },
    { image: Temp1 },
  ],
};
