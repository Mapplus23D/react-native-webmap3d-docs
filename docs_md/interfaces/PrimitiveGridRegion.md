[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveGridRegion

# Interface: PrimitiveGridRegion

Defined in: index.d.ts:2391

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2411

底部高度，贴地时无效

***

### cellAlpha?

> `optional` **cellAlpha**: `number`

Defined in: index.d.ts:2398

polygonSymbolGridCellAlpha, 0～1.0,defualt 0.1

***

### clampToGround?

> `optional` **clampToGround**: `boolean`

Defined in: index.d.ts:2407

deprecated 废弃的贴地接口 当classificationType未定义时生效

***

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2405

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2396

填充颜色 defualt white

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2155

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### hierarchy

> **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:2394

面节点

***

### lineCount?

> `optional` **lineCount**: `number`

Defined in: index.d.ts:2400

polygonSymbolGridLineCount,defualt 8

***

### lineOffset?

> `optional` **lineOffset**: `number`

Defined in: index.d.ts:2404

polygonSymbolGridLineOffset,0

***

### lineThickness?

> `optional` **lineThickness**: `number`

Defined in: index.d.ts:2402

polygonSymbolGridLineThickness,defualt 1.0

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2158

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

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

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2153

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:2413

贴图旋转角度

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2409

水面高度,贴地时无效

***

### type

> **type**: [`GridRegion`](../enumerations/PrimitiveType.md#gridregion)

Defined in: index.d.ts:2392

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
