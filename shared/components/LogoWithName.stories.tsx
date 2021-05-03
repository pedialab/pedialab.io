import { Story, Meta } from '@storybook/react';
import LogoWithName from './LogoWithName';

export default {
  title: 'LogoWithName',
  component: LogoWithName
} as Meta;

const Template: Story = () => <LogoWithName />;

export const Default = Template.bind({});
