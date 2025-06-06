[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / GeoJSONObject

# Interface: GeoJSONObject

Defined in: index.d.ts:2974

GeoJSON Object

https://tools.ietf.org/html/rfc7946#section-3
The GeoJSON specification also allows [foreign members](https://tools.ietf.org/html/rfc7946#section-6.1)
Developers should use "&" type in TypeScript or extend the interface to add these foreign members.

## Extended by

- [`GeometryObject`](GeometryObject.md)
- [`Geometry`](Geometry.md)
- [`Feature`](Feature.md)
- [`FeatureCollection`](FeatureCollection.md)

## Properties

### bbox?

> `optional` **bbox**: [`BBox`](../type-aliases/BBox.md)

Defined in: index.d.ts:2983

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
https://tools.ietf.org/html/rfc7946#section-5

***

### type

> **type**: `string`

Defined in: index.d.ts:2978

Specifies the type of GeoJSON object.
