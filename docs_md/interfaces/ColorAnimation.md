[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ColorAnimation

# Interface: ColorAnimation

Defined in: index.d.ts:1152

## Extends

- [`AnimatorGeneral`](AnimatorGeneral.md)

## Properties

### color

> **color**: \[`string`, `string`, `...string[]`\]

Defined in: index.d.ts:1158

颜色。至少两个
支持 css 风格的颜色字符串: #rgb, #rgba, #rrggbb, #rrggbbaa, rgb(), rgba(), hsl(), hsla()

***

### duration

> **duration**: `number`

Defined in: index.d.ts:1107

动画持续时间，单位秒

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`duration`](AnimatorGeneral.md#duration)

***

### interval

> **interval**: `number`

Defined in: index.d.ts:1164

切换一次颜色的间隔时间，单位 秒

***

### layerName?

> `optional` **layerName**: `string`

Defined in: index.d.ts:1111

矢量图层名

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`layerName`](AnimatorGeneral.md#layername)

***

### lerp?

> `optional` **lerp**: `boolean`

Defined in: index.d.ts:1166

颜色之间是否有过渡, 默认 false

***

### name

> **name**: `string`

Defined in: index.d.ts:1103

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`name`](AnimatorGeneral.md#name)

***

### repeatCount?

> `optional` **repeatCount**: `number`

Defined in: index.d.ts:1109

重复次数

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`repeatCount`](AnimatorGeneral.md#repeatcount)

***

### startTime

> **startTime**: `number`

Defined in: index.d.ts:1105

开始时间，单位秒

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`startTime`](AnimatorGeneral.md#starttime)

***

### target

> **target**: `string`

Defined in: index.d.ts:1113

对象 id

#### Inherited from

[`AnimatorGeneral`](AnimatorGeneral.md).[`target`](AnimatorGeneral.md#target)

***

### type

> **type**: [`COLOR`](../enumerations/AnimatorType.md#color)

Defined in: index.d.ts:1153
