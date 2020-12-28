module.exports = {
  presets: [
    ['@babel/preset-typescript', {
      'allExtensions': true
    }]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ]
}
