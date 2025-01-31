import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  img?: string;
  description: JSX.Element;
  link?: string;
  tags?: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dependency Management',
    img: require('@site/static/img/k1s/k1s-kubernetes-in-one-second.jpg').default,
    description: (
      <>
        Automated dependency management and security scanning for Kubernetes applications.
      </>
    ),
    link: '/qbot/dependency-management',
    tags: ['Dependency Management', 'Security Scanning', 'Dependency Resolution', 'Dependency Validation', 'Dependency Graph', 'Artifact Compatibility', 'Artifact Cleanup'],
  },
  {
    title: 'Environment Drift Prevention',
    img: require('@site/static/img/k1s/DevOps-Hero-banner.png').default,
    description: (
      <>
        Multienvironment drift prevention and enforcement for Kubernetes applications. No more manual troubleshooting.
      </>
    ),
    link: '/qbot/drift-prevention',
    tags: ['Post Deployment Validation', 'Event-based Pipelines', 'Audit-as-a-Service', 
      'Compliance', 'Secrets Management' ],
  },
  {
    title: 'Incident Management & Rollbacks',
    img: require('@site/static/img/k1s/DevOps-Hero-banner.png').default,
    description: (
      <>
        AI-driven incident debugging and rollbacks based on the last known good state of the application.
      </>
    ),
    link: '/qbot/incident-management',
    tags: ['Incident Management', 'Rollbacks', 'AI-driven Debugging', 'Issue Simulatiors', 'Self-healing Test Framework', 'Automatic Root Cause Analyzer'],
  },
  {
    title: 'Airgap Environment Automation',
    img: require('@site/static/img/k1s/air-gap-sphere-banner.jpg').default,
    description: (
      <>
        AI workflow automation for air-gapped environments to streamline artifacts transfers, including validation and dependency resolution.
      </>
    ),
    link: '/qbot/airgap-automation',
    tags: ['Airgap Environment', 'Artifact Transfer', 'Validation', 'Dependency Resolution', 'Dependency Graph', 'Artifact Compatibility', 'Artifact Cleanup', 'Security-first Dependency', 'Dependency Updater'],
  },
];

function Feature({title, Svg, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role='img' />}
        {img && <img src={img} alt={title} />} 
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
