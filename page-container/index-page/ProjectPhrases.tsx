import { Typography, Grid, makeStyles } from '@material-ui/core';

const phrases = [
  {
    title: 'Project Start',
    description: 'Requirements & strategy discussions with founders or project leads.'
  },
  {
    title: 'Weekly Coworking',
    description: 'Weekly meetings and office hours to team up and provide coaching, architecture review & identify improvement areas'
  },
  {
    title: 'Weekly Dev Support',
    description: 'Offload chores work like testing/ infrastructure and boost productivity of your developers'
  },
  {
    title: 'Building your team',
    description: 'Recruit & Train up the team and develop expertise '
  }
];

const useStyle = makeStyles((theme) => ({
  list: {
    marginTop: '5.125rem',
    listStyleType: 'none',
    counterReset: 'count',
    padding: 0,
    '& > li': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      counterIncrement: 'count',
      flexWrap: 'nowrap',
      '&::before': {
        content: 'counter(count)',
        ...theme.typography.h2,
        color: theme.palette.primary.main,
        paddingLeft: '2.5625rem',
        paddingRight: '2.5625rem'
      }
    }
  },
  textRoot: {
    marginTop: '0.75rem',
    '& :nth-child(n)': {
      marginBottom: '1.25rem'
    },
    '& :last-child': {
      width: '62.91%'
    }
  }
}));

const ProjectPhrases = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();
  return (
    <Grid container direction="column" component="article" className={className}>
      <Grid item>
        <Typography variant="h2" color="primary">
          Project Phrases
        </Typography>
      </Grid>
      <Grid component="ol" className={classes.list} item container direction="column">
        {phrases.map((step) => (
          <Grid component="li" item container>
            <Grid item component="section" className={classes.textRoot}>
              <Typography variant="h3" color="primary">
                {step.title}
              </Typography>
              <Typography variant="body1" color="secondary">
                {step.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectPhrases;
