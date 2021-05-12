import { GetStaticProps } from 'next';
import Head from 'next/head';
import CaseStudiesPageContainer from 'pedialab-pages/case-study-page/CaseStudiesPageContainer';
import { ArticleCardProps } from 'pedialab-shared/components/ArticleCard';
import { loadAllMarkdownFileNames, loadMarkdownFile } from 'pedialab-pages/case-study-page/lib-server';
import { matter } from 'pedialab-pages/case-study-page/lib-iso';

type Props = { cards : ArticleCardProps[] }

type CaseStudyMeta = {
  fileName: string;
  title: string;
  heroImage: string;
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

  const cards: ArticleCardProps[] = metadataList.map((caseStudyMeta) => ({
    link: '/case-study/'.concat(caseStudyMeta.fileName),
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
