const stringComparator = (str1, str2) => {
  const string1 = str1.toLowerCase();
  const string2 = str2.toLowerCase();
  const len = string1.length;
  const sliced = string2.slice(0, len);
  return string1 === sliced;
};

export default stringComparator;
