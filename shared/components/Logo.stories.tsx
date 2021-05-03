import { Story, Meta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Logo',
  component: Logo
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
