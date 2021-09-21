import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import User from './pages/User'
import ProtectedRoute from './components/ProtectedRoute'
import { CheckSession } from './services/Auth'
import './styles/App.css'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <Login
              {...props}
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
            />
          )}
        />
        <Route path="/register" component={Register} />
        <ProtectedRoute
          authenticated={authenticated}
          user={user}
          path="/user"
          component={User}
        />
      </Switch>
    </div>
  )
}

export default App
