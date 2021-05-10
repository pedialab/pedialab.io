import { Box, Grid, makeStyles } from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';
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
  Contact
} from 'pedialab-pages/index-page';

const useStyle = makeStyles({
  heroContent: {
    marginTop: '7rem'
  },
  ourCompany: {
    marginTop: '7.5rem',
    paddingLeft: '8.8%'
  },
  softwareDelivery: {
    marginTop: '14rem'
  },
  vendorDifference: {
    marginTop: '13rem'
  },
  techleadaaS: {
    marginTop: '14.65rem'
  },
  projectScopes: {
    marginTop: '15rem'
  },
  teamUpWithTechlead: {
    marginTop: '13.75rem'
  },
  developerSupport: {
    marginTop: '15.625rem'
  },
  ourTeam: {
    marginTop: '15.75rem'
  },
  clientCompanies: {
    marginTop: '20rem'
  },
  whereWeServe: {
    marginTop: '16.4375rem'
  },
  caseStudies: { marginTop: '24.3125rem' },
  projectPhrases: {
    marginTop: '19.875rem'
  },
  testimonial: {
    marginTop: '12.75rem'
  },
  contact: { marginTop: '13rem' },
  footer: {
    marginTop: '9.4rem'
  }
});

const IndexPageContainer = () => {
  const classes = useStyle();
  return (
    <>
      <Box mx="10%">
        <Grid container direction="column">
          <Header />
          <HeroContent className={classes.heroContent} />
          <OurCompany className={classes.ourCompany} />
          <SoftwareDelivery className={classes.softwareDelivery} />
          <VendorDifference className={classes.vendorDifference} />
        </Grid>
      </Box>
      <Box ml="10%">
        <TechleadaaS className={classes.techleadaaS} />
      </Box>
      <Box mx="10%">
        <ProjectScopes className={classes.projectScopes} />
        <TeamUpWithTechlead className={classes.teamUpWithTechlead} />
        <DeveloperSupport className={classes.developerSupport} />
        <OurTeam className={classes.ourTeam} />
        <ClientCompanies className={classes.clientCompanies} />
      </Box>
      <Box mr="17%">
        <WhereWeServe className={classes.whereWeServe} />
      </Box>
      <Box mx="10%">
        <CaseStudies className={classes.caseStudies} />
        <ProjectPhrases className={classes.projectPhrases} />
      </Box>
      <Testimonial className={classes.testimonial} />
      <Box mx="10%">
        <Contact className={classes.contact} />
        <Footer className={classes.footer} />
      </Box>
    </>
  );
};

export default IndexPageContainer;
