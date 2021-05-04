import { Box, Grid, makeStyles } from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';
import {
  HeroContent,
  OurCompany,
  SoftwareDelivery,
  VendorDifference,
  TechleadaaS
} from 'pedialab-index/index';

const useStyle = makeStyles({
  heroContent: {
    marginTop: '7rem'
  },
  ourCompany: {
    marginTop: '7.5rem',
    paddingLeft: '8.8%'
  },
  softwareDelivery: {
    marginTop: '14rem'
  },
  vendorDifference: {
    marginTop: '13rem'
  },
  techleadaaS: {
    marginTop: '14.65rem'
  },
  footer: {
    marginTop: '9.4rem'
  }
});

const IndexPage = () => {
  const classes = useStyle();
  return (
    <>
      <Box mx="10%">
        <Grid container direction="column">
          <Header />
          <HeroContent className={classes.heroContent} />
          <OurCompany className={classes.ourCompany} />
          <SoftwareDelivery className={classes.softwareDelivery} />
          <VendorDifference className={classes.vendorDifference} />
        </Grid>
      </Box>
      <Box ml="10%">
        <TechleadaaS className={classes.techleadaaS} />
      </Box>
      <Box mx="10%">
        <Footer className={classes.footer} />
      </Box>
    </>
  );
};

export default IndexPage;
