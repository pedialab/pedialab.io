import { Typography, Grid, makeStyles } from '@material-ui/core';
import LogoWithName from './LogoWithName';

export type FooterProps = {
  className?: string;
};

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#2F2F2F',
    paddingTop: '4.375rem',
    '& > :last-child': {
      marginTop: '1.5rem',
      marginBottom: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  logoContainer: {
    width: 'max-content'
  },
  contactInfoBlock: {
    marginTop: '1rem',
    fontStyle: 'normal'
  }
}));

const Footer = ({ className }: FooterProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      component="footer"
      className={[className, classes.footerContainer].join(' ')}
      direction="column"
      alignItems="flex-start"
    >
      <Grid item className={classes.logoContainer}><LogoWithName /></Grid>
      <Grid item container direction="column">
        <Typography component="small" variant="caption" color="textSecondary">
          Singapore Company Entity, PeraPera Private Limited
        </Typography>
        <Typography component="small" variant="caption" color="textSecondary">
          PeraPera © All Rights Reserved.
        </Typography>
        <Typography component="address" className={classes.contactInfoBlock} variant="caption" color="textSecondary">
          Contact Us
          <br />
          Taiwan Office: 6F., No.180, Sec. 1, Keelung Rd., Xinyi Dist., Taipei City 110, Taiwan (R.O.C.)
          <br />
          Singapore Office: Mapletree Business City, 20 Pasir Panjang Rd, #03-22/24, 117439
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
