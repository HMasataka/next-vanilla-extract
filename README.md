# Vanilla Extract

## Getting Started

```bash
npx create-next-app --ts next-new
```

```bash
npm install @vanilla-extract/next-plugin
```

* `next.config.js` を編集

```js
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);
```
