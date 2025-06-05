[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / LabelGraphics

# Interface: LabelGraphics

Defined in: index.d.ts:1320

## Properties

### backgroundColor?

> `optional` **backgroundColor**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

Defined in: index.d.ts:1340

背景色，不设置表示没有背景

***

### backgroundPaddingSize?

> `optional` **backgroundPaddingSize**: `number`

Defined in: index.d.ts:1342

背景边框宽度 , 默认0

***

### disableDepthTestDistance?

> `optional` **disableDepthTestDistance**: `number`

Defined in: index.d.ts:1344

文字遮挡深度

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:1352

可见范围

***

### eyeOffset?

> `optional` **eyeOffset**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:1354

局部坐标系偏移量，单位米

***

### fillColor?

> `optional` **fillColor**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

Defined in: index.d.ts:1332

文字填充色

***

### font?

> `optional` **font**: `string`

Defined in: index.d.ts:1328

字体样式，默认字体'10px sans-serif'

***

### heightReference?

> `optional` **heightReference**: [`HeightReference`](../enumerations/HeightReference.md)

Defined in: index.d.ts:1358

相对地形的位置

***

### horizontalOrigin?

> `optional` **horizontalOrigin**: [`HorizontalOrigin`](../enumerations/HorizontalOrigin.md)

Defined in: index.d.ts:1324

水平对齐方式 , 默认center

***

### outlineColor?

> `optional` **outlineColor**: `string` \| [`PropertyAnimation`](PropertyAnimation.md)\<`string`\>

Defined in: index.d.ts:1334

文字填轮廓色

***

### outlineWidth?

> `optional` **outlineWidth**: `number`

Defined in: index.d.ts:1336

描边宽度 ，默认1.0

***

### pixelOffset?

> `optional` **pixelOffset**: [`Vector2`](Vector2.md)

Defined in: index.d.ts:1356

屏幕偏移量，单位px

***

### scale?

> `optional` **scale**: `number`

Defined in: index.d.ts:1348

缩放比例，默认1.0

***

### scaleByDistance?

> `optional` **scaleByDistance**: [`NearFarScalar`](NearFarScalar.md)

Defined in: index.d.ts:1346

随距离缩放参数，默认undefine表示不随距离缩放

***

### show?

> `optional` **show**: `boolean` \| [`PropertyAnimation`](PropertyAnimation.md)\<`boolean`\>

Defined in: index.d.ts:1350

显隐

***

### showBackground?

> `optional` **showBackground**: `boolean`

Defined in: index.d.ts:1338

背景显示否，默认false

***

### style?

> `optional` **style**: [`LabelStyle`](../enumerations/LabelStyle.md)

Defined in: index.d.ts:1330

默认FILL

***

### text?

> `optional` **text**: `string`

Defined in: index.d.ts:1322

文本内容

***

### verticalOrigin?

> `optional` **verticalOrigin**: [`VerticalOrigin`](../enumerations/VerticalOrigin.md)

Defined in: index.d.ts:1326

竖直对齐方式 , 默认center
