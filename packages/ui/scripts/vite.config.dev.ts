import { mergeConfig } from 'vite'
import type { UserConfig } from 'vite'
import baseConfig from './vite.config.base'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default mergeConfig(
  {
    root: resolve(__dirname, '../../../example'),
    build: {
      rollupOptions: {
        input: 'index.html'
      }
    }
  } as UserConfig,
  baseConfig
)
