[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Spec

# Interface: Spec

Defined in: index.d.ts:5080

## Extends

- `TurboModule`

## Methods

### activate()

> **activate**(`serialNo`): `Promise`\<`boolean`\>

Defined in: index.d.ts:5102

通过序列号激活

#### Parameters

##### serialNo

`string`

序列号

#### Returns

`Promise`\<`boolean`\>

***

### getClientUrl()

> **getClientUrl**(): `string`

Defined in: index.d.ts:5097

获取 client web 服务地址

#### Returns

`string`

***

### getLicenseInfo()

> **getLicenseInfo**(): `Promise`\<`undefined` \| [`ILicenseInfo`](ILicenseInfo.md)\>

Defined in: index.d.ts:5107

获取当前许可信息

#### Returns

`Promise`\<`undefined` \| [`ILicenseInfo`](ILicenseInfo.md)\>

若没有激活，则返回 undefined

***

### getResourceBase()

> **getResourceBase**(): `string`

Defined in: index.d.ts:5093

获取资源地址

#### Returns

`string`

***

### getServiceBase()

> **getServiceBase**(): `string`

Defined in: index.d.ts:5089

获取 client 服务地址

#### Returns

`string`

***

### initEnvironment()

> **initEnvironment**(`clientPort?`): `void`

Defined in: index.d.ts:5085

初始化环境

#### Parameters

##### clientPort?

`number`

client服务运行端口

#### Returns

`void`
