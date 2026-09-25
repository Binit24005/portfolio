import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ContributionGraph from '../components/sections/ContributionGraph';
import TechStack from '../components/sections/TechStack';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Slight delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <ContributionGraph />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </>
  );
}
