/* eslint-disable import/prefer-default-export */
type Args = {
  day: string;
  month: string;
  year: string;
};

export const normalizeDate = ({ day, month, year }: Args) =>
  `${day}.${month}.${year}`;
