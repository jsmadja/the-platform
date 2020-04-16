import moment, {Moment} from "moment";

interface Event {
  time: Moment;
  initialTime: string;
  callback: Function;
}

export interface Clock {
  initialTime: Date;
  currentTime: Date;
  speed: number;
  events: Array<Event>;
}

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;

export function incrementClock(clock: Clock): void {
  clock.currentTime = new Date(clock.currentTime.getTime() + ONE_MINUTE);
  clock.events
    .filter(e => moment(clock.currentTime).isAfter(e.time))
    .forEach(e => {
      e.callback();
      e.time.add(1, 'day');
    });
}

export function registerEvent(clock: Clock, time: string, callback: Function): void {
  clock.events.push({time: moment(time, "h:mm"), callback, initialTime: time});
}

export function createClock(): Clock {
  const now = new Date();
  return {
    initialTime: now,
    currentTime: now,
    events: [],
    speed: 1

  };
}
