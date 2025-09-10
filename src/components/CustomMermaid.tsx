'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const CustomMermaid = ({ chartDefinition }) => {
  const chartRef = useRef(null);
  // Generate a unique ID for each instance
  const uniqueId = useRef(
    `mermaid-chart-${Math.random().toString(36).substr(2, 9)}`,
  );

  useEffect(() => {
    if (chartRef.current) {
      mermaid.initialize({ startOnLoad: false, theme: 'dark' });
      mermaid.render(uniqueId.current, chartDefinition).then(({ svg }) => {
        chartRef.current.innerHTML = svg;
      });
    }
  }, [chartDefinition]);

  return <div className="pt-5" ref={chartRef} id={uniqueId.current} />;
};

export default CustomMermaid;
