[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IFileConverter

# Type Alias: IFileConverter

> **IFileConverter** = `object`

Defined in: index.d.ts:4223

文件转化工具

包含 矢量数据转geojson 和 shp 转 geojson

## Properties

### shp2Geojson()

> **shp2Geojson**: (`src`) => `Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)[]\>

Defined in: index.d.ts:4236

shp 转 geojson

#### Parameters

##### src

shp相关文件 base64 字符串或者 File 对象

`object`[] | `object`[]

#### Returns

`Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)[]\>

geojson 对象

***

### vectorFile2Geojson()

> **vectorFile2Geojson**: (`src`) => `Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)[]\>

Defined in: index.d.ts:4230

矢量数据转geojson

#### Parameters

##### src

`File`[]

矢量数据文件

#### Returns

`Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)[]\>
