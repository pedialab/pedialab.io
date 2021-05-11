import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import NavItem, { NavItemProps } from './NavItem';

const useStyles = makeStyles(() => ({
  navList: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  }
}));

export type NavListProps = {
  items: NavItemProps[];
};

const NavList = ({ items = [] }: NavListProps) => {
  const classes = useStyles();
  const navListItems = useMemo(() => items.map((item) => <NavItem text={item.text} href={item.href} key={item.text} isActive={item.isActive} />), [items]);
  return (
    <>
      <Grid container component="ul" className={classes.navList}>
        {navListItems}
      </Grid>
    </>
  );
};

export default NavList;
