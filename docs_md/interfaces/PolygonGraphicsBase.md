[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PolygonGraphicsBase

# Interface: PolygonGraphicsBase

Defined in: index.d.ts:1533

## Extended by

- [`NofillPolygon`](NofillPolygon.md)
- [`SolidPolygon`](SolidPolygon.md)
- [`GriddingPolygon`](GriddingPolygon.md)
- [`StripePolygon`](StripePolygon.md)
- [`ImagePolygon`](ImagePolygon.md)
- [`FeatherPolygon`](FeatherPolygon.md)

## Properties

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:1537

贴地方式 undefined === ClassificationType.NONE

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1547

可见范围

***

### extrudedHeight?

> `optional` **extrudedHeight**: `number`

Defined in: index.d.ts:1551

白膜高度

***

### height?

> `optional` **height**: `number`

Defined in: index.d.ts:1549

离地高度

***

### hierarchy?

> `optional` **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:1535

positions

***

### outline?

> `optional` **outline**: `boolean`

Defined in: index.d.ts:1539

是否描边

***

### outlineColor?

> `optional` **outlineColor**: `string`

Defined in: index.d.ts:1543

描边色，默认BLACK	*

***

### outlineWidth?

> `optional` **outlineWidth**: `number`

Defined in: index.d.ts:1541

描边宽度，默认1.0

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1545

显隐

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:1553

贴图旋转角度
