export default function transformDateCreateAt(str: string) {
  const date = new Date(str);
  const monthsEn = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthsRu = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Мая',
    'Июня',
    'Июля',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];
  const lang = localStorage.getItem('lng');
  const month = date.getMonth();
  const day = date.getDate();
  const getTimeAgo = () => {
    const diff = +new Date() - +date;
    const sec = Math.floor(diff / 1000);
    if (sec < 60) {
      return lang === 'ru' ? 'только что' : 'just now';
    }
    const min = Math.floor(diff / 60000);
    if (min < 60) {
      return lang === 'ru' ? `${min}мин` : `${min}min`;
    }
    const hour = Math.floor(diff / 3600000);
    if (hour <= 24) {
      return lang === 'ru' ? `${hour}ч` : `${hour}h`;
    }
    return lang === 'ru'
      ? `${monthsRu[month]} ${day}`
      : `${monthsEn[month]} ${day}`;
  };

  return getTimeAgo();
}
