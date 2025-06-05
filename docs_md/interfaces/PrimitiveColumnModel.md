[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveColumnModel

# Interface: PrimitiveColumnModel

Defined in: index.d.ts:2497

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2504

底面高度

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2502

填充颜色

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2147

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### hierarchy

> **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:2500

底面节点

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2150

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### outlineColor?

> `optional` **outlineColor**: `string`

Defined in: index.d.ts:2515

轮廓线颜色

***

### properties?

> `optional` **properties**: `object`

Defined in: index.d.ts:2152

属性字段

#### Index Signature

\[`_`: `string`\]: `unknown`

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`properties`](PrimitiveBase.md#properties)

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2145

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### sideImage?

> `optional` **sideImage**: `string`

Defined in: index.d.ts:2510

侧面贴图

***

### sideRepeate?

> `optional` **sideRepeate**: `number`

Defined in: index.d.ts:2512

侧面重复

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2506

顶面高度

***

### topImage?

> `optional` **topImage**: `string`

Defined in: index.d.ts:2508

顶面贴图

***

### type

> **type**: [`ColumnModel`](../enumerations/PrimitiveType.md#columnmodel)

Defined in: index.d.ts:2498

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
