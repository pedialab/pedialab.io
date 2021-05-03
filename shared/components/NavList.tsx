import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import NavItem from './NavItem';

const useStyles = makeStyles(() => ({
  navList: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  }
}));

export type NavListProps = {
  items: string[];
};

const NavList = ({ items = [] }: NavListProps) => {
  const classes = useStyles();
  const navListItems = useMemo(
    () => items.map((text) => <NavItem text={text} key={text} />),
    [items]
  );
  return (
    <>
      <Grid container component="ul" className={classes.navList}>
        {navListItems}
      </Grid>
    </>
  );
};

export default NavList;
