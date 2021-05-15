import {
  Box,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Header, Footer, CommonButton } from 'pedialab-shared/components';

const useStyle = makeStyles((theme) => ({
  title: {
    marginTop: '9.4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5.25rem'
    }
  },
  linkContainer: {
    marginTop: '5.19rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.625rem'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& > :first-child': {
      marginRight: '2.5rem',
      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginBottom: '2.625rem'
      }
    }
  },
  footer: {
    marginTop: '9.4rem'
  }
}));

const CareerPage = () => {
  const classes = useStyle();
  return (
    <>
      <Box mx={{ xs: 0, md: '10%' }}>
        <Header isActivatedOrder={4} />
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.title}>
            <Typography variant="h2" color="primary">
              Join Pedia Lab
            </Typography>
          </Grid>
          <Grid item container className={classes.linkContainer} justify="center">
            <Grid item>
              <CommonButton
                title="Career opportunities - CakeResume"
                width="26.3rem"
                href="https://www.cakeresume.com/companies/peraperaai?ref=navs_company"
              />
            </Grid>
            <Grid item>
              <CommonButton
                title="Career opportunities - AngelList"
                width="26.3rem"
                href="https://angel.co/company/peraperaai"
              />
            </Grid>
          </Grid>
        </Grid>
        <Footer className={classes.footer} />
      </Box>
    </>
  );
};

export default CareerPage;
