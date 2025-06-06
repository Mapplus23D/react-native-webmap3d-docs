[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ContourLine

# Interface: ContourLine

Defined in: index.d.ts:1469

## Extends

- [`PolylineGraphicsBase`](PolylineGraphicsBase.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:1442

贴地方式 undefined === ClassificationType.NONE

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`classificationType`](PolylineGraphicsBase.md#classificationtype)

***

### depthFailShow?

> `optional` **depthFailShow**: `boolean`

Defined in: index.d.ts:1450

是否被地形遮挡 默认false被遮挡

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`depthFailShow`](PolylineGraphicsBase.md#depthfailshow)

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1446

可见范围

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`distanceDisplayCondition`](PolylineGraphicsBase.md#distancedisplaycondition)

***

### growAnimation?

> `optional` **growAnimation**: `null` \| [`PositionsGrowAnimation`](PositionsGrowAnimation.md)

Defined in: index.d.ts:1438

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`growAnimation`](PolylineGraphicsBase.md#growanimation)

***

### hMax?

> `optional` **hMax**: `number`

Defined in: index.d.ts:1448

离地高度

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`hMax`](PolylineGraphicsBase.md#hmax)

***

### lineType

> **lineType**: [`contour`](../enumerations/LineType.md#contour)

Defined in: index.d.ts:1470

***

### material?

> `optional` **material**: `object`

Defined in: index.d.ts:1471

#### color?

> `optional` **color**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

内部颜色outlineInnerColor

#### outlineColor?

> `optional` **outlineColor**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

轮廓颜色outlineOuterColor

#### outlineWidth?

> `optional` **outlineWidth**: `number`

轮廓宽outlineOuterWidth

***

### positions?

> `optional` **positions**: `number`[] \| [`Vector3`](Vector3.md)[] \| [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`Spline`](Spline.md)

Defined in: index.d.ts:1437

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`positions`](PolylineGraphicsBase.md#positions)

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1444

显隐

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`show`](PolylineGraphicsBase.md#show)

***

### width?

> `optional` **width**: `number`

Defined in: index.d.ts:1440

线宽

#### Inherited from

[`PolylineGraphicsBase`](PolylineGraphicsBase.md).[`width`](PolylineGraphicsBase.md#width)
