import { Typography, Box } from '@material-ui/core';
import LogoWithName from './LogoWithName';

export type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => (
  <Box
    component="footer"
    className={className}
    borderTop={1}
    paddingTop="4.4rem"
    borderColor="#2F2F2F"
  >
    <LogoWithName />
    <Box mt={2}>
      <Typography variant="caption" component="small" color="textSecondary">
        Singapore Company Entity, PeraPera Private Limited
      </Typography>
    </Box>
  </Box>
);

export default Footer;
