[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PolylineGraphicsBase

# Interface: PolylineGraphicsBase

Defined in: index.d.ts:1416

## Extended by

- [`SolidLine`](SolidLine.md)
- [`DashedLine`](DashedLine.md)
- [`ContourLine`](ContourLine.md)
- [`ArrowLine`](ArrowLine.md)
- [`HaloLine`](HaloLine.md)
- [`WakeLine`](WakeLine.md)
- [`DynamicLine`](DynamicLine.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:1422

贴地方式 undefined === ClassificationType.NONE

***

### depthFailShow?

> `optional` **depthFailShow**: `boolean`

Defined in: index.d.ts:1430

是否被地形遮挡 默认false被遮挡

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1426

可见范围

***

### growAnimation?

> `optional` **growAnimation**: `null` \| [`PositionsGrowAnimation`](PositionsGrowAnimation.md)

Defined in: index.d.ts:1418

***

### hMax?

> `optional` **hMax**: `number`

Defined in: index.d.ts:1428

离地高度

***

### positions?

> `optional` **positions**: `number`[] \| [`Vector3`](Vector3.md)[] \| [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`Spline`](Spline.md)

Defined in: index.d.ts:1417

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1424

显隐

***

### width?

> `optional` **width**: `number`

Defined in: index.d.ts:1420

线宽
