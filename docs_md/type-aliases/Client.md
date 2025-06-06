[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Client

# Type Alias: Client

> **Client** = *typeof* `enums` & `object` & [`ClientModule`](../interfaces/ClientModule.md)

Defined in: index.d.ts:5022

## Type declaration

### addListener()

> **addListener**: \<`key`\>(`event`, `listener`) => `void`

添加监听

#### Type Parameters

##### key

`key` *extends* keyof [`SuperMap3DEvent`](../interfaces/SuperMap3DEvent.md)

#### Parameters

##### event

`key`

##### listener

(`param`) => `void`

#### Returns

`void`

### destroy()

> **destroy**: () => `Promise`\<`void`\>

销毁client

#### Returns

`Promise`\<`void`\>

### handleMessage()

> **handleMessage**: (`messageStr`) => `void`

webview与js通信

#### Parameters

##### messageStr

`string`

#### Returns

`void`

### init()

> **init**: (`container?`, `option?`) => `Promise`\<`void`\>

初始化 client 对象

与 webview 中的 webmap3d sdk 建立联系

初始化完成后才可以调用 sdk 中的各个方法

#### Parameters

##### container?

`string`

##### option?

`Partial`\<[`ServerOption`](../interfaces/ServerOption.md)\> & `Partial`\<[`ClientOption`](../interfaces/ClientOption.md)\>

#### Returns

`Promise`\<`void`\>

### removeListener()

> **removeListener**: \<`key`\>(`event`, `listener?`) => `void`

移除监听

#### Type Parameters

##### key

`key` *extends* keyof [`SuperMap3DEvent`](../interfaces/SuperMap3DEvent.md)

#### Parameters

##### event

`key`

##### listener?

(`param`) => `void`

#### Returns

`void`
