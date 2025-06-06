[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ScanEffect

# Interface: ScanEffect

Defined in: index.d.ts:1974

## Properties

### color

> **color**: [`ColorNumber`](../type-aliases/ColorNumber.md)

Defined in: index.d.ts:1980

颜色。分别对应 rgba, 默认 [1,1,1,1]

***

### lines

> **lines**: `object`[]

Defined in: index.d.ts:1993

线参数
在 'LINE' 模式下，需要设置 direction。默认按自西向东运动

#### center

> **center**: [`Vector3`](Vector3.md)

线的起点或圈的中心点

#### direction?

> `optional` **direction**: [`Vector3`](Vector3.md)

线运动方向上的点

***

### mode

> **mode**: [`ScanEffectMode`](../enumerations/ScanEffectMode.md)

Defined in: index.d.ts:1978

扫描线模式

***

### period

> **period**: `number`

Defined in: index.d.ts:1986

时长。单位 秒

***

### show

> **show**: `boolean`

Defined in: index.d.ts:1976

是否显示

***

### speed

> **speed**: `number`

Defined in: index.d.ts:1988

速度。单位 米/秒

***

### texture

> **texture**: `string`

Defined in: index.d.ts:1982

纹理地址

***

### width

> **width**: `number`

Defined in: index.d.ts:1984

线宽。单位 米
