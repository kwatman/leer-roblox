import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <meta name="google-site-verification" content="aM4ZGl8sQB5xydE2VA3uaUGukqpyXgzgLWsn8O3ZUKc" />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='container'>
        <h1>Welkom op de site.</h1>
        Wil jij graag leren hoe jij je eigen roblox games wilt maken ? Dan is deze site prefect voor jou. Deze site helpt jou een roblox game ontwikelaar te worden.
        Om te beginnen raden we je aan om naar de tutorials sectie te gaan. Daar kan je alle basis ellementen van roblox leren kennen.
      </main>
    </Layout>
  );
}
