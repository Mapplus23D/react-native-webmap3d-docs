[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveFeatherRegion

# Interface: PrimitiveFeatherRegion

Defined in: index.d.ts:2479

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2493

底部高度，贴地时无效

***

### clampToGround?

> `optional` **clampToGround**: `boolean`

Defined in: index.d.ts:2489

deprecated 废弃的贴地接口 当classificationType未定义时生效

***

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2487

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2484

面底色

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2147

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### edgeAlpha?

> `optional` **edgeAlpha**: `number`

Defined in: index.d.ts:2486

羽化边缘透明度 区值0～1，默认值0.2

***

### hierarchy

> **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:2482

面节点

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2150

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

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

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:2495

贴图旋转角度

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2491

水面高度,贴地时无效

***

### type

> **type**: [`FeatherRegion`](../enumerations/PrimitiveType.md#featherregion)

Defined in: index.d.ts:2480

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
