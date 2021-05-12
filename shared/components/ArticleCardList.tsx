import { useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ArticleCard, { ArticleCardProps } from './ArticleCard';

export type ArticleCardListProps = { cards: ArticleCardProps[]; className?: string };

const useStyles = makeStyles({
  root: {
    '& > :nth-child(3n)': {
      marginRight: 0
    }
  },
  card: {
    width: '27.92%',
    marginRight: '8.11%',
    marginBottom: '4rem'
  }
});

const ArticleCardList = ({ cards, className }: ArticleCardListProps) => {
  const classes = useStyles();
  const items = useMemo(
    () => cards.map((articleCard) => (
      <Grid item key={articleCard.title} className={classes.card}>
        <ArticleCard link={articleCard.link} title={articleCard.title} imgSrc={articleCard.imgSrc} content={articleCard.content} />
      </Grid>
    )),
    [cards, classes]
  );
  return (
    <Grid container className={[classes.root, className].join(' ')}>
      {items}
    </Grid>
  );
};

export default ArticleCardList;
