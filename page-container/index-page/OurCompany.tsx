import {
  Grid, Box, makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  svgImage: {
    width: '100%',
    height: 'auto'
  }
});

export type OurCompanyProps = {
  className?: string;
};

const OurCompany = ({ className }: OurCompanyProps) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" component="article" className={className} id="our-company">
      <Typography variant="h2" color="primary">
        OUR COMPANY
      </Typography>
      <Box width="36.2%" mt="2.5rem">
        <img src="/our_company_img.svg" alt="our company introduction logo" className={classes.svgImage} />
      </Box>
      <Box mt="2.5rem" width="61.43%">
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
      </Box>
    </Grid>
  );
};

export default OurCompany;
