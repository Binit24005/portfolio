import { useMemo } from 'react';
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiExpress,
  SiGit,
  SiFigma,
  SiFirebase,
  SiPostman,
  SiSocketdotio,
  SiRedux,
} from 'react-icons/si';
import './TechStack.css';

const STACK = [
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#fff' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#83CD29' },
  { name: 'Express.js', Icon: SiExpress, color: '#fff' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#439934' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Git', Icon: SiGit, color: '#F34F29' },
  { name: 'Figma', Icon: SiFigma, color: '#A259FF' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { name: 'Socket.io', Icon: SiSocketdotio, color: '#fff' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
];

export default function TechStack() {
  const stack = useMemo(() => STACK, []);

  return (
    <section className="techstack section">
      <div className="container">
        <h2 className="section-label">Tech Stack</h2>
        <div className="techstack__grid">
          {stack.map((item) => {
            const TechIcon = item.Icon;
            return (
              <div key={item.name} className="techstack__icon" title={item.name} aria-label={item.name}>
                <TechIcon size={22} color={item.color} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
