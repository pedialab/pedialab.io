import { GetStaticPaths } from "next";
import { getTitles, getCaseStudyMd } from "../../caseStudies/lib-server";
import { markdownToReactComponent, matter } from "../../caseStudies/lib-iso";

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
      <h2>content</h2>
      {content}
      <h2>data</h2>
      {JSON.stringify(caseStudy.data)}
    </>
  );
};

export default CaseStudyPage;
