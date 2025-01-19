export const getCurrentTimeAndOffset = (timeZone: string) => {
  const date = new Date();

  const timeString = date.toLocaleTimeString([], {
    timeZone,
    hour: 'numeric',
    minute: 'numeric'
  });

  // Calculate UTC offset dynamically
  const offsetMinutes = -date.getTimezoneOffset();
  const offsetHours = Math.floor(offsetMinutes / 60);
  const offsetRemainder = Math.abs(offsetMinutes % 60);
  const formattedOffset = `UTC ${
    offsetHours >= 0 ? '+' : ''
  }${offsetHours}:${offsetRemainder.toString().padStart(2, '0')}`;

  return { timeString, formattedOffset };
};
