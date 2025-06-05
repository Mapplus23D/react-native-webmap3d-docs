[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PolygonGrowAnimation

# Interface: PolygonGrowAnimation

Defined in: index.d.ts:1117

## Extends

- [`AnimatorGeneral`](AnimatorGeneral.md)

## Properties

### directionType?

> `optional` **directionType**: `number`

Defined in: index.d.ts:1131

生长方向
0:西->东
1:东->西
2:北->南
3:南->北

***

### duration

> **duration**: `number`

Defined in: index.d.ts:1099

动画持续时间，单位秒

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`duration`](AnimatorGeneral.md#duration)

***

### growType?

> `optional` **growType**: [`PolygonGrowType`](../enumerations/PolygonGrowType.md)

Defined in: index.d.ts:1124

生长方式

***

### initial?

> `optional` **initial**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:1122

初始点（默认为形心）

***

### isReduce?

> `optional` **isReduce**: `boolean`

Defined in: index.d.ts:1120

缩小

***

### layerName?

> `optional` **layerName**: `string`

Defined in: index.d.ts:1103

矢量图层名

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`layerName`](AnimatorGeneral.md#layername)

***

### name

> **name**: `string`

Defined in: index.d.ts:1095

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`name`](AnimatorGeneral.md#name)

***

### repeatCount?

> `optional` **repeatCount**: `number`

Defined in: index.d.ts:1101

重复次数

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`repeatCount`](AnimatorGeneral.md#repeatcount)

***

### startTime

> **startTime**: `number`

Defined in: index.d.ts:1097

开始时间，单位秒

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`startTime`](AnimatorGeneral.md#starttime)

***

### target

> **target**: `string`

Defined in: index.d.ts:1105

对象 id

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`target`](AnimatorGeneral.md#target)

***

### type

> **type**: [`POLYGONGROW`](../enumerations/AnimatorType.md#polygongrow)

Defined in: index.d.ts:1118
