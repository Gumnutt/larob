import fs from 'fs'
import YAML from 'yaml'
import path from 'path'
import { defineConfig, loadEnv, normalizePath } from 'vite'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import eslint from 'vite-plugin-eslint'
import twig from 'vite-plugin-twig-drupal'
import { join } from 'node:path'
import liveReload from 'vite-plugin-live-reload'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { glob } from 'glob'
import postcssNesting from 'postcss-nesting'
import tailwindcss from 'tailwindcss'

const { readFile, writeFile } = fs.promises

// Resolve dirs.
const pwd = path.resolve(__dirname, '.')
const drupalPath = path.resolve(__dirname, '../../../../')
const themePath = pwd.match(/\/themes\/[^\/]+\/[^\/]+/i)
const basePath = `${themePath ? themePath[0] : ''}/dist/`

// Extract YML as object.
const yaml = filename => {
  const path = fs.readdirSync(pwd).find(fn => fn.endsWith(filename))
  return YAML.parse(fs.readFileSync(path, 'utf8'))
}

// Find any library with vite: true
const librariesYaml = yaml('.libraries.yml')
const librariesInput = Object.keys(librariesYaml)
  .filter(v => librariesYaml[v].vite)
  .map(v => [
    ...Object.keys(librariesYaml[v].css?.theme),
    ...Object.keys(librariesYaml[v].js),
  ])
  .flat()
  .filter(v => v.match(/^assets/))

// Find any CSS for ckeditor to statically map.
const infoYaml = yaml('.info.yml')
const ckeditorInput = (infoYaml['ckeditor5-stylesheets'] || [])
  .filter(v => v.match(/\.css$/))
  .map(v => v.replace('.css', '.pcss'))
  .map(v => v.replace('dist/assets', 'assets/pcss'))

// Statically rename the output file.
const outputMap = {}
ckeditorInput.forEach(v => {
  outputMap[path.basename(v).replace('.pcss', '.css')] = 'assets/[name].[ext]'
})

// SDC theming
function drupalSDC() {
  return {
    name: 'drupal-sdc',
    enforce: 'pre',
    async handleHotUpdate({ file, server }) {
      // Check if the changed file is a .pcss file
      if (file.includes('components') && file.endsWith('.pcss')) {
        console.log(`Recompiling ${file}`)
        try {
          const css = await readFile(file, 'utf-8')
          const result = await postcss([
            postcssImport(),
            postcssNesting(),
            tailwindcss(),
            autoprefixer(),
          ]).process(css, { from: undefined })

          const cssFileName = file.replace('.pcss', '.css')
          await writeFile(cssFileName, result.css)
          console.log(`Updated: ${cssFileName}`)
          server.hot.send({
            type: 'full-reload',
            updates: [
              {
                type: 'update', // use 'js-update' to trigger a reload of the module
                path: normalizePath(cssFileName),
                acceptedPath: normalizePath(cssFileName),
                timestamp: Date.now(),
              },
            ],
          })
        } catch (error) {
          console.error(`Error processing ${file}: ${error}`)
        }
        return [] // Returning an empty array signals that the update has been handled
      }
    },
  }
}

export default ({ mode }) => {
  const env = loadEnv(mode, drupalPath, '')

  const config = {
    plugins: [
      eslint({
        exclude: [/virtual:/, /node_modules/, /sb-preview/],
      }),
      twig({
        namespaces: {
          components: join(__dirname, 'components'),
        },
      }),
      liveReload(__dirname + '/**/*.(php|theme|twig|module)'),
      viteExternalsPlugin({
        jquery: 'jQuery',
        Drupal: 'Drupal',
        once: 'once',
        drupalSettings: 'drupalSettings',
      }),
      drupalSDC(),
    ],

    base: mode === 'development' ? '/' : basePath,

    build: {
      outDir: 'dist',
      manifest: true,
      rollupOptions: {
        input: [...librariesInput, ...ckeditorInput],
        output: {
          assetFileNames: assetInfo => {
            return outputMap[assetInfo.name] || 'assets/[name].[hash].[ext]'
          },
        },
      },
    },

    css: {
      devSourcemap: true,
      preprocessorOptions: {
        pcss: {
          additionalData: `@import '/assets/pcss/variables.pcss';`,
        },
      },
      postcss: {
        plugins: [postcssImport, postcssNesting, tailwindcss, autoprefixer],
      },
    },

    server: {
      host: true,
      port: 3000,
    },
  }

  let proxyTarget = null

  if (env.LANDO_APP_NAME) {
    proxyTarget = `https://${env.LANDO_APP_NAME}.${env.LANDO_DOMAIN}`
  } else if (env.DDEV_PRIMARY_URL) {
    proxyTarget = env.DDEV_PRIMARY_URL
  }

  if (proxyTarget && mode === 'development') {
    config.server.proxy = {
      '^/(system|api|jsonapi|graphql|oauth)/.*': {
        target: proxyTarget,
        changeOrigin: true,
      },
    }
  }

  return defineConfig(config)
}
