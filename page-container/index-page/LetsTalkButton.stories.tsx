import { Story, Meta } from '@storybook/react';
import LetsTalkButton, { LetsTalkButtonProps } from './LetsTalkButton';

export default {
  title: 'index/LetsTalkButton',
  component: LetsTalkButton
} as Meta;

const Template: Story<LetsTalkButtonProps> = ({
  marginTop
}: LetsTalkButtonProps) => <LetsTalkButton marginTop={marginTop} />;

export const Default = Template.bind({});
