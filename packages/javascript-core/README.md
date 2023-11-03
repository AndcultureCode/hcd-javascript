# HCD JavaScript Core

Common patterns, functions, etc... used when building javascript applications

## Getting started

This package is installed via npm, pnpm or yarn

```shell
# npm
npm install --save-dev @rsm-hcd/javascript-core

# pnpm
pnpm install --save-dev @rsm-hcd/javascript-core

# yarn
yarn add @rsm-hcd/javascript-core --dev
```

From there you can import the variety of modules.

```typescript
import { CollectionUtils, CoreUtils } from "@rsm-hcd/javascript-core";
```

## Peer dependencies

This package wraps several external packages for our own configuration and ease of use, such as `axios`, `i18next`, `lodash`, etc. If you are using the standard distribution of this package, these will need to be installed alongside this package, even if you do not plan on leveraging features that rely on them.

## Internationalization

This package offers a variety of functions for localizing an application, wrapping [`i18next`](https://github.com/i18next/i18next) and [`i18next-browser-languagedetector`](https://github.com/i18next/i18next-browser-languageDetector). A complete setup guide can be found in the wiki [here](<https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/wiki/Internationalization-(i18n)>).

If developing in VS Code, the [`kazoo`](https://marketplace.visualstudio.com/items?itemName=brandongregoryscott.kazoo) extension can be used to quickly insert typed keys and placeholder translations from Google Translate. ([source](https://github.com/brandongregoryscott/kazoo) | [install](https://marketplace.visualstudio.com/items?itemName=brandongregoryscott.kazoo))
