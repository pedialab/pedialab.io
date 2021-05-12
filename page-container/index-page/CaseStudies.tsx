import { Typography, Grid, makeStyles } from '@material-ui/core';
import { ArticleCardList, CommonButton } from 'pedialab-shared/components';

const cards = [
  {
    link: '',
    title: 'SLEEEP by Space is Ltd',
    imgSrc: '/case_sleeep.jpg',
    content: `Red Dot Design Awards 18’
Our partner Vincent Lau, lead the development of reservation systems and IoT integrations of the award winning sleeping pod, during his time with Space is Ltd.`
  },
  {
    link: '',
    title: 'Teaming up with Spaceship',
    imgSrc: '/case_spaceship.jpg',
    content:
      'One of the rapidly growing logistics startups in Hong Kong, Spaceship has urging need to increase their technical capacity for their next stage of growth.'
  },
  {
    link: '',
    title: 'HYPEFEST by Hypebeast',
    imgSrc: '/case_hypefest.jpg',
    content: 'Mobile App developed by ReactNative. For a 2 days event named HYPEFEST.'
  }
];

const useStyle = makeStyles({
  articleCardList: {
    marginTop: '5rem',
    '& + div': { marginTop: '0.9375rem' }
  }
});

const CaseStudies = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid id="case-studies" container component="article" className={className}>
      <Grid item>
        <Typography variant="h2" color="textSecondary">
          Case Studies
        </Typography>
      </Grid>
      <Grid item className={classes.articleCardList}>
        <ArticleCardList cards={cards} />
      </Grid>
      <Grid item container justify="center">
        <CommonButton title="Explore more of our work" href="/case-study" />
      </Grid>
    </Grid>
  );
};

export default CaseStudies;
