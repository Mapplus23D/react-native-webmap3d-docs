[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveTerrainLabel

# Interface: PrimitiveTerrainLabel

Defined in: index.d.ts:2249

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### backgroundColor?

> `optional` **backgroundColor**: `string`

Defined in: index.d.ts:2268

背景色，不设置表示没有背景

***

### backgroundPaddingSize?

> `optional` **backgroundPaddingSize**: `number`

Defined in: index.d.ts:2270

背景边框宽度 , 默认0

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2155

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### fillColor?

> `optional` **fillColor**: `string`

Defined in: index.d.ts:2262

文字填充色

***

### font?

> `optional` **font**: `string`

Defined in: index.d.ts:2258

字体样式，默认字体'10px sans-serif'

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2158

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### outlineColor?

> `optional` **outlineColor**: `string`

Defined in: index.d.ts:2264

文字填轮廓色

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2252

位置

***

### properties?

> `optional` **properties**: `object`

Defined in: index.d.ts:2160

属性字段

#### Index Signature

\[`_`: `string`\]: `unknown`

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`properties`](PrimitiveBase.md#properties)

***

### scale?

> `optional` **scale**: `number`

Defined in: index.d.ts:2272

缩放比例，默认1.0

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2153

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### showBackground?

> `optional` **showBackground**: `boolean`

Defined in: index.d.ts:2266

背景显示否，默认false

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:2256

文本走向

***

### style?

> `optional` **style**: [`LabelStyle`](../enumerations/LabelStyle.md)

Defined in: index.d.ts:2260

默认FILL

***

### text

> **text**: `string`

Defined in: index.d.ts:2254

文本内容

***

### type

> **type**: [`TerrainLabel`](../enumerations/PrimitiveType.md#terrainlabel)

Defined in: index.d.ts:2250

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
