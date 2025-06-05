[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / IAnalysis

# Type Alias: IAnalysis

> **IAnalysis** = `object`

Defined in: index.d.ts:2525

地形分析模块

在有地形的情况下，根据点生成线；根据经纬度获取地形坐标点；获取多个经纬度点的总距离

## Properties

### distanceOfPoints()

> **distanceOfPoints**: (`points`) => `Promise`\<`number`\>

Defined in: index.d.ts:2545

获取指定经纬度点间距离

#### Parameters

##### points

\[[`Vector3`](../interfaces/Vector3.md), [`Vector3`](../interfaces/Vector3.md), `...Vector3[]`\]

#### Returns

`Promise`\<`number`\>

总距离

***

### pickTerrainLine()

> **pickTerrainLine**: (`start`, `end`, `tolerance?`, `classificationType?`) => `Promise`\<[`Vector3`](../interfaces/Vector3.md)[]\>

Defined in: index.d.ts:2533

根据起点终点生成一条贴地形的线

#### Parameters

##### start

[`Vector2`](../interfaces/Vector2.md)

起点经纬度坐标

##### end

[`Vector2`](../interfaces/Vector2.md)

终点经纬度坐标

##### tolerance?

`number`

精度容限，单位 米。默认1米。容限越低，生成的线的精度越高，但相应的生成时间会越长

##### classificationType?

[`ClassificationType`](../enumerations/ClassificationType.md)

#### Returns

`Promise`\<[`Vector3`](../interfaces/Vector3.md)[]\>

线的点串。当没有地形或地形获取失败时，可能为空数组

***

### pickTerrainPoint()

> **pickTerrainPoint**: (`point`) => `Promise`\<[`Vector3`](../interfaces/Vector3.md) \| `undefined`\>

Defined in: index.d.ts:2539

获取指定经纬度点在地形上的点坐标

#### Parameters

##### point

[`Vector2`](../interfaces/Vector2.md)

经纬度坐标

#### Returns

`Promise`\<[`Vector3`](../interfaces/Vector3.md) \| `undefined`\>

带地形高度的经纬度坐标。获取失败时返回 undefined
