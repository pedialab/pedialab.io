import { Box, Grid } from '@material-ui/core';
import { Header, Footer, HeroContent } from 'pedialab-shared/components';

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
