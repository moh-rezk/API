module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends:[
'standard-with-typescript',
  'plugin:@typescript-eslint/recommended' ,
  'prettier'
  ] ,

  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    plugins: ['@typescript-eslint/dot-notation', 'prettier'],
    extends: ['airbnb-typescript-prettier']
  },
  rules: {
  }
}
