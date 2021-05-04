import { Box, Grid } from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';
import {
  HeroContent,
  OurCompany,
  SoftwareDelivery
} from 'pedialab-index/index';

const IndexPage = () => (
  <Box mx="10%">
    <Grid container direction="column">
      <Header />
      <HeroContent />
      <OurCompany />
      <SoftwareDelivery />
      <Footer />
    </Grid>
  </Box>
);

export default IndexPage;
