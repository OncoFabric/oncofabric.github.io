import React from 'react';
import { Container, SectionLabel } from '../components/common';
import { useIntersectionObserver } from '../hooks';
import styles from './AboutPage.module.css';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  links: {
    linkedin?: string;
    github?: string;
    labGithub?: string;
    scholar?: string;
    website?: string;
    huggingface?: string;
    orcid?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ghulam Rasool, PhD',
    title: 'Assistant Professor and Member, Department of Machine Learning, Moffitt Cancer Center',
    bio: 'Dr. Ghulam Rasool is an Assistant Member in the Departments of Machine Learning, Neuro-Oncology, and Diagnostic Imaging & Interventional Radiology at H. Lee Moffitt Cancer Center & Research Institute. His research focuses on developing trustworthy AI tools for oncology through multimodal machine learning and natural language processing, including applications of large language models for structured data extraction, diagnostic reasoning, and early detection of cachexia and pancreatic cancer.',
    image: '/team/ghulam-rasool.png',
    links: {
      linkedin: 'https://linkedin.com/in/gxrasool',
      github: 'https://github.com/grasool',
      labGithub: 'https://github.com/lab-rasool',
      scholar: 'https://scholar.google.com/citations?user=Ejo4SlwAAAAJ',
      website: 'https://lab.moffitt.org/rasool',
    },
  },
  {
    name: 'Aakash Tripathi, PhD',
    title: 'Machine Learning Engineer, Department of Machine Learning, Moffitt Cancer Center',
    bio: 'Dr. Aakash Tripathi received his PhD in Electrical Engineering from the University of South Florida. His research focuses on building scalable multimodal and agentic systems for oncology applications. He is a key contributor to frameworks like HONeYBEE (Harmonized ONcologY Biomedical Embedding Encoder) and MINDS for multimodal oncology data integration.',
    image: '/team/aakash-tripathi.jpg',
    links: {
      linkedin: 'https://www.linkedin.com/in/aakash-tripathi/',
      github: 'https://github.com/Aakash-Tripathi',
      huggingface: 'https://huggingface.co/Aakash-Tripathi',
      scholar: 'https://scholar.google.com/citations?user=7X57fGgAAAAJ&hl=en',
      orcid: 'https://orcid.org/0000-0001-7231-0487',
      website: 'https://aakash-tripathi.github.io/',
    },
  },
  {
    name: 'Asim Waqas, PhD',
    title: 'Applied Research Scientist, Department of Machine Learning, Moffitt Cancer Center',
    bio: 'Dr. Asim Waqas has a PhD in Electrical Engineering from the University of South Florida. His research focuses on machine learning applications in oncology, with particular interests in graph neural networks and multimodal integration of oncology data. He has multiple publications on multimodal data integration for cancer research, including foundational work on digital pathology and deep learning.',
    image: '/team/asim-waqas.png',
    links: {
      linkedin: 'https://linkedin.com/in/asim-waqas-7773b248',
      scholar: 'https://scholar.google.com/citations?user=vq-Mr-sAAAAJ',
    },
  },
];

interface ProfileCardProps {
  member: TeamMember;
  index: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ member, index }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.profileCard} ${styles.animateOnScroll} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.profileImage}>
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <div className={styles.profilePlaceholder}>
            {member.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <div className={styles.profileContent}>
        <h3>{member.name}</h3>
        <h4>{member.title}</h4>
        <p>{member.bio}</p>
        <div className={styles.profileLinks}>
          {member.links.linkedin && (
            <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {member.links.github && (
            <a href={member.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {member.links.labGithub && (
            <a href={member.links.labGithub} target="_blank" rel="noopener noreferrer" aria-label="Lab GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {member.links.scholar && (
            <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </a>
          )}
          {member.links.huggingface && (
            <a href={member.links.huggingface} target="_blank" rel="noopener noreferrer" aria-label="Hugging Face">
              <img src="/hf-logo.svg" alt="Hugging Face" className={styles.hfLogo} />
            </a>
          )}
          {member.links.orcid && (
            <a href={member.links.orcid} target="_blank" rel="noopener noreferrer" aria-label="ORCID">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
              </svg>
            </a>
          )}
          {member.links.website && (
            <a href={member.links.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const AboutPage: React.FC = () => {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.heroBgPattern}></div>
        <Container>
          <div className={styles.aboutHeroContent}>
            <SectionLabel>Our Team</SectionLabel>
            <h1>About <span>OncoFabric</span></h1>
            <p>
              We are a team of researchers and engineers at Moffitt Cancer Center dedicated to
              transforming how oncology data is accessed and utilized through trustworthy AI.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.teamSection}>
        <Container>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <ProfileCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};
