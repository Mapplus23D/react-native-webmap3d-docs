[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveSolidRegion

# Interface: PrimitiveSolidRegion

Defined in: index.d.ts:2367

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2379

底部高度，贴地时无效

***

### clampToGround?

> `optional` **clampToGround**: `boolean`

Defined in: index.d.ts:2375

deprecated 废弃的贴地接口 当classificationType未定义时生效

***

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2373

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2372

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

Defined in: index.d.ts:2370

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

Defined in: index.d.ts:2381

贴图旋转角度

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2377

水面高度,贴地时无效

***

### type

> **type**: [`SolidRegion`](../enumerations/PrimitiveType.md#solidregion)

Defined in: index.d.ts:2368

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
