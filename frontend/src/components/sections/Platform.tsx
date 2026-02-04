import React from 'react';
import { Container, SectionLabel } from '../common';
import { useIntersectionObserver } from '../../hooks';
import styles from './Platform.module.css';

const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

interface PlatformFeatureProps {
  children: React.ReactNode;
  reverse?: boolean;
}

const PlatformFeature: React.FC<PlatformFeatureProps> = ({ children, reverse = false }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.platformFeature} ${reverse ? styles.reverse : ''} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
};

export const Platform: React.FC = () => {
  return (
    <section className={styles.platform} id="platform">
      <Container>
        <div className={styles.platformHero}>
          <SectionLabel>Technology</SectionLabel>
          <h2>The Architecture of OncoFabric.</h2>
          <p>Moving beyond "AI wrappers" to deep, structural data integration.</p>
        </div>

        <PlatformFeature>
          <div className={styles.platformFeatureContent}>
            <h3>The MINDS Engine</h3>
            <p>
              Break down the silos. Traditional databases require you to know exactly what you are looking for. OncoFabric allows for semantic discovery by generating unified embedding vectors for disparate data types.
            </p>
            <ul className={styles.featureList}>
              <li>
                <CheckIcon />
                Ingest WSI (Whole Slide Imaging), EHR PDFs, and tabular omics
              </li>
              <li>
                <CheckIcon />
                Generate a unified latent representation
              </li>
              <li>
                <CheckIcon />
                Enable "query-by-example" across modalities
              </li>
            </ul>
          </div>
          <div className={styles.platformVisual}>
            <div className={styles.visualSplit}>
              <div className={styles.visualPanel}>
                <span className={styles.visualPanelLabel}>Pathology Slide</span>
                <div className={styles.visualPanelContent}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect x="10" y="10" width="60" height="60" rx="4" stroke="#cbd5e1" strokeWidth="2"/>
                    <circle cx="30" cy="35" r="8" fill="#ec4899" opacity="0.3"/>
                    <circle cx="50" cy="45" r="6" fill="#06b6d4" opacity="0.3"/>
                    <circle cx="35" cy="55" r="5" fill="#ec4899" opacity="0.2"/>
                  </svg>
                </div>
              </div>
              <div className={styles.visualPanel}>
                <span className={styles.visualPanelLabel}>Clinical PDF</span>
                <div className={styles.visualPanelContent}>
                  <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                    <rect x="5" y="5" width="50" height="70" rx="4" stroke="#cbd5e1" strokeWidth="2"/>
                    <line x1="15" y1="20" x2="45" y2="20" stroke="#cbd5e1" strokeWidth="2"/>
                    <line x1="15" y1="30" x2="40" y2="30" stroke="#cbd5e1" strokeWidth="2"/>
                    <line x1="15" y1="40" x2="45" y2="40" stroke="#cbd5e1" strokeWidth="2"/>
                    <line x1="15" y1="50" x2="35" y2="50" stroke="#cbd5e1" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.visualConnector}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
              </svg>
            </div>
          </div>
        </PlatformFeature>

        <PlatformFeature reverse>
          <div className={styles.platformFeatureContent}>
            <h3>The HoneyBee Framework</h3>
            <p>
              One pipeline for all modalities. HoneyBee provides unified processing that transforms heterogeneous data—images, documents, genomics—into consistent, analysis-ready representations.
            </p>
            <ul className={styles.featureList}>
              <li>
                <CheckIcon />
                Uniform processing across WSI, PDFs, and omics data
              </li>
              <li>
                <CheckIcon />
                Maintains data integrity throughout the pipeline
              </li>
              <li>
                <CheckIcon />
                Produces structured outputs ready for downstream analysis
              </li>
            </ul>
          </div>
          <div className={styles.platformVisual}>
            <div className={styles.visualSplit}>
              <div className={styles.visualPanel}>
                <span className={styles.visualPanelLabel}>Raw Input</span>
                <div className={styles.visualPanelContent}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="5" y="5" width="50" height="50" rx="4" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"/>
                    <text x="30" y="35" textAnchor="middle" fill="#94a3b8" fontSize="12">Mixed</text>
                  </svg>
                </div>
              </div>
              <div className={styles.visualPanel}>
                <span className={styles.visualPanelLabel}>Structured</span>
                <div className={styles.visualPanelContent}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="5" y="5" width="50" height="50" rx="4" stroke="#ec4899" strokeWidth="2"/>
                    <line x1="15" y1="20" x2="45" y2="20" stroke="#ec4899" strokeWidth="2"/>
                    <line x1="15" y1="30" x2="45" y2="30" stroke="#ec4899" strokeWidth="2"/>
                    <line x1="15" y1="40" x2="45" y2="40" stroke="#ec4899" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.visualConnector}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </PlatformFeature>

        <PlatformFeature>
          <div className={styles.platformFeatureContent}>
            <h3>The CLEVER System</h3>
            <p>
              Trust, but verify. In oncology, an uncited claim is useless. CLEVER uses agentic AI to parse longitudinal patient records with evidence-based extraction.
            </p>
            <ul className={styles.featureList}>
              <li>
                <CheckIcon />
                Evidence-Based: If the agent can't find the citation, it doesn't extract
              </li>
              <li>
                <CheckIcon />
                Temporal Reasoning: Automatic patient timeline generation
              </li>
              <li>
                <CheckIcon />
                Maps disease progression, treatment responses, and recurrence
              </li>
            </ul>
          </div>
          <div className={styles.platformVisual}>
            <div className={styles.citationDemo}>
              <p className={styles.citationText}>
                Patient presented with{' '}
                <span className={styles.citationHighlight}>
                  Stage IIB invasive ductal carcinoma
                  <span className={styles.citationPopup}>
                    📄 Source: Pathology Report<br/>Date: 10/12/23 • Page 4
                  </span>
                </span>{' '}
                of the right breast. Molecular testing revealed{' '}
                <span className={styles.citationHighlight}>HER2-positive status</span>{' '}
                with Ki-67 proliferation index of 35%.
              </p>
            </div>
          </div>
        </PlatformFeature>
      </Container>
    </section>
  );
};
