import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Bar from '../components/navbar/bar';
import Landing from '../components/landing/Landing';
import Services from '../components/services/Services';
import Pricing from '../components/pricing/Pricing';
import Contact from '../components/contact/Contact';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BitSlap</title>
        <meta
          name="description"
          content="We create custom applications for desktops and mobiles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bar />
      <main className={styles.main}>
        <Landing />
        <Services />
        <Pricing />
        <Contact />
      </main>

      <footer className={styles.footer}>
        © 2022 Bitslap. All Rights Reserved.
      </footer>
    </div>
  );
}
