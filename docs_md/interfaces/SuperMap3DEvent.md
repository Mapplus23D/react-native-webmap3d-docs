[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / SuperMap3DEvent

# Interface: SuperMap3DEvent

Defined in: index.d.ts:4181

## Properties

### fly\_stop\_arrived

> **fly\_stop\_arrived**: [`RouteStop`](RouteStop.md)

Defined in: index.d.ts:4183

飞行站点抵达回调

***

### onAnimationEnd

> **onAnimationEnd**: `string`

Defined in: index.d.ts:4206

动画播放完成回调。返回动画的id。对从地图播放的动画来说，返回的是地图id的字符串

***

### onAnimationPause

> **onAnimationPause**: `string`

Defined in: index.d.ts:4202

动画暂停回调。返回动画的id。

***

### onAnimationPlay

> **onAnimationPlay**: `string`

Defined in: index.d.ts:4200

动画播放回调。返回动画的id。

***

### onAnimationStop

> **onAnimationStop**: `string`

Defined in: index.d.ts:4204

动画停止回调。返回动画的id。

***

### onCacheConnectionClose

> **onCacheConnectionClose**: `undefined`

Defined in: index.d.ts:4224

***

### onS3mLayersAdded

> **onS3mLayersAdded**: `boolean`

Defined in: index.d.ts:4208

打开地图时s3m图层加载完成回调

***

### record\_blob

> **record\_blob**: `string`

Defined in: index.d.ts:4223

***

### right\_click

> **right\_click**: `object`

Defined in: index.d.ts:4219

鼠标右键点击事件

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### selected\_entity

> **selected\_entity**: `object`[]

Defined in: index.d.ts:4185

选中Entity回调

#### entityId

> **entityId**: `string`

#### layerName

> **layerName**: `string`

***

### selected\_primitive

> **selected\_primitive**: `object`[]

Defined in: index.d.ts:4195

选中Primitive回调

#### layerName

> **layerName**: `string`

#### primitiveId

> **primitiveId**: `string`

***

### selected\_s3m

> **selected\_s3m**: `object`[]

Defined in: index.d.ts:4190

s3m选中回调

#### id

> **id**: `number`

#### layerName

> **layerName**: `string`

***

### touch\_event

> **touch\_event**: `object`

Defined in: index.d.ts:4210

touch监听 'touchBegin' 'touchEnd' 'touchMove' ‘touchClick’

#### eventType

> **eventType**: `"touchBegin"` \| `"touchEnd"` \| `"touchMove"` \| `"touchClick"`

#### prex?

> `optional` **prex**: `number`

#### prey?

> `optional` **prey**: `number`

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### translation\_end\_event

> **translation\_end\_event**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:4217
