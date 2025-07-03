[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IScanEffect

# Type Alias: IScanEffect

> **IScanEffect** = `object`

Defined in: index.d.ts:4629

扫描线效果
使用时需要开启深度检测

## Properties

### addCenter()

> **addCenter**: (`point`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4645

添加起点或中心点

#### Parameters

##### point

[`Vector3`](../interfaces/Vector3.md)

#### Returns

`Promise`\<`boolean`\>

是否添加成功

***

### getCount()

> **getCount**: () => `Promise`\<`number`\>

Defined in: index.d.ts:4639

获取扫描线个数

#### Returns

`Promise`\<`number`\>

扫描线个数

***

### getEffect()

> **getEffect**: () => `Promise`\<[`ScanEffect`](../interfaces/ScanEffect.md)\>

Defined in: index.d.ts:4698

获取当前扫描线参数

#### Returns

`Promise`\<[`ScanEffect`](../interfaces/ScanEffect.md)\>

扫描线参数

***

### remove()

> **remove**: (`index`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4657

移除指定位置的扫描线

#### Parameters

##### index

`number`

要移除的扫描线index

#### Returns

`Promise`\<`boolean`\>

是否移除成功

***

### reset()

> **reset**: () => `Promise`\<`void`\>

Defined in: index.d.ts:4700

重置扫描线参数

#### Returns

`Promise`\<`void`\>

***

### setColor()

> **setColor**: (`color`) => `Promise`\<`void`\>

Defined in: index.d.ts:4668

设置线颜色

#### Parameters

##### color

\[`number`, `number`, `number`, `number`\]

颜色。分别对应 rgba, 默认 [1,1,1,1]

#### Returns

`Promise`\<`void`\>

***

### setEffectMode()

> **setEffectMode**: (`mode`) => `Promise`\<`void`\>

Defined in: index.d.ts:4662

设置扫描线模式

#### Parameters

##### mode

[`ScanEffectMode`](../enumerations/ScanEffectMode.md)

扫描线模式

#### Returns

`Promise`\<`void`\>

***

### setMoveDirection()

> **setMoveDirection**: (`direction`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4651

设置线模式下最后一条线的运动方向上的一个点

#### Parameters

##### direction

[`Vector3`](../interfaces/Vector3.md)

运动方向上的点

#### Returns

`Promise`\<`boolean`\>

是否设置成功

***

### setPeriod()

> **setPeriod**: (`period`) => `Promise`\<`void`\>

Defined in: index.d.ts:4688

设置扫描一次的时长

#### Parameters

##### period

`number`

时长。单位 秒

#### Returns

`Promise`\<`void`\>

***

### setSpeed()

> **setSpeed**: (`speed`) => `Promise`\<`void`\>

Defined in: index.d.ts:4693

设置扫描速度

#### Parameters

##### speed

`number`

速度。单位 米/秒

#### Returns

`Promise`\<`void`\>

***

### setTextureUrl()

> **setTextureUrl**: (`url`) => `Promise`\<`void`\>

Defined in: index.d.ts:4678

设置扫描线纹理

#### Parameters

##### url

`string`

纹理地址

#### Returns

`Promise`\<`void`\>

***

### setWidth()

> **setWidth**: (`width`) => `Promise`\<`void`\>

Defined in: index.d.ts:4683

设置线宽

#### Parameters

##### width

`number`

线宽。单位 米

#### Returns

`Promise`\<`void`\>

***

### show()

> **show**: (`show`) => `Promise`\<`void`\>

Defined in: index.d.ts:4634

设置扫描线显隐

#### Parameters

##### show

`boolean`

是否显示

#### Returns

`Promise`\<`void`\>
