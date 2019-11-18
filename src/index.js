/**
 * Deferred object returns promise and public resolve and reject methods
 * Deferred object's promise can be resolved or rejected via public methods
 * @returns {{resolve, reject, promise}}
 */

export const createDeferred = () => {
  return (() => {
    let publicResolve
    let publicReject

    const promise = new Promise((resolve, reject) => {
      publicResolve = resolve
      publicReject = reject
    })

    return {
      promise,
      reject: publicReject,
      resolve: publicResolve
    }
  })()
}

