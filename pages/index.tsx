import Head from 'next/head';
import IndexPageContainer from 'pedialab-pages/index-page/IndexPageContainer';

function HomePage() {
  return (
    <>
      <Head>
        <title>Pedia Lab</title>
      </Head>
      <IndexPageContainer />
    </>
  );
}

export default HomePage;
