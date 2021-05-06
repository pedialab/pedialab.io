import { Story, Meta } from '@storybook/react';
import CompaniesWeWorkWith from './CompaniesWeWorkWith';

export default {
  title: 'index/CompaniesWeWorkWith',
  component: CompaniesWeWorkWith
} as Meta;

const Template: Story = () => <CompaniesWeWorkWith />;

export const Default = Template.bind({});
