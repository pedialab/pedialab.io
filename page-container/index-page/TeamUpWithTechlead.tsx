import { Grid, makeStyles, Typography } from '@material-ui/core';

type ItemProps = {
  imgSrc: string;
  title: string;
  description: string;
};

const content: ItemProps[] = [
  {
    imgSrc: '/icon_architecture.svg',
    title: 'Architecture',
    description: 'Lower overall development cost & risk by applying right architecture for the job, from our battlefield experience'
  },
  {
    imgSrc: '/icon_recruitment.svg',
    title: 'Recruitment & Coaching',
    description: 'Recruitment is hard. We help to identify, interview and coach talents that fit team culture.'
  },
  {
    imgSrc: '/icon_strategy.svg',
    title: 'Strategy & Partnership Meetings',
    description: 'From investor meetings, strategic planning to vendor or partnership meetings, we provide you the technology  advice you needed on the spot.'
  }
];

const useStyles = makeStyles({
  root: { width: '18.75rem', marginTop: '6.6875rem' },
  svgImage: { width: '5rem' },
  title: { minHeight: '9.6rem', marginTop: '1.5rem' },
  description: {
    marginTop: '1.5rem'
  }
});

const Item = ({ imgSrc, title, description }: ItemProps) => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" className={classes.root}>
      <Grid item className={classes.svgImage}>
        <img src={imgSrc} alt={title} loading="lazy" />
      </Grid>
      <Grid item className={classes.title}>
        <Typography component="p" variant="h3" color="primary">
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.description}>
        <Typography variant="body1" color="secondary">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export type TeamUpWithTechleadProps = {
  className?: string;
};

const TeamUpWithTechlead = ({ className }: TeamUpWithTechleadProps) => (
  <Grid container component="article" justify="space-between" className={[className].join(' ')}>
    <Grid item sm={12}>
      <Typography align="center" variant="h2" color="primary">
        Team up with Tech-Lead in a nutshell
      </Typography>
    </Grid>
    {content.map((item) => (
      <Item key={item.title} title={item.title} imgSrc={item.imgSrc} description={item.description} />
    ))}
  </Grid>
);

export default TeamUpWithTechlead;
