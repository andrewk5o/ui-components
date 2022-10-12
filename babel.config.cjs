module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
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
              minify: false,
              transpileTemplateLiterals: false,
              meaninglessFileNames: ["index", "styles"],
            },
          ],
        ],
      },
      production: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: false,
              pure: true,
            },
          ],
        ],
      },
    },
  }
}
