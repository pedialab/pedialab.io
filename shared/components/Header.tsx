import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import LogoWithName from './LogoWithName';
import NavList from './NavList';

const useStyles = makeStyles({
  container: {
    alignItems: 'center'
  },
  lastItem: {
    marginLeft: 'auto'
  }
});

export type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const classes = useStyles();
  const headerList = useMemo(
    () => ['About', 'Pricing', 'Team', 'Case Studies', 'Careers', 'Contact'],
    []
  );
  return (
    <Box component="header" mt="2.25rem" width="100%" className={className}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item>
          <LogoWithName />
        </Grid>
        <Grid item component="nav" className={classes.lastItem}>
          <NavList items={headerList} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
