import { Box, Grid, Typography } from '@material-ui/core';
import Logo from './Logo';

const LogoWithName = () => (
  <Grid container>
    <Box mr="8px">
      <Logo />
    </Box>
    <Typography variant="h1">Pedia Lab</Typography>
  </Grid>
);

export default LogoWithName;