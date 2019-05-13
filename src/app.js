import React from 'react'
import {useUser} from './context/user-context'
// 💣 get rid of both of these...
import AuthenticatedApp from './authenticated-app'
import UnauthenticatedApp from './unauthenticated-app'

// 🐨 add a call to React.lazy to create lazily-loaded variables for AuthenticatedApp and UnauthenticatedApp

// 💯 see if you can figure out how to pre-load the <AuthenticatedApp /> here
// so that it's instantly ready when the user finishes logging in.
function App() {
  const user = useUser()
  // 🐨 wrap all of this in <React.Suspense> with the fallback set to <FullPageSpinner />
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
