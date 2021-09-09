import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Context } from '../Context'

const PrivateRoute = ({ component: Comp, path, ...rest }) => {
  // $$   To be fixed
  const [appState] = useContext(Context)
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return appState.isLogged ? <Comp {...props} /> : <Redirect to='/' />
      }}
    ></Route>
  )
}

export default PrivateRoute
