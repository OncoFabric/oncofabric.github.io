import React from 'react';
import { Container, SectionLabel } from '../common';
import { useIntersectionObserver } from '../../hooks';
import styles from './Clever.module.css';

const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const FloatingParticles: React.FC = () => (
  <div className={styles.cleverParticles}>
    <div className={styles.particle}></div>
    <div className={styles.particle}></div>
    <div className={styles.particle}></div>
    <div className={styles.particle}></div>
    <div className={styles.particle}></div>
    <div className={styles.particle}></div>
  </div>
);

interface ModeCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const ModeCard: React.FC<ModeCardProps> = ({ icon, title, subtitle, description, features }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.modeCard} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.modeIcon}>
        {icon}
      </div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <ul className={styles.modeFeatures}>
        {features.map((feature, index) => (
          <li key={index}>
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Clever: React.FC = () => {
  const [demoRef, isDemoVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className={styles.clever} id="clever">
      {/* Background elements */}
      <div className={styles.cleverBgPattern}></div>
      <div className={styles.cleverGrid}></div>
      <FloatingParticles />

      <Container>
        <div className={styles.cleverHero}>
          <div className={styles.cleverBrand}>
            <div className={styles.cleverLogoContainer}>
              <div className={styles.cleverLogoGlow}></div>
              <img
                src="/clever-logo.svg"
                alt="CLEVER Logo"
                className={styles.cleverLogo}
              />
            </div>
            <span className={styles.cleverName}>CLEVER</span>
          </div>
          <SectionLabel>Deep Dive</SectionLabel>
          <p className={styles.sectionSubtitle}>
            CLEVER is our agentic AI system purpose-built for parsing longitudinal oncology records.
            It extracts structured data only when backed by traceable source evidence.
          </p>
        </div>

        <div className={styles.modesGrid}>
          <ModeCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8"/>
                <path d="M12 8v8"/>
              </svg>
            }
            title="Interactive Mode"
            subtitle="Real-time exploration"
            description="Ask natural language questions about patient records and get instant, cited answers. Perfect for case review and clinical decision support."
            features={[
              'Natural language queries',
              'Real-time citation linking',
              'Follow-up question support',
              'Export to structured formats'
            ]}
          />

          <ModeCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            }
            title="Batch Mode"
            subtitle="Population-scale extraction"
            description="Process thousands of patient records against a predefined extraction schema. Ideal for registry building and retrospective studies."
            features={[
              'Schema-driven extraction',
              'Parallel document processing',
              'Quality scoring per field',
              'Audit trail generation'
            ]}
          />
        </div>

        <div className={styles.demoSection}>
          <div className={styles.demoHeader}>
            <h3>See It In Action</h3>
            <p>Hover over highlighted text to see source citations</p>
          </div>

          <div
            ref={demoRef}
            className={`${styles.demoContainer} ${styles.animateOnScroll} ${isDemoVisible ? styles.visible : ''}`}
          >
            <div className={styles.demoToolbar}>
              <span className={styles.demoToolbarDot}></span>
              <span className={styles.demoToolbarDot}></span>
              <span className={styles.demoToolbarDot}></span>
              <span className={styles.demoToolbarTitle}>CLEVER Terminal</span>
            </div>
            <div className={styles.demoContent}>
              <div className={styles.demoQuery}>
                <div className={styles.demoQueryLabel}>Query</div>
                <div className={styles.demoQueryText}>
                  What was the patient's HER2 status and when was it determined?
                </div>
              </div>
              <div className={styles.demoResponse}>
                <div className={styles.demoResponseLabel}>CLEVER Response</div>
                <p className={styles.demoResponseText}>
                  The patient was determined to be{' '}
                  <span className={styles.citationHighlight}>
                    HER2-positive (IHC 3+)
                    <span className={styles.citationPopup}>
                      <span className={styles.citationSource}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <path d="M14 2v6h6"/>
                        </svg>
                        Pathology Report
                      </span>
                      <div className={styles.citationMeta}>Oct 15, 2023 - Page 2, Para 3</div>
                    </span>
                  </span>{' '}
                  based on immunohistochemistry testing performed on{' '}
                  <span className={styles.citationHighlight}>
                    October 12, 2023
                    <span className={styles.citationPopup}>
                      <span className={styles.citationSource}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <path d="M14 2v6h6"/>
                        </svg>
                        Lab Results
                      </span>
                      <div className={styles.citationMeta}>Oct 12, 2023 - Page 1</div>
                    </span>
                  </span>.
                  Confirmatory{' '}
                  <span className={styles.citationHighlight}>
                    FISH testing showed HER2/CEP17 ratio of 4.2
                    <span className={styles.citationPopup}>
                      <span className={styles.citationSource}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <path d="M14 2v6h6"/>
                        </svg>
                        Molecular Diagnostics
                      </span>
                      <div className={styles.citationMeta}>Oct 18, 2023 - Page 1, Para 2</div>
                    </span>
                  </span>,
                  confirming HER2 amplification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
