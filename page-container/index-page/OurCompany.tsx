import {
  Grid, makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: '36.2%',
    marginTop: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  textContainer: {
    width: '67%',
    marginTop: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.25rem',
      width: '100%'
    }
  }
}));

const OurCompany = ({ className }: Partial<{ className: string }>) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" component="article" className={className} id="our-company">
      <Typography variant="h2" color="primary">
        OUR COMPANY
      </Typography>
      <Grid item className={classes.imageContainer}>
        <img src="/our_company_img.svg" width="415" height="361" alt="our company introduction logo" />
      </Grid>
      <Grid item className={classes.textContainer}>
        <Typography variant="body1" color="secondary">
          We are a team of ex-startup founders & tech-leads, who understand both the power of technology and trade-offs to make in fast paced startups or
          innovative projects.
        </Typography>
        <br />
        <Typography variant="body1" color="secondary">
          We are on a mission to democratize great Product engineering, Data science and Agile culture for entrepreneurs to build their products and dreams,
          building with open source technologies and a knowledge- sharing community.
        </Typography>
        <br />
        <Typography variant="body1" color="secondary">
          We only work with clients and projects that are making a difference, at various stages in their journey from seed to IPO.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurCompany;
