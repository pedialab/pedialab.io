import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  title: 'Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = () => <Header />;

export const Default = Template.bind({});
