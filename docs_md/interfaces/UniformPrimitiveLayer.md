[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / UniformPrimitiveLayer

# Interface: UniformPrimitiveLayer\<P\>

Defined in: index.d.ts:2093

## Extends

- [`PrimitiveLayerBase`](PrimitiveLayerBase.md)

## Type Parameters

### P

`P` *extends* [`Primitive`](../type-aliases/Primitive.md)

## Properties

### name

> **name**: `string`

Defined in: index.d.ts:2056

#### Inherited from

[`PrimitiveLayerBase`](PrimitiveLayerBase.md).[`name`](PrimitiveLayerBase.md#name)

***

### primitives

> **primitives**: `Omit`\<`P`, `Exclude`\<keyof `P`, keyof [`UniformPrimitiveData`](UniformPrimitiveData.md)\>\> & `object`[]

Defined in: index.d.ts:2097

数据

***

### propertyInfos?

> `optional` **propertyInfos**: [`PropertyInfo`](PropertyInfo.md)[]

Defined in: index.d.ts:2102

属性表,规则primitive.properties仅符合属性表部分可见

***

### uniform

> **uniform**: `Omit`\<`P`, keyof [`UniformPrimitiveData`](UniformPrimitiveData.md)\>

Defined in: index.d.ts:2095

统一风格

***

### uniformPrimitiveDataPropertyMap?

> `optional` **uniformPrimitiveDataPropertyMap**: [`UniformPrimitiveDataPropertyMap`](../type-aliases/UniformPrimitiveDataPropertyMap.md)

Defined in: index.d.ts:2104

data和property关联表

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:2055

#### Inherited from

[`PrimitiveLayerBase`](PrimitiveLayerBase.md).[`visible`](PrimitiveLayerBase.md#visible)
