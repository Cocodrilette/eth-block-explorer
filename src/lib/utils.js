export const parsedTimeElapsed = (blockTimestamp) => {
  const now = new Date();
  const blockDate = new Date(blockTimestamp);
  const seconds = Math.floor((now - blockDate) % 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} seconds ago`;

  if (minutes < 60)
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;

  if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;

  if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;

  return "A long time ago";
};
