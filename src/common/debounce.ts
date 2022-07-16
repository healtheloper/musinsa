import { SyntheticEvent } from 'react';

interface IEventTypes {
  [key: string]: number;
}

const delay = (ms) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, ms);
    } catch (e) {
      reject(e);
    }
  });

const debounce = ({ msTime, callback }) => {
  const msDiffRange = 10;
  const eventTypes: IEventTypes = {};
  return (event: Event | SyntheticEvent) => {
    const { type } = event;
    eventTypes[type] = new Date().getTime();
    delay(msTime).then(() => {
      const delayDate = new Date().getTime();
      const diff = delayDate - eventTypes[type];
      const isRangeIn = diff <= msTime + msDiffRange && diff >= msTime;
      if (isRangeIn) {
        callback(event);
      }
    });
  };
};

export default debounce;
