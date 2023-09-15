import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get in touch with Microsoft',
    Svg: require('@site/static/img/10035-icon-service-App-Services.svg').default,
    description: (
      <>
Learn how to find us and have a chat. We'd love to hear about your ideas!
       </>
    ),
  },
  {
    title: 'Learn how to build Intelligent Apps',
    Svg: require('@site/static/img/10162-icon-service-Cognitive-Services.svg').default,
    description: (
      <>
      We have collected a great set of links that will get you started with Azure Cloud, Github and our many Cloud Services.

      </>
    ),
  },
  {
    title: 'Find Challenge data and resources',
    Svg: require('@site/static/img/10086-icon-service-Storage-Accounts.svg').default,
    description: (
      <>
        We may provide data and ideas on the Hackathon challenges. Stay tuned & check back often!

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
