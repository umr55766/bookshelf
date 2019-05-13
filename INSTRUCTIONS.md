# Routing

## Background

It doesn't take long before client-side routing is a must in any modern
client-side application. For a long time `react-router` has been the go-to
solution, but the creator of `react-router`
[Ryan Florence](https://twitter.com/ryanflorence) made a new one called
`@reach/router` and I like it a lot more. It has built-in accessibility
considerations, supports nested routes out of the box, and has a cleaner API.
It's also the built-in router for [Gatsby.js](https://www.gatsbyjs.org/) so it's
very widely used.

Here's an example of using `@reach/router` components:

```javascript
import React from 'react'
import {render} from 'react-dom'
import Logo from './Logo'
import {Router, Link, Redirect} from '@reach/router'

function App({children}) {
  return (
    <div>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Redirector path="/old-home" />
        <UnknownRoute default />
      </Router>
    </div>
  )
}

function Redirector() {
  return <Redirect to="/" />
}

function UnknownRoute() {
  return <div>Are you lost?</div>
}

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

render(<App />, document.getElementById('root'))
```

## Exercise

I've added some function components `src/screens` for the different screens of
our app. Your job will be to update `src/authenticated-app.js` to import those
screens and render them with the router at the right URL route.

You'll find our helpful little emoji around the app.

Files:

- `src/authenticated-app.js`
- `src/screens/not-found.js`

## 🦉 Elaboration & Feedback

After the instruction, copy the URL below into your browser and fill out the
form: http://ws.kcd.im/?ws=build%20a%20react%20app&e=Routing&em=
