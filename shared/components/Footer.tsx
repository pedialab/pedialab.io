import { Grid, Typography, Box } from '@material-ui/core';
import Logo from 'pedialab-shared/assets/Logo';

const Footer = () => (
  <Box component="footer">
    <Grid container spacing={2}>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Typography component="p" variant="h1">
          Pedia Lab
        </Typography>
      </Grid>
    </Grid>
    <Box component="small" mt={2}>
      <Typography variant="caption" color="textSecondary">
        Singapore Company Entity, PeraPera Private Limited
      </Typography>
    </Box>
  </Box>
);

export default Footer;
