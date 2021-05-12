import {
  Box, Grid, makeStyles
} from '@material-ui/core';
import { Header, Footer, ArticleCardList } from 'pedialab-shared/components';
import { ArticleCardProps } from 'pedialab-shared/components/ArticleCard';

const useStyle = makeStyles({
  caseStudyList: { marginTop: '5rem' },
  footer: {
    marginTop: '9.4rem'
  }
});

const CaseStudiesPage = ({ cards }: { cards: ArticleCardProps[]}) => {
  const classes = useStyle();
  return (
    <Box mx="10%">
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
    </Box>
  );
};

export default CaseStudiesPage;
