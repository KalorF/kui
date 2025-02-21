import type { App } from 'vue'
import * as components from './components'
export * from './components'

// eslint-disable-next-line space-before-function-paren
export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    if (component.install) {
      app.use(component)
    }
  })
  return app
}

export default {
  install
}
