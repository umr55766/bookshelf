# Code Splitting

## Background

Code splitting is the process of loading code on-demand. The idea is that you
load as little code as you need upfront, then you can load the rest of it later
when you need it. This is purely a performance optimization. The less code you
send to the user, the faster your app will load.

Luckily for us, lazy module loading is part of the JavaScript specification:

```javascript
function loadMyCode() {
  import('./my-code').then(myCode => {
    // you can now use myCode as if you had done:
    // import * as myCode from './my-code'
  })
}
```

To make matters even better, React has built-in support for code splitting using
`React.lazy` and `<React.Suspense />`:

```javascript
import React from 'React'
// instead of this:
// import Graph from './graph'
// you can do this:
const Graph = React.lazy(() => import('./graph'))

function SomePartOfMyApp() {
  const [showGraph, setShowGraph] = React.useState(false)
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => setShowGraph(e.target.checked)} />{' '}
        Show Graph
      </label>
      {showGraph ? <Graph /> : null}
    </div>
  )
}
ReactDOM.render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <SomePartOfMyApp />
  </React.Suspense>,
)
```

With that, users who never click the checkbox will never have to download the
graph. And even if they do check the checkbox, they're better off anyway because
they were able to see the app quicker in the first place.

## Exercise

We're going to code-split our app between the authenticated and unauthenticated
sides so the login screen shows up ASAP. And there's even extra credit to see if
you can figure out how to load the authenticated side in the background while
the user's filling out the form.

Files:

- `src/app.js`

## 🦉 Elaboration & Feedback

After the instruction, copy the URL below into your browser and fill out the
form: http://ws.kcd.im/?ws=build%20a%20react%20app&e=Code%20Splitting&em=
