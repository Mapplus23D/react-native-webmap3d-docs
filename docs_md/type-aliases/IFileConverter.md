[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IFileConverter

# Type Alias: IFileConverter

> **IFileConverter** = `object`

Defined in: index.d.ts:4175

## Properties

### shp2Geojson()

> **shp2Geojson**: (`src`) => `Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)[]\>

Defined in: index.d.ts:4188

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

Defined in: index.d.ts:4182

矢量数据转geojson

#### Parameters

##### src

`File`[]

矢量数据文件

#### Returns

`Promise`\<[`FeatureCollection`](../interfaces/FeatureCollection.md)[]\>
