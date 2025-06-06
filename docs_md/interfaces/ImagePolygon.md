[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ImagePolygon

# Interface: ImagePolygon

Defined in: index.d.ts:1602

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

> **fillType**: [`image`](../enumerations/FillType.md#image)

Defined in: index.d.ts:1603

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

Defined in: index.d.ts:1604

#### color?

> `optional` **color**: `string`

应用于图像的颜色，默认白色

#### image?

> `optional` **image**: `string`

填充图片url

#### repeat?

> `optional` **repeat**: [`Vector2`](Vector2.md)

X/Y方向重复填充次数，默认（1，1）

#### transparent?

> `optional` **transparent**: `boolean`

图片是否应用透明，默认false

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
