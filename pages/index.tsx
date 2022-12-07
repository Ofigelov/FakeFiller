import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>FakeFiller</title>
      <link rel="icon" href="/32.png" />
    </Head>

    <main className={styles.main}>
      <h1>lorem ipsum</h1>
    </main>
  </div>
);

export default Home;
