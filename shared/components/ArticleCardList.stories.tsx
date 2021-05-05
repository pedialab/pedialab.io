import { Story, Meta } from '@storybook/react';
import ArticleCardList, { ArticleCardListProps } from './ArticleCardList';
import { Default as ArticleCardExample } from './ArticleCard.stories';

export default {
  title: 'shared/ArticleCardList',
  component: ArticleCardList
} as Meta;

const Template: Story<ArticleCardListProps> = ({ cards }: ArticleCardListProps) => <ArticleCardList cards={cards} />;

const exampleCard = ArticleCardExample.args;

export const Default = Template.bind({});
Default.args = { cards: [exampleCard] };

const exampleCard2 = {
  title: 'Teaming up with Spaceship',
  imgSrc: '/case_spaceship.jpg',
  content:
    'One of the rapidly growing logistics startups in Hong Kong, Spaceship has urging need to increase their technical capacity for their next stage of growth.'
};

const exampleCard3 = {
  title: 'HYPEFEST by Hypebeast',
  imgSrc: '/case_hypefest.jpg',
  content: 'Mobile App developed by ReactNative. For a 2 days event named HYPEFEST.'
};

export const TwoCards = Template.bind({});
TwoCards.args = {
  cards: [exampleCard, exampleCard2]
};

export const ThreeCards = Template.bind({});
ThreeCards.args = {
  cards: [exampleCard, exampleCard2, exampleCard3]
};

export const FourCards = Template.bind({});
FourCards.args = {
  cards: [exampleCard, exampleCard2, exampleCard3, exampleCard]
};

export const SixCards = Template.bind({});
SixCards.args = {
  cards: [exampleCard, exampleCard2, exampleCard3, exampleCard, exampleCard2, exampleCard3]
};
