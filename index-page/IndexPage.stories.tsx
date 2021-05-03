import { Story, Meta } from '@storybook/react';
import IndexPage from './IndexPage';

export default {
  title: 'page/IndexPage',
  component: IndexPage
} as Meta;

const Template: Story = () => <IndexPage />;

export const Default = Template.bind({});
