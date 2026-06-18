'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { IconBuildingStore, IconUsers, IconStar } from '@tabler/icons-react';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(eased * target);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration, active]);

  return value;
}

interface StatProps {
  icon: React.ReactNode;
  target: number;
  suffix?: string;
  label: string;
  decimal?: boolean;
  active: boolean;
}

function Stat({ icon, target, suffix = '', label, decimal = false, active }: StatProps) {
  const raw = useCountUp(target, 1400, active);
  const display = decimal ? raw.toFixed(1) : Math.round(raw).toString();

  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <span className="font-semibold text-text-primary text-xl">
          {display}{suffix}
        </span>
        <p className="text-sm text-muted">{label}</p>
      </div>
    </div>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className="border-t border-b border-divider py-10 bg-bg"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <Stat
            icon={<IconBuildingStore size={20} className="text-accent flex-shrink-0" />}
            target={127}
            suffix="+"
            label="obsłużonych zapytań"
            active={inView}
          />

          <div className="hidden md:block w-px h-10 bg-divider mx-12" />

          <Stat
            icon={<IconUsers size={20} className="text-accent flex-shrink-0" />}
            target={34}
            label="firmy w Polsce"
            active={inView}
          />

          <div className="hidden md:block w-px h-10 bg-divider mx-12" />

          <Stat
            icon={<IconStar size={20} className="text-accent flex-shrink-0" />}
            target={4.9}
            suffix=" / 5"
            label="średnia ocena"
            decimal={true}
            active={inView}
          />
        </div>
      </div>
    </div>
  );
}
