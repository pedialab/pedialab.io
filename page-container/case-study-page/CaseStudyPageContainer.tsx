import {
  Box, Grid, makeStyles, Container
} from '@material-ui/core';
import { Header, Footer } from 'pedialab-shared/components';
import { MarkdownArticle } from 'pedialab-pages/case-study-page';

const useStyle = makeStyles({
  footer: {
    marginTop: '9.4rem'
  }
});

export type CaseStudyPageProps = {
  title: string;
  heroImageSrc: string;
  highlight: string;
  content: string;
};

const CaseStudyPage = ({
  title,
  heroImageSrc,
  highlight,
  content
}: CaseStudyPageProps) => {
  const classes = useStyle();
  return (
    <>
      <Container disableGutters fixed>
        <Grid container direction="column">
          <Header isActivatedOrder={3} />
          <Box
            mt="5rem"
            alignSelf="center"
            color="secondary.main"
            fontSize="1.125rem"
          >
            Case Study
          </Box>
          <Box alignSelf="center" mx="6.3%" mt="1.5rem">
            <MarkdownArticle
              title={title}
              heroImageSrc={heroImageSrc}
              highlight={highlight}
              content={content}
            />
          </Box>
          <Footer className={classes.footer} />
        </Grid>
      </Container>
    </>
  );
};

export default CaseStudyPage;
