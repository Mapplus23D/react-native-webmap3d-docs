[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveLabel

# Interface: PrimitiveLabel

Defined in: index.d.ts:2210

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### backgroundColor?

> `optional` **backgroundColor**: `string`

Defined in: index.d.ts:2233

背景色，不设置表示没有背景

***

### backgroundPaddingSize?

> `optional` **backgroundPaddingSize**: `number`

Defined in: index.d.ts:2235

背景边框宽度 , 默认0

***

### disableDepthTestDistance?

> `optional` **disableDepthTestDistance**: `number`

Defined in: index.d.ts:2237

文字遮挡深度

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2155

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### eyeOffset?

> `optional` **eyeOffset**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2243

局部坐标系偏移量，单位米

***

### fillColor?

> `optional` **fillColor**: `string`

Defined in: index.d.ts:2225

文字填充色

***

### font?

> `optional` **font**: `string`

Defined in: index.d.ts:2221

字体样式，默认字体'10px sans-serif'

***

### heightReference?

> `optional` **heightReference**: [`HeightReference`](../enumerations/HeightReference.md)

Defined in: index.d.ts:2247

相对地形的位置

***

### horizontalOrigin?

> `optional` **horizontalOrigin**: [`HorizontalOrigin`](../enumerations/HorizontalOrigin.md)

Defined in: index.d.ts:2217

水平对齐方式 , 默认center

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2158

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### outlineColor?

> `optional` **outlineColor**: `string`

Defined in: index.d.ts:2227

文字填轮廓色

***

### outlineWidth?

> `optional` **outlineWidth**: `number`

Defined in: index.d.ts:2229

描边宽度 ，默认1.0

***

### pixelOffset?

> `optional` **pixelOffset**: [`Vector2`](Vector2.md)

Defined in: index.d.ts:2245

屏幕偏移量，单位px

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2213

位置

***

### properties?

> `optional` **properties**: `object`

Defined in: index.d.ts:2160

属性字段

#### Index Signature

\[`_`: `string`\]: `unknown`

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`properties`](PrimitiveBase.md#properties)

***

### scale?

> `optional` **scale**: `number`

Defined in: index.d.ts:2241

缩放比例，默认1.0

***

### scaleByDistance?

> `optional` **scaleByDistance**: [`NearFarScalar`](NearFarScalar.md)

Defined in: index.d.ts:2239

随距离缩放参数，默认undefine表示不随距离缩放

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2153

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### showBackground?

> `optional` **showBackground**: `boolean`

Defined in: index.d.ts:2231

背景显示否，默认false

***

### style?

> `optional` **style**: [`LabelStyle`](../enumerations/LabelStyle.md)

Defined in: index.d.ts:2223

默认FILL

***

### text

> **text**: `string`

Defined in: index.d.ts:2215

文本内容

***

### type

> **type**: [`Label`](../enumerations/PrimitiveType.md#label)

Defined in: index.d.ts:2211

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)

***

### verticalOrigin?

> `optional` **verticalOrigin**: [`VerticalOrigin`](../enumerations/VerticalOrigin.md)

Defined in: index.d.ts:2219

竖直对齐方式 , 默认center
