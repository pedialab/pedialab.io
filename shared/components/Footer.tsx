import { Grid, Typography, Box } from '@material-ui/core';
import LogoWithName from './LogoWithName';

const Footer = () => (
  <Box component="footer">
    <LogoWithName />
    <Box mt={2}>
      <Typography variant="caption" component="small" color="textSecondary">
        Singapore Company Entity, PeraPera Private Limited
      </Typography>
    </Box>
  </Box>
);

export default Footer;
