import Head from 'next/head';
import IndexPageContainer from 'pedialab-pages/index-page/IndexPageContainer';

function HomePage() {
  return (
    <>
      <Head>
        <title>Pedia Lab</title>
        <link rel="preload" as="image" href="/hero_image.jpg" />
      </Head>
      <IndexPageContainer />
    </>
  );
}

export default HomePage;
