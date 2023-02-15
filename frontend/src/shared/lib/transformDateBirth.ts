export default function transformDateJoin(str: string) {
  const date = new Date(str);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  return `${months[month]} ${day}, ${year}`;
}
