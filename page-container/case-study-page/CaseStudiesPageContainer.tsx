import { Box, Grid, makeStyles, Container } from "@material-ui/core";
import { Header, Footer, ArticleCardList } from "pedialab-shared/components";

const useStyle = makeStyles({
  caseStudyList: { marginTop: "5rem" },
  footer: {
    marginTop: "9.4rem",
  },
});

const cards = [
  {
    title: "SLEEEP by Space is Ltd",
    imgSrc: "/case_sleeep.jpg",
    content: `Red Dot Design Awards 18’
Our partner Vincent Lau, lead the development of reservation systems and IoT integrations of the award winning sleeping pod, during his time with Space is Ltd.`,
  },
  {
    title: "Teaming up with Spaceship",
    imgSrc: "/case_spaceship.jpg",
    content:
      "One of the rapidly growing logistics startups in Hong Kong, Spaceship has urging need to increase their technical capacity for their next stage of growth.",
  },
  {
    title: "HYPEFEST by Hypebeast",
    imgSrc: "/case_hypefest.jpg",
    content:
      "Mobile App developed by ReactNative. For a 2 days event named HYPEFEST.",
  },
  {
    title: "01 Heart by HK01",
    imgSrc: "/case_hk01_01heart.jpg",
    content:
      "HK01 Project to let NGO submit their campaign and let HK01 members donate the projects",
  },
  {
    title: "Roarship by BOMBA",
    imgSrc: "/case_bomba.jpg",
    content: `Project from HK local YouTuber BOMBA. The aim to build a NETFLIX-like platform that selling the own video.
  `,
  },
  {
    title: "GOGOENERY by GOGOVAN",
    imgSrc: "/case_gogovan.jpg",
    content: `GOGOVAN owned pet-project. Issue GOGOENERY fuel card to offer a discount to drivers
    `,
  },
  {
    title: "OneSky",
    imgSrc: "/case_onesky.jpg",
    content:
      "OneSky a SaaS translation service platform. Which providing translation service to big clients",
  },
  {
    title: "Nestle campaign site By HK01",
    imgSrc: "/case_hk01_nestle.jpg",
    content:
      "A mini-site to one-off campaign from nestle and HK01, simple web page to let users answer the questionnaire and lucky draw.",
  },
  {
    title: "The-Unit-Store / Topologie By Working Unit LTD",
    imgSrc: "/case_the_unit_store.jpg",
    content: `e-Comm marketplace located in Hong Kong to sell fashions
  `,
  },
];

const CaseStudiesPage = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg" disableGutters fixed>
        <Grid container direction="column">
          <Header isActivatedOrder={3} />
          <Box
            mt="9.63rem"
            color="text.secondary"
            fontSize="3.75rem"
            fontWeight={300}
          >
            Case Studies
          </Box>
          <ArticleCardList cards={cards} className={classes.caseStudyList} />
          <Footer className={classes.footer} />
        </Grid>
      </Container>
    </>
  );
};

export default CaseStudiesPage;
