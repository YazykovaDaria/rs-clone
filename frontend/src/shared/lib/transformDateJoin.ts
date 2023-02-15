export default function transformDateBirth(str: string) {
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
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const month = date.getMonth();
  const year = date.getFullYear();
  const lang = localStorage.getItem('lng');

  if (lang === 'ru') {
    return `${monthsRu[month]} ${year}`;
  }
  return `${monthsEn[month]} ${year}`;
}
