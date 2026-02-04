import React from 'react';
import {
  Hero,
  Problem,
  Solution,
  Validation,
  Platform,
  CoreCapabilities,
  Clever,
  Solutions,
  CTA,
} from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Validation />
      <Platform />
      <CoreCapabilities />
      <Clever />
      <Solutions />
      <CTA />
    </main>
  );
};
