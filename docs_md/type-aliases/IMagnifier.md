[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IMagnifier

# Type Alias: IMagnifier

> **IMagnifier** = `object`

Defined in: index.d.ts:4366

放大镜组件

## Properties

### isShow()

> **isShow**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:4371

放大镜是否显示

#### Returns

`Promise`\<`boolean`\>

显示/隐藏

***

### setShow()

> **setShow**: (`isShow`) => `Promise`\<`void`\>

Defined in: index.d.ts:4377

放大镜显隐

#### Parameters

##### isShow

`boolean`

显示/隐藏

#### Returns

`Promise`\<`void`\>

***

### update()

> **update**: (`option?`) => `Promise`\<`void`\>

Defined in: index.d.ts:4386

更新放大镜（option===undefine时采用上次设置的参数）

#### Parameters

##### option?

###### ancher?

[`Vector2`](../interfaces/Vector2.md)

###### focus?

[`Vector2`](../interfaces/Vector2.md)

###### radius?

`number`

###### scale?

`number`

#### Returns

`Promise`\<`void`\>

成功/失败
