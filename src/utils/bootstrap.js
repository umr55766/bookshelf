import React from 'react'
import {getUser} from './auth-client'
import {readForUser} from './list-items-client'

let resource = createResource(bootstrapAppData)

// source: https://codesandbox.io/s/frosty-hermann-bztrp
// I know that Dan told us to not copy/paste this,
// but I'm going to do it anyway... I'm just learning!
function createResource(doAsyncThing) {
  let status
  let result
  function go() {
    status = 'pending'
    return doAsyncThing().then(
      r => {
        status = 'success'
        result = r
      },
      e => {
        status = 'error'
        result = e
      },
    )
  }
  let suspender = go()
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
    reload() {
      status = 'pending'
      result = null
      suspender = go()
      // not sure it's a good idea to return the suspender
      return suspender
    },
  }
}

function useErrorBoundaryError() {
  const [error, setError] = React.useState(null)
  if (error) {
    // let the error boundary catch this
    throw error
  }
  return setError
}

// this is probably a bad idea, but we need to trigger a re-render
// when calling "reload" to handle a user logging in or out.
const useForceUpdate = () => React.useReducer(s => s + 1, 0)[1]

function useResource() {
  const setError = useErrorBoundaryError()
  const forceUpdate = useForceUpdate()
  function reload() {
    resource.reload().then(forceUpdate, setError)
    forceUpdate()
  }
  return [resource.read(), reload]
}

async function bootstrapAppData() {
  const data = await getUser()
  if (!data) {
    return {user: null, listItems: []}
  }
  const {user} = data
  const {listItems} = await readForUser(user.id)
  return {
    user,
    listItems,
  }
}

export {bootstrapAppData, useResource}
