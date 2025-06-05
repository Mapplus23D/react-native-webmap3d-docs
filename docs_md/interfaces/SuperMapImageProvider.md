[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / SuperMapImageProvider

# Interface: SuperMapImageProvider

Defined in: index.d.ts:437

SuperMap 影像图层参数

## Properties

### cacheKey?

> `optional` **cacheKey**: `string`

Defined in: index.d.ts:452

影像的三维缓存密钥。

***

### credential?

> `optional` **credential**: [`SuperMapCredential`](SuperMapCredential.md)

Defined in: index.d.ts:454

认证信息

***

### maximumLevel?

> `optional` **maximumLevel**: `number`

Defined in: index.d.ts:446

最大层级 默认 20

***

### minimumLevel?

> `optional` **minimumLevel**: `number`

Defined in: index.d.ts:444

最小层级 默认 0

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:442

影像图层名称

***

### tileFormat?

> `optional` **tileFormat**: `string`

Defined in: index.d.ts:450

影像图片格式，默认为png。

***

### tilingSchemeType?

> `optional` **tilingSchemeType**: [`TilingSchemeType`](../enumerations/TilingSchemeType.md)

Defined in: index.d.ts:456

球面影像平铺方案

***

### transparent?

> `optional` **transparent**: `boolean`

Defined in: index.d.ts:448

设置请求的地图服务的参数是否为transparent。 默认 true

***

### type

> **type**: [`SUPERMAP`](../enumerations/ProviderType.md#supermap)

Defined in: index.d.ts:438

***

### url

> **url**: `string`

Defined in: index.d.ts:440

服务 url
