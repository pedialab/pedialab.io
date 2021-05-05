import { GetStaticPaths } from 'next';
import Head from 'next/head';
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
import {
  loadAllMarkdownFileNames,
  loadMarkdownFile
} from 'pedialab-pages/case-study-page/lib-server';
import {
  markdownToReactComponent,
  matter
} from 'pedialab-pages/case-study-page/lib-iso';
import { CaseStudyPageContainer } from 'pedialab-pages/case-study-page';

type Params = {
  params: { title: string };
};

const getStaticPaths: GetStaticPaths = async () => {
  const articleTitles = loadAllMarkdownFileNames();

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
  const markdown = await loadMarkdownFile(title);

  return {
    props: {
      markdown
    }
  };
};

export { getStaticPaths, getStaticProps };

const CaseStudyPage = ({ markdown }: Props) => {
  const caseStudy = matter(markdown);
  const content = caseStudy.content;
  const { title, heroImage, highlight } = caseStudy.data;

  return (
    <>
      <Head>
        <title>
          Pedia Lab,
          {title}
        </title>
      </Head>
      <CaseStudyPageContainer
        title={title}
        heroImageSrc={heroImage}
        highlight={highlight}
        content={content}
      />
    </>
  );
};

export default CaseStudyPage;
