module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --cache', () => 'tsc --noEmit']
}
