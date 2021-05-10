import { Story, Meta } from '@storybook/react';
import HeroContent from './HeroContent';

export default {
  title: 'HeroContent',
  component: HeroContent
} as Meta;

const Template: Story = () => <HeroContent />;

export const Default = Template.bind({});
