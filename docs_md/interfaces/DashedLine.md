[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / DashedLine

# Interface: DashedLine

Defined in: index.d.ts:1438

## Extends

- [`PolylineGraphicsBase`](PolylineGraphicsBase.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:1422

贴地方式 undefined === ClassificationType.NONE

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`classificationType`](PolylineGraphicsBase.md#classificationtype)

***

### depthFailShow?

> `optional` **depthFailShow**: `boolean`

Defined in: index.d.ts:1430

是否被地形遮挡 默认false被遮挡

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`depthFailShow`](PolylineGraphicsBase.md#depthfailshow)

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1426

可见范围

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`distanceDisplayCondition`](PolylineGraphicsBase.md#distancedisplaycondition)

***

### growAnimation?

> `optional` **growAnimation**: `null` \| [`PositionsGrowAnimation`](PositionsGrowAnimation.md)

Defined in: index.d.ts:1418

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`growAnimation`](PolylineGraphicsBase.md#growanimation)

***

### hMax?

> `optional` **hMax**: `number`

Defined in: index.d.ts:1428

离地高度

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`hMax`](PolylineGraphicsBase.md#hmax)

***

### lineType

> **lineType**: [`dashed`](../enumerations/LineType.md#dashed)

Defined in: index.d.ts:1439

***

### material?

> `optional` **material**: `object`

Defined in: index.d.ts:1440

#### color?

> `optional` **color**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

前景色

#### dashLength?

> `optional` **dashLength**: `number`

间隔

#### gapColor?

> `optional` **gapColor**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

背景色

***

### positions?

> `optional` **positions**: `number`[] \| [`Vector3`](Vector3.md)[] \| [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`Spline`](Spline.md)

Defined in: index.d.ts:1417

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`positions`](PolylineGraphicsBase.md#positions)

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1424

显隐

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`show`](PolylineGraphicsBase.md#show)

***

### width?

> `optional` **width**: `number`

Defined in: index.d.ts:1420

线宽

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`width`](PolylineGraphicsBase.md#width)
