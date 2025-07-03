[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IAnimation

# Type Alias: IAnimation

> **IAnimation** = `object`

Defined in: index.d.ts:2534

## Properties

### clear()

> **clear**: () => `void`

Defined in: index.d.ts:2555

清除当前动画

#### Returns

`void`

***

### getAudioSubtitle()

> **getAudioSubtitle**: () => [`AudioSubtitle`](../interfaces/AudioSubtitle.md)[]

Defined in: index.d.ts:2551

获取音频字幕

#### Returns

[`AudioSubtitle`](../interfaces/AudioSubtitle.md)[]

音频字幕。每一句话一个对象。

***

### getAudioVolume()

> **getAudioVolume**: () => `number`

Defined in: index.d.ts:2611

获取音量

#### Returns

`number`

当前音量

***

### getCurrentAnimation()

> **getCurrentAnimation**: () => [`AnimationParam`](AnimationParam.md) \| `null`

Defined in: index.d.ts:2557

获取当前加载的动画

#### Returns

[`AnimationParam`](AnimationParam.md) \| `null`

***

### getCurrentTime()

> **getCurrentTime**: () => `number`

Defined in: index.d.ts:2580

获取当前播放进度时间

#### Returns

`number`

当前进度时间，单位秒

***

### getDuration()

> **getDuration**: () => `number`

Defined in: index.d.ts:2575

获取动画时长

#### Returns

`number`

动画时长，单位秒

***

### getFlyStops()

> **getFlyStops**: () => [`FlyStop`](../interfaces/FlyStop.md)[]

Defined in: index.d.ts:2600

获取相机飞行经过的所有站点

#### Returns

[`FlyStop`](../interfaces/FlyStop.md)[]

相机飞行经过的所有站点，没有飞行动画返回空数组

***

### getPlayRate()

> **getPlayRate**: () => `number`

Defined in: index.d.ts:2590

获取播放速率

#### Returns

`number`

播放速率，大于1加速，小于1减速

***

### load()

> **load**: (`animation`, `id?`) => `void`

Defined in: index.d.ts:2540

加载动画

#### Parameters

##### animation

[`AnimationParam`](AnimationParam.md)

动画参数

##### id?

`string`

用来识别此动画的id

#### Returns

`void`

***

### loadAudios()

> **loadAudios**: (`data`) => `void`

Defined in: index.d.ts:2546

加载音频动画 [AnimationParam.audio](AnimationParam.md#audio) 对应的音频数据或路径

#### Parameters

##### data

`string`[] | `string`

#### Returns

`void`

***

### pause()

> **pause**: () => `void`

Defined in: index.d.ts:2566

暂停动画

#### Returns

`void`

***

### play()

> **play**: (`time?`) => `void`

Defined in: index.d.ts:2562

播放动画

#### Parameters

##### time?

`number`

指定开始时间，默认从0s开始。仅开始有效

#### Returns

`void`

***

### setAudioVolume()

> **setAudioVolume**: (`value`) => `void`

Defined in: index.d.ts:2606

设置音量

#### Parameters

##### value

`number`

范围0～1

#### Returns

`void`

***

### setPlayRate()

> **setPlayRate**: (`rate`) => `void`

Defined in: index.d.ts:2585

设置播放速率

#### Parameters

##### rate

`number`

播放速率，大于1加速，小于1减速

#### Returns

`void`

***

### stop()

> **stop**: () => `void`

Defined in: index.d.ts:2570

停止动画

#### Returns

`void`

***

### zoomToTime()

> **zoomToTime**: (`time`) => `void`

Defined in: index.d.ts:2595

定位到具体时间

#### Parameters

##### time

`number`

要定位到的时间，单位秒

#### Returns

`void`
