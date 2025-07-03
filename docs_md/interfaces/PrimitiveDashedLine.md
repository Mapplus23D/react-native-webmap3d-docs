[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveDashedLine

# Interface: PrimitiveDashedLine

Defined in: index.d.ts:2286

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2300

***

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:2293

填充颜色

***

### dashLength?

> `optional` **dashLength**: `number`

Defined in: index.d.ts:2297

间隔

***

### depthFailShow?

> `optional` **depthFailShow**: `boolean`

Defined in: index.d.ts:2299

是否被地形遮挡 默认false被遮挡

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2135

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### gapColor?

> `optional` **gapColor**: `string`

Defined in: index.d.ts:2295

背景色

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2138

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### positions

> **positions**: `number`[] \| [`Vector3`](Vector3.md)[] \| [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`Spline`](Spline.md)

Defined in: index.d.ts:2289

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

> **type**: [`DashedLine`](../enumerations/PrimitiveType.md#dashedline)

Defined in: index.d.ts:2287

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)

***

### width?

> `optional` **width**: `number`

Defined in: index.d.ts:2291

线宽度
