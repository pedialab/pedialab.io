import { Story, Meta } from '@storybook/react';
import CommonButton, { CommonButtonProps } from './CommonButton';

export default {
  title: 'shared/CommonButton',
  component: CommonButton
} as Meta;

const Template: Story<CommonButtonProps> = ({
  title,
  subtitle,
  width
}: CommonButtonProps) => (
  <CommonButton title={title} subtitle={subtitle} width={width} />
);

export const Default = Template.bind({});
Default.args = { title: 'Let\'s Talk' };

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  ...Default.args,
  subtitle: '*Budget in USD'
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...WithSubtitle.args,
  width: '420px'
};
