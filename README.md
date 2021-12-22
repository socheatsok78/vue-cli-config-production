# @socheatsok78/vue-cli-config-production

My Production configurations for Vue CLI

## Install

Installing in an Already Created Project:

```sh
vue add @socheatsok78/vue-cli-plugin-configure
```

Manual install:

```sh
yarn add -D @socheatsok78/vue-cli-plugin-configure
# then
vue invoke @socheatsok78/vue-cli-plugin-configure
```

## Config

### integrity

- Type: `boolean`
- Default: `true` in production, `false` in development

See: https://cli.vuejs.org/config/#integrity

Set to `true` to enable [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (SRI) on `<link rel="stylesheet">` and `<script>` tags in generated HTML. If you are hosting your built files on a CDN, it is a good idea to enable this for additional security.

Also, when SRI is enabled, preload resource hints are disabled due to a [bug in Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=677022) which causes the resources to be downloaded twice.

### productionSourceMap

- Type: `boolean`
- Default: `false`

See: https://cli.vuejs.org/config/#productionsourcemap

Setting this to `false` can speed up production builds and I don't know why `@vue/cli` think it is a good idea to generate source map on production, [vuejs/vue-cli/issues/6891](https://github.com/vuejs/vue-cli/issues/6891).
