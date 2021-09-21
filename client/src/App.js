import './App.css'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <h1>APP</h1>
    </div>
  )
}

export default App
