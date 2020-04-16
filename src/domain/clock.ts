export interface Clock {
  initialTime: Date;
  currentTime: Date;
  speed: number;
}

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;

export function incrementClock(clock: Clock): void {
  clock.currentTime = new Date(clock.currentTime.getTime() + ONE_MINUTE);
}

export function createClock(): Clock {
  const now = new Date();
  return {
    initialTime: now,
    currentTime: now,
    speed: 1
  };
}
