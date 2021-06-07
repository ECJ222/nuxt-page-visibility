# @nuxt/page-visibility

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Page visibility module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxt/page-visibility` dependency to your project

```bash
yarn add @nuxt/page-visibility # or npm install @nuxt/page-visibility
```

2. Add `@nuxt/page-visibility` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxt/page-visibility',

    // With options
    ['@nuxt/page-visibility', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) ECJ222 <enochchejieh@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxt/page-visibility/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxt/page-visibility

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxt/page-visibility.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxt/page-visibility

[github-actions-ci-src]: https://github.com/ECJ222/page-visibility-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/ECJ222/page-visibility-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/ECJ222/page-visibility-module.svg
[codecov-href]: https://codecov.io/gh/ECJ222/page-visibility-module

[license-src]: https://img.shields.io/npm/l/@nuxt/page-visibility.svg
[license-href]: https://npmjs.com/package/@nuxt/page-visibility
