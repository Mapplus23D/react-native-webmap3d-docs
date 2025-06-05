[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / UrlTemplateImageProvider

# Interface: UrlTemplateImageProvider

Defined in: index.d.ts:493

基于url的影像图层服务

## Properties

### maximumLevel?

> `optional` **maximumLevel**: `number`

Defined in: index.d.ts:500

最大层级 默认 不限制

***

### minimumLevel?

> `optional` **minimumLevel**: `number`

Defined in: index.d.ts:498

最小层级 默认 0

***

### subdomains?

> `optional` **subdomains**: `string`[]

Defined in: index.d.ts:502

url中用于 {s} 占位符的子域

***

### tilingSchemeType?

> `optional` **tilingSchemeType**: [`TilingSchemeType`](../enumerations/TilingSchemeType.md)

Defined in: index.d.ts:504

球面影像平铺方案

***

### type

> **type**: [`TEMPLATE`](../enumerations/ProviderType.md#template)

Defined in: index.d.ts:494

***

### url

> **url**: `string`

Defined in: index.d.ts:496

服务 url
