import { GetStaticPaths } from "next";
import { getTitles, getCaseStudyMd } from "../../caseStudies/lib-server";
import { markdownToReactComponent, matter } from "../../caseStudies/lib-iso";
import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

type Params = {
  params: { title: string };
};

const getStaticPaths: GetStaticPaths = async () => {
  const articleTitles = getTitles();
  console.log(articleTitles);

  return {
    paths: articleTitles.map((articleTitle) => ({
      params: {
        title: articleTitle,
      },
    })),
    fallback: false,
  };
};

type Props = {
  post: {
    fileName: string;
  };
};

const getStaticProps = async ({ params }: Params) => {
  const title = params.title;
  const markdown = await getCaseStudyMd(title);

  return {
    props: {
      post: {
        fileName: markdown,
      },
    },
  };
};

export { getStaticPaths, getStaticProps };

const CaseStudyPage = ({ post }: Props) => {
  const caseStudy = matter(post.fileName);
  console.log(caseStudy.data);
  const content = markdownToReactComponent(caseStudy.content);

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
              {Object.keys(caseStudy.data).map((cellTitle) => (
                <TableCell key={cellTitle}>{cellTitle}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(caseStudy.data).map((cellValue) => (
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
