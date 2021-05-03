import { Story, Meta } from '@storybook/react';
import NavItem, { NavItemProps } from './NavItem';

export default {
  title: 'NavItem',
  component: NavItem
} as Meta;

const Template: Story<NavItemProps> = ({ isActive, text }: NavItemProps) => (
  <NavItem isActive={isActive} text={text} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Pricing'
};
