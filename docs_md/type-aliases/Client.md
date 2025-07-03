[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Client

# Type Alias: Client

> **Client** = *typeof* `enums` & `object` & [`ClientModule`](../interfaces/ClientModule.md)

Defined in: index.d.ts:4935

## Type declaration

### addListener()

> **addListener**: \<`key`\>(`event`, `listener`) => `void`

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

#### Returns

`Promise`\<`void`\>

### handleMessage()

> **handleMessage**: (`messageStr`) => `void`

#### Parameters

##### messageStr

`string`

#### Returns

`void`

### init()

> **init**: (`container?`, `option?`) => `Promise`\<`void`\>

#### Parameters

##### container?

`string`

##### option?

`Partial`\<[`ServerOption`](../interfaces/ServerOption.md)\> & `Partial`\<[`ClientOption`](../interfaces/ClientOption.md)\>

#### Returns

`Promise`\<`void`\>

### removeListener()

> **removeListener**: \<`key`\>(`event`, `listener?`) => `void`

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
