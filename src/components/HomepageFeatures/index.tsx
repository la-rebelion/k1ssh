import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  img?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'KX in 1 second',
    img: require('@site/static/img/k1s/k1s-kubernetes-in-one-second.jpg').default,
    description: (
      <>
        Don't spend hours setting up Kubernetes, 
        you want to get started in seconds.
        For non-sysadmins, K1s is the easiest way to 
        get started with Kubernetes; 
        a developer-centric Kubernetes eXperience (KX).
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: require('@site/static/img/k1s/air-gap-sphere-banner.jpg').default,
    description: (
      <>
        K1s provides a simple and easy-to-use Kubernetes eXperience (KX) that allows you
        to focus on what you do best: developing your application; or what you need to
        do: learning Kubernetes. Automation and resources are on us.
      </>
    ),
  },
  {
    title: 'Built from Scratch',
    img: require('@site/static/img/k1s/DevOps-Hero-banner.png').default,
    description: (
      <>
        K1s is built from scratch, but powered by the best of breed open-source 
        with a focus on simplicity and ease of use. Break free from the complexity
        of Kubernetes and DevOps.
      </>
    ),
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
