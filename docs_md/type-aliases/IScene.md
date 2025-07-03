[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IScene

# Type Alias: IScene

> **IScene** = `object`

Defined in: index.d.ts:3150

场景

## Properties

### addEntities()

> **addEntities**: (`datasourceName`, `entities`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3332

图层批量添加对象

#### Parameters

##### datasourceName

`string`

##### entities

[`Entity`](../interfaces/Entity.md)[]

对象数组

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### addEntitiesFromGeojson()

> **addEntitiesFromGeojson**: (`datasourceName`, `geojson`) => `boolean`

Defined in: index.d.ts:3360

图层从geojson添加对象

#### Parameters

##### datasourceName

`string`

##### geojson

[`FeatureCollection`](../interfaces/FeatureCollection.md)

FeatureCollection

#### Returns

`boolean`

成功/失败

***

### addEntitiesFromJson()

> **addEntitiesFromJson**: (`datasourceName`, `jsonContent`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3339

图层从json添加对象

#### Parameters

##### datasourceName

`string`

##### jsonContent

`string`

对象json，like：{entities : Entity[]}

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### addEntitiesFromKml()

> **addEntitiesFromKml**: (`datasourceName`, `kmlContent`, `clampToGround?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3346

图层从kml添加对象

#### Parameters

##### datasourceName

`string`

##### kmlContent

`string`

kml字符串

##### clampToGround?

`boolean`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### addEntitiesFromKmlURI()

> **addEntitiesFromKmlURI**: (`datasourceName`, `kmlUri`, `clampToGround?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3353

图层从kml/kmz地址添加对象

#### Parameters

##### datasourceName

`string`

##### kmlUri

`string`

kml/kmz地址

##### clampToGround?

`boolean`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### addEntitiesLayer()

> **addEntitiesLayer**: (`name`, `datasouece?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3268

添加矢量图层

#### Parameters

##### name

`string`

要添加的图层名

##### datasouece?

矢量图层数据源,undefined表示添加空图层

[`EntitiesDatasource`](../interfaces/EntitiesDatasource.md) | [`EntityCollection`](../interfaces/EntityCollection.md)

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### addEntity()

> **addEntity**: (`name`, `entity`) => `string`

Defined in: index.d.ts:3325

图层添加对象

#### Parameters

##### name

`string`

图层名

##### entity

[`Entity`](../interfaces/Entity.md)

对象

#### Returns

`string`

返回添加对象的id,返回''表示添加失败

***

### addImagelayer()

> **addImagelayer**: (`name`, `provider`) => `boolean`

Defined in: index.d.ts:3206

添加影像图层

#### Parameters

##### name

`string`

要添加的图层名

##### provider

[`ImageProvider`](ImageProvider.md)

影像图层provider

#### Returns

`boolean`

是否成功

***

### addMediaEntitiesLayer()

> **addMediaEntitiesLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3274

添加多媒体矢量图层

#### Parameters

##### name

`string`

要添加的图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### addS3MTilesLayer()

> **addS3MTilesLayer**: (`name`, `url`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3479

添加切片缓存图层

#### Parameters

##### name

`string`

要添加的图层名

##### url

`string`

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### beginTranslation()

> **beginTranslation**: (`layerName`, `entityId`, `type?`) => `boolean`

Defined in: index.d.ts:3998

设置球面平移目标

#### Parameters

##### layerName

`string`

图层名

##### entityId

`string`

对象id

##### type?

`"entity"` | `"trackingLayer"` | `"primitive"`

#### Returns

`boolean`

是否成功

***

### calcAreaValue()

> **calcAreaValue**: (`positions`, `clampModeParam`) => `Promise`\<`number`\>

Defined in: index.d.ts:3963

计算面积

#### Parameters

##### positions

[`Vector3`](../interfaces/Vector3.md)[]

计算面积的点集

##### clampModeParam

[`ClampType`](../enumerations/ClampType.md)

计算面积的模式

#### Returns

`Promise`\<`number`\>

***

### calcDistanceValue()

> **calcDistanceValue**: (`positions`, `clampModeParam`) => `number`

Defined in: index.d.ts:3956

计算距离

#### Parameters

##### positions

[`Vector3`](../interfaces/Vector3.md)[]

计算距离的点集

##### clampModeParam

[`ClampType`](../enumerations/ClampType.md)

计算距离的模式

#### Returns

`number`

***

### clearEntitiesLayer()

> **clearEntitiesLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3299

清空矢量图层

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### clearSlideShow()

> **clearSlideShow**: () => `Promise`\<`void`\>

Defined in: index.d.ts:4069

删除幻灯片播放列表

#### Returns

`Promise`\<`void`\>

***

### close()

> **close**: (`duration?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3164

关闭当前互动地图

#### Parameters

##### duration?

`number`

关闭地图时的动画时间，单位秒。如果不指定，将自动计算一个最合适的时间

#### Returns

`Promise`\<`boolean`\>

当前打开的互动地图

***

### closeTerrainLayer()

> **closeTerrainLayer**: () => `boolean`

Defined in: index.d.ts:3188

关闭当前的地形图层

#### Returns

`boolean`

是否成功

***

### enableSceneTouch()

> **enableSceneTouch**: (`enabled`) => `void`

Defined in: index.d.ts:3977

设置地图手势可用

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### endTranslation()

> **endTranslation**: (`isUpdateModified`) => `void`

Defined in: index.d.ts:3999

#### Parameters

##### isUpdateModified

`boolean`

#### Returns

`void`

***

### entitiesFromKml()

> **entitiesFromKml**: (`kmlContent`, `clampToGround?`) => `Promise`\<[`Entity`](../interfaces/Entity.md)[]\>

Defined in: index.d.ts:3432

kml字符串中读取entities

#### Parameters

##### kmlContent

`string`

kml字符串

##### clampToGround?

`boolean`

#### Returns

`Promise`\<[`Entity`](../interfaces/Entity.md)[]\>

***

### exportEntityAsGeojson()

> **exportEntityAsGeojson**: (`entityParams`) => `Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)\>

Defined in: index.d.ts:3438

entity导出为geojson字符串

#### Parameters

##### entityParams

`object`[]

entity所在图层名及id参数的数组

#### Returns

`Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)\>

***

### exportEntityAsKml()

> **exportEntityAsKml**: (`entityParams`) => `Promise`\<`string`\>

Defined in: index.d.ts:3423

entity导出为kml字符串

#### Parameters

##### entityParams

`object`[]

entity所在图层名及id参数的数组

#### Returns

`Promise`\<`string`\>

***

### exportLayerAsKml()

> **exportLayerAsKml**: (`name`) => `Promise`\<`string`\>

Defined in: index.d.ts:3417

entity图层导出为kml字符串

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`string`\>

kml字符串

***

### getAction()

> **getAction**: () => [`SceneAction`](../enumerations/SceneAction.md)

Defined in: index.d.ts:3873

获取当前action

#### Returns

[`SceneAction`](../enumerations/SceneAction.md)

action

***

### getAtmosphere()

> **getAtmosphere**: () => `Required`\<[`Atmosphere`](../interfaces/Atmosphere.md)\>

Defined in: index.d.ts:3642

获取当前大气设置

#### Returns

`Required`\<[`Atmosphere`](../interfaces/Atmosphere.md)\>

当前大气设置参数

***

### getBloomEffect()

> **getBloomEffect**: () => `Promise`\<[`BloomEffect`](../interfaces/BloomEffect.md)\>

Defined in: index.d.ts:3746

获取当前地图泛光效果参数

#### Returns

`Promise`\<[`BloomEffect`](../interfaces/BloomEffect.md)\>

泛光效果参数

***

### getCameraDragMode()

> **getCameraDragMode**: () => `"CDT_1"` \| `"CDT_2"`

Defined in: index.d.ts:3790

获取当前地图清晰度

#### Returns

`"CDT_1"` \| `"CDT_2"`

当前地图清晰度 范围 0 - 100

***

### getCloud()

> **getCloud**: () => [`Clouds`](../interfaces/Clouds.md) \| `undefined`

Defined in: index.d.ts:3868

获取云层设置

#### Returns

[`Clouds`](../interfaces/Clouds.md) \| `undefined`

云层设置。未设置返回 undefined

***

### getColorCorrection()

> **getColorCorrection**: () => [`ColorCorrectionType`](../interfaces/ColorCorrectionType.md)

Defined in: index.d.ts:3851

颜色校正参数获取方法

#### Returns

[`ColorCorrectionType`](../interfaces/ColorCorrectionType.md)

颜色校正参数

***

### getCurrentTime()

> **getCurrentTime**: () => [`GregorianDate`](../interfaces/GregorianDate.md)

Defined in: index.d.ts:3949

获取时间轴当前时间

#### Returns

[`GregorianDate`](../interfaces/GregorianDate.md)

当前时间

***

### getEntitiesLayerNames()

> **getEntitiesLayerNames**: () => `Promise`\<`string`[]\>

Defined in: index.d.ts:3383

获取地图图层数组

#### Returns

`Promise`\<`string`[]\>

地图对象数量

***

### getEntitiesLayers()

> **getEntitiesLayers**: (`datasourceNeeded?`) => `Promise`\<[`EntitiesLayer`](../interfaces/EntitiesLayer.md)[]\>

Defined in: index.d.ts:3280

获取所有矢量图层

#### Parameters

##### datasourceNeeded?

`boolean`

是否需要图层数据源 ，默认false

#### Returns

`Promise`\<[`EntitiesLayer`](../interfaces/EntitiesLayer.md)[]\>

地图中所有影像图层

***

### getEntity()

> **getEntity**: (`name`, `entityId`) => [`Entity`](../interfaces/Entity.md) \| `undefined`

Defined in: index.d.ts:3373

图层获取对象

#### Parameters

##### name

`string`

图层名

##### entityId

`string`

对象id

#### Returns

[`Entity`](../interfaces/Entity.md) \| `undefined`

Entity对象

***

### getEntityCount()

> **getEntityCount**: () => `number`

Defined in: index.d.ts:3378

获取地图对象数量

#### Returns

`number`

地图对象数量

***

### getFog()

> **getFog**: () => [`Fog`](../interfaces/Fog.md)

Defined in: index.d.ts:3705

获取当前地图雾化效果参数

#### Returns

[`Fog`](../interfaces/Fog.md)

雾化效果参数

***

### getFPS()

> **getFPS**: () => `Promise`\<`number`\>

Defined in: index.d.ts:3815

获取最新的每秒渲染帧数 FPS

#### Returns

`Promise`\<`number`\>

当前帧率

***

### getGraticulesParam()

> **getGraticulesParam**: () => [`GraticuleParam`](../interfaces/GraticuleParam.md) \| `undefined`

Defined in: index.d.ts:3664

获取经纬网参数

#### Returns

[`GraticuleParam`](../interfaces/GraticuleParam.md) \| `undefined`

经纬网参数

***

### getGraticuleVisible()

> **getGraticuleVisible**: () => `boolean`

Defined in: index.d.ts:3675

获取经纬网可见性

#### Returns

`boolean`

经纬网可见性

***

### getHypsometricSetting()

> **getHypsometricSetting**: () => `Pick`\<[`HypsometricSetting`](../interfaces/HypsometricSetting.md), `"mode"`\> & `Partial`\<[`HypsometricSetting`](../interfaces/HypsometricSetting.md)\>

Defined in: index.d.ts:3981

获取等高显示设置

#### Returns

`Pick`\<[`HypsometricSetting`](../interfaces/HypsometricSetting.md), `"mode"`\> & `Partial`\<[`HypsometricSetting`](../interfaces/HypsometricSetting.md)\>

***

### getImageLayerByIndex()

> **getImageLayerByIndex**: (`index`) => [`ImageLayer`](../interfaces/ImageLayer.md) \| `undefined`

Defined in: index.d.ts:3216

获取所有影像图层

#### Parameters

##### index

`number`

#### Returns

[`ImageLayer`](../interfaces/ImageLayer.md) \| `undefined`

地图中所有影像图层

***

### getImageLayers()

> **getImageLayers**: () => [`ImageLayer`](../interfaces/ImageLayer.md)[]

Defined in: index.d.ts:3211

获取所有影像图层

#### Returns

[`ImageLayer`](../interfaces/ImageLayer.md)[]

地图中所有影像图层

***

### getLayerEntities()

> **getLayerEntities**: (`datasourceName`, `range?`) => `Promise`\<[`Entity`](../interfaces/Entity.md)[]\>

Defined in: index.d.ts:3401

获取图层所有的对象

#### Parameters

##### datasourceName

`string`

图层名

##### range?

###### end?

`number`

###### start?

`number`

#### Returns

`Promise`\<[`Entity`](../interfaces/Entity.md)[]\>

entity数组

***

### getLayerEntityCount()

> **getLayerEntityCount**: (`datasourceName`) => `Promise`\<`number`\>

Defined in: index.d.ts:3395

获取图层所有的对象id

#### Parameters

##### datasourceName

`string`

图层名

#### Returns

`Promise`\<`number`\>

id数组

***

### getLayerEntityIDs()

> **getLayerEntityIDs**: (`datasourceName`) => `Promise`\<`string`[]\>

Defined in: index.d.ts:3389

获取图层所有的对象id

#### Parameters

##### datasourceName

`string`

图层名

#### Returns

`Promise`\<`string`[]\>

id数组

***

### getLighting()

> **getLighting**: () => [`GlobeLighting`](../interfaces/GlobeLighting.md)

Defined in: index.d.ts:3685

获取当前地图地球光照阴影参数

#### Returns

[`GlobeLighting`](../interfaces/GlobeLighting.md)

地球光照阴影参数

***

### getMap()

> **getMap**: () => `Promise`\<[`IMap3D`](../interfaces/IMap3D.md)\>

Defined in: index.d.ts:3169

获取当前互动地图

#### Returns

`Promise`\<[`IMap3D`](../interfaces/IMap3D.md)\>

当前打开的互动地图

***

### getMapQuality()

> **getMapQuality**: () => `number`

Defined in: index.d.ts:3778

获取当前地图清晰度

#### Returns

`number`

当前地图清晰度 范围 0 - 100

***

### getMaximumZoomDistance()

> **getMaximumZoomDistance**: () => `number`

Defined in: index.d.ts:3725

获得最大视距

#### Returns

`number`

最大视距

***

### getRealityMeshMemoryLimit()

> **getRealityMeshMemoryLimit**: () => `number`

Defined in: index.d.ts:3767

获取加载realityMesh时内存限制（单位MB）

#### Returns

`number`

limit

***

### getRequestRenderMode()

> **getRequestRenderMode**: () => `boolean`

Defined in: index.d.ts:3823

获取当前是否为主动刷新模式

#### Returns

`boolean`

***

### getS3MLayerAttribute()

> **getS3MLayerAttribute**: (`name`, `id`) => `Promise`\<`Record`\<`string`, `unknown`\> \| `undefined`\>

Defined in: index.d.ts:3498

获取 s3m 图层对象属性

#### Parameters

##### name

`string`

图层名

##### id

`number`

对象id

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\> \| `undefined`\>

属性。获取失败返回 undefined

***

### getS3MLayers()

> **getS3MLayers**: () => [`S3MLayer`](S3MLayer.md)[]

Defined in: index.d.ts:3485

获取所有切片缓存图层

#### Returns

[`S3MLayer`](S3MLayer.md)[]

地图中所有切片缓存图层

***

### getS3MTilesLayers()

> **getS3MTilesLayers**: () => [`S3MTilesLayer`](../interfaces/S3MTilesLayer.md)[]

Defined in: index.d.ts:3480

#### Returns

[`S3MTilesLayer`](../interfaces/S3MTilesLayer.md)[]

***

### getS3MTilesWaterStyle()

> **getS3MTilesWaterStyle**: (`name`) => `Promise`\<[`S3MWaterStyle`](../interfaces/S3MWaterStyle.md) \| `undefined`\>

Defined in: index.d.ts:3522

get水面风格（不能设置图层组内图层风格）

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<[`S3MWaterStyle`](../interfaces/S3MWaterStyle.md) \| `undefined`\>

是否成功

***

### getSceneMode()

> **getSceneMode**: () => `Promise`\<[`SceneMode`](../enumerations/SceneMode.md)\>

Defined in: index.d.ts:3756

获取当前场景模式

#### Returns

`Promise`\<[`SceneMode`](../enumerations/SceneMode.md)\>

当前场景模式

***

### getSceneQuality()

> **getSceneQuality**: () => `number`

Defined in: index.d.ts:3801

获取当前场景清晰度

#### Returns

`number`

当前场景清晰度 范围 0 - 100

***

### getScreenShot()

> **getScreenShot**: (`params`) => `string`

Defined in: index.d.ts:4027

截取地球Canvas图片

#### Parameters

##### params

`Partial`\<[`ScreenShot`](../interfaces/ScreenShot.md)\>

图片参数

#### Returns

`string`

图片路径

***

### getShadow()

> **getShadow**: () => `Promise`\<[`Shadow`](../interfaces/Shadow.md)\>

Defined in: index.d.ts:3695

获取当前地图对象阴影参数

#### Returns

`Promise`\<[`Shadow`](../interfaces/Shadow.md)\>

对象阴影参数

***

### getSkybox()

> **getSkybox**: () => [`Skybox`](../interfaces/Skybox.md) \| `undefined`

Defined in: index.d.ts:3631

获取当前设置的天空盒

#### Returns

[`Skybox`](../interfaces/Skybox.md) \| `undefined`

当前的天空盒。没有设置返回 undefined

***

### getSlideAtIndex()

> **getSlideAtIndex**: (`index`) => `Promise`\<[`Slide`](../interfaces/Slide.md) \| `undefined`\>

Defined in: index.d.ts:4048

获取索引处幻灯片

#### Parameters

##### index

`number`

索引

#### Returns

`Promise`\<[`Slide`](../interfaces/Slide.md) \| `undefined`\>

幻灯片

***

### getSlideCount()

> **getSlideCount**: () => `Promise`\<`number`\>

Defined in: index.d.ts:4037

获取幻灯片列表长度

#### Returns

`Promise`\<`number`\>

幻灯片列表长度

***

### getSlideShow()

> **getSlideShow**: () => `Promise`\<[`Slide`](../interfaces/Slide.md)[]\>

Defined in: index.d.ts:4032

获取幻灯片列表

#### Returns

`Promise`\<[`Slide`](../interfaces/Slide.md)[]\>

幻灯片列表

***

### getSun()

> **getSun**: () => `Required`\<[`Sun`](../interfaces/Sun.md)\>

Defined in: index.d.ts:3653

获取当前太阳参数

#### Returns

`Required`\<[`Sun`](../interfaces/Sun.md)\>

当前太阳参数

***

### getTerrainExaggeration()

> **getTerrainExaggeration**: () => `number`

Defined in: index.d.ts:3991

获取地形夸张系数

#### Returns

`number`

地形夸张系数

***

### getTerrainLayer()

> **getTerrainLayer**: () => [`TerrainLayer`](../interfaces/TerrainLayer.md) \| `undefined`

Defined in: index.d.ts:3193

获取当前的地形图层，没有返回 undefined

#### Returns

[`TerrainLayer`](../interfaces/TerrainLayer.md) \| `undefined`

当前的地形图层

***

### getTilesLayerBottomAltitude()

> **getTilesLayerBottomAltitude**: (`name`) => `Promise`\<`number`\>

Defined in: index.d.ts:3599

切片底部高程

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`number`\>

切片底部高程

***

### getTilesLayerIgnoreNormal()

> **getTilesLayerIgnoreNormal**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3586

切片是否重新计算法线

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

***

### getTilesLayerLodRangeScale()

> **getTilesLayerLodRangeScale**: (`name`) => `Promise`\<`number`\>

Defined in: index.d.ts:3573

切片图层的LOD层级切换距离缩放系数

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`number`\>

切片图层的LOD层级切换距离缩放系数

***

### getWeather()

> **getWeather**: () => [`Rain`](../interfaces/Rain.md) \| [`Snow`](../interfaces/Snow.md) \| `null`

Defined in: index.d.ts:3972

获取天气参数

#### Returns

[`Rain`](../interfaces/Rain.md) \| [`Snow`](../interfaces/Snow.md) \| `null`

当前天气

***

### insertSlideAtIndex()

> **insertSlideAtIndex**: (`slide`, `index?`) => `Promise`\<`void`\>

Defined in: index.d.ts:4054

在索引处插入幻灯片

#### Parameters

##### slide

[`Slide`](../interfaces/Slide.md)

幻灯片

##### index?

`number`

索引(undefined插入在列表末尾)

#### Returns

`Promise`\<`void`\>

***

### isDepthTestAgainstTerrain()

> **isDepthTestAgainstTerrain**: () => `boolean`

Defined in: index.d.ts:3715

当前地图是否开启地图深度检测

#### Returns

`boolean`

是否开启地图深度检测

***

### isEntitiesLayerMedia()

> **isEntitiesLayerMedia**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3318

矢量图层是否多媒体图层

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### isEntitiesLayerVisible()

> **isEntitiesLayerVisible**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3312

矢量图层可见性

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### isHdrEnable()

> **isHdrEnable**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:3720

当前地图是否开启hdr

#### Returns

`Promise`\<`boolean`\>

是否开启hdr

***

### isShowDebugFPS()

> **isShowDebugFPS**: () => `boolean`

Defined in: index.d.ts:3810

是否显示 fps 信息

#### Returns

`boolean`

***

### isTilesLayerOrderIndependentTranslucency()

> **isTilesLayerOrderIndependentTranslucency**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3561

是否开启透明排序功能（OIT）

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否反色

***

### isTilesLayerRGBTOBGR()

> **isTilesLayerRGBTOBGR**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3548

切片图层是否反色

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否反色

***

### isTilesLayerVisible()

> **isTilesLayerVisible**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3535

切片图层可见性

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否可见

***

### lowerImageLayer()

> **lowerImageLayer**: (`index`) => `boolean`

Defined in: index.d.ts:3254

在影像图层集合中下移影像图层

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

#### Returns

`boolean`

是否成功

***

### lowerImageLayerToBottom()

> **lowerImageLayerToBottom**: (`index`) => `boolean`

Defined in: index.d.ts:3260

在影像图层集合中下移影像图层到最底层

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

#### Returns

`boolean`

是否成功

***

### noneExistEntityNameOfLayer()

> **noneExistEntityNameOfLayer**: (`datasourceName`, `expectEntityName`) => `Promise`\<`string`\>

Defined in: index.d.ts:3411

获取一个图层中不重复的entity.name

#### Parameters

##### datasourceName

`string`

图层名

##### expectEntityName

`string`

希望的名字

#### Returns

`Promise`\<`string`\>

id数组

***

### open()

> **open**: (`map`, `autoPlay?`, `s3mInOrder?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3158

打开互动地图

#### Parameters

##### map

[`IMap3D`](../interfaces/IMap3D.md)

互动地图

##### autoPlay?

`boolean`

当有动画时，是否自动播放。默认不自动播放

##### s3mInOrder?

`boolean`

s3m顺序打开，默认false

#### Returns

`Promise`\<`boolean`\>

当前打开的互动地图

***

### openAnnotation3D()

> **openAnnotation3D**: (`option?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3605

打开天地图三维注记

#### Parameters

##### option?

天地图的token等信息，传 undefiend 为关闭三维注记

###### displayDistance?

`number`

###### token

`string`

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### openIServerScene()

> **openIServerScene**: (`url`, `sceneName?`) => `boolean`

Defined in: index.d.ts:3176

打开 iserver 发布的场景

#### Parameters

##### url

`string`

场景地址 eg: http://www.supermapol.com/realspace/services/3D-CQBaiMoMeiHua-2/rest/realspace

##### sceneName?

`string`

要打开的场景名，默认打开第一个

#### Returns

`boolean`

是否成功

***

### openTerrainLayer()

> **openTerrainLayer**: (`name`, `provider`) => `boolean`

Defined in: index.d.ts:3183

打开地形图层

#### Parameters

##### name

`string`

要添加的图层名

##### provider

[`TerrainProvider`](TerrainProvider.md)

地形图层provider

#### Returns

`boolean`

是否成功

***

### pausePropertyAnimation()

> **pausePropertyAnimation**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:3894

暂停属性动画

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### pickElement()

> **pickElement**: (`screenPoint`) => \{ `elementId`: `string`; `elementType`: `"primitive"` \| `"entity"` \| `"s3m"` \| `"tracking"`; `layerName`: `string`; \} \| `undefined`

Defined in: index.d.ts:3836

屏幕点击取对象

#### Parameters

##### screenPoint

[`Vector2`](../interfaces/Vector2.md)

屏幕点

#### Returns

\{ `elementId`: `string`; `elementType`: `"primitive"` \| `"entity"` \| `"s3m"` \| `"tracking"`; `layerName`: `string`; \} \| `undefined`

***

### pickPosition()

> **pickPosition**: (`screenPoint`, `isGlobePoint?`) => [`Vector3`](../interfaces/Vector3.md) \| `null`

Defined in: index.d.ts:3830

屏幕点转经纬度类型三维点

#### Parameters

##### screenPoint

[`Vector2`](../interfaces/Vector2.md)

屏幕点

##### isGlobePoint?

`boolean`

该参数已经废弃，直接从球面上pick

#### Returns

[`Vector3`](../interfaces/Vector3.md) \| `null`

***

### raiseImageLayer()

> **raiseImageLayer**: (`index`) => `boolean`

Defined in: index.d.ts:3242

在影像图层集合中上移影像图层

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

#### Returns

`boolean`

是否成功

***

### raiseImageLayerToTop()

> **raiseImageLayerToTop**: (`index`) => `boolean`

Defined in: index.d.ts:3248

在影像图层集合中上移影像图层到最顶层

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

#### Returns

`boolean`

是否成功

***

### removeEntitiesLayer()

> **removeEntitiesLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3286

移除矢量图层

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### removeEntity()

> **removeEntity**: (`name`, `entityId`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3366

图层删除对象

#### Parameters

##### name

`string`

图层名

##### entityId

`string`

对象id

#### Returns

`Promise`\<`boolean`\>

***

### removeImageLayer()

> **removeImageLayer**: (`index`) => `boolean`

Defined in: index.d.ts:3222

移除影像图层

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

#### Returns

`boolean`

是否成功

***

### removeS3MTilesLayer()

> **removeS3MTilesLayer**: (`name`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3491

移除切片缓存图层(不能移除scene中的切片图层)

#### Parameters

##### name

`string`

图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### removeSlideAtIndex()

> **removeSlideAtIndex**: (`index`) => `Promise`\<`void`\>

Defined in: index.d.ts:4065

删除索引处幻灯片

#### Parameters

##### index

`number`

索引

#### Returns

`Promise`\<`void`\>

***

### renameEntitiesLayer()

> **renameEntitiesLayer**: (`currentName`, `newName`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3293

矢量图层更名

#### Parameters

##### currentName

`string`

现在的图层名

##### newName

`string`

新的的图层名

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setAction()

> **setAction**: (`action`) => `boolean`

Defined in: index.d.ts:3879

设置action

#### Parameters

##### action

[`SceneAction`](../enumerations/SceneAction.md)

#### Returns

`boolean`

设置是否成功

***

### setAnnotation3DVisible()

> **setAnnotation3DVisible**: (`visible`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3614

设置三维注记图层显隐

#### Parameters

##### visible

`boolean`

是否显示

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setAtmosphere()

> **setAtmosphere**: (`option`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3637

设置大气参数

#### Parameters

##### option

[`Atmosphere`](../interfaces/Atmosphere.md)

大气参数

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setBloomEffect()

> **setBloomEffect**: (`param`) => `Promise`\<`void`\>

Defined in: index.d.ts:3741

设置泛光效果

#### Parameters

##### param

[`BloomEffect`](../interfaces/BloomEffect.md)

泛光效果参数

#### Returns

`Promise`\<`void`\>

***

### setCameraDragMode()

> **setCameraDragMode**: (`typeString`) => `void`

Defined in: index.d.ts:3785

设置相机拖动逻辑

#### Parameters

##### typeString

CDT_1 : 1.漫游：左键  2.倾斜：中键；ctrl+左键；ctrl+右键  3.推近：右键；滚轮
 CDT_2 : 1.漫游：左键  2.倾斜：右键；ctrl+右键  3.推近：中键；滚轮；ctrl+左键

`"CDT_1"` | `"CDT_2"`

#### Returns

`void`

***

### setCloudImage()

> **setCloudImage**: (`url?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3857

设置云层纹理

#### Parameters

##### url?

`string`

纹理图片地址

#### Returns

`Promise`\<`boolean`\>

***

### setColorCorrection()

> **setColorCorrection**: (`param`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3846

颜色校正参数设置方法

#### Parameters

##### param

[`ColorCorrectionType`](../interfaces/ColorCorrectionType.md)

颜色校正参数

#### Returns

`Promise`\<`boolean`\>

***

### setDepthTestAgainstTerrain()

> **setDepthTestAgainstTerrain**: (`enable`) => `Promise`\<`void`\>

Defined in: index.d.ts:3710

设置地形深度检测

#### Parameters

##### enable

`boolean`

是否开启地图深度检测

#### Returns

`Promise`\<`void`\>

***

### setEntitiesLayerVisible()

> **setEntitiesLayerVisible**: (`name`, `visible`) => `Promise`\<`void`\>

Defined in: index.d.ts:3306

设置矢量图层可见

#### Parameters

##### name

`string`

图层名

##### visible

`boolean`

是否可见

#### Returns

`Promise`\<`void`\>

是否成功

***

### setFog()

> **setFog**: (`param`) => `Promise`\<`void`\>

Defined in: index.d.ts:3700

设置雾化效果

#### Parameters

##### param

[`Fog`](../interfaces/Fog.md)

雾化效果参数

#### Returns

`Promise`\<`void`\>

***

### setGraticulesParam()

> **setGraticulesParam**: (`param?`) => `void`

Defined in: index.d.ts:3659

设置经纬网参数

#### Parameters

##### param?

[`GraticuleParam`](../interfaces/GraticuleParam.md)

经纬网参数

#### Returns

`void`

***

### setGraticuleVisible()

> **setGraticuleVisible**: (`visible`) => `void`

Defined in: index.d.ts:3670

设置经纬网可见性

#### Parameters

##### visible

`boolean`

#### Returns

`void`

***

### setHdrEnable()

> **setHdrEnable**: (`enable`) => `Promise`\<`void`\>

Defined in: index.d.ts:3736

设置是否开启hdr

#### Parameters

##### enable

`boolean`

是否开启hdr

#### Returns

`Promise`\<`void`\>

***

### setHypsometricSetting()

> **setHypsometricSetting**: (`setting`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3979

等高显示设置

#### Parameters

##### setting

`Pick`\<[`HypsometricSetting`](../interfaces/HypsometricSetting.md), `"mode"`\> & `Partial`\<[`HypsometricSetting`](../interfaces/HypsometricSetting.md)\>

#### Returns

`Promise`\<`boolean`\>

***

### setImageLayerAlpha()

> **setImageLayerAlpha**: (`index`, `alpha`) => `boolean`

Defined in: index.d.ts:3236

设置影像图层透明度

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

##### alpha

`number`

透明度 0:完全透明,1:不透明

#### Returns

`boolean`

是否成功

***

### setImageLayerVisible()

> **setImageLayerVisible**: (`index`, `visible`) => `boolean`

Defined in: index.d.ts:3229

设置影像图层可见

#### Parameters

##### index

`number`

影像图层在影像图层集合中的序号

##### visible

`boolean`

是否可见

#### Returns

`boolean`

是否成功

***

### setLighting()

> **setLighting**: (`param`) => `Promise`\<`void`\>

Defined in: index.d.ts:3680

设置地球光照阴影参数

#### Parameters

##### param

[`GlobeLighting`](../interfaces/GlobeLighting.md)

地球光照阴影参数

#### Returns

`Promise`\<`void`\>

***

### setLocalResourceBase()

> **setLocalResourceBase**: (`base`) => `void`

Defined in: index.d.ts:4078

设置本地资源文件请求的base路径

#### Parameters

##### base

`string`

#### Returns

`void`

***

### setLocalSymbolBase()

> **setLocalSymbolBase**: (`base`) => `void`

Defined in: index.d.ts:4082

设置本地符号资源文件请求的base路径

#### Parameters

##### base

`string`

#### Returns

`void`

***

### setMapQuality()

> **setMapQuality**: (`quality`) => `void`

Defined in: index.d.ts:3773

设置地图清晰度，会保存到地图设置中

#### Parameters

##### quality

`number`

显示质量 范围 0 - 100

#### Returns

`void`

***

### setMaximumZoomDistance()

> **setMaximumZoomDistance**: (`value`) => `void`

Defined in: index.d.ts:3731

设置最大视距

#### Parameters

##### value

`number`

设置的值

#### Returns

`void`

***

### setRealityMeshMemoryLimit()

> **setRealityMeshMemoryLimit**: (`limited`) => `void`

Defined in: index.d.ts:3762

设置加载realityMesh时内存限制（单位MB）

#### Parameters

##### limited

`number`

#### Returns

`void`

***

### setRequestRenderMode()

> **setRequestRenderMode**: (`value`) => `void`

Defined in: index.d.ts:3819

是否开启主动刷新

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### setResourceBase()

> **setResourceBase**: (`base`) => `void`

Defined in: index.d.ts:4074

设置资源文件请求的base路径
未设置则从当前url读取

#### Parameters

##### base

`string`

#### Returns

`void`

***

### setS3MLayerOverlapDisplay()

> **setS3MLayerOverlapDisplay**: (`layer`, `overlap`) => `Promise`\<`void`\>

Defined in: index.d.ts:3504

设置S3M图层是否开启遮挡

#### Parameters

##### layer

`string`

要设置的图层名

##### overlap

`boolean`

是否遮挡

#### Returns

`Promise`\<`void`\>

***

### setS3MLayerRelatedTextLayer()

> **setS3MLayerRelatedTextLayer**: (`iconLayer`, `textLayer`) => `Promise`\<`void`\>

Defined in: index.d.ts:3510

设置S3M图标图层对应的文本图层

#### Parameters

##### iconLayer

`string`

图标图层名

##### textLayer

文本图层名

`string` | `undefined`

#### Returns

`Promise`\<`void`\>

***

### setS3MTilesWaterStyle()

> **setS3MTilesWaterStyle**: (`name`, `waterStyle`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3516

set水面风格（不能设置图层组内图层风格）

#### Parameters

##### name

`string`

图层名

##### waterStyle

[`S3MWaterStyle`](../interfaces/S3MWaterStyle.md)

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setSceneMode()

> **setSceneMode**: (`mode`) => `Promise`\<`void`\>

Defined in: index.d.ts:3751

设置场景模式

#### Parameters

##### mode

[`SceneMode`](../enumerations/SceneMode.md)

场景模式

#### Returns

`Promise`\<`void`\>

***

### setSceneQuality()

> **setSceneQuality**: (`quality`) => `void`

Defined in: index.d.ts:3796

动态设置场景清晰度。不影响当前地图的设置

#### Parameters

##### quality

`number`

显示质量 范围 0 - 100

#### Returns

`void`

***

### setShadow()

> **setShadow**: (`param`) => `Promise`\<`void`\>

Defined in: index.d.ts:3690

设置对象阴影

#### Parameters

##### param

[`Shadow`](../interfaces/Shadow.md)

对象阴影参数

#### Returns

`Promise`\<`void`\>

***

### setSkybox()

> **setSkybox**: (`skybox?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3620

设置天空盒

#### Parameters

##### skybox?

[`SkyboxResource`](../interfaces/SkyboxResource.md)

天空盒图片资源地址 传 undefeind 为关闭自定义天空盒

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setSkyboxVisible()

> **setSkyboxVisible**: (`visible`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3626

设置天空盒可见

#### Parameters

##### visible

`boolean`

是否可见

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setSlideShow()

> **setSlideShow**: (`slideShow`) => `Promise`\<`void`\>

Defined in: index.d.ts:4042

设置幻灯片列表

#### Parameters

##### slideShow

[`Slide`](../interfaces/Slide.md)[]

幻灯片列表

#### Returns

`Promise`\<`void`\>

***

### setSun()

> **setSun**: (`option`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3648

设置太阳参数

#### Parameters

##### option

[`Sun`](../interfaces/Sun.md)

太阳参数

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### setTerrainExaggeration()

> **setTerrainExaggeration**: (`ratio`) => `Promise`\<`void`\>

Defined in: index.d.ts:3986

设置地形夸张系数

#### Parameters

##### ratio

`number`

地形夸张系数，需要大于 0

#### Returns

`Promise`\<`void`\>

***

### setTerrainLayerVisible()

> **setTerrainLayerVisible**: (`visible`) => `boolean`

Defined in: index.d.ts:3199

设置地形图层可见

#### Parameters

##### visible

`boolean`

是否可见

#### Returns

`boolean`

是否成功

***

### setTilesLayerBottomAltitude()

> **setTilesLayerBottomAltitude**: (`name`, `bottomAltitude`) => `Promise`\<`void`\>

Defined in: index.d.ts:3593

设置切片底部高程

#### Parameters

##### name

`string`

图层名

##### bottomAltitude

`number`

底部高程

#### Returns

`Promise`\<`void`\>

是否成功

***

### setTilesLayerIgnoreNormal()

> **setTilesLayerIgnoreNormal**: (`name`, `ignoreNormal`) => `Promise`\<`void`\>

Defined in: index.d.ts:3580

设置切片重新计算法线

#### Parameters

##### name

`string`

图层名

##### ignoreNormal

`boolean`

是否重新计算

#### Returns

`Promise`\<`void`\>

是否成功

***

### setTilesLayerLodRangeScale()

> **setTilesLayerLodRangeScale**: (`name`, `lodRangeScale`) => `Promise`\<`void`\>

Defined in: index.d.ts:3567

设置切片图层的LOD层级切换距离缩放系数

#### Parameters

##### name

`string`

图层名

##### lodRangeScale

`number`

#### Returns

`Promise`\<`void`\>

***

### setTilesLayerOrderIndependentTranslucency()

> **setTilesLayerOrderIndependentTranslucency**: (`name`, `isOrderIndependentTranslucency`) => `Promise`\<`void`\>

Defined in: index.d.ts:3555

设置是否开启透明排序功能（OIT）

#### Parameters

##### name

`string`

图层名

##### isOrderIndependentTranslucency

`boolean`

#### Returns

`Promise`\<`void`\>

是否成功

***

### setTilesLayerRGBTOBGR()

> **setTilesLayerRGBTOBGR**: (`name`, `isRGBTOBGR`) => `Promise`\<`void`\>

Defined in: index.d.ts:3542

设置切片是否反色

#### Parameters

##### name

`string`

图层名

##### isRGBTOBGR

`boolean`

是否反色

#### Returns

`Promise`\<`void`\>

是否成功

***

### setTilesLayerVisible()

> **setTilesLayerVisible**: (`name`, `visible`) => `Promise`\<`void`\>

Defined in: index.d.ts:3529

设置切片图层可见（不能设置图层组内图层可见性）

#### Parameters

##### name

`string`

图层名

##### visible

`boolean`

是否可见

#### Returns

`Promise`\<`void`\>

是否成功

***

### setWeather()

> **setWeather**: (`weather?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3967

设置当前天气

#### Parameters

##### weather?

[`Rain`](../interfaces/Rain.md) | [`Snow`](../interfaces/Snow.md) | `null`

#### Returns

`Promise`\<`boolean`\>

***

### showCloud()

> **showCloud**: (`show`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3863

云层是否显示，在显示之前需要先吊用setCloudImage设置一个云层纹理

#### Parameters

##### show

`boolean`

为true显示云层，为false不显示云层

#### Returns

`Promise`\<`boolean`\>

***

### showDebugFPS()

> **showDebugFPS**: (`show`) => `Promise`\<`void`\>

Defined in: index.d.ts:3806

显示 fps 信息。默认不显示

#### Parameters

##### show

`boolean`

是否显示

#### Returns

`Promise`\<`void`\>

***

### startPropertyAnimation()

> **startPropertyAnimation**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:3884

播放属性动画

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### stopPropertyAnimation()

> **stopPropertyAnimation**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:3889

停止属性动画

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### translationAnchorToPosition()

> **translationAnchorToPosition**: (`position`) => `void`

Defined in: index.d.ts:4016

球面平移设置目标绝对位置

#### Parameters

##### position

[`Vector3`](../interfaces/Vector3.md)

#### Returns

`void`

***

### translationCurrentDelta()

> **translationCurrentDelta**: () => [`Vector3`](../interfaces/Vector3.md)

Defined in: index.d.ts:4021

当前球面平移结果

#### Returns

[`Vector3`](../interfaces/Vector3.md)

***

### translationHeight()

> **translationHeight**: (`delta`) => `void`

Defined in: index.d.ts:4004

球面平移目标高度调整

#### Parameters

##### delta

`number`

调整高度

#### Returns

`void`

***

### translationXYDistance()

> **translationXYDistance**: (`currentPosition`, `delta_x`, `delta_y`) => `void`

Defined in: index.d.ts:4011

球面沿经纬度按距离平移

#### Parameters

##### currentPosition

[`Vector3`](../interfaces/Vector3.md)

经纬度位置 废弃

##### delta\_x

`number`

沿着纬线移动距离 =>> 改为向右移动距离

##### delta\_y

`number`

沿着经线移动距离 =>> 改为向前移动距离

#### Returns

`void`

***

### upadateLayerLabels()

> **upadateLayerLabels**: (`layerName`, `labelStyle`) => `boolean`

Defined in: index.d.ts:3465

#### Parameters

##### layerName

`string`

##### labelStyle

`Omit`\<[`LabelGraphics`](../interfaces/LabelGraphics.md), `"text"`\>

#### Returns

`boolean`

***

### upadateLayerPOILabels()

> **upadateLayerPOILabels**: (`layerName`, `labelStyle`, `filter?`) => `boolean`

Defined in: index.d.ts:3464

#### Parameters

##### layerName

`string`

##### labelStyle

`Omit`\<[`LabelGraphics`](../interfaces/LabelGraphics.md), `"text"`\>

##### filter?

(`"point"` \| `"model"` \| `"billboard"`)[]

#### Returns

`boolean`

***

### upadateLayerPolygons()

> **upadateLayerPolygons**: (`layerName`, `lineStyle`) => `boolean`

Defined in: index.d.ts:3472

#### Parameters

##### layerName

`string`

##### lineStyle

`Omit`\<[`NofillPolygon`](../interfaces/NofillPolygon.md), `"hierarchy"`\> | `Omit`\<[`SolidPolygon`](../interfaces/SolidPolygon.md), `"hierarchy"`\> | `Omit`\<[`GriddingPolygon`](../interfaces/GriddingPolygon.md), `"hierarchy"`\> | `Omit`\<[`StripePolygon`](../interfaces/StripePolygon.md), `"hierarchy"`\> | `Omit`\<[`ImagePolygon`](../interfaces/ImagePolygon.md), `"hierarchy"`\> | `Omit`\<[`FeatherPolygon`](../interfaces/FeatherPolygon.md), `"hierarchy"`\>

#### Returns

`boolean`

***

### upadateLayerPolylines()

> **upadateLayerPolylines**: (`layerName`, `lineStyle`) => `boolean`

Defined in: index.d.ts:3467

#### Parameters

##### layerName

`string`

##### lineStyle

`Omit`\<[`SolidLine`](../interfaces/SolidLine.md), `"positions"`\> | `Omit`\<[`DashedLine`](../interfaces/DashedLine.md), `"positions"`\> | `Omit`\<[`ContourLine`](../interfaces/ContourLine.md), `"positions"`\> | `Omit`\<[`ArrowLine`](../interfaces/ArrowLine.md), `"positions"`\> | `Omit`\<[`HaloLine`](../interfaces/HaloLine.md), `"positions"`\> | `Omit`\<[`WakeLine`](../interfaces/WakeLine.md), `"positions"`\> | `Omit`\<[`DynamicLine`](../interfaces/DynamicLine.md), `"positions"`\> | `Omit`\<[`RainbowLine`](../interfaces/RainbowLine.md), `"positions"`\> & `object` | `Omit`\<[`WallGraphics`](../interfaces/WallGraphics.md), `"positions"`\> & `object`

#### Returns

`boolean`

***

### upadateLayerTerrainLabels()

> **upadateLayerTerrainLabels**: (`layerName`, `labelStyle`) => `boolean`

Defined in: index.d.ts:3466

#### Parameters

##### layerName

`string`

##### labelStyle

`Omit`\<[`TerrainLabel`](../interfaces/TerrainLabel.md), `"text"`\>

#### Returns

`boolean`

***

### updateEntityDelete()

> **updateEntityDelete**: (`datasourceName`, `entityId`, `type`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3456

图层更新对象，

#### Parameters

##### datasourceName

`string`

##### entityId

`string`

##### type

`string`

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### updateEntityLayerLabelByDiff()

> **updateEntityLayerLabelByDiff**: (`layer`, `diff`) => `void`

Defined in: index.d.ts:4087

#### Parameters

##### layer

`string`

##### diff

`Partial`\<[`ILabelStyle`](../interfaces/ILabelStyle.md)\>

#### Returns

`void`

***

### updateEntityLayerLineByDiff()

> **updateEntityLayerLineByDiff**: (`layer`, `diff`) => `void`

Defined in: index.d.ts:4085

#### Parameters

##### layer

`string`

##### diff

`Partial`\<[`ILineStyle`](../interfaces/ILineStyle.md)\>

#### Returns

`void`

***

### updateEntityLayerPointByDiff()

> **updateEntityLayerPointByDiff**: (`layer`, `diff`) => `void`

Defined in: index.d.ts:4083

#### Parameters

##### layer

`string`

##### diff

`Partial`\<[`IPointStyle`](../interfaces/IPointStyle.md)\>

#### Returns

`void`

***

### updateEntityLayerPointLabelByDiff()

> **updateEntityLayerPointLabelByDiff**: (`layer`, `diff`) => `void`

Defined in: index.d.ts:4084

#### Parameters

##### layer

`string`

##### diff

`Partial`\<[`IPointStyle`](../interfaces/IPointStyle.md)\>

#### Returns

`void`

***

### updateEntityLayerRegionByDiff()

> **updateEntityLayerRegionByDiff**: (`layer`, `diff`) => `void`

Defined in: index.d.ts:4086

#### Parameters

##### layer

`string`

##### diff

`Partial`\<[`IRegionStyle`](../interfaces/IRegionStyle.md)\>

#### Returns

`void`

***

### updateEntityLayerTerrainLabelByDiff()

> **updateEntityLayerTerrainLabelByDiff**: (`layer`, `diff`) => `void`

Defined in: index.d.ts:4088

#### Parameters

##### layer

`string`

##### diff

`Partial`\<[`ILabelStyle`](../interfaces/ILabelStyle.md)\>

#### Returns

`void`

***

### updateEntityModify()

> **updateEntityModify**: (`datasourceName`, `entity`, `polygonExtrudedHeightRalative?`) => `boolean`

Defined in: index.d.ts:3449

图层更新对象，

#### Parameters

##### datasourceName

`string`

##### entity

[`Entity`](../interfaces/Entity.md)

对象,entity.id!==undefined&&图层包含entity.id

##### polygonExtrudedHeightRalative?

`boolean`

polygon.extrudedHeight与面高度相对位置

#### Returns

`boolean`

是否成功

***

### updateLayerModelsOrientation()

> **updateLayerModelsOrientation**: (`layerName`, `orientation`, `orientationAlongVelocity?`) => `boolean`

Defined in: index.d.ts:3463

#### Parameters

##### layerName

`string`

##### orientation

[`HeadingPitchRoll`](../interfaces/HeadingPitchRoll.md) | [`PropertyAnimation`](../interfaces/PropertyAnimation.md)\<[`HeadingPitchRoll`](../interfaces/HeadingPitchRoll.md)\>

##### orientationAlongVelocity?

`boolean`

#### Returns

`boolean`

***

### updateLayerPOIMarkers()

> **updateLayerPOIMarkers**: (`layerName`, `markerStyle`) => `boolean`

Defined in: index.d.ts:3458

*********** 批量更新 *************

#### Parameters

##### layerName

`string`

##### markerStyle

[`PointGraphics`](../interfaces/PointGraphics.md) | [`ModelGraphics`](../interfaces/ModelGraphics.md) & `object` | [`BillboardGraphics`](../interfaces/BillboardGraphics.md) & `object`

#### Returns

`boolean`

***

### updateSlideAtIndex()

> **updateSlideAtIndex**: (`slide`, `index`) => `Promise`\<`void`\>

Defined in: index.d.ts:4060

更新索引处幻灯片

#### Parameters

##### slide

[`Slide`](../interfaces/Slide.md)

幻灯片

##### index

`number`

索引

#### Returns

`Promise`\<`void`\>

***

### viewEntireEntities()

> **viewEntireEntities**: (`entities`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3908

全幅矢量

#### Parameters

##### entities

`object`[]

矢量数组

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### viewEntireEntitiesLayer()

> **viewEntireEntitiesLayer**: (`layerName`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3901

全幅矢量层

#### Parameters

##### layerName

`string`

矢量图层名

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### viewEntireEntitiesList()

> **viewEntireEntitiesList**: (`entities`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3939

全幅矢量

#### Parameters

##### entities

[`Entity`](../interfaces/Entity.md)[]

矢量数组

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### viewEntireGeojson()

> **viewEntireGeojson**: (`geojson`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3932

全幅Geojson

#### Parameters

##### geojson

[`FeatureCollection`](../interfaces/FeatureCollection.md)

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### viewEntireImageLayer()

> **viewEntireImageLayer**: (`index`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3925

全幅影像图层

#### Parameters

##### index

`number`

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### viewEntireS3MLayer()

> **viewEntireS3MLayer**: (`layerName`, `duration`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:3918

全幅S3M图层

#### Parameters

##### layerName

`string`

图层名

##### duration

`number`

动画时间

#### Returns

`Promise`\<`boolean`\>

设置是否成功

***

### zoomToTime()

> **zoomToTime**: (`time`) => `Promise`\<`void`\>

Defined in: index.d.ts:3944

设置时间轴当前时间

#### Parameters

##### time

[`GregorianDate`](../interfaces/GregorianDate.md)

当前时间

#### Returns

`Promise`\<`void`\>
