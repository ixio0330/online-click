const mode = process.env.NODE_ENV_MODE || 'development';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': 'current'
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    mode === 'production' ? 'transform-remove-console' : 'react-refresh/babel',
  ],
};