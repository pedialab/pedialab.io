import {
  Grid, Box, makeStyles, Typography
} from '@material-ui/core';
import { TextList } from 'pedialab-shared/components';

const useStyles = makeStyles({
  root: {
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    backgroundColor: '#333333'
  },
  textContainer: {
    marginTop: '1rem',
    alignSelf: 'center'
  },
  imgContainer: {
    transform: 'translate(0, -8.6%)',
    '& > img': {
      width: '100%',
      height: 'auto'
    }
  }
});

const content = [
  'Don’t let poor execution get in your way.',
  'Our tech-lead work closely with your team on architecture, coaching to provide you with hard-earned battlefield experiences.',
  'Grow with you your team, delegate non-core work and serve both short-term and long-term need.'
];

const TechleadaaS = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();

  return (
    <Grid container component="article" className={[className, classes.root].join(' ')} alignContent="center" justify="space-evenly">
      <Grid item className={classes.textContainer}>
        <Typography variant="h3" color="primary">
          Tech Lead as a Service
        </Typography>
        <Box mt="1.5rem">
          <TextList texts={content} textColor="primary.main" />
        </Box>
      </Grid>
      <Box className={classes.imgContainer} borderRadius="50px" overflow="hidden" width="43.31%">
        <img loading="lazy" src="/tech_lead_as_a_service.jpg" alt="" />
      </Box>
    </Grid>
  );
};

export default TechleadaaS;
