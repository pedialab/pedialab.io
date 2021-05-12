import {
  Box,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';

const useStyle = makeStyles({
  root: {
    '& > p:first-of-type': {
      marginTop: '6.75rem',
      marginBottom: '1.25rem'
    }
  },
  footer: {
    marginTop: '9.4rem'
  }
});

const CareerPage = () => {
  const classes = useStyle();
  return (
    <>
      <Box mx="10%">
        <Grid container direction="column" justify="center" className={classes.root}>
          <Header isActivatedOrder={4} />
          <Typography align="center" component="p" variant="h2" color="primary">Thank you</Typography>
          <Typography align="center" component="p" variant="h3" color="primary">We will get in touch with you shortly</Typography>
          <Footer className={classes.footer} />
        </Grid>
      </Box>
    </>
  );
};

export default CareerPage;
