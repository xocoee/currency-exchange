const resultDate = (unixTime: string): string => {
  const numberUnixTime = Number(unixTime);
  const date = new Date(numberUnixTime * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export default resultDate;
