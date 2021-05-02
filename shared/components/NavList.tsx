import { Grid } from '@material-ui/core';
import NavItem from './NavItem';

const NavList = () => (
  <>
    <Grid container component="ul">
      <NavItem isActive text="About" />
      <NavItem text="Pricing" />
      <NavItem text="Team" />
      <NavItem text="Case Studies" />
      <NavItem text="Contact" />
    </Grid>
  </>
);

export default NavList;
