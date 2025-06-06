[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IParticleLayers

# Type Alias: IParticleLayers

> **IParticleLayers** = `object`

Defined in: index.d.ts:4409

粒子特效图层

存放粒子特效对象，可以添加，删除，修改

## Properties

### addParticleLayer()

> **addParticleLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4415

添加图层（已有同名图层添加失败）

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### clearParticleLayer()

> **clearParticleLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4432

清空图层

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### getAllCount()

> **getAllCount**: () => `number`

Defined in: index.d.ts:4501

获取所有对象个数

#### Returns

`number`

***

### getAvailableName()

> **getAvailableName**: (`layerName`, `name`) => `string`

Defined in: index.d.ts:4497

获取指定图层中可用粒子特效名称

#### Parameters

##### layerName

`string`

##### name

`string`

#### Returns

`string`

***

### getParticle()

> **getParticle**: (`layerName`, `id`) => [`Particle`](../interfaces/Particle.md) \| `undefined`

Defined in: index.d.ts:4495

获取指定指定的粒子特效对象

#### Parameters

##### layerName

`string`

图层名

##### id

`string`

粒子特效对象id

#### Returns

[`Particle`](../interfaces/Particle.md) \| `undefined`

***

### getParticleCount()

> **getParticleCount**: (`layerName`) => `number`

Defined in: index.d.ts:4499

获取图层对象个数

#### Parameters

##### layerName

`string`

#### Returns

`number`

***

### getParticleLayerNames()

> **getParticleLayerNames**: () => `string`[]

Defined in: index.d.ts:4449

获取所有粒子图层名

#### Returns

`string`[]

图层名数组

***

### isParticleLayerVisible()

> **isParticleLayerVisible**: (`name`) => `boolean`

Defined in: index.d.ts:4438

图层是否可见

#### Parameters

##### name

`string`

图层名

#### Returns

`boolean`

成功/失败

***

### layerAddParticle()

> **layerAddParticle**: (`name`, `particleName`, `particleUrl`, `param?`) => `Promise`\<`string`\>

Defined in: index.d.ts:4465

图层添加粒子对象

#### Parameters

##### name

`string`

图层名

##### particleName

`string`

粒子id

##### particleUrl

`string`

json路径

##### param?

`Partial`\<[`ParticleParam`](../interfaces/ParticleParam.md)\>

参数

#### Returns

`Promise`\<`string`\>

粒子对象id

***

### layerModifyParticle()

> **layerModifyParticle**: (`name`, `particleId`, `param`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4489

更新图层粒子对象

#### Parameters

##### name

`string`

图层名

##### particleId

`string`

##### param

`Partial`\<[`ParticleParam`](../interfaces/ParticleParam.md)\>

参数

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### layerParticles()

> **layerParticles**: (`name`, `range?`) => [`Particle`](../interfaces/Particle.md)[]

Defined in: index.d.ts:4478

获取图层所有粒子对象

#### Parameters

##### name

`string`

图层名

##### range?

###### end?

`number`

###### start?

`number`

#### Returns

[`Particle`](../interfaces/Particle.md)[]

粒子对象数组

***

### layerRemoveParticle()

> **layerRemoveParticle**: (`name`, `particleId`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4472

图层删除粒子对象

#### Parameters

##### name

`string`

图层名

##### particleId

`string`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### removeAllParticleLayers()

> **removeAllParticleLayers**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:4426

删除所有图层

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### removeParticleLayer()

> **removeParticleLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4421

删除图层

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### renameParticleLayer()

> **renameParticleLayer**: (`oldName`, `newName`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4456

重命名

#### Parameters

##### oldName

`string`

原图层名

##### newName

`string`

新图层名

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### setParticleLayerVisible()

> **setParticleLayerVisible**: (`name`, `isVisible`) => `Promise`\<`void`\>

Defined in: index.d.ts:4444

设置图层是否可见

#### Parameters

##### name

`string`

图层名

##### isVisible

`boolean`

是否可见

#### Returns

`Promise`\<`void`\>
