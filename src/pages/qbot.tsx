import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/QBotFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HeroHome from '../components/HeroHome';
import { Box, Typography } from '@mui/joy';
import HubSpotForm from '../components/HubSpotForm';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          DevOps Pipeline AI Assistant
        </Heading>
        <p className="hero__subtitle">QBot is a DevOps pipeline assistant for Kubernetes applications.<br />It helps you to automate the deployment of your applications to Kubernetes clusters.</p>
        {/* <HeroHome /> */}
        <Typography fontSize="lg" textColor="neutral.mainChannel" lineHeight="lg">
          DevOps pipelines have streamlined software delivery significantly, but there are still areas that require manual intervention or involve repetitive and time-consuming tasks. QBot is an AI DevOps pipeline assistant for Kubernetes applications. QBot is designed to help you to automate the repetitive tasks in your DevOps pipeline, so you can focus on what matters most: developing your applications.
        </Typography>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Home`}
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
          <HubSpotForm divider={true} />
        </Box>
      </main>
    </Layout>
  );
}
