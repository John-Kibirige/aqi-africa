const stringComparator = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const len = str1.length;
  const sliced = str2.slice(0, len);
  return str1 === sliced;
};

export default stringComparator;
