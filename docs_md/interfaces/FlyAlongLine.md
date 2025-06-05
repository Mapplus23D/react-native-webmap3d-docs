[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / FlyAlongLine

# Interface: FlyAlongLine

Defined in: index.d.ts:967

沿线贴地飞行参数

## Properties

### clampToCround?

> `optional` **clampToCround**: `boolean`

Defined in: index.d.ts:987

是否贴地线

***

### duration

> **duration**: `number`

Defined in: index.d.ts:975

到下一个站点的时间

***

### headingPitchRange?

> `optional` **headingPitchRange**: `object`

Defined in: index.d.ts:989

相机跟随参数

#### heading?

> `optional` **heading**: `number`

#### pitch?

> `optional` **pitch**: `number`

#### range?

> `optional` **range**: `number`

***

### line

> **line**: \[`number`, `number`, `number`, `...number[]`\]

Defined in: index.d.ts:980

经纬度高度点串数组
至少三个点且个数为3的倍数,格式： [经度，纬度，高度，经度，纬度，高度...]

***

### lineFlyTime

> **lineFlyTime**: `number`

Defined in: index.d.ts:973

飞行时间

***

### stopName

> **stopName**: `string`

Defined in: index.d.ts:969

站点名

***

### trackingLineParam?

> `optional` **trackingLineParam**: `object`

Defined in: index.d.ts:997

飞行时轨迹（默认不显示）

#### color

> **color**: `string`

#### width

> **width**: `number`

***

### turnDuration?

> `optional` **turnDuration**: `number`

Defined in: index.d.ts:995

转向时间(转180度所需时间) 默认9s

***

### waitTime

> **waitTime**: `number`

Defined in: index.d.ts:971

飞行前停留的时间
