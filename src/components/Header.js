import React from 'react'
import { Route } from 'react-router-dom'

import './Header.css'
import Settings from './buttons/Settings'
import Back from './buttons/Back'
import CompleteWorkout from './buttons/CompleteWorkout'

import { PAGE_PATHS, PATHS } from '../constants'

const Header = () => {
  return (
    <header className="App-header">
      <Route
        exact
        path={PAGE_PATHS.filter(path => path !== PATHS.home)}
        component={Back}
      />
      <Route
        exact
        path={PAGE_PATHS.filter(
          path => path !== PATHS.settings && path !== PATHS.workout,
        )}
        component={Settings}
      />
      <Route exact path={PATHS.workout} component={CompleteWorkout} />
    </header>
  )
}

export default Header
