import scss from "rollup-plugin-scss"
import { swc } from "rollup-plugin-swc3"

const config = [
  {
    preserveModules: true,
    input: "src/index.ts",
    output: {
      format: "esm",
      dir: "dist"
    },
    treeshake: true,
    plugins: [
      swc({
        jsc: {
          loose: true,
          externalHelpers: false,
          parser: {
            syntax: "typescript",
            dynamicImport: true,
            tsx: true,
          },
          transform: {
            react: {
              pragma: "React.createElement",
              pragmaFrag: "React.Fragment",
              throwIfNamespace: true,
              development: false,
              useBuiltins: true,
            },
          }
        },
        minify: true
      }),
      scss({
        outputStyle: "compressed",
        fileName: "styles/main.css",
        sourceMap: true,
        includePaths: ["src"],
        failOnError: true
      })
    ]
  }
]

export default config
