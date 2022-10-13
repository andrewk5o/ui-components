module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
      "@babel/preset-env",
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
