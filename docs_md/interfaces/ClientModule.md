[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ClientModule

# Interface: ClientModule

Defined in: index.d.ts:5042

Client模块类

包含所有SDK所有功能模块：场景模块，动画模块，服务模块，测量模块，分析模块，放大镜模块，矢量数据管理，瓦片缓存，坐标转换，文件数据转换

## Properties

### analysis

> **analysis**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IAnalysis`](../type-aliases/IAnalysis.md)\>

Defined in: index.d.ts:5063

分析模块

***

### animation

> **animation**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IAnimation`](../type-aliases/IAnimation.md)\>

Defined in: index.d.ts:5057

动画模块

***

### coordTrans

> **coordTrans**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`ICoordTrans`](../type-aliases/ICoordTrans.md)\>

Defined in: index.d.ts:5071

坐标转换

***

### fileConverter

> **fileConverter**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IFileConverter`](../type-aliases/IFileConverter.md)\>

Defined in: index.d.ts:5073

文件数据转换

***

### geometrist

> **geometrist**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IGeometrist`](../type-aliases/IGeometrist.md)\>

Defined in: index.d.ts:5067

矢量数据管理

***

### magnifier

> **magnifier**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IMagnifier`](../type-aliases/IMagnifier.md)\>

Defined in: index.d.ts:5065

放大镜模块

***

### measure

> **measure**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IMeasure`](../type-aliases/IMeasure.md)\>

Defined in: index.d.ts:5061

测量模块

***

### mServer

> **mServer**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IMServer`](../type-aliases/IMServer.md)\>

Defined in: index.d.ts:5059

服务模块

***

### scene

> **scene**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IScene`](../type-aliases/IScene.md)\> & `object`

Defined in: index.d.ts:5044

场景模块

#### Type declaration

##### camera

> **camera**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`ICamera`](../type-aliases/ICamera.md)\>

相机

##### particleLayers

> **particleLayers**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IParticleLayers`](../type-aliases/IParticleLayers.md)\>

粒子图层

##### primitiveLayers

> **primitiveLayers**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IPrimitiveLayers`](../type-aliases/IPrimitiveLayers.md)\>

相机

##### scanEffect

> **scanEffect**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`IScanEffect`](../type-aliases/IScanEffect.md)\>

相机扫描

##### trackingLayer

> **trackingLayer**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`ITrackingLayer`](../type-aliases/ITrackingLayer.md)\>

跟踪图层

***

### tileCache

> **tileCache**: [`AsyncFunction`](../type-aliases/AsyncFunction.md)\<[`ITileCache`](../type-aliases/ITileCache.md)\>

Defined in: index.d.ts:5069

瓦片缓存
