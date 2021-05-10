import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";
import { Header, Footer, CommonButton } from "pedialab-shared/components";

const useStyle = makeStyles({
  footer: {
    marginTop: "9.4rem",
  },
});

const CareerPage = () => {
  const classes = useStyle();
  return (
    <>
      <Container disableGutters fixed>
        <Grid container direction="column" justify="center">
          <Header isActivatedOrder={4} />
          <Box alignSelf="center" mt="9.4rem">
            <Typography variant="h2" color="primary">
              Join Pedia Lab
            </Typography>
          </Box>
          <Box alignSelf="center" mt="5.19rem" display="flex">
            <Box mr="2.5rem">
              <CommonButton
                title="Career opportunities - CakeResume"
                width="26.3rem"
                href="https://www.cakeresume.com/companies/peraperaai?ref=navs_company"
              />
            </Box>
            <CommonButton
              title="Career opportunities - AngelList"
              width="26.3rem"
              href="https://angel.co/company/peraperaai"
            />
          </Box>
          <Footer className={classes.footer} />
        </Grid>
      </Container>
    </>
  );
};

export default CareerPage;
