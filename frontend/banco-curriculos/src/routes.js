import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import formulario from './pages/formulario/index.js'
import home from './pages/home/index.js'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/formulario" component={formulario} />
      </Switch>
    </BrowserRouter>
  )
}
