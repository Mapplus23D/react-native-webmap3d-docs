[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Entity

# Interface: Entity

Defined in: index.d.ts:1637

## Properties

### billboard?

> `optional` **billboard**: [`BillboardGraphics`](BillboardGraphics.md)

Defined in: index.d.ts:1644

***

### description?

> `optional` **description**: `string`

Defined in: index.d.ts:1655

***

### id?

> `optional` **id**: `string`

Defined in: index.d.ts:1638

***

### label?

> `optional` **label**: [`LabelGraphics`](LabelGraphics.md)

Defined in: index.d.ts:1643

***

### mediaID?

> `optional` **mediaID**: `object`[]

Defined in: index.d.ts:1659

多媒体对象ID

#### id

> **id**: `number`

#### url

> **url**: `string`

***

### model?

> `optional` **model**: [`ModelGraphics`](ModelGraphics.md)

Defined in: index.d.ts:1645

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:1654

***

### orientation?

> `optional` **orientation**: [`HeadingPitchRoll`](HeadingPitchRoll.md) \| [`PropertyAnimation`](PropertyAnimation.md)\<[`HeadingPitchRoll`](HeadingPitchRoll.md)\>

Defined in: index.d.ts:1640

***

### orientationAlongVelocity?

> `optional` **orientationAlongVelocity**: `boolean`

Defined in: index.d.ts:1642

朝向设置是否沿速度方向，默认否（朝向设置基于正北方向）

***

### parent?

> `optional` **parent**: `string`

Defined in: index.d.ts:1657

父亲的id

***

### point?

> `optional` **point**: [`PointGraphics`](PointGraphics.md)

Defined in: index.d.ts:1646

***

### polygon?

> `optional` **polygon**: [`PolygonGraphics`](../type-aliases/PolygonGraphics.md)

Defined in: index.d.ts:1648

***

### polyline?

> `optional` **polyline**: [`PolylineGraphics`](../type-aliases/PolylineGraphics.md)

Defined in: index.d.ts:1647

***

### position?

> `optional` **position**: [`Vector3`](Vector3.md) \| [`PropertyAnimation`](PropertyAnimation.md)\<[`Vector3`](Vector3.md)\>

Defined in: index.d.ts:1639

***

### rainbowline?

> `optional` **rainbowline**: [`RainbowLine`](RainbowLine.md)

Defined in: index.d.ts:1651

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:1653

!!updateModify时show和其他属性更改互斥，否则导致界面卡死

***

### terrainlabel?

> `optional` **terrainlabel**: [`TerrainLabel`](TerrainLabel.md)

Defined in: index.d.ts:1650

***

### wall?

> `optional` **wall**: [`WallGraphics`](WallGraphics.md)

Defined in: index.d.ts:1649
