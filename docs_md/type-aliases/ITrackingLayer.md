[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / ITrackingLayer

# Type Alias: ITrackingLayer

> **ITrackingLayer** = `object`

Defined in: index.d.ts:4789

跟踪图层

可以存放临时数据，例如：存放搜索结果，绘制对象（实线，虚线，曲线，矩形，圆，多边形），编辑对象（新增节点，删除节点，移动节点）

## Properties

### addEntity()

> **addEntity**: (`entity`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4799

临时层添加对象 ,id不为空

#### Parameters

##### entity

[`Entity`](../interfaces/Entity.md)

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### addPolygonOutLine()

> **addPolygonOutLine**: (`layerName`, `entityId`) => `Promise`\<`string`\>

Defined in: index.d.ts:4806

临时层高亮面轮廓
layerName 图层名
entityId 对象id

#### Parameters

##### layerName

`string`

##### entityId

`string`

#### Returns

`Promise`\<`string`\>

临时层轮廓线id

***

### createAddVertex()

> **createAddVertex**: (`vertexPosition`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4851

#### Parameters

##### vertexPosition

[`Vector3`](../interfaces/Vector3.md) | [`Vector2`](../interfaces/Vector2.md)

#### Returns

`Promise`\<`boolean`\>

***

### createEnd()

> **createEnd**: () => `Promise`\<[`Vector3`](../interfaces/Vector3.md)[]\>

Defined in: index.d.ts:4852

#### Returns

`Promise`\<[`Vector3`](../interfaces/Vector3.md)[]\>

***

### createPolygon()

> **createPolygon**: (`classificationType`, `positions?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4850

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

##### positions?

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

#### Returns

`Promise`\<`boolean`\>

***

### createPolyline()

> **createPolyline**: (`classificationType`, `positions?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4849

手绘使用添加接口

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

##### positions?

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

#### Returns

`Promise`\<`boolean`\>

***

### currentEditVertex()

> **currentEditVertex**: () => [`Vector3`](../interfaces/Vector3.md)[] \| [`Circle`](../interfaces/Circle.md) \| [`Rectangle`](../interfaces/Rectangle.md) \| [`Spline`](../interfaces/Spline.md)

Defined in: index.d.ts:4979

获取当前编辑结果

#### Returns

[`Vector3`](../interfaces/Vector3.md)[] \| [`Circle`](../interfaces/Circle.md) \| [`Rectangle`](../interfaces/Rectangle.md) \| [`Spline`](../interfaces/Spline.md)

编辑结果数组（地理球面坐标数组）

***

### editAddVertex()

> **editAddVertex**: (`vertexPosition`, `vertexIndex?`) => `boolean`

Defined in: index.d.ts:4948

添加顶点

#### Parameters

##### vertexPosition

添加顶点坐标（球面地理坐标或屏幕点坐标）

[`Vector3`](../interfaces/Vector3.md) | [`Vector2`](../interfaces/Vector2.md)

##### vertexIndex?

`number`

添加顶点所到线段的索引（vertexIndex===undefined ? 加到editIndex+1处 : 加到vertexIndex处 vertexIndex===-1，加到最后）

#### Returns

`boolean`

删除成功/失败

***

### editCircle()

> **editCircle**: (`classificationType`, `isFilled`, `center?`, `radius?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4879

开始圆

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

贴地模式

##### isFilled

`boolean`

是否填充

##### center?

[`Vector3`](../interfaces/Vector3.md)

圆心点

##### radius?

`number`

半径（默认为0）

#### Returns

`Promise`\<`boolean`\>

开始成功/失败

***

### editEnd()

> **editEnd**: () => [`Vector3`](../interfaces/Vector3.md)[] \| [`Circle`](../interfaces/Circle.md) \| [`Rectangle`](../interfaces/Rectangle.md) \| [`Spline`](../interfaces/Spline.md)

Defined in: index.d.ts:4984

结束编辑

#### Returns

[`Vector3`](../interfaces/Vector3.md)[] \| [`Circle`](../interfaces/Circle.md) \| [`Rectangle`](../interfaces/Rectangle.md) \| [`Spline`](../interfaces/Spline.md)

编辑结果数组（地理球面坐标数组）

***

### editMoveVertex()

> **editMoveVertex**: (`vertexPosition`, `vertexIndex?`) => `boolean`

Defined in: index.d.ts:4955

移动顶点

#### Parameters

##### vertexPosition

顶点位置（球面地理坐标或屏幕点坐标）

[`Vector3`](../interfaces/Vector3.md) | [`Vector2`](../interfaces/Vector2.md)

##### vertexIndex?

`number`

移动节点的索引 if(vertexIndex===undefined){vertexIndex = editIndex},vertexIndex==-1时移动最后一个点

#### Returns

`boolean`

***

### editPickSegment()

> **editPickSegment**: (`screenPosition`) => `object`

Defined in: index.d.ts:4916

vertex0  segment0  vertex1  segment1  vertex2     ...    vertexN
     |        |         |        |          |                   |
     *——————————————————*———————————————————*———————————————————*
     |                                                          |
     |_________________segmentN(polygon only)___________________|

通过屏幕点拾取编辑对象线段索引

#### Parameters

##### screenPosition

[`Vector2`](../interfaces/Vector2.md)

#### Returns

`object`

segmentIndex线段索引值（-1表示拾取失败）,  position:点击位置）

##### position

> **position**: [`Vector3`](../interfaces/Vector3.md)

##### segmetIndex

> **segmetIndex**: `number`

***

### editPickVertex()

> **editPickVertex**: (`screenPosition`) => `number`

Defined in: index.d.ts:4904

通过屏幕点拾取编辑对象顶点索引

#### Parameters

##### screenPosition

[`Vector2`](../interfaces/Vector2.md)

#### Returns

`number`

vertexIndex:拾取到的顶点索引（-1表示拾取失败）

***

### editPolygon()

> **editPolygon**: (`classificationType`, `positions?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4870

开始面编辑

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

贴地模式

##### positions?

节点数组（支持传入undefine或空数）

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

#### Returns

`Promise`\<`boolean`\>

开始成功/失败

***

### editPolyline()

> **editPolyline**: (`classificationType`, `positions?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4863

开始线编辑

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

贴地模式

##### positions?

节点数组（支持传入undefine或空数）

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

#### Returns

`Promise`\<`boolean`\>

开始成功/失败

***

### editRectangle()

> **editRectangle**: (`classificationType`, `isFilled`, `center?`, `heading?`, `w?`, `h?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4889

开始矩形

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

贴地模式

##### isFilled

`boolean`

是否填充

##### center?

[`Vector3`](../interfaces/Vector3.md)

中心点

##### heading?

`number`

朝向

##### w?

`number`

##### h?

`number`

#### Returns

`Promise`\<`boolean`\>

开始成功/失败

***

### editRemoveVertex()

> **editRemoveVertex**: (`vertexIndex?`) => `boolean`

Defined in: index.d.ts:4941

删除顶点

#### Parameters

##### vertexIndex?

`number`

删除的顶点的索引（ if(vertexIndex===undefined){vertexIndex = editIndex},vertexIndex==-1时删除最后一个点,vertexIndex越界删除失败）

#### Returns

`boolean`

删除成功/失败

***

### editSpline()

> **editSpline**: (`classificationType`, `splineType`, `countPerSegment?`, `positions?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4898

开始Spline

#### Parameters

##### classificationType

[`ClassificationType`](../enumerations/ClassificationType.md)

贴地模式

##### splineType

[`SLineType`](../enumerations/SLineType.md)

SLineType

##### countPerSegment?

`number`

每一段点个数

##### positions?

节点数组（支持传入undefine或空数）

[`Vector3`](../interfaces/Vector3.md)[] | `number`[]

#### Returns

`Promise`\<`boolean`\>

开始成功/失败

***

### endEditTest()

> **endEditTest**: () => `Promise`\<`void`\>

Defined in: index.d.ts:4974

结束预览

#### Returns

`Promise`\<`void`\>

***

### flyTo()

> **flyTo**: (`name`, `duration?`) => `void`

Defined in: index.d.ts:4845

飞行到指定对象上

#### Parameters

##### name

`string`

##### duration?

`number`

#### Returns

`void`

***

### getAllTrackingIds()

> **getAllTrackingIds**: () => `string`[]

Defined in: index.d.ts:4841

获取所有tracking对象id

#### Returns

`string`[]

***

### getEditVertexIndex()

> **getEditVertexIndex**: () => `Promise`\<`number`\>

Defined in: index.d.ts:4930

获取编辑点

#### Returns

`Promise`\<`number`\>

编辑点索引（-1表示未设置）

***

### getEditVertexPosition()

> **getEditVertexPosition**: () => [`Vector3`](../interfaces/Vector3.md) \| `undefined`

Defined in: index.d.ts:4935

获取编辑点坐标

#### Returns

[`Vector3`](../interfaces/Vector3.md) \| `undefined`

编辑点

***

### getEntity()

> **getEntity**: (`entityId`) => `Promise`\<[`Entity`](../interfaces/Entity.md) \| `undefined`\>

Defined in: index.d.ts:4831

临时层获取对象对象

#### Parameters

##### entityId

`string`

对象Id

#### Returns

`Promise`\<[`Entity`](../interfaces/Entity.md) \| `undefined`\>

找到返回对象Entity或未找到返回undefined

***

### onTrackingLayer()

> **onTrackingLayer**: (`entityId`) => `string` \| `undefined`

Defined in: index.d.ts:4837

判断对象是否在临时层

#### Parameters

##### entityId

`string`

对象Id

#### Returns

`string` \| `undefined`

是/否

***

### removeAll()

> **removeAll**: () => `Promise`\<`boolean`\>

Defined in: index.d.ts:4794

清空临时层

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### removeEntity()

> **removeEntity**: (`entityId`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4825

临时层删除对象

#### Parameters

##### entityId

`string`

对象Id

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### setEditVertexIndex()

> **setEditVertexIndex**: (`vertexIndex`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4925

设置编辑点（并高亮之）

#### Parameters

##### vertexIndex

`number`

编辑点索引（-1表示取消编辑点，该点高亮消失。PS：有效值【-1,0...length-1】）

#### Returns

`Promise`\<`boolean`\>

设置是否成功（失败原因：越界，线长为0）

***

### testEditAddVertex()

> **testEditAddVertex**: (`vertexPosition`, `vertexIndex?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4962

预添加

#### Parameters

##### vertexPosition

预添加顶点坐标（球面地理坐标或屏幕点坐标）

[`Vector3`](../interfaces/Vector3.md) | [`Vector2`](../interfaces/Vector2.md)

##### vertexIndex?

`number`

预添加顶点所到线段的索引（vertexIndex===undefined ? 加到editIndex+1处 : 加到vertexIndex处 vertexIndex===-1，加到最后）

#### Returns

`Promise`\<`boolean`\>

***

### testEditMoveVertex()

> **testEditMoveVertex**: (`vertexPosition`, `vertexIndex?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4969

预移动

#### Parameters

##### vertexPosition

顶点位置（球面地理坐标或屏幕点坐标）

[`Vector3`](../interfaces/Vector3.md) | [`Vector2`](../interfaces/Vector2.md)

##### vertexIndex?

`number`

预移动节点的索引

#### Returns

`Promise`\<`boolean`\>

***

### translateEntity()

> **translateEntity**: (`entityId`, `from`, `to`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4985

#### Parameters

##### entityId

`string`

##### from

[`Vector2`](../interfaces/Vector2.md)

##### to

[`Vector2`](../interfaces/Vector2.md)

#### Returns

`Promise`\<`boolean`\>

***

### updateEntityDelete()

> **updateEntityDelete**: (`entityId`, `type`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4819

临时层更新删除对象部分内容

#### Parameters

##### entityId

`string`

更新对象Id

##### type

`string`

删除内容描述 'label'｜'billboard'｜'model'｜'point'｜'polyline'｜'polygon'

#### Returns

`Promise`\<`boolean`\>

成功/失败

***

### updateEntityModify()

> **updateEntityModify**: (`entity`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:4812

临时层更新对象

#### Parameters

##### entity

[`Entity`](../interfaces/Entity.md)

更新对象描述（entity.id!==undefined，只有需更新字段有值）

#### Returns

`Promise`\<`boolean`\>

成功/失败
