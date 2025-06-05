[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / WallGraphics

# Interface: WallGraphics

Defined in: index.d.ts:1617

## Properties

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1624

可见范围

***

### growAnimation?

> `optional` **growAnimation**: `null` \| [`PositionsGrowAnimation`](PositionsGrowAnimation.md)

Defined in: index.d.ts:1620

***

### imageMaterial?

> `optional` **imageMaterial**: `object`

Defined in: index.d.ts:1628

填充符号

#### image

> **image**: `string`

填充图片url

#### repeat?

> `optional` **repeat**: [`Vector2`](Vector2.md)

X/Y方向重复填充次数，默认（1，1）

***

### material?

> `optional` **material**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

Defined in: index.d.ts:1626

填充颜色

***

### positions?

> `optional` **positions**: `number`[] \| [`Vector3`](Vector3.md)[] \| [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`Spline`](Spline.md)

Defined in: index.d.ts:1619

位置数组

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1622

显隐

***

### wallHeight?

> `optional` **wallHeight**: `number`

Defined in: index.d.ts:1635

墙高度
