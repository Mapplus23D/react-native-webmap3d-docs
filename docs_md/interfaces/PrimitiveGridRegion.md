[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveGridRegion

# Interface: PrimitiveGridRegion

Defined in: index.d.ts:2371

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2391

底部高度，贴地时无效

***

### cellAlpha?

> `optional` **cellAlpha**: `number`

Defined in: index.d.ts:2378

polygonSymbolGridCellAlpha, 0～1.0,defualt 0.1

***

### clampToGround?

> `optional` **clampToGround**: `boolean`

Defined in: index.d.ts:2387

deprecated 废弃的贴地接口 当classificationType未定义时生效

***

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2385

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2376

填充颜色 defualt white

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2135

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### hierarchy

> **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:2374

面节点

***

### lineCount?

> `optional` **lineCount**: `number`

Defined in: index.d.ts:2380

polygonSymbolGridLineCount,defualt 8

***

### lineOffset?

> `optional` **lineOffset**: `number`

Defined in: index.d.ts:2384

polygonSymbolGridLineOffset,0

***

### lineThickness?

> `optional` **lineThickness**: `number`

Defined in: index.d.ts:2382

polygonSymbolGridLineThickness,defualt 1.0

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2138

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

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

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2133

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:2393

贴图旋转角度

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2389

水面高度,贴地时无效

***

### type

> **type**: [`GridRegion`](../enumerations/PrimitiveType.md#gridregion)

Defined in: index.d.ts:2372

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
