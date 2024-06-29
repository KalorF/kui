import { mergeConfig } from 'vite'
import type { UserConfig } from 'vite'
import baseConfig from './vite.config.base'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'
import fs from 'fs'
import path from 'path'

// Scan all components
function scanEntries(dir: any) {
  const files = fs.readdirSync(dir)
  const entries: any = {}
  files.forEach((file) => {
    const fPath = path.join(dir, file)
    const stat = fs.statSync(fPath)
    if (stat.isDirectory() === true) {
      Object.assign(entries, scanEntries(fPath))
    } else if (file.endsWith('.ts')) {
      // 从compoents字符开始截取fPath下的第一个文件夹名字
      const name = fPath
        .slice(fPath.indexOf('components') + 10, fPath.lastIndexOf('index.'))
        .replace(/[\\|\\/]/g, '')
      entries[name] = fPath
    }
  })
  return entries
}

export default mergeConfig(
  {
    plugins: [
      dts({
        root: resolve(__dirname, '../../../'),
        insertTypesEntry: true,
        rollupTypes: true,
        copyDtsFiles: false,
        exclude: ['*.module.scss', '*.svg?raw'],
        include: ['**/*.ts', '**/*.tsx'],
        tsconfigPath: 'tsconfig.json',
        outDir: resolve(__dirname, '../lib/types')
      }),
      libInjectCss()
    ],
    build: {
      emptyOutDir: true,
      lib: {
        formats: ['es'],
        entry: {
          index: resolve(__dirname, '../index.ts'),
          ...scanEntries(resolve(__dirname, '../components'))
        },
        name: 'kui'
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'chunks/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]',
          entryFileNames: '[name].js',
          dir: 'lib',
          globals: {
            vue: 'Vue'
          }
        },
        external: ['vue']
      }
    }
  } as UserConfig,
  baseConfig
)
