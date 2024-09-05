export const formattedDate = (date: Date) => {
  const dateObj = new Date(date);

  return `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`;
};
