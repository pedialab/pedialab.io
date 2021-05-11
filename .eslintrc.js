module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['jest', '@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true
  },
  ignorePatterns: ['.eslintrc.js', 'docs/', 'next.config.js'],
  rules: {
    // unnecessary in React 17+
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    // JSX in TypeScript
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // easier to work with jsx matching indents
    'operator-linebreak': [
      1,
      'before',
      { overrides: { '?': 'after', ':': 'ignore' } }
    ],
    // we use typescript to check, disabled as eslint not ignoring import type
    'import/named': 0,
    'no-unused-vars': 0,
    // duplicated with eslint, typescript is smarter when imported as type
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern:
          '^attributes$|^props$|^i$|^k$|^v$|^req$|^res$|^index$|^key$|^sys$',
        ignoreRestSiblings: false,
        varsIgnorePattern:
          '|^from$|^map$|^tap$|^flatMap$|^toArray$|FormattedMessage|logger|Locale|_'
      }
    ],
    'import/no-cycle': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/alt-text': 0,
    'no-useless-constructor': 0,
    'no-empty-function': [0, { allow: ['constructors'] }],
    'comma-dangle': [
      1,
      {
        functions: 'never'
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      0,
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'prefer-destructuring': 0,
    'prefer-rest-params': 0,
    'no-nested-ternary': 0,
    'import/first': 1,
    'func-names': 0,
    'no-multi-assign': 0,
    'no-unused-expressions': 1,
    semi: 2,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'jsx-a11y/href-no-hash': 0,
    quotes: [1, 'single'],
    'prefer-const': 1,
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'import/no-named-as-default': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 1,
    'function-paren-newline': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'no-debugger': 0,
    'max-len': [
      1,
      {
        code: 160,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'quote-props': 0,
    'no-return-assign': 0,
    'jsx-a11y/click-events-have-key-events': 1,
    'dot-notation': 0,
    'lines-between-class-members': 0
  },
  overrides: [
    {
      files: ['*.test.ts', '*.stories.ts'],
      rules: {
        'no-console': 0
      }
    }
  ]
};
