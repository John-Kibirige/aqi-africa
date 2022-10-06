const stringComparator = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const memo = {};
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    memo[char] = memo[char] + 1 || 1;
  }
  return str1.split('').every((e) => memo[e]);
};

export default stringComparator;
