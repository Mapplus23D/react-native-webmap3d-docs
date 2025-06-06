[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IMeasure

# Type Alias: IMeasure

> **IMeasure** = `object`

Defined in: index.d.ts:2867

量算

可测量距离，面积，高度

可显示标签，等高线

## Properties

### addPoint()

> **addPoint**: (`position`) => `Promise`\<`void`\>

Defined in: index.d.ts:2895

添加测量点

#### Parameters

##### position

[`Vector3`](../interfaces/Vector3.md)

测量点 经纬度类型的三维点

#### Returns

`Promise`\<`void`\>

Promise<void>

***

### beginMeasure()

> **beginMeasure**: (`measureTypeParam`, `Param`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2874

开始测量

#### Parameters

##### measureTypeParam

[`MeasureType`](../enumerations/MeasureType.md)

测量类型

##### Param

[`InitMeasureParam`](../interfaces/InitMeasureParam.md)

测量参数

#### Returns

`Promise`\<`boolean`\>

boolean 是否执行完成

***

### clear()

> **clear**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:2889

清空所有测量

#### Returns

`Promise`\<`boolean`\>

Promise<void>

***

### completed()

> **completed**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:2884

提交测量 （结束当前测量，可开始下一测量）

#### Returns

`Promise`\<`boolean`\>

Promise<void>

***

### getPreviewMeasureResult()

> **getPreviewMeasureResult**: () => `Promise`\<`number` \| [`MeasureResultDVHparam`](../interfaces/MeasureResultDVHparam.md)\>

Defined in: index.d.ts:2907

获取预览的量算结果， 调用之前需要先调用updatePreviewPoint方法

#### Returns

`Promise`\<`number` \| [`MeasureResultDVHparam`](../interfaces/MeasureResultDVHparam.md)\>

预览量算结果，成功线面返回数字，高度返回对象，失败返回-1

***

### undo()

> **undo**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:2879

撤销当前测量（已提交的测量，不可撤销)

#### Returns

`Promise`\<`boolean`\>

Promise<void>

***

### updatePreviewPoint()

> **updatePreviewPoint**: (`position`, `isShowPreview`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2902

添加预览点

#### Parameters

##### position

预览点 经纬度类型的三维点

[`Vector3`](../interfaces/Vector3.md) | [`Vector2`](../interfaces/Vector2.md)

##### isShowPreview

`boolean`

是否显示预览效果

#### Returns

`Promise`\<`boolean`\>
