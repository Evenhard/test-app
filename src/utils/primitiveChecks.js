/**
 * return true if @param a is object else false
 */
export const isObject = a => {
  return !!a && a.constructor === Object;
};

/**
 * Return true if @param n is number
 *
 * @param {any} n : Value to be check whether number or not
 */
export function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
}

/**
 * return true is @param a is empty or non empty valid string
 */
export const isString = a => {
  return (typeof a === 'string');
};

/**
 * return true if @param a is non empty valid string
 */
export const isNonEmptyString = a => {
  return (isString(a) && a !== '');
};
