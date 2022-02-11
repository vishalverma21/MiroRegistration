type FAutomationType = (page: string) => Function;

/**
 * This function returns a function to create dynamic selectors for automation. Please look at the Unit Test to see how it's used
 * @param page The page name
 */
export const automation: FAutomationType = (page) => (selector: string) => page + '_' + selector;
export const randomString = (length = 10, possible = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'): string => {
  const s = new Array(length);
  for (let i = 0; i < length; ++i) {
    s[i] = possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return s.join('');
};
