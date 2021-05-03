import { Box, Grid } from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';
import { HeroContent } from 'pedialab-index/index';

const IndexPage = () => (
  <Box mx="10%">
    <Grid container direction="column">
      <Header />
      <HeroContent />
      <Footer />
    </Grid>
  </Box>
);

export default IndexPage;
