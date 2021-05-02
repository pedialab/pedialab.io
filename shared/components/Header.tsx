import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'pedialab-shared/assets/Logo';
import NavList from './NavList';

const useStyles = makeStyles({
  lastItem: {
    marginLeft: 'auto'
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <Box mt={4}>
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
    </Box>
  );
};

export default Header;

export type HeaderProps = Record<string, never>;
