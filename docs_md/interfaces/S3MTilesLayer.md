[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / S3MTilesLayer

# Interface: S3MTilesLayer

Defined in: index.d.ts:346

## Extends

- [`S3MTilesLayerBase`](S3MTilesLayerBase.md)

## Properties

### bottomAltitude?

> `optional` **bottomAltitude**: `number`

Defined in: index.d.ts:363

底部高程

***

### iconRelatedTextLayer?

> `optional` **iconRelatedTextLayer**: `string`

Defined in: index.d.ts:361

与图标图层对应的文本图层名

***

### ignoreNormal?

> `optional` **ignoreNormal**: `boolean`

Defined in: index.d.ts:365

是否重新计算法线,默认否

***

### isOverlapDisplayed?

> `optional` **isOverlapDisplayed**: `boolean`

Defined in: index.d.ts:359

是否遮挡

***

### isRGBTOBGR?

> `optional` **isRGBTOBGR**: `boolean`

Defined in: index.d.ts:353

纹理压缩格式为webp的情况下，当纹理红绿反转时，使用颜色通道RGB转BGR

***

### isSceneLayer?

> `optional` **isSceneLayer**: `boolean`

Defined in: index.d.ts:349

***

### lodRangeScale?

> `optional` **lodRangeScale**: `number`

Defined in: index.d.ts:355

图层的LOD层级切换距离缩放系数

***

### name

> **name**: `string`

Defined in: index.d.ts:314

图层名

#### Inherited from

[`S3MTilesLayerBase`](S3MTilesLayerBase.md).[`name`](S3MTilesLayerBase.md#name)

***

### orderIndependentTranslucency?

> `optional` **orderIndependentTranslucency**: `boolean`

Defined in: index.d.ts:357

获取或者设置是否开启透明排序功能（OIT），默认是true

***

### s3mLayerType

> **s3mLayerType**: [`S3M`](../enumerations/S3MLayerType.md#s3m)

Defined in: index.d.ts:347

***

### url

> **url**: `string`

Defined in: index.d.ts:348

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:316

图层是否可见,默认可见

#### Inherited from

[`S3MTilesLayerBase`](S3MTilesLayerBase.md).[`visible`](S3MTilesLayerBase.md#visible)

***

### waterStyle?

> `optional` **waterStyle**: [`S3MWaterStyle`](S3MWaterStyle.md)

Defined in: index.d.ts:351

水面特效
