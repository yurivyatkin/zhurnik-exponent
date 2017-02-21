import Exponent from 'exponent'

import React from 'react'

import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'

import Router from 'Router'

class AppContainer extends React.Component {
  render () {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    )
  }
}

Exponent.registerRootComponent(AppContainer)
