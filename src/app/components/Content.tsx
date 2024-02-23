'use client';

import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
// import { CircleOfFifths } from 'react-circle-of-fifths';
import CircleOfFifths from './CircleOfFifths';

const Content = () => {
  return (
    <div className='flex w-full h-min-full flex-col'>
      <Tabs aria-label='Options'>
        <Tab key='circleoffifths' title='Circle of Fifths'>
          <Card>
            <CardBody>
              <div className='w-[650px] mt-6 mx-auto'>
                <CircleOfFifths />
              </div>

              <div className='p-6'>
                <h2 className='text-lg font-bold pb-2'>
                  What is the circle of fifths? (To be Reworded)
                </h2>

                <p className='py-4'>
                  The circle of fifths is a visualization of all major keys and
                  minor keys. The major keys are in the outer circle and their
                  relative minor keys are in the inner circle. Each letter on
                  the circle of fifths can also represent a chord or a note.
                </p>

                <p className='py-4'>
                  The key signatures for each key are on the outside of the
                  circle. Major keys and relative minor keys share the same key
                  signature. For example, the key of F major and D minor both
                  have one flat in their key signature.
                </p>

                <p className='py-4'>
                  The circle of fifths helps you to visually understand the
                  relationship between keys and chords. You can use the circle
                  of fifths to:
                </p>

                <ul className='p-4 list-disc flex flex-col gap-4'>
                  <li>
                    Remember key signatures. The top of the circle shows the key
                    of C major with no sharps or flats. For each clockwise step,
                    a sharp (♯) is added to the key signature. With each
                    counterclockwise step, a flat (♭) is added to the key
                    signature.
                  </li>

                  <li>
                    Compose music. An idea for a song can start with a few
                    chords that sound good together. The three major chords and
                    three minor chords within any quarter of the circle belong
                    to the same key and thus sound good together.
                  </li>

                  <li>
                    Transpose chords. The chords of a song can be placed on the
                    circle of fifths and subsequently transposed by moving the
                    pattern of chords around the circle. For example, place the
                    chords C, F, and G on the circle of fifths. C is at the
                    center, F is one step counterclockwise and G is one step
                    clockwise. Transposed to A major, the chords are A, D, and
                    E.
                  </li>
                </ul>

                <p className='py-4'>
                  Going clockwise on the circle of fifths, there is an ascending
                  perfect fifth between each key. Going counterclockwise there
                  is a descending perfect fifth between each key. If you start
                  on any key and go up a perfect fifth 12 times, you’ll arrive
                  at the same key.
                </p>
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab key='chords' title='Chords'>
          <Card>
            <CardBody>TBD</CardBody>
          </Card>
        </Tab>

        <Tab key='scales' title='Scales and Aperggios'>
          <Card>
            <CardBody>TBD</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Content;
