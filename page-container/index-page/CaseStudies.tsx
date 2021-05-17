import { Typography, Grid, makeStyles } from '@material-ui/core';
import { ArticleCardList, CommonButton } from 'pedialab-shared/components';

const articleCards = [
  {
    link: '/case-study/sleeep-by-space-is-ltd',
    title: 'SLEEEP by Space is Ltd',
    imgSrc: '/case_sleeep.jpg',
    content: `Red Dot Design Awards 18’
Our partner Vincent Lau, lead the development of reservation systems and IoT integrations of the award winning sleeping pod, during his time with Space is Ltd.`
  },
  {
    link: '/case-study/teaming-up-with-spaceship',
    title: 'Teaming up with Spaceship',
    imgSrc: '/case_spaceship.jpg',
    content:
      'One of the rapidly growing logistics startups in Hong Kong, Spaceship has urging need to increase their technical capacity for their next stage of growth.'
  },
  {
    link: '/case-study/hypefest-by-hypebeast',
    title: 'HYPEFEST by Hypebeast',
    imgSrc: '/case_hypefest.jpg',
    content: 'Mobile App developed by ReactNative. For a 2 days event named HYPEFEST.'
  }
];

const useStyle = makeStyles((theme) => ({
  articleCardList: {
    marginTop: '5rem',
    '& + div': { // button container
      marginTop: '0.9375rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '0.188rem'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.313rem'
    }
  }
}));

const CaseStudies = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid id="case-studies" container component="article" className={className}>
      <Grid item xs={12}>
        <Typography variant="h2" color="textSecondary">
          Case Studies
        </Typography>
      </Grid>
      <Grid item className={classes.articleCardList}>
        <ArticleCardList articleCards={articleCards} />
      </Grid>
      <Grid item container justify="center">
        <CommonButton title="Explore more of our work" href="/case-study" />
      </Grid>
    </Grid>
  );
};

export default CaseStudies;
