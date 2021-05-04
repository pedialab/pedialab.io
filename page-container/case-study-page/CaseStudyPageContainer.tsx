import { Box, Grid, makeStyles } from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';

const useStyle = makeStyles({
  footer: {
    marginTop: '9.4rem'
  }
});

const CaseStudyPage = () => {
  const classes = useStyle();
  return (
    <>
      <Box mx="10%">
        <Grid container direction="column">
          <Header />
          <Footer className={classes.footer} />
        </Grid>
      </Box>
    </>
  );
};

export default CaseStudyPage;
