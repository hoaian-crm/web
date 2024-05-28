export default {
  defaultNamespace: 'translation',
  lexers: {
    js: ['JsxLexer'], // we're writing jsx inside .js files
    default: ['JavascriptLexer'],
  },
  locales: ['en', 'vi'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json', // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()
  input: ['src/*.js', 'src/**/*.tsx'],
  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file
  // Globs syntax: https://github.com/isaacs/node-glob#glob-primer
  namespaceSeparator: '<ns/>',
  keySeparator: '<ks/>',
};
