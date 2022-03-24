import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Bar from '../components/navbar/bar';
import Landing from '../components/landing/Landing'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BitSlap</title>
        <meta
          name="description"
          content="Software House. We create custom software applications for desktops and mobiles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bar />
      <main className={styles.main}>
      <Landing/>
      </main>
      
      <footer className={styles.footer}></footer>
    </div>
  );
}
