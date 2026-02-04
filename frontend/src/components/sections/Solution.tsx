import React from 'react';
import { Container, SectionLabel } from '../common';
import { useIntersectionObserver } from '../../hooks';
import styles from './Solution.module.css';

const FlowItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className={styles.flowItem}>
    {icon}
    {label}
  </div>
);

const SolutionCard: React.FC<{
  number: string;
  tag: string;
  title: string;
  description: string;
  benefitLabel: string;
  benefitText: string;
  variant: 'minds' | 'honeybee' | 'clever';
  links?: { github?: string; paper?: string };
  comingSoon?: boolean;
}> = ({ number, tag, title, description, benefitLabel, benefitText, variant, links, comingSoon }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.solutionCard} ${styles[variant]} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
    >
      <span className={styles.solutionCardNumber}>{number}</span>
      <span className={styles.solutionCardTag}>{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.benefitBox}>
        <p className={styles.benefitLabel}>{benefitLabel}</p>
        <p className={styles.benefitText}>{benefitText}</p>
      </div>
      {links && (
        <div className={styles.cardLinks}>
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {links.paper && (
            <a href={links.paper} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              Paper
            </a>
          )}
        </div>
      )}
      {comingSoon && (
        <div className={styles.comingSoon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          Code & paper coming soon
        </div>
      )}
    </div>
  );
};

export const Solution: React.FC = () => {
  return (
    <section className={styles.solution} id="science">
      <Container>
        <div className={styles.solutionHeader}>
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className={styles.sectionTitle}>Bridging the Gap Between Pixel and Phenotype.</h2>
          <p className={styles.sectionSubtitle}>
            Built on pioneering research from Lab Rasool, OncoFabric integrates three powerful technologies to create a living registry of patient data.
          </p>
        </div>

        <div className={styles.solutionFlow}>
          <div className={styles.flowInput}>
            <FlowItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
              }
              label="Pathology WSI"
            />
            <FlowItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6"/>
                </svg>
              }
              label="Clinical PDFs"
            />
            <FlowItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M18 17V9"/>
                  <path d="M13 17V5"/>
                  <path d="M8 17v-3"/>
                </svg>
              }
              label="Genomic Data"
            />
          </div>

          <div className={styles.flowCenter}>
            <div className={styles.flowArrows}>
              <svg width="60" height="24" viewBox="0 0 60 24">
                <path d="M0 12h50M45 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className={styles.flowLogo}>
              <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
                <path d="M20 4C16 4 12 8 12 12C12 16 14 18 14 22C14 26 12 30 12 30" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 4C24 4 28 8 28 12C28 16 26 18 26 22C26 26 28 30 28 30" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" fill="#ec4899"/>
                <circle cx="28" cy="12" r="3" fill="#06b6d4"/>
                <circle cx="14" cy="22" r="3" fill="#ec4899"/>
                <circle cx="26" cy="22" r="3" fill="#06b6d4"/>
              </svg>
            </div>
            <div className={styles.flowArrows}>
              <svg width="60" height="24" viewBox="0 0 60 24">
                <path d="M0 12h50M45 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>

          <div className={styles.flowOutput}>
            <FlowItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              }
              label="Semantic Search"
            />
            <FlowItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              }
              label="Cohort Discovery"
            />
            <FlowItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                </svg>
              }
              label="Patient Timelines"
            />
          </div>
        </div>

        <div className={styles.solutionCards}>
          <SolutionCard
            number="01"
            tag="Powered by MINDS"
            title="Aggregated Multimodal Database"
            description="We build a unified database that breaks down data silos. Our architecture aggregates images, text, and omics into a cohesive, queryable system where all modalities coexist."
            benefitLabel="The Benefit"
            benefitText="True Cross-Modal Search. Query your database with an image of a tumor to find patients with similar morphology, or search text to find corresponding imaging features."
            variant="minds"
            links={{
              github: 'https://github.com/lab-rasool/MINDS',
              paper: 'https://www.mdpi.com/1424-8220/24/5/1634'
            }}
          />
          <SolutionCard
            number="02"
            tag="Powered by HoneyBee"
            title="Unified Multimodal Processing"
            description="A consistent processing pipeline that handles all data types uniformly. HoneyBee transforms raw inputs—images, PDFs, genomic files—into structured, analysis-ready representations."
            benefitLabel="The Benefit"
            benefitText="One Pipeline, All Modalities. Eliminate fragmented workflows with a unified approach that maintains data integrity across the entire processing chain."
            variant="honeybee"
            links={{
              github: 'https://github.com/lab-rasool/HoneyBee',
              paper: 'https://www.nature.com/articles/s41746-025-02003-4'
            }}
          />
          <SolutionCard
            number="03"
            tag="Powered by CLEVER"
            title="Agentic AI Extraction"
            description="An LLM system engineered for accuracy, not just fluency. Our agents extract clinical variables and construct longitudinal timelines from unstructured notes."
            benefitLabel="The Benefit"
            benefitText="Verifiable Intelligence. Every data point extracted includes a direct citation link back to the original source document. Zero hallucination allowed."
            variant="clever"
            comingSoon
          />
        </div>
      </Container>
    </section>
  );
};
