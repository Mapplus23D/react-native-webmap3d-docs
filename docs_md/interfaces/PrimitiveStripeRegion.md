[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveStripeRegion

# Interface: PrimitiveStripeRegion

Defined in: index.d.ts:2415

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2435

底部高度，贴地时无效

***

### clampToGround?

> `optional` **clampToGround**: `boolean`

Defined in: index.d.ts:2431

deprecated 废弃的贴地接口 当classificationType未定义时生效

***

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2429

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2155

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### evenColor?

> `optional` **evenColor**: `string`

Defined in: index.d.ts:2420

偶数条带颜色polygonSymbolStripeEvenColor,默认白色

***

### hierarchy

> **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:2418

面节点

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2158

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### oddColor?

> `optional` **oddColor**: `string`

Defined in: index.d.ts:2422

奇数条带颜色polygonSymbolStripeOddColor,默认黑色

***

### offset?

> `optional` **offset**: `number`

Defined in: index.d.ts:2426

polygonSymbolStripeOffset,默认值0

***

### orientationHorizontal?

> `optional` **orientationHorizontal**: `boolean`

Defined in: index.d.ts:2428

true（默认值）:SuperMap3D.StripeOrientation.HORIZONTAL/false:SuperMap3D.StripeOrientation.VERTICAL

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

### repeat?

> `optional` **repeat**: `number`

Defined in: index.d.ts:2424

polygonSymbolStripeRepeat,默认值1

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2153

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:2437

贴图旋转角度

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2433

水面高度,贴地时无效

***

### type

> **type**: [`StripeRegion`](../enumerations/PrimitiveType.md#striperegion)

Defined in: index.d.ts:2416

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
