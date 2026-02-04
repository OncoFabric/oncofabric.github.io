import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo } from '../common';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link to="/">
              <Logo light showText />
            </Link>
            <p>Transforming fragmented oncology data into a unified, searchable fabric of intelligence.</p>
          </div>

          <div className={styles.footerCol}>
            <h4>Navigation</h4>
            <ul>
              <li><a href="/#platform">Platform</a></li>
              <li><a href="/#solutions">Solutions</a></li>
              <li><a href="/#science">The Science</a></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Built on Research</h4>
            <ul>
              <li><a href="https://lab.moffitt.org/rasool" target="_blank" rel="noopener noreferrer">Lab Rasool - Moffitt</a></li>
              <li><a href="https://github.com/lab-rasool/MINDS" target="_blank" rel="noopener noreferrer">GitHub - MINDS Project</a></li>
              <li><a href="https://github.com/lab-rasool/HoneyBee" target="_blank" rel="noopener noreferrer">GitHub - HoneyBee Project</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
