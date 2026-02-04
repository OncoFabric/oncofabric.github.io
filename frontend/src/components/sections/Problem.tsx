import React from 'react';
import { Container, SectionLabel } from '../common';
import { useIntersectionObserver } from '../../hooks';
import styles from './Problem.module.css';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.problemCard} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.problemIcon}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      title: 'Siloed Modalities',
      description: 'Images live in PACS. Genomic data lives in CSVs. Clinical narratives live in messy PDFs. They do not talk to each other.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      title: 'Unstructured Chaos',
      description: '80% of critical patient data is locked in free-text notes, inaccessible to structured queries and systematic analysis.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
      title: 'The "Hallucination" Risk',
      description: 'Standard LLMs cannot be trusted for clinical decision-support without verifiable evidence trails and source citations.'
    }
  ];

  return (
    <section className={styles.problem} id="problem">
      <Container>
        <SectionLabel>The Challenge</SectionLabel>
        <h2 className={styles.sectionTitle}>Oncology Data is Broken.</h2>
        <p className={styles.sectionSubtitle}>
          Critical patient information remains fragmented, unstructured, and inaccessible—hindering research and clinical decision-making.
        </p>

        <div className={styles.problemGrid}>
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
