# 🌫️ nuxt-page-visibility

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> A Nuxt.js module to detect page visibility

## Table of Contents

- [Requirements](#requirements)
- [Install](#install)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Requirements

- npm
- NuxtJS
- NodeJS

## Install

```bash
# npm
$ npm install nuxt-page-visibility

# yarn
$ yarn add nuxt-page-visibility
```

## Getting Started

Add `'nuxt-page-visibility'` to the `modules` section of your `nuxt.config.js` file.

```js
{
  modules: ["nuxt-page-visibility"];
}
```

## Usage

1. Inject the module in your `nuxt.config.js` file. See [Getting Started](#getting-started).
2. `this.$visibility` is now available in your components. **Note** that `$visibility` returns an `object` with two properties one is `isVisible` which we would use to check if a user is focused on a page or not, While the other `isSupported` is used to check if the browser supports the Page Visibility API.

```js
{
  ...
  watch: {
    $visibility: {
      handler (page) {
        if (page.isVisible) {
          // do something
        } else {
          // do something
        }
      },
      deep: true
    }
  }
  ...
}
```

## License

This project is licensed under [MIT](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-page-visibility/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-page-visibility
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-page-visibility.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-page-visibility
[license-src]: https://img.shields.io/npm/l/nuxt-page-visibility.svg
[license-href]: https://npmjs.com/package/nuxt-page-visibility
