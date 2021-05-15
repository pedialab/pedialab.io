import { Typography, Grid, makeStyles } from '@material-ui/core';
import LogoWithName from './LogoWithName';

export type FooterProps = {
  className?: string;
};

const useStyles = makeStyles({
  root: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#2F2F2F',
    paddingTop: '4.375rem',
    '& > :last-child': {
      marginTop: '1.5rem',
      marginBottom: '1rem'
    }
  },
  logoContainer: {
    width: 'max-content'
  }
});

const Footer = ({ className }: FooterProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      component="footer"
      className={[className, classes.root].join(' ')}
      direction="column"
      alignItems="center"
    >
      <Grid item className={classes.logoContainer}><LogoWithName /></Grid>
      <Grid item>
        <Typography variant="caption" component="small" color="textSecondary">
          Singapore Company Entity, PeraPera Private Limited
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
