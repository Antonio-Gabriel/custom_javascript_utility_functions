/**
 *
 * @param {string} type event type
 * @param {string} selector selector name
 * @param {function} callback callback func
 * @param {object} options other properties
 * @param {DOM} parent dom element
 */
export function addGlobalEventListener(
  type,
  selector,
  callback,
  options = {},
  parent = document,
) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e)
    },
    options,
  )
}

// Example add global event listener

addGlobalEventListener('click', '.btn', () => console.log('Clicked btn'))

/**
 *
 * @param {string} selector the selector name
 * @param {DOM} parent dom element
 * @returns returns formated selector
 */
export function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

// Example qs(Query Selector)

qs('.employee-repo').append('Ag')

/**
 *
 * @param {string} selector the selector name
 * @param {DOM} parent dom element
 * @returns returns formated selector
 */
export function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

// Example qs(Query Selector All)

qsa('.employee-repos')
