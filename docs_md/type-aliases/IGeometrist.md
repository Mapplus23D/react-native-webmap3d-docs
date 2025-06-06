[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IGeometrist

# Type Alias: IGeometrist

> **IGeometrist** = `object`

Defined in: index.d.ts:4262

矢量数据管理

点串转换为箭头线、矩形、圆

根据两点计算朝向

重采样，相交，合并，平滑，擦出，样条

## Properties

### arrowWithLineSegment()

> **arrowWithLineSegment**: (`start`, `end`, `lineWidth?`, `lineLength?`, `byPercent?`) => `number`[]

Defined in: index.d.ts:4286

由直线段生成箭头

#### Parameters

##### start

[`Vector3`](../interfaces/Vector3.md)

线段起点

##### end

[`Vector3`](../interfaces/Vector3.md)

线段终点

##### lineWidth?

`number`

箭柄线宽 默认值为0.25（默认基于长度百分比）

##### lineLength?

`number`

箭柄线长 默认值为0.7（默认基于长度百分比）

##### byPercent?

`boolean`

箭柄线宽/长设置是否基于百分比（false表示值为绝对长度-单位米）

#### Returns

`number`[]

箭头点串

***

### headingCompute()

> **headingCompute**: (`center`, `point`) => `number`

Defined in: index.d.ts:4320

heading

#### Parameters

##### center

[`Vector3`](../interfaces/Vector3.md)

##### point

[`Vector3`](../interfaces/Vector3.md)

#### Returns

`number`

heading

***

### pointsOfCatmullRomSpline()

> **pointsOfCatmullRomSpline**: (`controlPoints`, `count`) => `number`[]

Defined in: index.d.ts:4269

Catmull-ROM样条

#### Parameters

##### controlPoints

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

##### count

`number`

插值点个数

#### Returns

`number`[]

插值点串

***

### pointsOfCircle()

> **pointsOfCircle**: (`center`, `radius`, `count?`) => `number`[]

Defined in: index.d.ts:4294

圆形

#### Parameters

##### center

圆心点

[`Vector3`](../interfaces/Vector3.md) | \[`number`, `number`, `number`, `...number[]`\]

##### radius

`number`

半径（米）

##### count?

`number`

分片数量，默认72

#### Returns

`number`[]

圆弧点串（高度z与圆心一致）

***

### pointsOfHermiteSpline()

> **pointsOfHermiteSpline**: (`controlPoints`, `count`) => `number`[]

Defined in: index.d.ts:4276

埃尔米特样条

#### Parameters

##### controlPoints

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

##### count

`number`

插值点个数

#### Returns

`number`[]

插值点串

***

### pointsOfRectangle()

> **pointsOfRectangle**: (`center`, `w`, `h`, `heading`) => `number`[]

Defined in: index.d.ts:4308

矩形

#### Parameters

##### center

矩形中心点

[`Vector3`](../interfaces/Vector3.md) | \[`number`, `number`, `number`, `...number[]`\]

##### w

`number`

宽（米）

##### h

`number`

高（米）

##### heading

`number`

朝向

#### Returns

`number`[]

矩形

***

### polygonErase()

> **polygonErase**: (`erase`, `srcPolygon`) => [`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)[]

Defined in: index.d.ts:4341

面擦除

#### Parameters

##### erase

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

##### srcPolygon

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

#### Returns

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)[]

***

### polygonIntersect()

> **polygonIntersect**: (`polygon1`, `polygon2`) => [`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)[]

Defined in: index.d.ts:4327

面相交

#### Parameters

##### polygon1

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

##### polygon2

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

#### Returns

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)[]

***

### polygonUnion()

> **polygonUnion**: (`polygon1`, `polygon2`) => [`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)[]

Defined in: index.d.ts:4334

面合并

#### Parameters

##### polygon1

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

##### polygon2

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

#### Returns

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)[]

***

### resampleLine()

> **resampleLine**: (`line`, `tolerance?`) => `number`[]

Defined in: index.d.ts:4348

线重采样

#### Parameters

##### line

`number`[] | [`Vector3`](../interfaces/Vector3.md)[]

##### tolerance?

`number`

指定的重采样容限 默认1e-6

#### Returns

`number`[]

***

### resamplePolygon()

> **resamplePolygon**: (`polygon`, `tolerance?`) => [`PolygonHierarchy`](../interfaces/PolygonHierarchy.md) \| `undefined`

Defined in: index.d.ts:4355

面重采样

#### Parameters

##### polygon

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

##### tolerance?

`number`

指定的重采样容限 默认1e-6

#### Returns

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md) \| `undefined`

***

### smoothLine()

> **smoothLine**: (`line`, `smoothness?`) => `number`[]

Defined in: index.d.ts:4362

线平滑

#### Parameters

##### line

`number`[] | [`Vector3`](../interfaces/Vector3.md)[]

##### smoothness?

`number`

光滑系数有效范围为大于等于2，设置为小于2的值会抛出异常，光滑系数越大，线对象节点数越多，也就越光滑。 建议取值范围为[2,10]。默认2

#### Returns

`number`[]

***

### smoothPolygon()

> **smoothPolygon**: (`polygon`, `smoothness?`) => [`PolygonHierarchy`](../interfaces/PolygonHierarchy.md) \| `undefined`

Defined in: index.d.ts:4369

面平滑

#### Parameters

##### polygon

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md)

##### smoothness?

`number`

光滑系数有效范围为大于等于2，设置为小于2的值会抛出异常，光滑系数越大，线对象节点数越多，也就越光滑。 建议取值范围为[2,10]。默认2

#### Returns

[`PolygonHierarchy`](../interfaces/PolygonHierarchy.md) \| `undefined`
