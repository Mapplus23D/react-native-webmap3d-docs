[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / SuperMapTerrainProvider

# Interface: SuperMapTerrainProvider

Defined in: index.d.ts:409

SuperMap 地形图层参数

## Properties

### credential?

> `optional` **credential**: [`SuperMapCredential`](SuperMapCredential.md)

Defined in: index.d.ts:422

认证信息

***

### invisibility?

> `optional` **invisibility**: `boolean`

Defined in: index.d.ts:416

受否开启显影功能，开始后才能设置地形显影, 默认 false

***

### isSct?

> `optional` **isSct**: `boolean`

Defined in: index.d.ts:414

是否为iServer发布的TIN地形服务,stk地形设置为false。 默认 true

***

### requestVertexNormals?

> `optional` **requestVertexNormals**: `boolean`

Defined in: index.d.ts:420

指示客户端是否应该从服务器请求额外的照明信息，如果可用，以每个顶点法线的形式.

***

### requestWaterMask?

> `optional` **requestWaterMask**: `boolean`

Defined in: index.d.ts:418

指示客户端是否应该向服务器请求每个瓦片水掩码(如果可用的话)

***

### type

> **type**: [`SUPERMAP`](../enumerations/ProviderType.md#supermap)

Defined in: index.d.ts:410

***

### url

> **url**: `string`

Defined in: index.d.ts:412

SuperMap terrain server的url.
