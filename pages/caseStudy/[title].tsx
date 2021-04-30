import { GetStaticPaths } from 'next';
import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { getTitles, getCaseStudyMd } from '../../caseStudies/lib-server';
import { markdownToReactComponent, matter } from '../../caseStudies/lib-iso';

type Params = {
  params: { title: string };
};

const getStaticPaths: GetStaticPaths = async () => {
  const articleTitles = getTitles();

  const paths = articleTitles.map((articleTitle) => ({
    params: {
      title: articleTitle
    }
  }));

  return {
    paths,
    fallback: false
  };
};

type Props = {
  markdown: string;
};

const getStaticProps = async ({ params }: Params) => {
  const title = params.title;
  const markdown = await getCaseStudyMd(title);

  return {
    props: {
      markdown
    }
  };
};

export { getStaticPaths, getStaticProps };

const CaseStudyPage = ({ markdown }: Props) => {
  const caseStudy = matter(markdown);
  const content = markdownToReactComponent(caseStudy.content);
  const metadata = caseStudy.data;

  return (
    <>
      <Typography variant="h2" gutterBottom>
        content
      </Typography>
      <Container>{content}</Container>
      <Typography variant="h2" gutterBottom>
        data
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(metadata).map((cellTitle) => (
                <TableCell key={cellTitle}>{cellTitle}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(metadata).map((cellValue) => (
              <TableCell key={JSON.stringify(cellValue)}>
                {JSON.stringify(cellValue)}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CaseStudyPage;
