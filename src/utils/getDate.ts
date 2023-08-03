import dayjs from 'dayjs';

export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  return dayjs(date).format('DD/MM/YYYY');
};
