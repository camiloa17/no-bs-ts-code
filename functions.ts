function addNumbers(a: number, b: number) {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = '') => {
  return `${str1} ${str2}`;
};
//Union type
export const format = (title: string, param: string | number) => {
  return `${title} ${param}`;
};

export const printFormat = (title: string, param: string | number) => {
  console.log(`${title} ${param}`);
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export const introduce = (salutation: string, ...names: string[]) => {
  return `${salutation} ${names.join(' ')}`;
};

export const getName = (user: { first: string; last: string }) => {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
};
