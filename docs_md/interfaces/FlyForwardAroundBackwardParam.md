[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / FlyForwardAroundBackwardParam

# Interface: FlyForwardAroundBackwardParam

Defined in: index.d.ts:1011

## Properties

### backwardAfterAround?

> `optional` **backwardAfterAround**: `boolean`

Defined in: index.d.ts:1025

是否需要拉远 , 默认不拉远

***

### focus

> **focus**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:1017

焦点

***

### forwardDistanceRatio?

> `optional` **forwardDistanceRatio**: `number`

Defined in: index.d.ts:1023

推进比率(推进距离占起点焦点间距比率)，默认0.8

***

### heading?

> `optional` **heading**: `number`

Defined in: index.d.ts:1027

站点朝向角度

***

### presetType

> **presetType**: [`forward_around_backward`](../enumerations/FlyPresetType.md#forward_around_backward)

Defined in: index.d.ts:1013

预制类型

***

### roundDegrees?

> `optional` **roundDegrees**: `number`

Defined in: index.d.ts:1019

环绕角度，正数代表逆时针旋转，负数代表顺时针旋转,默认-120

***

### roundTimeRadio?

> `optional` **roundTimeRadio**: `number`

Defined in: index.d.ts:1021

环绕时间占比

***

### start

> **start**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:1015

飞行起点

***

### tilt?

> `optional` **tilt**: `number`

Defined in: index.d.ts:1029

站点俯仰角度
