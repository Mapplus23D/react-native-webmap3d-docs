[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveModel

# Interface: PrimitiveModel

Defined in: index.d.ts:2274

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2155

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### heightReference?

> `optional` **heightReference**: [`HeightReference`](../enumerations/HeightReference.md)

Defined in: index.d.ts:2287

相对地形的位置

***

### minimumPixelSize?

> `optional` **minimumPixelSize**: `number`

Defined in: index.d.ts:2285

最小可见像素大小

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2158

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### orientation?

> `optional` **orientation**: [`HeadingPitchRoll`](HeadingPitchRoll.md)

Defined in: index.d.ts:2279

模型姿态

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2277

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

### runAnimations?

> `optional` **runAnimations**: `boolean`

Defined in: index.d.ts:2289

是否播放骨骼动画

***

### scale?

> `optional` **scale**: `number`

Defined in: index.d.ts:2283

缩放

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2153

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### silhouetteColor?

> `optional` **silhouetteColor**: `string`

Defined in: index.d.ts:2292

***

### silhouetteSize?

> `optional` **silhouetteSize**: `number`

Defined in: index.d.ts:2291

模型轮廓

***

### type

> **type**: [`Model`](../enumerations/PrimitiveType.md#model)

Defined in: index.d.ts:2275

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)

***

### uri

> **uri**: `string`

Defined in: index.d.ts:2281

gltf uri
