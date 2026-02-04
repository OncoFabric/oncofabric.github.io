import React from 'react';
import { Container, SectionLabel } from '../common';
import { useIntersectionObserver } from '../../hooks';
import styles from './CoreCapabilities.module.css';

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.capabilityCard} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.capabilityIcon}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const CoreCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'Trusted and Accurate Patient Context',
      description: 'Every data point is validated against source documents, ensuring clinical accuracy you can rely on for critical decisions.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <circle cx="6" cy="12" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="18" cy="12" r="2"/>
          <path d="M6 8v-2"/>
          <path d="M12 8v-4"/>
          <path d="M18 8v-2"/>
        </svg>
      ),
      title: 'Longitudinal Timeline View',
      description: 'Visualize complete patient journeys across time—from diagnosis through treatment to outcomes—in a unified chronological view.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M9 15l2 2 4-4"/>
        </svg>
      ),
      title: 'Auditability and Provenance',
      description: 'Every extraction links back to its source document with page, paragraph, and timestamp—full traceability for compliance and review.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          <circle cx="12" cy="16" r="1"/>
        </svg>
      ),
      title: 'Governance and Policy Control',
      description: 'Role-based access, data retention policies, and PHI handling built-in. Meet HIPAA, GDPR, and institutional requirements.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
          <path d="M3.6 15.4A9 9 0 1 0 20.4 8.6"/>
          <path d="M3 9l3 3-3 3"/>
        </svg>
      ),
      title: 'Safety and Hallucination Defense',
      description: 'If CLEVER cannot find evidence in the source, it does not extract. No fabricated data, no confident-sounding errors.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Unified Vision Across Systems',
      description: 'Connect siloed EHRs, PACS, lab systems, and genomic databases into one coherent patient view—no more context switching.'
    }
  ];

  return (
    <section className={styles.coreCapabilities} id="capabilities">
      <Container>
        <div className={styles.sectionHeader}>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className={styles.sectionTitle}>Built for Clinical Reality.</h2>
          <p className={styles.sectionSubtitle}>
            Six foundational pillars that make OncoFabric production-ready for healthcare environments.
          </p>
        </div>

        <div className={styles.capabilitiesGrid}>
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
