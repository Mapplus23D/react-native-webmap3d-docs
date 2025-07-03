[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / PrimitiveBillboard

# Interface: PrimitiveBillboard

Defined in: index.d.ts:2165

## Extends

- [`PrimitiveBase`](PrimitiveBase.md)

## Properties

### disableDepthTestDistance?

> `optional` **disableDepthTestDistance**: `number`

Defined in: index.d.ts:2176

遮挡深度

***

### distanceDisplayCondition?

> `optional` **distanceDisplayCondition**: [`DistanceDisplayCondition`](DistanceDisplayCondition.md)

Defined in: index.d.ts:2135

可见范围

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`distanceDisplayCondition`](PrimitiveBase.md#distancedisplaycondition)

***

### eyeOffset?

> `optional` **eyeOffset**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2184

局部坐标系偏移量，单位米

***

### height?

> `optional` **height**: `number`

Defined in: index.d.ts:2180

图片高，单位px

***

### heightReference?

> `optional` **heightReference**: [`HeightReference`](../enumerations/HeightReference.md)

Defined in: index.d.ts:2188

相对地形的位置

***

### horizontalOrigin?

> `optional` **horizontalOrigin**: [`HorizontalOrigin`](../enumerations/HorizontalOrigin.md)

Defined in: index.d.ts:2172

水平对齐方式 , 默认center

***

### image

> **image**: `string`

Defined in: index.d.ts:2170

图片路径

***

### name?

> `optional` **name**: `string`

Defined in: index.d.ts:2138

primitive 名称

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`name`](PrimitiveBase.md#name)

***

### pixelOffset?

> `optional` **pixelOffset**: [`Vector2`](Vector2.md)

Defined in: index.d.ts:2186

屏幕偏移量，单位px

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: index.d.ts:2168

位置

***

### properties?

> `optional` **properties**: `object`

Defined in: index.d.ts:2140

属性字段

#### Index Signature

\[`_`: `string`\]: `unknown`

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`properties`](PrimitiveBase.md#properties)

***

### scaleByDistance?

> `optional` **scaleByDistance**: [`NearFarScalar`](NearFarScalar.md)

Defined in: index.d.ts:2178

随距离缩放参数，默认undefine表示不随距离缩放

***

### show?

> `optional` **show**: `boolean`

Defined in: index.d.ts:2133

是否显示，默认true

#### Inherited from

[`PrimitiveBase`](PrimitiveBase.md).[`show`](PrimitiveBase.md#show)

***

### type

> **type**: [`Billboard`](../enumerations/PrimitiveType.md#billboard)

Defined in: index.d.ts:2166

类型

#### Overrides

[`PrimitiveBase`](PrimitiveBase.md).[`type`](PrimitiveBase.md#type)

***

### verticalOrigin?

> `optional` **verticalOrigin**: [`VerticalOrigin`](../enumerations/VerticalOrigin.md)

Defined in: index.d.ts:2174

竖直对齐方式 , 默认center

***

### width?

> `optional` **width**: `number`

Defined in: index.d.ts:2182

图片宽，单位px
