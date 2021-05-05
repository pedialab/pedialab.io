import { Typography, Box, makeStyles } from '@material-ui/core';
import { markdownToReactComponent } from './lib-iso';

export type MarkdownArticleProps = {
  title: string;
  heroImageSrc: string;
  highlight: string;
  content: string;
};

const useStyle = makeStyles({
  highlight: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: '#FF5C00',
    width: 'fit-content'
  }
});

const StyledParagraph = ({ children }: { children: JSX.Element }) => (
  <Typography variant="body2" color="secondary" component="p">
    {children}
  </Typography>
);

const MarkdownArticle = ({
  title, heroImageSrc, highlight, content
}: MarkdownArticleProps) => {
  const classes = useStyle();

  const styledComponents = {
    p: StyledParagraph
  };

  const contentElement = markdownToReactComponent(content, styledComponents);

  return (
    <Box component="article" display="flex" flexDirection="column">
      <Box alignSelf="center">
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <Box mt="4rem">
        <img src={heroImageSrc} alt={title} />
      </Box>
      <Box mt="2rem">
        <Typography component="p" variant="subtitle1" color="primary" className={classes.highlight}>
          {highlight}
        </Typography>
      </Box>
      <Box>{contentElement}</Box>
    </Box>
  );
};

export default MarkdownArticle;
