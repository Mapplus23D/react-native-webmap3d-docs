[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Entity

# Interface: Entity

Defined in: index.d.ts:1657

## Properties

### billboard?

> `optional` **billboard**: [`BillboardGraphics`](BillboardGraphics.md)

Defined in: index.d.ts:1664

***

### description?

> `optional` **description**: `string`

Defined in: index.d.ts:1675

***

### id?

> `optional` **id**: `string`

Defined in: index.d.ts:1658

***

### label?

> `optional` **label**: [`LabelGraphics`](LabelGraphics.md)

Defined in: index.d.ts:1663

***

### mediaID?

> `optional` **mediaID**: `object`[]

Defined in: index.d.ts:1679

多媒体对象ID

#### id

> **id**: `number`

#### url

> **url**: `string`

***

### model?

> `optional` **model**: [`ModelGraphics`](ModelGraphics.md)

Defined in: index.d.ts:1665

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:1674

***

### orientation?

> `optional` **orientation**: [`HeadingPitchRoll`](HeadingPitchRoll.md) \| [`PropertyAnimation`](PropertyAnimation.md)\<[`HeadingPitchRoll`](HeadingPitchRoll.md)\>

Defined in: index.d.ts:1660

***

### orientationAlongVelocity?

> `optional` **orientationAlongVelocity**: `boolean`

Defined in: index.d.ts:1662

朝向设置是否沿速度方向，默认否（朝向设置基于正北方向）

***

### parent?

> `optional` **parent**: `string`

Defined in: index.d.ts:1677

父亲的id

***

### point?

> `optional` **point**: [`PointGraphics`](PointGraphics.md)

Defined in: index.d.ts:1666

***

### polygon?

> `optional` **polygon**: [`PolygonGraphics`](../type-aliases/PolygonGraphics.md)

Defined in: index.d.ts:1668

***

### polyline?

> `optional` **polyline**: [`PolylineGraphics`](../type-aliases/PolylineGraphics.md)

Defined in: index.d.ts:1667

***

### position?

> `optional` **position**: [`Vector3`](Vector3.md) \| [`PropertyAnimation`](PropertyAnimation.md)\<[`Vector3`](Vector3.md)\>

Defined in: index.d.ts:1659

***

### rainbowline?

> `optional` **rainbowline**: [`RainbowLine`](RainbowLine.md)

Defined in: index.d.ts:1671

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:1673

!!updateModify时show和其他属性更改互斥，否则导致界面卡死

***

### terrainlabel?

> `optional` **terrainlabel**: [`TerrainLabel`](TerrainLabel.md)

Defined in: index.d.ts:1670

***

### wall?

> `optional` **wall**: [`WallGraphics`](WallGraphics.md)

Defined in: index.d.ts:1669
