import { Grid, makeStyles, Typography } from '@material-ui/core';
import LetsTalkButton from './LetsTalkButton';

const content = {
  title: 'WHERE WE SERVE',
  subtitle: 'Remote + On-site Supported ',
  description: `Our team is located in Hong Kong, Singapore, Taipei and Hanoi.
  Experienced UX & Product Designers, Senior Backend Developers, Site Reliability Engineers are ready to work on your project.`
};

const useStyles = makeStyles((theme) => ({
  article: {
    width: '28.75rem',
    '& > :nth-child(1)': {
      marginTop: '4.875rem'
    },
    '& > :nth-child(2)': {
      marginTop: '1.5rem'
    },
    '& > :nth-child(3)': {
      marginTop: '1rem'
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }
  },
  letsTalkButton: {
    marginTop: '3rem',
    justifyContent: 'flex-start'
  }
}));

const WhereWeServe = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();
  const { title, subtitle, description } = content;
  return (
    <Grid container justify="space-between" className={className}>
      <Grid item md={6} lg="auto">
        <img src="/map.jpg" alt="where we serve map" />
      </Grid>
      <Grid item container direction="column" component="article" className={classes.article} md={6} lg="auto">
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
        <Typography component="p" variant="h3" color="primary">
          {subtitle}
        </Typography>
        <Typography variant="body1" color="secondary">
          {description}
        </Typography>
        <LetsTalkButton className={classes.letsTalkButton} />
      </Grid>
    </Grid>
  );
};

export default WhereWeServe;
