import createDeferred from './index'

describe('defer', () => {

  describe('createDeferred method', () => {

    it('Should return new "deferred" object which can be resolved/rejected via exposed methods', () => {
      const defer = createDeferred()

      expect(defer.promise.then).toBeDefined()
      expect(defer.reject).toBeDefined()
      expect(defer.resolve).toBeDefined()
    })

    it('Should resolve internal promise when called resolve() method', done => {
      const defer = createDeferred()
      let isResolved = false
      defer.promise.then(() => {
        isResolved = true
      })

      defer.resolve()

      setTimeout(() => {
        expect(isResolved).toBe(true)
        done()
      })
    })

    it('Should reject internal promise when called reject() method', done => {
      const defer = createDeferred()
      let isRejected = false
      defer.promise.catch(() => {
        isRejected = true
      })

      defer.reject()

      setTimeout(() => {
        expect(isRejected).toBe(true)
        done()
      })
    })

  })

})

