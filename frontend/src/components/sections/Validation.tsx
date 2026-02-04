import React from 'react';
import { Container } from '../common';
import styles from './Validation.module.css';

interface ValidationBadgeProps {
  label: string;
  value: string;
}

const ValidationBadge: React.FC<ValidationBadgeProps> = ({ label, value }) => (
  <div className={styles.validationBadge}>
    <p className={styles.validationBadgeLabel}>{label}</p>
    <p className={styles.validationBadgeValue}>{value}</p>
  </div>
);

export const Validation: React.FC = () => {
  return (
    <section className={styles.validation}>
      <Container>
        <div className={styles.validationContent}>
          <div className={styles.validationText}>
            <h2>Validated Foundations.</h2>
            <p>
              Our algorithms aren't starting from scratch. They are trained and validated on massive public datasets, including TCGA (The Cancer Genome Atlas), ensuring robust performance across diverse cancer types from day one.
            </p>
          </div>
          <div className={styles.validationBadges}>
            <ValidationBadge label="Validated On" value="TCGA" />
            <ValidationBadge label="Cancer Types" value="33+" />
            <ValidationBadge label="Patient Cases" value="11,000+" />
          </div>
        </div>
      </Container>
    </section>
  );
};
