[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ICamera

# Type Alias: ICamera

> **ICamera** = `object`

Defined in: index.d.ts:2616

场景

## Properties

### compassPointingNorth()

> **compassPointingNorth**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:2671

罗盘指北

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### enableRotate()

> **enableRotate**: (`enable`) => `Promise`\<`void`\>

Defined in: index.d.ts:2738

开启或关闭相机旋转

在 2D 或 3D 模式下有效

#### Parameters

##### enable

`boolean`

`true`开启，`false`关闭

#### Returns

`Promise`\<`void`\>

***

### enableTilt()

> **enableTilt**: (`enable`) => `Promise`\<`void`\>

Defined in: index.d.ts:2745

开启或关闭相机俯仰

在 3D 或 Columbus(2.5D) 模式下有效

#### Parameters

##### enable

`boolean`

`true`开启，`false`关闭

#### Returns

`Promise`\<`void`\>

***

### enableTranslate()

> **enableTranslate**: (`enable`) => `Promise`\<`void`\>

Defined in: index.d.ts:2752

开启或关闭相机移动

在 2D 或 Columbus(2.5D) 模式下有效

#### Parameters

##### enable

`boolean`

`true`开启，`false`关闭

#### Returns

`Promise`\<`void`\>

***

### enableZoom()

> **enableZoom**: (`enable`) => `Promise`\<`void`\>

Defined in: index.d.ts:2758

开启或关闭相机缩放

#### Parameters

##### enable

`boolean`

`true`开启，`false`关闭

#### Returns

`Promise`\<`void`\>

***

### flyForward()

> **flyForward**: (`byDistance`, `byLookDirection?`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2636

相机拉近（沿相机朝向）
byDistance 拉近距离（单位米，正表示拉近，负表示拉远）
byLookDirection 是否沿着视野方向（默认否）
bySecends 相机移动过场动画时间（单位秒，默认值1）

#### Parameters

##### byDistance

`number`

##### byLookDirection?

`boolean`

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### flyRight()

> **flyRight**: (`byDistance`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2643

相机平移（沿相机右侧）
byDistance 平移距离（单位米，正表示右，负表示左）
bySecends 相机移动过场动画时间（单位秒，默认值1）

#### Parameters

##### byDistance

`number`

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### flyTo()

> **flyTo**: (`camera`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2657

相机移动
Camera移动到的目标相机
bySecends 相机移动过场动画时间（单位秒，默认值1）

#### Parameters

##### camera

[`Camera`](../interfaces/Camera.md)

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### flyUp()

> **flyUp**: (`byDistance`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2650

相机平移（沿相机上方）
byDistance 平移距离（单位米，正表示上，负表示下）
bySecends 相机移动过场动画时间（单位秒，默认值1）

#### Parameters

##### byDistance

`number`

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### getCameraParam()

> **getCameraParam**: () => [`Camera`](../interfaces/Camera.md) \| `null`

Defined in: index.d.ts:2709

获取相机位置参数

#### Returns

[`Camera`](../interfaces/Camera.md) \| `null`

相机位置参数

***

### getPositionInCameraSpace()

> **getPositionInCameraSpace**: (`position`) => [`Vector3`](../interfaces/Vector3.md)

Defined in: index.d.ts:2731

获取世界点在相机坐标系下的坐标

#### Parameters

##### position

[`Vector3`](../interfaces/Vector3.md)

经纬度

#### Returns

[`Vector3`](../interfaces/Vector3.md)

相机坐标系下的坐标

***

### getRelativePosition()

> **getRelativePosition**: (`param`) => [`Vector3`](../interfaces/Vector3.md) \| `null`

Defined in: index.d.ts:2714

获取相机相对位置参数

#### Parameters

##### param

###### forward?

`number`

###### right?

`number`

###### up?

`number`

#### Returns

[`Vector3`](../interfaces/Vector3.md) \| `null`

相对位置坐标

***

### getViewBounds()

> **getViewBounds**: () => [`Bounds`](../interfaces/Bounds.md) \| `undefined`

Defined in: index.d.ts:2783

获取当前视角下地球可视的经纬度范围
若地球不可见，则返回 undefined

#### Returns

[`Bounds`](../interfaces/Bounds.md) \| `undefined`

***

### heading()

> **heading**: (`angle`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2684

相机朝向
angle与北夹角角度
bySecond转向时间

#### Parameters

##### angle

`number`

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### headingAt()

> **headingAt**: (`angle`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2677

罗盘指向（视野焦点不变，若无焦点转向失败）
angle与北夹角角度

#### Parameters

##### angle

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### isEnableRotate()

> **isEnableRotate**: () => `boolean`

Defined in: index.d.ts:2763

是否开启相机旋转

#### Returns

`boolean`

是否开启相机旋转

***

### isEnableTilt()

> **isEnableTilt**: () => `boolean`

Defined in: index.d.ts:2768

是否开启相机俯仰

#### Returns

`boolean`

是否开启相机俯仰

***

### isEnableTranslate()

> **isEnableTranslate**: () => `boolean`

Defined in: index.d.ts:2773

是否开启相机移动

#### Returns

`boolean`

是否开启相机移动

***

### isEnableZoom()

> **isEnableZoom**: () => `boolean`

Defined in: index.d.ts:2778

是否开启相机缩放

#### Returns

`boolean`

是否开启相机缩放

***

### pitch()

> **pitch**: (`angle`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2697

相机俯仰
angle角度，0为平视，-90为top-down视角
bySecond转向时间

#### Parameters

##### angle

`number`

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### pitchAt()

> **pitchAt**: (`angle`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2690

俯仰角（视野焦点不变，若无焦点转向失败）
angle角度，0为平视，-90为top-down视角

#### Parameters

##### angle

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### setCameraRadian()

> **setCameraRadian**: (`camera`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2663

相机弧度
Camera弧度

#### Parameters

##### camera

###### heading

`number`

###### pitch

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### translateRelativeCamera()

> **translateRelativeCamera**: (`position`, `right`, `forward`) => [`Vector3`](../interfaces/Vector3.md) \| `null`

Defined in: index.d.ts:2725

相对相机在球面移动

#### Parameters

##### position

[`Vector3`](../interfaces/Vector3.md)

##### right

`number`

##### forward

`number`

#### Returns

[`Vector3`](../interfaces/Vector3.md) \| `null`

位置坐标

***

### viewEntire()

> **viewEntire**: (`bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2622

全幅显示球
bySecends 当前相机到全幅相机过场动画时间（单位秒，默认值1）

#### Parameters

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### viewEntireCurrent()

> **viewEntireCurrent**: (`duration?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2628

飞行到当前位置的上空，使地球全幅

#### Parameters

##### duration?

`number`

飞行时间，单位秒。 如果不指定，将自动计算一个最合适的飞行时间

#### Returns

`Promise`\<`boolean`\>

是否成功

***

### zoom()

> **zoom**: (`byRatio`, `bySecends?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:2704

放大/缩小（按倍数拉近/拉远相机）
byRatio 放大倍数（正表示放大，负表示缩小）
bySecends 相机移动过场动画时间（单位秒，默认值1）

#### Parameters

##### byRatio

`number`

##### bySecends?

`number`

#### Returns

`Promise`\<`boolean`\>

成功/失败
