import { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './views/Search'
import CharacterDetails from './views/CharacterDetails'
import Logo from './components/Logo'

const App = () => (
  <>
    <Logo />
    <Switch>
      <Suspense fallback={null}>
        <Route path="/" component={Search} exact />
        <Route path="/details/:id" component={CharacterDetails} />
        <Redirect to="/" />
      </Suspense>
    </Switch>
  </>
)

export default App
