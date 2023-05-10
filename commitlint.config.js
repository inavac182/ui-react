// eslint-disable-next-line no-undef
module.exports = {
  extends:
  [
      '@commitlint/config-conventional'
  ],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'button',
        'card',
        'checkbox',
        'chore',
        'config',
        'demo',
        'dialog',
        'docs',
        'flexgrid',
        'foundation',
        'form',
        'grid',
        'header',
        'icon',
        'input',
        'list',
        'navbar',
        'release',
        'table',
        'text',
        'themes',
        'view',
      ]
    ]
  }
}