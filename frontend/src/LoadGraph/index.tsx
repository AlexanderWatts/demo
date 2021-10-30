import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import data from './data';

const LoadGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [labels, setLabels] = useState<string[]>(data.map((data) => data.supervisor));

  const [c0600Supervised, setC0600Supervised] = useState<number[]>(data.map((data) => data.c0600Supervised));
  const [c0600Marked, setC0600Marked] = useState<number[]>(data.map((data) => data.c0600Marked));
  const [c0580Marked, setC0580Marked] = useState<number[]>(data.map((data) => data.c0580Marked));
  const [c0650Marked, setC0650Marked] = useState<number[]>(data.map((data) => data.c0650Marked));

  useEffect(() => {
    console.log(canvasRef.current);

    new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'C0600/620 Supervised',
            data: c0600Supervised,
            backgroundColor: '#05345C',
          },
          {
            label: 'C0600/620 Second Marked',
            data: c0600Marked,
            backgroundColor: '#6B87BB'
          },
          {
            label: 'C0580 Marking',
            data: c0580Marked,
            backgroundColor: '#DB3A34',
          },
          {
            label: 'C0650 Marking',
            data: c0650Marked,
            backgroundColor: '#937227',
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    });
    
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <canvas
        style={{
          justifyContent: 'center',
          width: '60%',
          margin: '0 auto',
        }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default LoadGraph;
