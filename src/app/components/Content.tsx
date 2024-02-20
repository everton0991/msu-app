'use client';

import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import { CircleOfFifths } from 'react-circle-of-fifths';

const Content = () => {
  return (
    <div className='flex w-full h-min-full flex-col'>
      <Tabs aria-label='Options'>
        <Tab key='circleoffifths' title='Circle of Fifths'>
          <Card>
            <CardBody>
              <div className='w-[600px] m-auto'>
                <CircleOfFifths />
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
