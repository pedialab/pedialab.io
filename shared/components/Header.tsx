import { Grid, Typography } from '@material-ui/core';
import Logo from '../assets/Logo';
import NavItem from './NavItem';

const Header = () => (
  <>
    <Grid container spacing={2}>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Typography variant="h1">Pedia Lab</Typography>
      </Grid>
      <Grid item component="nav">
        <NavItem isActive text="About" />
        <NavItem text="Pricing" />
        <NavItem text="Team" />
        <NavItem text="Case Studies" />
        <NavItem text="Contact" />
      </Grid>
    </Grid>
  </>
);

export default Header;

export type HeaderProps = Record<string, never>;
