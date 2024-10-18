import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HeroHome from '../components/HeroHome';
import { Box } from '@mui/joy';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HeroHome />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <Box
          id="text-content"
          key={'text-content'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Align items to the start
            alignItems: 'flex-start', // Align items to the start
            gap: '20px', // Add space between items
            p: '20px', // Add padding
            width: '100%', // Take full width
            maxWidth: '1200px', // Limit maximum width
            margin: '0 auto', // Center the box
            color: 'inherit'
          }}>
          <HomepageFeatures />
        </Box>
      </main>
    </Layout>
  );
}
