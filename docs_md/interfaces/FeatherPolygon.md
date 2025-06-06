[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / FeatherPolygon

# Interface: FeatherPolygon

Defined in: index.d.ts:1615

## Extends

- [`PolygonGraphicsBase`](PolygonGraphicsBase.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:1557

贴地方式 undefined === ClassificationType.NONE

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`classificationType`](PolygonGraphicsBase.md#classificationtype)

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1567

可见范围

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`distanceDisplayCondition`](PolygonGraphicsBase.md#distancedisplaycondition)

***

### extrudedHeight?

> `optional` **extrudedHeight**: `number`

Defined in: index.d.ts:1571

白膜高度

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`extrudedHeight`](PolygonGraphicsBase.md#extrudedheight)

***

### fillType

> **fillType**: [`feather`](../enumerations/FillType.md#feather)

Defined in: index.d.ts:1616

***

### height?

> `optional` **height**: `number`

Defined in: index.d.ts:1569

离地高度

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`height`](PolygonGraphicsBase.md#height)

***

### hierarchy?

> `optional` **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:1555

positions

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`hierarchy`](PolygonGraphicsBase.md#hierarchy)

***

### material?

> `optional` **material**: `object`

Defined in: index.d.ts:1618

应用于图像的颜色，默认白色

#### color?

> `optional` **color**: `string`

#### edgeAlpha?

> `optional` **edgeAlpha**: `number`

羽化边缘透明度 区值0～1，默认值0.2

***

### outline?

> `optional` **outline**: `boolean`

Defined in: index.d.ts:1559

是否描边

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`outline`](PolygonGraphicsBase.md#outline)

***

### outlineColor?

> `optional` **outlineColor**: `string`

Defined in: index.d.ts:1563

描边色，默认BLACK	*

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`outlineColor`](PolygonGraphicsBase.md#outlinecolor)

***

### outlineWidth?

> `optional` **outlineWidth**: `number`

Defined in: index.d.ts:1561

描边宽度，默认1.0

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`outlineWidth`](PolygonGraphicsBase.md#outlinewidth)

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1565

显隐

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`show`](PolygonGraphicsBase.md#show)

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:1573

贴图旋转角度

#### Inherited from

[`PolygonGraphicsBase`](PolygonGraphicsBase.md).[`stRotation`](PolygonGraphicsBase.md#strotation)
