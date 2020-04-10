export interface Clock {
  initialTime: Date;
  currentTime: Date;
}

export function incrementClock(clock: Clock): void {
  clock.currentTime = new Date(clock.currentTime.getTime() + 1000);
}

export function createClock(): Clock {
  const now = new Date();
  return {
    initialTime: now,
    currentTime: now
  }
}
