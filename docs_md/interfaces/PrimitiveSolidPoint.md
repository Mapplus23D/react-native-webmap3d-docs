[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveSolidPoint

# Interface: PrimitiveSolidPoint

Defined in: index.d.ts:2146

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2153

填充颜色

***

### disableDepthTestDistance?

> `optional` **disableDepthTestDistance**: `number`

Defined in: index.d.ts:2159

遮挡深度

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2135

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### heightReference?

> `optional` **heightReference**: [`HeightReference`](../enumerations/HeightReference.md)

Defined in: index.d.ts:2163

相对地形的位置

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2138

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### outlineColor?

> `optional` **outlineColor**: `string`

Defined in: index.d.ts:2155

轮廓颜色，默认黑色

***

### outlineWidth?

> `optional` **outlineWidth**: `number`

Defined in: index.d.ts:2157

轮廓宽度，默认0

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2149

位置

***

### properties?

> `optional` **properties**: `object`

Defined in: index.d.ts:2140

属性字段

#### Index Signature

\[`_`: `string`\]: `unknown`

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`properties`](PrimitiveBase.md#properties)

***

### scaleByDistance?

> `optional` **scaleByDistance**: [`NearFarScalar`](NearFarScalar.md)

Defined in: index.d.ts:2161

随距离缩放参数，默认undefine表示不随距离缩放

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2133

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### size?

> `optional` **size**: `number`

Defined in: index.d.ts:2151

大小pixelSize

***

### type

> **type**: [`SolidPoint`](../enumerations/PrimitiveType.md#solidpoint)

Defined in: index.d.ts:2147

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
