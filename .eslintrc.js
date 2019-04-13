module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-infix-ops': ['warn', { int32Hint: false }],
    'linebreak-style': ['warn', 'unix'],
    'for-direction': 'error',
    'getter-return': 'error',
    'no-constant-condition': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-semi': 'warn',
    'no-func-assign': 'error',
    'no-inner-declarations': 'warn',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'warn',
    'no-obj-calls': 'warn',
    'no-prototype-builtins': 'warn',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'no-empty': ['warn', { 'allowEmptyCatch': true }],
    'no-cond-assign': ['warn', 'except-parens'],
    'no-compare-neg-zero': 'warn',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'curly': ['warn', 'multi-line'],
    'consistent-return': 'warn',
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
    'no-console': 'off',
    'no-unused-vars': ['warn'],
    'vue/script-indent': ['warn', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/html-indent': ['warn', 2],
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'never',
      },
      'svg': 'never',
      'math': 'never',
    }],
    'vue/valid-v-model': 'off',
    'vue/require-prop-types': 'off',
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-spaced-func': 'warn',
    'array-callback-return': 'warn',
    'lines-between-class-members': ['warn', 'always'],
    'block-scoped-var': 'warn',
    'no-multi-spaces': 'warn',
    'brace-style': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-whitespace-before-property': 'warn',
    'lines-around-comment': ['warn', { afterBlockComment: false }],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'space-before-blocks': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
    'dot-location': ['warn', 'property'],
    'eol-last': ['warn', 'always'],
    'function-paren-newline': ['warn', 'multiline'],
    'comma-spacing': [
      'warn', {
        'before': false,
        'after': true,
      },
    ],
    'spaced-comment': ['warn', 'always'],
    'block-spacing': ['warn', 'always'],
    'space-unary-ops': ['warn', { words: true, nonwords: false }],
    'space-before-function-paren': ['warn', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'space-in-parens': ['warn', 'never'],
    'vue/order-in-components': ['warn', {
      'order': [
        'extends',
        'mixins',
        'components',
        'props',
        'data',
        'computed',
        'watch',
        'methods',
        'LIFECYCLE_HOOKS',
        'render',
      ],
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
