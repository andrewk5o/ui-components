module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      "@babel/env",
      [
        "@babel/react",
        {
          runtime: "automatic",
        },
      ],
    ],
    env: {
      development: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
            },
          ],
        ],
      },
      production: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              minify: true,
              transpileTemplateLiterals: true,
              pure: true,
            },
          ],
        ],
      },
    },
  }
}
