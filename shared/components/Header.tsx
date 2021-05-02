import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/Logo';
import NavList from './NavList';

const useStyles = makeStyles({
  lastItem: {
    marginLeft: 'auto'
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Typography variant="h1">Pedia Lab</Typography>
        </Grid>
        <Grid item component="nav" className={classes.lastItem}>
          <NavList />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

export type HeaderProps = Record<string, never>;
