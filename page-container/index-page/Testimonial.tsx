import { Typography, Grid, makeStyles } from '@material-ui/core';

const content = [
  {
    name: 'Jake Choi',
    title: 'Chief of Product, Spaceship',
    description:
      '“Vincent’s strong technical skills together with his business sense take us to next level. His experience in startup saved us a huge amount of time and he always provide us both insights and actions.”'
  },
  {
    name: 'Fung Ng',
    title: 'Chief Architect, Head of Process & Control at AIA',
    description:
      '“Vincent is proactive at work and passionate in technology. Eager to learn, pick up things with great pace and always bring new technologies to the team.”'
  },
  {
    name: 'Jun Liao',
    title: 'Co-founder + CEO at X₀ Ltd,  creator of SLEEEP',
    description:
      '“Vincent displayed deep subject expertise, excellent problem solving skills, attention to detail and holistic thinking all-in-one. He consistently provides well reasoned recommendations for software architecture that not only solves technical challenges with long-term maintainability in mind, but also puts equal weight on business needs as well as quality user experience.“'
  }
];

const useStyle = makeStyles({
  title: { textAlign: 'center', marginBottom: '4rem' },
  sectionRoot: {
    width: '33.40%',
    marginBottom: '6rem',
    '& :last-child > p': {
      fontSize: '1.125rem',
      lineHeight: '1.555',
      textAlign: 'center',
      marginTop: '1.5rem'
    }
  }
});

const Testimonial = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyle();

  return (
    <Grid component="article" container justify="space-around" className={className}>
      <Grid item sm={12} className={classes.title}>
        <Typography variant="h2" color="primary">
          Testimonial
        </Typography>
      </Grid>
      {content.map((testimonial) => (
        <Grid component="section" className={classes.sectionRoot} key={testimonial.name} item container alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h3" color="primary">
              {testimonial.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="p" variant="subtitle1" color="primary">
              {testimonial.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="secondary">{testimonial.description}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default Testimonial;
