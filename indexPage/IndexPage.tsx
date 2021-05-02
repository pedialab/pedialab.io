import { Box, Grid } from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';

const IndexPage = () => (
  <Box mx={18}>
    <Grid container direction="column">
      <Header />
      <Footer />
    </Grid>
  </Box>
);

export default IndexPage;
