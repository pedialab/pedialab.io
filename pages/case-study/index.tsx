import { GetStaticProps } from 'next';
import Head from 'next/head';
import CaseStudiesPageContainer from 'pedialab-pages/case-study-page/CaseStudiesPageContainer';
import { ArticleCardProps } from 'pedialab-shared/components/ArticleCard';
import { loadAllMarkdownFileNames, loadMarkdownFile } from 'pedialab-pages/case-study-page/lib-server';
import { matter } from 'pedialab-pages/case-study-page/lib-iso';

type Props = { articleCards : ArticleCardProps[] }

type CaseStudyMeta = {
  fileName: string;
  title: string;
  heroImagePath: string;
  highlight: string;
  summary: string;
  order: number;
}
const getStaticProps: GetStaticProps<Props> = async () => {
  const filesNames = loadAllMarkdownFileNames();
  const markdownFiles = await Promise.all(filesNames.map(async (title) => ({
    fileName: title,
    file: await loadMarkdownFile(title)
  })));
  const metadataList = markdownFiles
    .map((markdown) => ({ ...matter(markdown.file).data, fileName: markdown.fileName }) as CaseStudyMeta)
    .sort((m1, m2) => (m1.order - m2.order));

  const articleCards: ArticleCardProps[] = metadataList.map((caseStudyMeta) => ({
    link: '/case-study/'.concat(caseStudyMeta.fileName),
    title: caseStudyMeta.title,
    imgSrc: caseStudyMeta.heroImagePath,
    content: caseStudyMeta.summary
  }));

  return {
    props: {
      articleCards
    }
  };
};

export { getStaticProps };

function CaseStudiesPage({ articleCards }: Props) {
  const pageDescription = articleCards.reduce((description, article) => ([description, article.title].join(', ')), 'Explore our work');
  return (
    <>
      <Head>
        <title>Pedia Lab - Case Study</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content="Pedia Lab - Case Study" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://pedialab.io/og_logo.png" />
      </Head>
      <CaseStudiesPageContainer articleCards={articleCards} />
    </>
  );
}

export default CaseStudiesPage;
