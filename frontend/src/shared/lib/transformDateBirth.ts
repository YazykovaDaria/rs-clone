export default function transformDateJoin(str: string) {
  const date = new Date(str);
  const monthsEn = [
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
  const monthsRu = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  const month = date.getMonth();
  const year = date.getFullYear();
  const lang = localStorage.getItem('lng');
  const day = date.getDate();

  if (lang === 'ru') {
    return `${day} ${monthsRu[month]}, ${year}`;
  }
  return `${monthsEn[month]} ${day}, ${year}`;
}
