import { mergeConfig } from 'vite'
import type { UserConfig, PluginOption } from 'vite'
import baseConfig from './vite.config.base'
import { resolve, join } from 'path'
import fs from 'fs'

function walkSync(currentDirPath, callback) {
  fs.readdirSync(resolve(currentDirPath), { withFileTypes: true }).forEach((dirent) => {
    const filePath = join(currentDirPath, dirent.name)
    if (dirent.isFile()) {
      callback(filePath, dirent)
    } else if (dirent.isDirectory()) {
      walkSync(filePath, callback)
    }
  })
}

export default mergeConfig(baseConfig, {
  plugins: [
    {
      name: 'inject-pack-css',
      enforce: 'post',
      apply: 'build',
      closeBundle() {
        const files: any = []
        walkSync('lib', (filePath) => {
          files.push(filePath)
        })
        const alljs = files.find((f) => f.includes('ui.js'))
        const css = files.find((f) => f.includes('style.css'))
        const IIFEjs = fs.readFileSync(alljs, 'utf-8')
        const IIFEcss = fs.readFileSync(css, 'utf-8')
        const csscode = `
        (function() {
          try {
              var elementStyle = document.createElement('style');
              elementStyle.innerText = ${JSON.stringify(IIFEcss)}
              document.head.appendChild(elementStyle)
          } catch(error) {
            console.error(error, 'unable to concat style inside the bundled file')
          }
        })()`
        const code = IIFEjs + csscode
        fs.writeFileSync(alljs, code)
        fs.unlinkSync(css)
      }
    } as PluginOption
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, '../components.ts'),
      name: 'ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'lib',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
} as UserConfig)
