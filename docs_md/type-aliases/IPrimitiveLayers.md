[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IPrimitiveLayers

# Type Alias: IPrimitiveLayers

> **IPrimitiveLayers** = `object`

Defined in: index.d.ts:4502

矢量图层

拥有统一风格，每个图层只能存放一种类型的对象（点、线、面）

拥有属性表，每个对象都能存放不同的信息

## Properties

### addLayerPrimitivePropertyInfo()

> **addLayerPrimitivePropertyInfo**: (`layerName`, `info`) => `boolean`

Defined in: index.d.ts:4602

添加一条属性

#### Parameters

##### layerName

`string`

##### info

[`PropertyInfo`](../interfaces/PropertyInfo.md)

#### Returns

`boolean`

同名存在添加失败

***

### addPrimitiveLayer()

> **addPrimitiveLayer**: (`name`, `uniform?`, `propertyInfos?`, `uniformPrimitiveDataPropertyMap?`) => `boolean`

Defined in: index.d.ts:4511

添加图层（已有同名图层添加失败）

#### Parameters

##### name

`string`

图层名

##### uniform?

[`PrimitiveUniform`](PrimitiveUniform.md)

统一风格 默认undefined

##### propertyInfos?

[`PropertyInfo`](../interfaces/PropertyInfo.md)[]

属性表

##### uniformPrimitiveDataPropertyMap?

[`UniformPrimitiveDataPropertyMap`](UniformPrimitiveDataPropertyMap.md)

#### Returns

`boolean`

成功/失败

***

### addPrimitivesFromEntities()

> **addPrimitivesFromEntities**: (`layerName`, `entities`, `option?`) => `boolean`

Defined in: index.d.ts:4684

从Entities添加对象

#### Parameters

##### layerName

`string`

##### entities

[`Entity`](../interfaces/Entity.md)[]

##### option?

###### columnModelHeightRange?

\{ `max?`: `number`; `min?`: `number`; \}

###### columnModelHeightRange.max?

`number`

###### columnModelHeightRange.min?

`number`

###### uniform?

[`PrimitiveUniform`](PrimitiveUniform.md)

#### Returns

`boolean`

***

### addPrimitivesFromGeojson()

> **addPrimitivesFromGeojson**: (`layerName`, `featureCollection`, `option?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4692

导入geojson

#### Parameters

##### layerName

`string`

##### featureCollection

[`FeatureCollection`](../interfaces/FeatureCollection.md)

##### option?

###### autoNamedIfEmpty?

`boolean`

###### uniform?

[`PrimitiveUniform`](PrimitiveUniform.md)

#### Returns

`Promise`\<`boolean`\>

***

### addPrimitivesFromKml()

> **addPrimitivesFromKml**: (`layerName`, `kmlContent`, `option?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4665

导入kml

#### Parameters

##### layerName

`string`

##### kmlContent

`string`

##### option?

###### autoNamedIfEmpty?

`boolean`

###### clampToGround?

`boolean`

###### columnModelHeightRange?

\{ `max?`: `number`; `min?`: `number`; \}

###### columnModelHeightRange.max?

`number`

###### columnModelHeightRange.min?

`number`

###### uniform?

[`PrimitiveUniform`](PrimitiveUniform.md)

#### Returns

`Promise`\<`boolean`\>

***

### addPrimitivesFromKmlURI()

> **addPrimitivesFromKmlURI**: (`layerName`, `kmluri`, `option?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4674

#### Parameters

##### layerName

`string`

##### kmluri

`string`

##### option?

###### autoNamedIfEmpty?

`boolean`

###### clampToGround?

`boolean`

###### columnModelHeightRange?

\{ `max?`: `number`; `min?`: `number`; \}

###### columnModelHeightRange.max?

`number`

###### columnModelHeightRange.min?

`number`

###### uniform?

[`PrimitiveUniform`](PrimitiveUniform.md)

#### Returns

`Promise`\<`boolean`\>

***

### clearPrimitiveLayer()

> **clearPrimitiveLayer**: (`name`) => `boolean`

Defined in: index.d.ts:4528

清空图层

#### Parameters

##### name

`string`

图层名

#### Returns

`boolean`

成功/失败

***

### exportPrimitivesAsEntities()

> **exportPrimitivesAsEntities**: (`primitives`) => [`Entity`](../interfaces/Entity.md)[]

Defined in: index.d.ts:4653

导出

#### Parameters

##### primitives

[`Primitive`](Primitive.md) & `object`[]

#### Returns

[`Entity`](../interfaces/Entity.md)[]

***

### exportPrimitivesAsGeojson()

> **exportPrimitivesAsGeojson**: (`primitives`) => [`FeatureCollection`](../interfaces/FeatureCollection.md)

Defined in: index.d.ts:4661

导出Geojson

#### Parameters

##### primitives

[`Primitive`](Primitive.md) & `object`[]

#### Returns

[`FeatureCollection`](../interfaces/FeatureCollection.md)

***

### exportPrimitivesAsKml()

> **exportPrimitivesAsKml**: (`primitives`) => `Promise`\<`string`\>

Defined in: index.d.ts:4657

导出kml

#### Parameters

##### primitives

[`Primitive`](Primitive.md) & `object`[]

#### Returns

`Promise`\<`string`\>

***

### getAllCount()

> **getAllCount**: () => `number`

Defined in: index.d.ts:4651

获取所有对象个数

#### Returns

`number`

***

### getAvailableName()

> **getAvailableName**: (`layerName`, `name`) => `string`

Defined in: index.d.ts:4639

获取指定图层中可用对象名称

#### Parameters

##### layerName

`string`

##### name

`string`

#### Returns

`string`

***

### getLayerPrimitivePropertyInfo()

> **getLayerPrimitivePropertyInfo**: (`layerName`, `infoName`) => [`PropertyInfo`](../interfaces/PropertyInfo.md) \| `undefined`

Defined in: index.d.ts:4597

#### Parameters

##### layerName

`string`

##### infoName

`string`

#### Returns

[`PropertyInfo`](../interfaces/PropertyInfo.md) \| `undefined`

***

### getLayerPrimitivePropertyInfoNames()

> **getLayerPrimitivePropertyInfoNames**: (`layerName`) => `string`[]

Defined in: index.d.ts:4596

#### Parameters

##### layerName

`string`

#### Returns

`string`[]

***

### getLayerPrimitivePropertyInfos()

> **getLayerPrimitivePropertyInfos**: (`layerName`) => [`PropertyInfo`](../interfaces/PropertyInfo.md)[]

Defined in: index.d.ts:4595

属性表头

#### Parameters

##### layerName

`string`

#### Returns

[`PropertyInfo`](../interfaces/PropertyInfo.md)[]

***

### getLayerPrimitiveUniform()

> **getLayerPrimitiveUniform**: (`layerName`) => [`PrimitiveUniform`](PrimitiveUniform.md) \| `undefined`

Defined in: index.d.ts:4586

获取图层统一风格

#### Parameters

##### layerName

`string`

#### Returns

[`PrimitiveUniform`](PrimitiveUniform.md) \| `undefined`

***

### getLayerUniformPrimitiveDataPropertyMap()

> **getLayerUniformPrimitiveDataPropertyMap**: (`layerName`) => [`UniformPrimitiveDataPropertyMap`](UniformPrimitiveDataPropertyMap.md)

Defined in: index.d.ts:4606

#### Parameters

##### layerName

`string`

#### Returns

[`UniformPrimitiveDataPropertyMap`](UniformPrimitiveDataPropertyMap.md)

***

### getPrimitive()

> **getPrimitive**: (`layerName`, `id`) => [`Primitive`](Primitive.md) & `object` \| `undefined`

Defined in: index.d.ts:4623

获取指定的对象

#### Parameters

##### layerName

`string`

图层名

##### id

`string`

#### Returns

[`Primitive`](Primitive.md) & `object` \| `undefined`

***

### getPrimitiveCount()

> **getPrimitiveCount**: (`layerName`) => `number`

Defined in: index.d.ts:4649

获取图层对象个数

#### Parameters

##### layerName

`string`

#### Returns

`number`

***

### getPrimitiveLayerNames()

> **getPrimitiveLayerNames**: () => `string`[]

Defined in: index.d.ts:4545

获取所有粒子图层名

#### Returns

`string`[]

图层名数组

***

### getPrimitiveProperties()

> **getPrimitiveProperties**: (`layerName`, `id`) => \{[`_`: `string`]: `unknown`; \} \| `undefined`

Defined in: index.d.ts:4631

获取指定的对象属性

#### Parameters

##### layerName

`string`

图层名

##### id

`string`

#### Returns

\{[`_`: `string`]: `unknown`; \} \| `undefined`

***

### isPrimitiveLayerVisible()

> **isPrimitiveLayerVisible**: (`name`) => `boolean`

Defined in: index.d.ts:4534

图层是否可见

#### Parameters

##### name

`string`

图层名

#### Returns

`boolean`

成功/失败

***

### layerAddPrimitive()

> **layerAddPrimitive**: (`layerName`, `primitive`) => `string` \| `undefined`

Defined in: index.d.ts:4559

图层添加对象

#### Parameters

##### layerName

`string`

图层名

##### primitive

[`Primitive`](Primitive.md) \| `Partial`\<[`UniformPrimitiveData`](../interfaces/UniformPrimitiveData.md)\> & `object`

对象参数（若id不为undefined，会查重）

#### Returns

`string` \| `undefined`

对象id (undefined表示添加失败)

***

### layerModifyPrimitive()

> **layerModifyPrimitive**: (`layerName`, `primitive`) => `boolean`

Defined in: index.d.ts:4615

更新图层对象

#### Parameters

##### layerName

`string`

图层名

##### primitive

`Partial`\<[`Primitive`](Primitive.md)\> & `object`

参数

#### Returns

`boolean`

成功/失败

***

### layerPrimitives()

> **layerPrimitives**: (`layerName`, `indexRange?`) => [`Primitive`](Primitive.md) & `object`[]

Defined in: index.d.ts:4575

获取图层所有对象

#### Parameters

##### layerName

`string`

##### indexRange?

数据索引范围默认所有 start默认0 end(不含)默认到最后+1

###### end?

`number`

###### start?

`number`

#### Returns

[`Primitive`](Primitive.md) & `object`[]

对象数组

***

### layerRemovePrimitive()

> **layerRemovePrimitive**: (`layerName`, `primitiveId`) => `boolean`

Defined in: index.d.ts:4568

图层删除对象

#### Parameters

##### layerName

`string`

##### primitiveId

`string`

#### Returns

`boolean`

成功/失败

***

### loadLayerUniformPrimitiveDataPropertyMap()

> **loadLayerUniformPrimitiveDataPropertyMap**: (`layerName`, `map`) => `void`

Defined in: index.d.ts:4607

#### Parameters

##### layerName

`string`

##### map

[`UniformPrimitiveDataPropertyMap`](UniformPrimitiveDataPropertyMap.md)

#### Returns

`void`

***

### modifyLayerPrimitivePropertyInfo()

> **modifyLayerPrimitivePropertyInfo**: (`layerName`, `info`) => `boolean`

Defined in: index.d.ts:4605

propertyName valueType 不能改

#### Parameters

##### layerName

`string`

##### info

`Omit`\<[`PropertyInfo`](../interfaces/PropertyInfo.md), `"valueType"`\>

#### Returns

`boolean`

***

### removeAllPrimitiveLayers()

> **removeAllPrimitiveLayers**: () => `boolean`

Defined in: index.d.ts:4522

删除所有图层

#### Returns

`boolean`

成功/失败

***

### removeLayerPrimitivePropertyInfo()

> **removeLayerPrimitivePropertyInfo**: (`layerName`, `infoName`) => `boolean`

Defined in: index.d.ts:4603

#### Parameters

##### layerName

`string`

##### infoName

`string`

#### Returns

`boolean`

***

### removePrimitiveLayer()

> **removePrimitiveLayer**: (`name`) => `boolean`

Defined in: index.d.ts:4517

删除图层

#### Parameters

##### name

`string`

图层名

#### Returns

`boolean`

成功/失败

***

### renamePrimitiveLayer()

> **renamePrimitiveLayer**: (`oldName`, `newName`) => `boolean`

Defined in: index.d.ts:4552

重命名

#### Parameters

##### oldName

`string`

原图层名

##### newName

`string`

新图层名

#### Returns

`boolean`

成功/失败

***

### setLayerPrimitiveUniform()

> **setLayerPrimitiveUniform**: (`layerName`, `uniform`) => `boolean`

Defined in: index.d.ts:4593

设置图层统一风格

#### Parameters

##### layerName

`string`

##### uniform

[`PrimitiveUniform`](PrimitiveUniform.md)

#### Returns

`boolean`

设置是否成功

***

### setLayerUniformPrimitiveDataFromProperty()

> **setLayerUniformPrimitiveDataFromProperty**: (`layerName`, `dataType`, `value`) => `boolean`

Defined in: index.d.ts:4608

#### Parameters

##### layerName

`string`

##### dataType

keyof [`UniformPrimitiveDataPropertyMap`](UniformPrimitiveDataPropertyMap.md)

##### value

`unknown`

#### Returns

`boolean`

***

### setPrimitiveLayerVisible()

> **setPrimitiveLayerVisible**: (`name`, `isVisible`) => `void`

Defined in: index.d.ts:4540

设置图层是否可见

#### Parameters

##### name

`string`

图层名

##### isVisible

`boolean`

是否可见

#### Returns

`void`

***

### viewEntirePrimitive()

> **viewEntirePrimitive**: (`layerName`, `primitiveId`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4647

全幅primitive矢量

#### Parameters

##### layerName

`string`

##### primitiveId

`string`

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功
