'use client';

import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import CircleOfFifthsContainer from './circleoffifths/CircleOfFifthsContainer';
import ChatContainer from './chat/ChatContainer';

const Content = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options'>
        <Tab key='chat' title='Chat'>
          <Card>
            <CardBody>
              <ChatContainer />
            </CardBody>
          </Card>
        </Tab>

        <Tab key='circleoffifths' title='Circle of Fifths'>
          <Card>
            <CardBody>
              <CircleOfFifthsContainer />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Content;
