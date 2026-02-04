import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  showText = true,
  light = false
}) => {
  const iconSize = size === 'small' ? 32 : size === 'large' ? 60 : 40;

  return (
    <a href="#" className={styles.logo}>
      <svg
        className={styles.logoIcon}
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 2C15 2 10 7 10 12C10 17 13 20 13 25C13 30 10 35 10 35"
          stroke="#ec4899"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M20 2C25 2 30 7 30 12C30 17 27 20 27 25C27 30 30 35 30 35"
          stroke="#06b6d4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="10" cy="12" r="4" fill="#ec4899"/>
        <circle cx="30" cy="12" r="4" fill="#06b6d4"/>
        <circle cx="13" cy="25" r="4" fill="#ec4899"/>
        <circle cx="27" cy="25" r="4" fill="#06b6d4"/>
        <line x1="14" y1="12" x2="26" y2="12" stroke="#0a3d3d" strokeWidth="2"/>
        <line x1="17" y1="25" x2="23" y2="25" stroke="#0a3d3d" strokeWidth="2"/>
      </svg>
      {showText && (
        <span className={`${styles.logoText} ${light ? styles.light : ''}`}>
          OncoFabric
        </span>
      )}
    </a>
  );
};
