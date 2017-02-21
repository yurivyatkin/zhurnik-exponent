/**
 * @providesModule Router
 */

import {
  createRouter,
} from '@exponent/ex-navigation'

import HomeScreen from 'HomeScreen'

export default createRouter(() => ({
  home: () => HomeScreen,
}))
