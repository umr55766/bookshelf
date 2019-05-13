import React from 'react'
import {useUser} from './context/user-context'
import {FullPageSpinner} from './components/lib'

const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const user = useUser()
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
