import React from 'react';
import { Container, SectionLabel } from '../common';
import { useIntersectionObserver } from '../../hooks';
import styles from './Solutions.module.css';

interface SolutionTargetCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const SolutionTargetCard: React.FC<SolutionTargetCardProps> = ({
  icon,
  title,
  subtitle,
  description
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.solutionTargetCard} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.solutionTargetIcon}>
        {icon}
      </div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
};

export const Solutions: React.FC = () => {
  return (
    <section className={styles.solutions} id="solutions">
      <Container>
        <div className={styles.solutionsHeader}>
          <SectionLabel>Use Cases</SectionLabel>
          <h2 className={styles.sectionTitle}>Solutions</h2>
          <p className={styles.sectionSubtitle}>
            Tailored applications for research and clinical operations.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          <SolutionTargetCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            }
            title="For BioPharma R&D"
            subtitle="Accelerate Real-World Evidence (RWE)"
            description="Stop manual chart reviews. Instantly identify patient cohorts based on complex criteria hidden in unstructured notes for retrospective studies and clinical trial matching."
          />

          <SolutionTargetCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            }
            title="For Health Systems"
            subtitle="Activate Your Archives"
            description="Your hospital sits on petabytes of historical cancer data. Turn that 'data swamp' into a structured, searchable registry for internal research and operational insights."
          />
        </div>
      </Container>
    </section>
  );
};
