import React from 'react';
import { Container } from '../common';
import styles from './CTA.module.css';

export const CTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaPattern}></div>
      <Container>
        <div className={styles.ctaContent}>
          <h2>Unlock the <span>history</span> trapped in your data.</h2>
        </div>
      </Container>
    </section>
  );
};
