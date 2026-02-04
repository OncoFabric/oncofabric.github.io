import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo } from '../common';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.headerInner}>
          <Link to="/">
            <Logo />
          </Link>
          <nav className={styles.nav}>
            <a href="/#platform" className={styles.navLink}>Platform</a>
            <a href="/#solutions" className={styles.navLink}>Solutions</a>
            <a href="/#science" className={styles.navLink}>The Science</a>
            <Link to="/about" className={styles.navLink}>About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
