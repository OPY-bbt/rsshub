import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('rsshub', () => App)
AppRegistry.runApplication('rsshub', {
  rootTag: document.getElementById('root'),
})