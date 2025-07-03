[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveWaterRegion

# Interface: PrimitiveWaterRegion

Defined in: index.d.ts:2437

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### amplitude?

> `optional` **amplitude**: `number`

Defined in: index.d.ts:2463

amplitude: Number that controls the amplitude of water waves.振幅5

***

### animationSpeed?

> `optional` **animationSpeed**: `number`

Defined in: index.d.ts:2461

animationSpeed: Number that controls the animations speed of the water.0.01

***

### baseHeight?

> `optional` **baseHeight**: `number`

Defined in: index.d.ts:2447

底部高度，贴地时无效

***

### baseWaterColor?

> `optional` **baseWaterColor**: `string`

Defined in: index.d.ts:2451

baseWaterColor: rgba color object base color of the water.

***

### blendColor?

> `optional` **blendColor**: `string`

Defined in: index.d.ts:2453

blendColor: rgba color object used when blending from water to non-water areas.

***

### clampToGround?

> `optional` **clampToGround**: `boolean`

Defined in: index.d.ts:2443

deprecated 废弃的贴地接口 当classificationType未定义时生效

***

### classificationType?

> `optional` **classificationType**: [`ClassificationType`](../enumerations/ClassificationType.md)

Defined in: index.d.ts:2441

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2135

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### frequency?

> `optional` **frequency**: `number`

Defined in: index.d.ts:2457

frequency: Number that controls the number of waves.500

***

### hierarchy

> **hierarchy**: [`Circle`](Circle.md) \| [`Rectangle`](Rectangle.md) \| [`PolygonHierarchy`](PolygonHierarchy.md)

Defined in: index.d.ts:2440

面节点

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2138

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### normalMap?

> `optional` **normalMap**: `string`

Defined in: index.d.ts:2459

normalMap: Normal map for water normal perturbation.扰动

***

### properties?

> `optional` **properties**: `object`

Defined in: index.d.ts:2140

属性字段

#### Index Signature

\[`_`: `string`\]: `unknown`

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`properties`](PrimitiveBase.md#properties)

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2133

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### specularIntensity?

> `optional` **specularIntensity**: `number`

Defined in: index.d.ts:2465

specularIntensity: Number that controls the intensity of specular reflections.

***

### specularMap?

> `optional` **specularMap**: `string`

Defined in: index.d.ts:2455

specularMap: Single channel texture used to indicate areas of water.

***

### stRotation?

> `optional` **stRotation**: `number`

Defined in: index.d.ts:2449

贴图旋转角度

***

### topHeight?

> `optional` **topHeight**: `number`

Defined in: index.d.ts:2445

水面高度,贴地时无效

***

### type

> **type**: [`WaterRegion`](../enumerations/PrimitiveType.md#waterregion)

Defined in: index.d.ts:2438

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)
