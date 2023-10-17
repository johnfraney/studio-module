# Nuxt Studio Module

<!-- [![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href] -->

A new experience to build content-driven website with Nuxt.

- [✨ &nbsp;Release Notes](https://github.com/nuxtlabs/studio/releases)
- [📖 &nbsp;Documentation](https://nuxt.studio/docs/projects/setup#requirements-to-use-the-studio-editor)

## Features

- 👌&nbsp; Zero configuration to start, works with any [Nuxt 3](https://nuxt.com) project
- 🎨&nbsp; Edit your [Pinceau tokens](https://pinceau.dev) with generated forms
- ⚙️&nbsp; Define your [project options](https://nuxt.com/docs/guide/directory-structure/app-config)
- 🚀&nbsp; Works in production with live preview

## Installation

```bash
yarn add --dev @nuxthq/studio
```

Then, register the module in your `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  modules: [
    '@nuxthq/studio'
  ]
})
```

## Configuration

By default the Studio API is `https://api.nuxt.studio`. If you want to customise it, you can set the `STUDIO_API` environement variable.

```bash
# .env
STUDIO_API=https://dev-api.nuxt.studio
```

### Development

- Run `yarn install` to install dependencies.
- Run `yarn dev` to start the dev server using [`playground/`](./playground/) as the project.
- Visit http://localhost:3100/

## License

[MIT License](./LICENSE)

Copyright (c) NuxtLabs

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxthq/studio/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxthq/studio

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxthq/studio.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxthq/studio

[github-actions-ci-src]: https://github.com/nuxtlabs/studio/workflows/studio/badge.svg
[github-actions-ci-href]: https://github.com/nuxtlabs/studio/actions/workflows/studio.yml

[codecov-src]: https://img.shields.io/codecov/c/github/@nuxthq/studio.svg
[codecov-href]: https://codecov.io/gh/@nuxthq/studio

[license-src]: https://img.shields.io/npm/l/@nuxthq/studio.svg
[license-href]: https://npmjs.com/package/@nuxthq/studio
