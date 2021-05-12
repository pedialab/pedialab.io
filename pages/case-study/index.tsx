import { GetStaticProps } from 'next';
import Head from 'next/head';
import CaseStudiesPageContainer from 'pedialab-pages/case-study-page/CaseStudiesPageContainer';
import { ArticleCardProps } from 'pedialab-shared/components/ArticleCard';
import { loadAllMarkdownFileNames, loadMarkdownFile } from 'pedialab-pages/case-study-page/lib-server';
import { matter } from 'pedialab-pages/case-study-page/lib-iso';

type Props = { cards : ArticleCardProps[] }

type CaseStudyMeta = {
  title: string;
  heroImage: string;
  highlight: string;
  summary: string;
  order: number;
}
const getStaticProps: GetStaticProps<Props> = async () => {
  const filesNames = loadAllMarkdownFileNames();
  const markdownFiles = await Promise.all(filesNames.map((title) => loadMarkdownFile(title)));
  const metadataList = markdownFiles
    .map((markdown) => matter(markdown).data as CaseStudyMeta)
    .sort((m1, m2) => (m1.order - m2.order));

  const cards: ArticleCardProps[] = metadataList.map((caseStudyMeta) => ({
    title: caseStudyMeta.title,
    imgSrc: caseStudyMeta.heroImage,
    content: caseStudyMeta.summary
  }));

  return {
    props: {
      cards
    }
  };
};

export { getStaticProps };

function CaseStudiesPage({ cards }: Props) {
  return (
    <>
      <Head>
        <title>Pedia Lab - Case Study</title>
      </Head>
      <CaseStudiesPageContainer cards={cards} />
    </>
  );
}

export default CaseStudiesPage;
