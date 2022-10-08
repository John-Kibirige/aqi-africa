const stringComparator = (str1, str2) => {
  const string1 = str1.toLowerCase();
  const string2 = str2.toLowerCase();
  const len = string1.length;
  const sliced = string2.slice(0, len);
  return string1 === sliced;
};

const getSequency = (length = 50) => {
  const result = [1];
  for (let i = 0; i < length; i += 1) {
    const latest = result[result.length - 1];
    if (latest % 2 === 1) {
      result.push(latest + 3);
    } else {
      result.push(latest + 1);
    }
  }
  return result;
};

export { stringComparator, getSequency };
