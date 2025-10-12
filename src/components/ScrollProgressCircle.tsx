"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressCircle() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="rotate-[-90deg]"
      >
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
