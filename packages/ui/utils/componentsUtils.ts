import type { App, Component, Plugin } from 'vue'
import { COMPONENTS_PREFIX } from '../config'

const withInstall = <T>(comp: Component) => {
  const c = comp as any
  c.install = (app: App) => {
    app.component(c.name, comp)
  }
  return comp as Plugin & T
}

const componentName = (name: string) => {
  return `${COMPONENTS_PREFIX}-${name}`
}

export { withInstall, componentName }
