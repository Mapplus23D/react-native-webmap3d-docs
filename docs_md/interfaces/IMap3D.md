[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IMap3D

# Interface: IMap3D

Defined in: index.d.ts:21

地图渲染信息

## Extends

- `Partial`\<[`MapSetting`](MapSetting.md)\>

## Properties

### animation?

> `optional` **animation**: [`AnimationParam`](../type-aliases/AnimationParam.md)

Defined in: index.d.ts:64

动画

***

### annotation3D?

> `optional` **annotation3D**: `object`

Defined in: index.d.ts:37

天地图3维注记

#### displayDistance?

> `optional` **displayDistance**: `number`

#### token

> **token**: `string`

天地图服务 token

#### visible

> **visible**: `boolean`

***

### atmosphere?

> `optional` **atmosphere**: [`Atmosphere`](Atmosphere.md)

Defined in: index.d.ts:232

大气

#### Inherited from

`Partial.atmosphere`

***

### bloomEffect?

> `optional` **bloomEffect**: [`BloomEffect`](BloomEffect.md)

Defined in: index.d.ts:250

泛光设置

#### Inherited from

`Partial.bloomEffect`

***

### camera

> **camera**: [`Camera`](Camera.md)

Defined in: index.d.ts:35

相机参数，指定相机位置和方向

***

### clouds?

> `optional` **clouds**: [`Clouds`](Clouds.md)

Defined in: index.d.ts:234

云层

#### Inherited from

`Partial.clouds`

***

### colorCorrection?

> `optional` **colorCorrection**: [`ColorCorrectionType`](ColorCorrectionType.md)

Defined in: index.d.ts:238

颜色校正

#### Inherited from

`Partial.colorCorrection`

***

### depthTestAgainstTerrain?

> `optional` **depthTestAgainstTerrain**: `boolean`

Defined in: index.d.ts:246

深度检测

#### Inherited from

`Partial.depthTestAgainstTerrain`

***

### entitiesLayers?

> `optional` **entitiesLayers**: [`EntitiesLayer`](EntitiesLayer.md)[]

Defined in: index.d.ts:58

矢量图层

***

### fog?

> `optional` **fog**: [`Fog`](Fog.md)

Defined in: index.d.ts:244

雾化

#### Inherited from

`Partial.fog`

***

### graticuleParam?

> `optional` **graticuleParam**: [`GraticuleParam`](GraticuleParam.md)

Defined in: index.d.ts:44

经纬网参数

***

### graticuleVisible?

> `optional` **graticuleVisible**: `boolean`

Defined in: index.d.ts:46

是否显示经纬网

***

### hdrEnable?

> `optional` **hdrEnable**: `boolean`

Defined in: index.d.ts:248

hdr(高动态光照渲染，一种提高影像亮度和对比度的处理技术)

#### Inherited from

`Partial.hdrEnable`

***

### id

> **id**: `number`

Defined in: index.d.ts:25

地图id

***

### imageLayers?

> `optional` **imageLayers**: [`ImageLayer`](ImageLayer.md)[]

Defined in: index.d.ts:50

影像图层

***

### lighting?

> `optional` **lighting**: [`GlobeLighting`](GlobeLighting.md)

Defined in: index.d.ts:240

地球光照阴影

#### Inherited from

`Partial.lighting`

***

### particleLayers?

> `optional` **particleLayers**: [`ParticleLayer`](ParticleLayer.md)[]

Defined in: index.d.ts:54

粒子特效图层

***

### primitiveLayers?

> `optional` **primitiveLayers**: [`PrimitiveLayer`](../type-aliases/PrimitiveLayer.md)[]

Defined in: index.d.ts:56

primitive图层

***

### quality?

> `optional` **quality**: `number`

Defined in: index.d.ts:228

画质

#### Inherited from

`Partial.quality`

***

### s3mTilesLayers?

> `optional` **s3mTilesLayers**: [`S3MTilesLayer`](S3MTilesLayer.md)[]

Defined in: index.d.ts:60

切片图层

***

### scanEffect?

> `optional` **scanEffect**: [`ScanEffect`](ScanEffect.md)

Defined in: index.d.ts:48

扫描线效果

***

### scene?

> `optional` **scene**: `object`

Defined in: index.d.ts:27

iserver 发布的三维场景

#### modifiedS3MLayers?

> `optional` **modifiedS3MLayers**: [`S3MLayer`](../type-aliases/S3MLayer.md)[]

#### sceneName?

> `optional` **sceneName**: `string`

默认打开的场景名，若为undefined则打开第一个

#### url

> **url**: `string`

iserver 发布的场景 url

***

### ~~screenLayer?~~

> `optional` **screenLayer**: [`ScreenLayer`](ScreenLayer.md)

Defined in: index.d.ts:62

屏幕图层

#### Deprecated

***

### shadow?

> `optional` **shadow**: [`Shadow`](Shadow.md)

Defined in: index.d.ts:242

对象阴影

#### Inherited from

`Partial.shadow`

***

### skybox?

> `optional` **skybox**: [`Skybox`](Skybox.md)

Defined in: index.d.ts:230

天空盒

#### Inherited from

`Partial.skybox`

***

### slideShow?

> `optional` **slideShow**: [`Slide`](Slide.md)[]

Defined in: index.d.ts:68

幻灯片

***

### sun?

> `optional` **sun**: [`Sun`](Sun.md)

Defined in: index.d.ts:236

太阳

#### Inherited from

`Partial.sun`

***

### terrainExaggeration?

> `optional` **terrainExaggeration**: `number`

Defined in: index.d.ts:252

地形夸张系数。默认为 1

#### Inherited from

`Partial.terrainExaggeration`

***

### terrainLayer?

> `optional` **terrainLayer**: [`TerrainLayer`](TerrainLayer.md)

Defined in: index.d.ts:52

地形图层

***

### version

> **version**: `number`

Defined in: index.d.ts:23

版本号

***

### weather?

> `optional` **weather**: `null` \| [`Rain`](Rain.md) \| [`Snow`](Snow.md)

Defined in: index.d.ts:66

天气特效
