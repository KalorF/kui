import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { STYLE_PREFIX } from '../config/index'
import { resolve } from 'path'
// import postcssConfig from '../postcss.config'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '../'),
      '@utils': resolve(__dirname, '../utils'),
      '@components': resolve(__dirname, '../components')
    }
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: `${STYLE_PREFIX}-[local]`
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        })
      ]
    }
  },
  plugins: [vue(), vueJsx()]
} as UserConfig)
