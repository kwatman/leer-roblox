import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Guide from '@site/src/components/Guide';

const GuidesList = [
  {
    title: 'tycoon',
    description: 'Leer hoe je een tycoon game maakt in roblox',
    link: '/projecten/tycoon'
  },
];


export default function Guides() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container"> 
          <input></input>
        </div>
      </header>
      <div className="container card-container">
          {GuidesList.map((props) => (
              <Guide key={props.title} {...props} />        
          ))}
      </div>
    </Layout>
  );
}
