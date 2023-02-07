import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ timestamp }: { timestamp: string }) => {
  let timeAgo: string = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
