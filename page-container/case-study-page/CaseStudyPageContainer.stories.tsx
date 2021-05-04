import { Story, Meta } from '@storybook/react';
import CaseStudyPageContainer from './CaseStudyPageContainer';

export default {
  title: 'page/CaseStudyPage',
  component: CaseStudyPageContainer
} as Meta;

const Template: Story = () => <CaseStudyPageContainer />;

export const Default = Template.bind({});
