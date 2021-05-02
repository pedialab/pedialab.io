import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';

const useStyles = makeStyles(() => ({
  navList: {
    listStyle: 'none'
  }
}));

const NavList = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container component="ul" className={classes.navList}>
        <NavItem isActive text="About" />
        <NavItem text="Pricing" />
        <NavItem text="Team" />
        <NavItem text="Case Studies" />
        <NavItem text="Contact" />
      </Grid>
    </>
  );
};

export default NavList;
