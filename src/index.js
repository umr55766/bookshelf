import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from 'react-error-boundary'
import App from './app'
import {FullPageSpinner} from './components/lib'
import AppProviders from './context'

function ErrorFallback({error}) {
  return (
    <div css={{color: 'red'}}>
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <React.Suspense fallback={<FullPageSpinner />}>
      <AppProviders>
        <App />
      </AppProviders>
    </React.Suspense>
  </ErrorBoundary>,
)
