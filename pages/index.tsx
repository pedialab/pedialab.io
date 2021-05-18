import Head from 'next/head';
import IndexPageContainer from 'pedialab-pages/index-page/IndexPageContainer';

const description = 'Architecting software, teams, companies and dreams';

function HomePage() {
  return (
    <>
      <Head>
        <title>Pedia Lab</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Pedia Lab" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://pedialab.io/og_logo.png" />
        <link rel="preload" as="image" href="/hero_image.jpg" />
      </Head>
      <IndexPageContainer />
    </>
  );
}

export default HomePage;
