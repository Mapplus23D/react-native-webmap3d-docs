[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveContourLine

# Interface: PrimitiveContourLine

Defined in: index.d.ts:2302

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2316

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2309

填充颜色

***

### depthFailShow?

> `optional` **depthFailShow**: `boolean`

Defined in: index.d.ts:2315

是否被地形遮挡 默认false被遮挡

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2135

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

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

Defined in: index.d.ts:2313

轮廓颜色outlineOuterColor

***

### outlineWidth?

> `optional` **outlineWidth**: `number`

Defined in: index.d.ts:2311

轮廓宽outlineOuterWidth

***

### positions

> **positions**: `number`[] \| [`Vector3`](Vector3.md)[] \| [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`Spline`](Spline.md)

Defined in: index.d.ts:2305

节点位置

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

### type

> **type**: [`ContourLine`](../enumerations/PrimitiveType.md#contourline)

Defined in: index.d.ts:2303

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)

***

### width?

> `optional` **width**: `number`

Defined in: index.d.ts:2307

线宽度
