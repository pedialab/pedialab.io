import { Story, Meta } from '@storybook/react';
import NavList from './NavList';

export default {
  title: 'NavList',
  component: NavList
} as Meta;

const Template: Story = () => <NavList />;

export const Default = Template.bind({});
