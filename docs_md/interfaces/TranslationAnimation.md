[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / TranslationAnimation

# Interface: TranslationAnimation

Defined in: index.d.ts:1121

## Extends

- [`AnimatorGeneral`](AnimatorGeneral.md)

## Properties

### duration

> **duration**: `number`

Defined in: index.d.ts:1087

动画持续时间，单位秒

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`duration`](AnimatorGeneral.md#duration)

***

### isReverse?

> `optional` **isReverse**: `boolean`

Defined in: index.d.ts:1130

反向位移，默认false

***

### layerName?

> `optional` **layerName**: `string`

Defined in: index.d.ts:1091

矢量图层名

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`layerName`](AnimatorGeneral.md#layername)

***

### name

> **name**: `string`

Defined in: index.d.ts:1083

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`name`](AnimatorGeneral.md#name)

***

### repeatCount?

> `optional` **repeatCount**: `number`

Defined in: index.d.ts:1089

重复次数

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`repeatCount`](AnimatorGeneral.md#repeatcount)

***

### startTime

> **startTime**: `number`

Defined in: index.d.ts:1085

开始时间，单位秒

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`startTime`](AnimatorGeneral.md#starttime)

***

### target

> **target**: `string`

Defined in: index.d.ts:1093

对象 id

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`target`](AnimatorGeneral.md#target)

***

### translations

> **translations**: `number`[]

Defined in: index.d.ts:1128

经纬度高度点串数组

至少三个点且个数为3的倍数,格式： [经度，纬度，高度，经度，纬度，高度...]

***

### type

> **type**: [`TRANSLATION`](../enumerations/AnimatorType.md#translation)

Defined in: index.d.ts:1122
