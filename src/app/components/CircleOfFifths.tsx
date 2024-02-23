import React from 'react';
import ClefSvg from './ClefSvg';

const CIRCLE_OF_FIFTHS_DATA = [
  {
    note: 'A',
    relativeMinor: 'F#m',
    flats: 0,
    sharps: 3,
  },
  {
    note: 'E',
    relativeMinor: 'C#m',
    flats: 0,
    sharps: 4,
  },
  {
    note: 'B',
    relativeMinor: 'G#m',
    flats: 0,
    sharps: 5,
  },
  {
    note: 'Gb/F#',
    relativeMinor: 'Ebm/D#m',
    flats: 0,
    sharps: 6,
  },
  {
    note: 'Db',
    relativeMinor: 'Bbm',
    flats: 5,
    sharps: 0,
  },
  {
    note: 'Ab',
    relativeMinor: 'Fm',
    flats: 4,
    sharps: 0,
  },
  {
    note: 'Eb',
    relativeMinor: 'Cm',
    flats: 3,
    sharps: 0,
  },
  {
    note: 'Bb',
    relativeMinor: 'Gm',
    flats: 2,
    sharps: 0,
  },
  {
    note: 'F',
    relativeMinor: 'Dm',
    flats: 1,
    sharps: 0,
  },
  {
    note: 'C',
    relativeMinor: 'Am',
    flats: 0,
    sharps: 0,
  },
  {
    note: 'G',
    relativeMinor: 'Em',
    flats: 0,
    sharps: 1,
  },
  {
    note: 'D',
    relativeMinor: 'Bm',
    flats: 0,
    sharps: 2,
  },
];

// TODO - Move functions to a helper file
function polarToCartesian(x: number, y: number, r: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180.0;
  return [x + r * Math.cos(radians), y + r * Math.sin(radians)];
}

// TODO - Move functions to a helper file
function segmentPath(
  x: number,
  y: number,
  r0: number,
  r1: number,
  d0: number,
  d1: number
) {
  const arc = Math.abs(d0 - d1) > 180 ? 1 : 0;
  const point = (radius: number, degree: number) =>
    polarToCartesian(x, y, radius, degree)
      .map((n) => n.toPrecision(5))
      .join(',');
  return [
    `M${point(r0, d0)}`,
    `A${r0},${r0},0,${arc},1,${point(r0, d1)}`,
    `L${point(r1, d1)}`,
    `A${r1},${r1},0,${arc},0,${point(r1, d0)}`,
    'Z',
  ].join('');
}

const CircleOfFifthsWedge = ({
  x,
  y,
  r0,
  r1,
  d0,
  d1,
  color,
}: {
  x: number;
  y: number;
  r0: number;
  r1: number;
  d0: number;
  d1: number;
  color?: string;
}) => {
  return (
    <path
      d={segmentPath(x, y, r0, r1, d0, d1)}
      stroke='black'
      strokeWidth={3}
      fill={color || '#9874DC'}
      className={
        'hover:fill-[#9874DC] transition-fill duration-250 ease-linear cursor-pointer'
      }
    ></path>
  );
};

const CircleOfFifths = () => {
  const [xBound, yBound] = [250, 250];
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className='container'>
      <svg
        className='text-[#9fb7ff]'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${xBound * 2} ${yBound * 2}`}
      >
        <g
          style={{
            transform: 'rotate(15deg)',
            transformOrigin: `${xBound}px ${yBound}px`,
          }}
        >
          {data.map((_value, index) => {
            return (
              <CircleOfFifthsWedge
                key={index}
                x={xBound}
                y={yBound}
                r0={240}
                r1={160}
                d0={index * 30}
                d1={(index + 1) * 30 + 1}
                color='#b691ff'
              />
            );
          })}

          {data.map((_value, index) => {
            return (
              <CircleOfFifthsWedge
                key={index}
                x={xBound}
                y={yBound}
                r0={160}
                r1={110}
                d0={index * 30}
                d1={(index + 1) * 30 + 1}
                color='#6918b4'
              />
            );
          })}

          {data.map((_value, index) => {
            return (
              <CircleOfFifthsWedge
                key={index}
                x={xBound}
                y={yBound}
                r0={110}
                r1={50}
                d0={index * 30}
                d1={(index + 1) * 30 + 1}
                color='#36117e'
              />
            );
          })}
        </g>

        <g>
          {...CIRCLE_OF_FIFTHS_DATA.map((v, i) => {
            const [center_x, center_y] = polarToCartesian(
              xBound,
              yBound,
              200,
              i * 30
            );

            return (
              <ClefSvg
                key={i}
                flats={v.flats}
                sharps={v.sharps}
                width={100}
                height={45}
                x={center_x - 50}
                y={center_y - 20}
              />
            );
          })}

          {...CIRCLE_OF_FIFTHS_DATA.map((v, i) => {
            const [center_x, center_y] = polarToCartesian(
              xBound,
              yBound,
              135,
              i * 30
            );

            return (
              <text
                key={v.note}
                x={center_x}
                y={center_y}
                style={{
                  textAnchor: 'middle',
                  dominantBaseline: 'central',
                  fontSize: 16,
                  fill: 'white',
                }}
              >
                {v.note}
              </text>
            );
          })}

          {...CIRCLE_OF_FIFTHS_DATA.map((v, i) => {
            const [center_x, center_y] = polarToCartesian(
              xBound,
              yBound,
              80,
              i * 30
            );

            return (
              <text
                key={v.relativeMinor}
                x={center_x}
                y={center_y}
                style={{
                  textAnchor: 'middle',
                  dominantBaseline: 'central',
                  fontSize: 12,
                  fill: 'white',
                }}
              >
                {v.relativeMinor.split('/')[0]}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default CircleOfFifths;
