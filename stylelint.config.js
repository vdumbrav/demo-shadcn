/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  ignoreFiles: ['node_modules/**', 'dist/**', '.next/**', 'build/**'],
  rules: {
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'state'],
      },
    ],
    'scss/at-mixin-pattern': '^[A-Za-z][A-Za-z0-9_-]*$',
    'scss/dollar-variable-pattern': '^[A-Za-z][A-Za-z0-9_-]*$',
    'keyframes-name-pattern': '^[A-Za-z][A-Za-z0-9_-]*$',
    'no-duplicate-selectors': true,
    // Optional relaxations for framework compatibility
    'scss/at-extend-no-missing-placeholder': null,
    'no-descending-specificity': null,
    'at-rule-no-deprecated': null,
    'declaration-property-value-keyword-no-deprecated': null,
    'block-no-empty': null,
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'selector-not-notation': null,
  },
};
