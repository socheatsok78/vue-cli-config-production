module.exports = api => {
  api.extendPackage({
    vue: {
      integrity: api.makeJSOnlyValue(`process.env.NODE_ENV === 'production'`),
      productionSourceMap: false,
    }
  })
}
