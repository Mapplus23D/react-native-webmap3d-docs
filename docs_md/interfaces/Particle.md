[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Particle

# Interface: Particle

Defined in: index.d.ts:1774

粒子特效

## Extends

- `Partial`\<[`ParticleParam`](ParticleParam.md)\>

## Properties

### angularSpeedGradients?

> `optional` **angularSpeedGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1854

#### Inherited from

`Partial.angularSpeedGradients`

***

### blendMode?

> `optional` **blendMode**: [`ParticleBlendMode`](../enumerations/ParticleBlendMode.md)

Defined in: index.d.ts:1797

#### Inherited from

`Partial.blendMode`

***

### color1?

> `optional` **color1**: \[`number`, `number`, `number`, `number`\]

Defined in: index.d.ts:1824

#### Inherited from

`Partial.color1`

***

### color2?

> `optional` **color2**: \[`number`, `number`, `number`, `number`\]

Defined in: index.d.ts:1830

#### Inherited from

`Partial.color2`

***

### colorDead?

> `optional` **colorDead**: \[`number`, `number`, `number`, `number`\]

Defined in: index.d.ts:1836

#### Inherited from

`Partial.colorDead`

***

### colorGradients?

> `optional` **colorGradients**: [`ParticleColorGradient`](ParticleColorGradient.md)[]

Defined in: index.d.ts:1853

#### Inherited from

`Partial.colorGradients`

***

### dragGradients?

> `optional` **dragGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1847

#### Inherited from

`Partial.dragGradients`

***

### emitRate?

> `optional` **emitRate**: `number`

Defined in: index.d.ts:1799

#### Inherited from

`Partial.emitRate`

***

### emitRateGradients?

> `optional` **emitRateGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1843

需要设置  targetStopDuration

#### Inherited from

`Partial.emitRateGradients`

***

### emitter?

> `optional` **emitter**: \[`number`, `number`, `number`\]

Defined in: index.d.ts:1784

粒子发射对象。可以是坐标，或者一个entity，或者相机。
todo 目前仅支持坐标

#### Inherited from

`Partial.emitter`

***

### gravity?

> `optional` **gravity**: \[`number`, `number`, `number`\]

Defined in: index.d.ts:1818

粒子在三个轴上受到的力

#### Inherited from

`Partial.gravity`

***

### id

> **id**: `string`

Defined in: index.d.ts:1775

***

### isBillboardBased?

> `optional` **isBillboardBased**: `boolean`

Defined in: index.d.ts:1796

#### Inherited from

`Partial.isBillboardBased`

***

### isLocal?

> `optional` **isLocal**: `boolean`

Defined in: index.d.ts:1795

#### Inherited from

`Partial.isLocal`

***

### lifeTimeGradients?

> `optional` **lifeTimeGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1852

需要设置  targetStopDuration

#### Inherited from

`Partial.lifeTimeGradients`

***

### limitVelocityDamping?

> `optional` **limitVelocityDamping**: `number`

Defined in: index.d.ts:1816

#### Inherited from

`Partial.limitVelocityDamping`

***

### limitVelocityGradients?

> `optional` **limitVelocityGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1846

需要设置 limitVelocityDamping

#### Inherited from

`Partial.limitVelocityGradients`

***

### maxAngularSpeed?

> `optional` **maxAngularSpeed**: `number`

Defined in: index.d.ts:1813

#### Inherited from

`Partial.maxAngularSpeed`

***

### maxEmitPower?

> `optional` **maxEmitPower**: `number`

Defined in: index.d.ts:1801

#### Inherited from

`Partial.maxEmitPower`

***

### maxInitialRotation?

> `optional` **maxInitialRotation**: `number`

Defined in: index.d.ts:1815

#### Inherited from

`Partial.maxInitialRotation`

***

### maxLifeTime?

> `optional` **maxLifeTime**: `number`

Defined in: index.d.ts:1809

#### Inherited from

`Partial.maxLifeTime`

***

### maxScaleX?

> `optional` **maxScaleX**: `number`

Defined in: index.d.ts:1806

#### Inherited from

`Partial.maxScaleX`

***

### maxScaleY?

> `optional` **maxScaleY**: `number`

Defined in: index.d.ts:1807

#### Inherited from

`Partial.maxScaleY`

***

### maxSize?

> `optional` **maxSize**: `number`

Defined in: index.d.ts:1803

#### Inherited from

`Partial.maxSize`

***

### minAngularSpeed?

> `optional` **minAngularSpeed**: `number`

Defined in: index.d.ts:1812

#### Inherited from

`Partial.minAngularSpeed`

***

### minEmitPower?

> `optional` **minEmitPower**: `number`

Defined in: index.d.ts:1800

#### Inherited from

`Partial.minEmitPower`

***

### minInitialRotation?

> `optional` **minInitialRotation**: `number`

Defined in: index.d.ts:1814

#### Inherited from

`Partial.minInitialRotation`

***

### minLifeTime?

> `optional` **minLifeTime**: `number`

Defined in: index.d.ts:1808

#### Inherited from

`Partial.minLifeTime`

***

### minScaleX?

> `optional` **minScaleX**: `number`

Defined in: index.d.ts:1804

#### Inherited from

`Partial.minScaleX`

***

### minScaleY?

> `optional` **minScaleY**: `number`

Defined in: index.d.ts:1805

#### Inherited from

`Partial.minScaleY`

***

### minSize?

> `optional` **minSize**: `number`

Defined in: index.d.ts:1802

#### Inherited from

`Partial.minSize`

***

### name

> **name**: `string`

Defined in: index.d.ts:1776

***

### orientation?

> `optional` **orientation**: \[`number`, `number`, `number`\]

Defined in: index.d.ts:1790

旋转角度

#### Inherited from

`Partial.orientation`

***

### particleEmitterType?

> `optional` **particleEmitterType**: [`ParticleEmitterType`](../type-aliases/ParticleEmitterType.md)

Defined in: index.d.ts:1823

#### Inherited from

`Partial.particleEmitterType`

***

### sizeGradients?

> `optional` **sizeGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1850

#### Inherited from

`Partial.sizeGradients`

***

### startSizeGradients?

> `optional` **startSizeGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1849

需要设置  targetStopDuration

#### Inherited from

`Partial.startSizeGradients`

***

### targetStopDuration?

> `optional` **targetStopDuration**: `number`

Defined in: index.d.ts:1811

时长

#### Inherited from

`Partial.targetStopDuration`

***

### updateSpeed?

> `optional` **updateSpeed**: `number`

Defined in: index.d.ts:1798

#### Inherited from

`Partial.updateSpeed`

***

### url

> **url**: `string`

Defined in: index.d.ts:1777

***

### velocityGradients?

> `optional` **velocityGradients**: [`ParticleGradient`](ParticleGradient.md)[]

Defined in: index.d.ts:1844

#### Inherited from

`Partial.velocityGradients`
