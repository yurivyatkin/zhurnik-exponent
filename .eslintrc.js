module.exports = {
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'extends': [
    'standard',
    'standard-react'
  ],
  'plugins': [
    'promise',
    'react'
  ],
  'env': {
    'jest': true
  }
}
