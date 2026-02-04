import React from 'react';
import { Container, Button } from '../common';
import styles from './Hero.module.css';

const DNAVisualization: React.FC = () => (
  <svg width="240" height="280" viewBox="0 0 240 280">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#ec4899' }}/>
        <stop offset="100%" style={{ stopColor: '#06b6d4' }}/>
      </linearGradient>
    </defs>
    {/* Left strand */}
    <g>
      <circle cx="60" cy="30" r="8" fill="#ec4899">
        <animate attributeName="cy" values="30;35;30" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="80" r="8" fill="#ec4899">
        <animate attributeName="cy" values="80;75;80" dur="2s" repeatCount="indefinite" begin="0.3s"/>
      </circle>
      <circle cx="60" cy="130" r="8" fill="#ec4899">
        <animate attributeName="cy" values="130;135;130" dur="2s" repeatCount="indefinite" begin="0.6s"/>
      </circle>
      <circle cx="80" cy="180" r="8" fill="#ec4899">
        <animate attributeName="cy" values="180;175;180" dur="2s" repeatCount="indefinite" begin="0.9s"/>
      </circle>
      <circle cx="60" cy="230" r="8" fill="#ec4899">
        <animate attributeName="cy" values="230;235;230" dur="2s" repeatCount="indefinite" begin="1.2s"/>
      </circle>
    </g>
    {/* Right strand */}
    <g>
      <circle cx="180" cy="30" r="8" fill="#06b6d4">
        <animate attributeName="cy" values="30;35;30" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="80" r="8" fill="#06b6d4">
        <animate attributeName="cy" values="80;75;80" dur="2s" repeatCount="indefinite" begin="0.3s"/>
      </circle>
      <circle cx="180" cy="130" r="8" fill="#06b6d4">
        <animate attributeName="cy" values="130;135;130" dur="2s" repeatCount="indefinite" begin="0.6s"/>
      </circle>
      <circle cx="160" cy="180" r="8" fill="#06b6d4">
        <animate attributeName="cy" values="180;175;180" dur="2s" repeatCount="indefinite" begin="0.9s"/>
      </circle>
      <circle cx="180" cy="230" r="8" fill="#06b6d4">
        <animate attributeName="cy" values="230;235;230" dur="2s" repeatCount="indefinite" begin="1.2s"/>
      </circle>
    </g>
    {/* Connectors */}
    <line x1="68" y1="30" x2="172" y2="30" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5"/>
    <line x1="88" y1="80" x2="152" y2="80" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5"/>
    <line x1="68" y1="130" x2="172" y2="130" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5"/>
    <line x1="88" y1="180" x2="152" y2="180" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5"/>
    <line x1="68" y1="230" x2="172" y2="230" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5"/>
    {/* Data particles */}
    <circle cx="120" cy="55" r="3" fill="#ffffff" opacity="0.6">
      <animate attributeName="cx" values="70;170" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="120" cy="105" r="3" fill="#ffffff" opacity="0.6">
      <animate attributeName="cx" values="170;70" dur="3s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <circle cx="120" cy="155" r="3" fill="#ffffff" opacity="0.6">
      <animate attributeName="cx" values="70;170" dur="3s" repeatCount="indefinite" begin="1s"/>
    </circle>
    <circle cx="120" cy="205" r="3" fill="#ffffff" opacity="0.6">
      <animate attributeName="cx" values="170;70" dur="3s" repeatCount="indefinite" begin="1.5s"/>
    </circle>
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBgPattern}></div>
      <div className={styles.heroGrid}></div>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroTagline}>
              The first verifiable, multimodal search engine for precision oncology.
            </p>
            <h1>
              Weaving Data<br />into <span>Cures.</span>
            </h1>
            <p className={styles.heroDescription}>
              We transform fragmented hospital archives—pathology images, clinical notes,
              and genomic data—into a unified, searchable fabric of intelligence.
            </p>
            <div className={styles.heroButtons}>
              <Button href="#platform">See the Platform</Button>
              <Button variant="ghost" href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                </svg>
                Watch Video
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroTablet}>
              <div className={styles.tabletScreen}>
                <div className={styles.tabletHeader}>
                  <span className={styles.tabletDot}></span>
                  <span className={styles.tabletDot}></span>
                  <span className={styles.tabletDot}></span>
                </div>
                <div className={styles.dnaVisualization}>
                  <DNAVisualization />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
