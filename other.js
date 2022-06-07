/**
 * Sleep
 *
 * @param {int} duration
 * @returns a promise
 */
export function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

// Example

console.log('Running 0')

sleep(1000)

console.log('Running 2')

/**
 *
 * @param {*} cb
 */
export function memorize(cb) {
  const cache = new Map()

  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)

    const result = cb(...args)
    cache.set(key, result)

    return result
  }
}
