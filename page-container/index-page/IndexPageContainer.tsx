import { Box, Grid, makeStyles, Container } from "@material-ui/core";
import { Header, Footer } from "pedialab-shared/components";
import {
  HeroContent,
  OurCompany,
  SoftwareDelivery,
  VendorDifference,
  TechleadaaS,
  ProjectScopes,
  TeamUpWithTechlead,
  DeveloperSupport,
  OurTeam,
  ClientCompanies,
  WhereWeServe,
  CaseStudies,
  ProjectPhrases,
  Testimonial,
  Contact,
} from "pedialab-pages/index-page";

const useStyle = makeStyles({
  heroContent: {
    marginTop: "7rem",
  },
  ourCompany: {
    marginTop: "7.5rem",
    paddingLeft: "8.8%",
  },
  softwareDelivery: {
    marginTop: "14rem",
  },
  vendorDifference: {
    marginTop: "13rem",
  },
  techleadaaS: {
    marginTop: "14.65rem",
    marginLeft: "10%",
  },
  projectScopes: {
    marginTop: "15rem",
  },
  teamUpWithTechlead: {
    marginTop: "13.75rem",
  },
  developerSupport: {
    marginTop: "15.625rem",
  },
  ourTeam: {
    marginTop: "15.75rem",
  },
  clientCompanies: {
    marginTop: "20rem",
  },
  whereWeServe: {
    marginTop: "16.4375rem",
    paddingRight: "17%",
  },
  caseStudies: { marginTop: "24.3125rem" },
  projectPhrases: {
    marginTop: "19.875rem",
  },
  testimonial: {
    marginTop: "12.75rem",
  },
  contact: { marginTop: "13rem" },
  footer: {
    marginTop: "9.4rem",
  },
});

const IndexPageContainer = () => {
  const classes = useStyle();
  return (
    <>
      <Container disableGutters fixed>
        <Grid container direction="column">
          <Header />
          <HeroContent className={classes.heroContent} />
          <OurCompany className={classes.ourCompany} />
          <SoftwareDelivery className={classes.softwareDelivery} />
          <VendorDifference className={classes.vendorDifference} />
        </Grid>
      </Container>

      <TechleadaaS className={classes.techleadaaS} />

      <Container disableGutters fixed>
        <ProjectScopes className={classes.projectScopes} />
        <TeamUpWithTechlead className={classes.teamUpWithTechlead} />
        <DeveloperSupport className={classes.developerSupport} />
        <OurTeam className={classes.ourTeam} />
        <ClientCompanies className={classes.clientCompanies} />
      </Container>

      <WhereWeServe className={classes.whereWeServe} />

      <Container disableGutters fixed>
        <CaseStudies className={classes.caseStudies} />
        <ProjectPhrases className={classes.projectPhrases} />
      </Container>

      <Testimonial className={classes.testimonial} />

      <Container disableGutters fixed>
        <Contact className={classes.contact} />
        <Footer className={classes.footer} />
      </Container>
    </>
  );
};

export default IndexPageContainer;
