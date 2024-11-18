import React from 'react';

const ClefSvg = (props: any) => {
  const { flats, sharps } = props;

  const renderFlats = () => {
    const flatsPosition = [
      { x: 730, y: 900 },
      { x: 919, y: 630 },
      { x: 1108, y: 990 },
      { x: 1297, y: 720 },
      { x: 1486, y: 1080 },
      { x: 1675, y: 810 },
      {
        x: 1864,
        y: 1170,
      },
    ];

    return (
      <>
        {Array.from({ length: flats }, (v, i) => i).map(
          (_flat: number, index: number) => (
            <use
              key={index}
              xlinkHref='#E260-52mhtp'
              x={flatsPosition[index].x}
              y={flatsPosition[index].y}
              height='720px'
              width='720px'
            />
          )
        )}
      </>
    );
  };

  const renderSharps = () => {
    const sharpsPosition = [
      { x: 730, y: 540 },
      { x: 942, y: 810 },
      { x: 1154, y: 450 },
      { x: 1366, y: 720 },
      { x: 1578, y: 990 },
      { x: 1790, y: 630 },
    ];

    return (
      <>
        {Array.from({ length: sharps }, (v, i) => i).map(
          (_sharp: number, index: number) => (
            <use
              key={index}
              xlinkHref='#E262-k3nxd3'
              x={sharpsPosition[index].x}
              y={sharpsPosition[index].y}
              height='720px'
              width='720px'
            />
          )
        )}
      </>
    );
  };

  return (
    <svg
      width='200px'
      height='200px'
      className='definition-scale'
      color='#27272A'
      viewBox='0 0 2760 1800'
      {...props}
    >
      <defs>
        {/* Sharps Symbol */}
        <symbol id='E050-k3nxd3' viewBox='0 0 1000 1000' overflow='inherit'>
          <path
            transform='scale(1,-1)'
            d='M562 -21c0 89 -65 150 -155 150c7 -44 34 -203 55 -323c71 29 100 102 100 173zM420 -206l-58 329c-59 -14 -104 -63 -104 -124c0 -49 22 -75 61 -99c12 -8 22 -13 22 -22s-9 -13 -17 -13c-80 0 -135 96 -135 166c0 94 62 190 153 217c-7 41 -14 88 -23 142 c-15 -15 -31 -29 -48 -44c-88 -76 -174 -185 -174 -307c0 -151 122 -251 265 -251c19 0 38 2 58 6zM332 822c-8 -31 -11 -65 -11 -102c0 -42 5 -81 11 -121c69 68 146 146 146 250c0 69 -24 118 -39 118c-52 0 -98 -105 -107 -145zM122 -513c0 66 45 123 115 123 c75 0 116 -57 116 -111c0 -64 -47 -104 -94 -111c-3 -1 -5 -2 -5 -4c0 -1 2 -2 3 -3c2 0 23 -5 47 -5c101 0 154 55 154 159c0 53 -11 123 -30 219c-23 -4 -50 -7 -79 -7c-186 0 -349 147 -349 334c0 200 126 321 217 406c21 17 73 70 74 71c-17 112 -22 161 -22 215 c0 84 18 212 82 288c33 39 64 51 71 51c18 0 47 -35 71 -86c16 -36 44 -110 44 -201c0 -159 -73 -284 -179 -395c9 -56 19 -115 29 -175c146 0 253 -102 253 -253c0 -103 -73 -205 -171 -237c6 -39 12 -69 15 -89c10 -57 16 -102 16 -141c0 -63 -14 -129 -68 -167 c-36 -22 -77 -34 -124 -34c-135 0 -186 87 -186 153z'
          />
        </symbol>
        <symbol id='E262-k3nxd3' viewBox='0 0 1000 1000' overflow='inherit'>
          <path
            transform='scale(1,-1)'
            d='M233 105l-38 -7v-165l33 7h2c8 0 14 -6 14 -14v-59c0 -6 -5 -13 -11 -14l-38 -7v-147h-28v141l-89 -18v-155h-28v149l-33 -7h-3c-8 0 -14 6 -14 14v58c0 6 5 13 11 14l39 8v165l-33 -7h-3c-8 0 -14 6 -14 14v-2v58v2c0 6 5 13 11 14l39 8v147h28v-141l89 18v155h28v-149 l33 7h2c8 0 14 -6 14 -14v-59c0 -6 -5 -13 -11 -14zM78 74v-166l89 19v165z'
          />
        </symbol>

        {/* Flats Symbol */}
        <symbol id='E050-52mhtp' viewBox='0 0 1000 1000' overflow='inherit'>
          <path
            transform='scale(1,-1)'
            d='M562 -21c0 89 -65 150 -155 150c7 -44 34 -203 55 -323c71 29 100 102 100 173zM420 -206l-58 329c-59 -14 -104 -63 -104 -124c0 -49 22 -75 61 -99c12 -8 22 -13 22 -22s-9 -13 -17 -13c-80 0 -135 96 -135 166c0 94 62 190 153 217c-7 41 -14 88 -23 142 c-15 -15 -31 -29 -48 -44c-88 -76 -174 -185 -174 -307c0 -151 122 -251 265 -251c19 0 38 2 58 6zM332 822c-8 -31 -11 -65 -11 -102c0 -42 5 -81 11 -121c69 68 146 146 146 250c0 69 -24 118 -39 118c-52 0 -98 -105 -107 -145zM122 -513c0 66 45 123 115 123 c75 0 116 -57 116 -111c0 -64 -47 -104 -94 -111c-3 -1 -5 -2 -5 -4c0 -1 2 -2 3 -3c2 0 23 -5 47 -5c101 0 154 55 154 159c0 53 -11 123 -30 219c-23 -4 -50 -7 -79 -7c-186 0 -349 147 -349 334c0 200 126 321 217 406c21 17 73 70 74 71c-17 112 -22 161 -22 215 c0 84 18 212 82 288c33 39 64 51 71 51c18 0 47 -35 71 -86c16 -36 44 -110 44 -201c0 -159 -73 -284 -179 -395c9 -56 19 -115 29 -175c146 0 253 -102 253 -253c0 -103 -73 -205 -171 -237c6 -39 12 -69 15 -89c10 -57 16 -102 16 -141c0 -63 -14 -129 -68 -167 c-36 -22 -77 -34 -124 -34c-135 0 -186 87 -186 153z'
          />
        </symbol>
        <symbol id='E260-52mhtp' viewBox='0 0 1000 1000' overflow='inherit'>
          <path
            transform='scale(1,-1)'
            d='M201 79c1 -8 2 -16 2 -25c0 -41 -15 -90 -53 -133c-54 -61 -119 -93 -123 -95c-2 -1 -6 -2 -8 -2c-8 0 -14 6 -14 14l-5 601c0 8 6 14 14 14h12c8 0 14 -6 14 -14l-4 -321c5 6 34 37 84 37c51 0 75 -37 81 -76zM132 40v11c0 21 -3 55 -39 55c-40 0 -55 -29 -57 -38 l-3 -195c19 15 53 42 70 68c25 38 29 84 29 99z'
          />
        </symbol>
      </defs>

      <g className='page-margin' transform='translate(0, 0)'>
        <g id='sxjw5xb' className='system'>
          <g id='sbyreza' className='staff'>
            {/* Lines */}
            <path
              d='M0 540 L2769 540'
              stroke='#27272A'
              fill='#27272A'
              strokeWidth='24'
            />
            <path
              d='M0 720 L2769 720'
              stroke='#27272A'
              fill='#27272A'
              strokeWidth='24'
            />
            <path
              d='M0 900 L2769 900'
              stroke='#27272A'
              fill='#27272A'
              strokeWidth='24'
            />
            <path
              d='M0 1080 L2769 1080'
              stroke='#27272A'
              fill='#27272A'
              strokeWidth='24'
            />
            <path
              d='M0 1260 L2769 1260'
              stroke='#27272A'
              fill='#27272A'
              strokeWidth='24'
            />

            {/* Clef */}
            <g id='cwp3e1h' className='clef' stroke='#27272A' fill='#27272A'>
              <use
                xlinkHref='#E050-k3nxd3'
                x='90'
                y='1080'
                height='720px'
                width='720px'
                fill='#27272A'
                stroke='#27272A'
              />
            </g>

            <g id='k8vrzac' className='keySig' stroke='#27272A' fill='#27272A'>
              {renderSharps()}
              {renderFlats()}
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ClefSvg;
