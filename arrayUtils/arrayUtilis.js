/**
 * Get the first element of list
 *
 * @param {array} array list
 * @param {int} n qtd element
 * @returns return the first element of list
 */
export function first(array, n = 1) {
  if (n === 1) return array[0]

  return array.filter((_, index) => index < n)
}

/**
 * Get the last element of list
 *
 * @param {array} array list
 * @param {int} n qtd element
 * @returns return the last element of list
 */
export function last(array, n = 1) {
  if (n === 1) return array[array.length - 1]

  return array.filter((_, index) => array.length - index < n)
}

/**
 *  Order elements from list by key
 *
 * @param {array} array list
 * @param {string} key key for ordered
 */
export function groupBy(array, key) {
  return array.reduce((group, element) => {
    const keyValue = element[key]

    return {
      ...group,
      [keyValue]: [...(group[keyValue] ?? []), element],
    }
  }, {})
}
