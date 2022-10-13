module.exports = (api) => {
  api.cache(true)

  const deEnv = {
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
  }

  const prodEnv = {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: false,
          pure: true,
        },
      ],
    ],
  }

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
      development: deEnv,
      production: prodEnv,
    },
  }
}
