import '@testing-library/jest-dom/extend-expect'

// For more info, visit https://fb.me/react-mock-scheduler
// jest.mock('scheduler', () => require('scheduler/unstable_mock'))

// none of these tests should actually invoke fetch
beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation((...args) => {
    console.warn('window.fetch is not mocked for this call', ...args)
    return Promise.reject(new Error('This must be mocked!'))
  })
})

afterEach(() => {
  window.fetch.mockRestore()
})
