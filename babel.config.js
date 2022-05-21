module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^@store/(.+)': './src/store/\\1',
            '^@src/(.+)': './src/\\1',
          },
          extensions: [
            '.tsx',
            '.ts',
          ]
        }
      ]
    ]
  };
};
