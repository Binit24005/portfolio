import { useEffect, useRef } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './ContributionGraph.css';

const GITHUB_USERNAME = 'Binit24005';

export default function ContributionGraph() {
  const ref = useRef(null);

  const [cached, setCached] = useLocalStorage('gh-contributions', {
    weeks: [],
    total: 0,
  });

  const weeks = cached.weeks.length
    ? cached.weeks
    : Array.from({ length: 53 }, () => Array(7).fill(0));

  const total = cached.total;

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data.contributions)) {
          throw new Error('Invalid contribution data');
        }

        const contributions = data.contributions;

        /*
          Convert the flat contribution list into
          GitHub-style columns (weeks) and rows (days).
        */

        const contributionMap = new Map(
          contributions.map((day) => [
            day.date,
            {
              count: day.count || 0,
              level: day.level || 0,
            },
          ])
        );

        const today = new Date();
        const endDate = new Date(today);

        // Start approximately 52 weeks before today
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 364);

        // Move start date back to Sunday
        startDate.setDate(startDate.getDate() - startDate.getDay());

        const parsedWeeks = [];

        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
          const week = [];

          for (let day = 0; day < 7; day++) {
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const date = String(currentDate.getDate()).padStart(2, '0');

            const dateKey = `${year}-${month}-${date}`;

            const contribution = contributionMap.get(dateKey);

            week.push(contribution ? contribution.level : 0);

            currentDate.setDate(currentDate.getDate() + 1);
          }

          parsedWeeks.push(week);
        }

        const totalCount = contributions.reduce(
          (sum, day) => sum + (day.count || 0),
          0
        );

        setCached({
          weeks: parsedWeeks.slice(-53),
          total: totalCount,
        });
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
      }
    }

    fetchContributions();
  }, [setCached]);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  return (
    <section className="contrib section" ref={ref}>
      <div className="container">
        <div className="contrib__inner fade-in">

          <div className="contrib__months">
            {[
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
            ].map((month) => (
              <span key={month} className="contrib__month">
                {month}
              </span>
            ))}
          </div>

          <div
            className="contrib__grid"
            role="img"
            aria-label={`${total} GitHub contributions in the past year`}
          >
            {weeks.map((days, weekIndex) => (
              <div
                key={weekIndex}
                className="contrib__week"
              >
                {days.map((level, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`contrib__cell contrib__cell--${level}`}
                    aria-label={`Level ${level} activity`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="contrib__footer">
            <span className="contrib__count">
              {total}{' '}
              <span className="contrib__count-label">
                CONTRIBUTIONS · {previousYear}–{currentYear}
              </span>
            </span>

            <div className="contrib__legend">
              <span className="contrib__legend-label">
                LESS
              </span>

              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`contrib__cell contrib__cell--${level}`}
                />
              ))}

              <span className="contrib__legend-label">
                MORE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}