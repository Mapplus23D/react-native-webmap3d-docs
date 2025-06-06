[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / FeatureCollection

# Interface: FeatureCollection\<G, P\>

Defined in: index.d.ts:3098

Feature Collection

https://tools.ietf.org/html/rfc7946#section-3.3
A GeoJSON object with the type "FeatureCollection" is a FeatureCollection object.
A FeatureCollection object has a member with the name "features".
The value of "features" is a JSON array. Each element of the array is a Feature object as defined above.
It is possible for this array to be empty.

## Extends

- [`GeoJSONObject`](GeoJSONObject.md)

## Type Parameters

### G

`G` = [`Geometry`](Geometry.md) \| [`GeometryCollection`](GeometryCollection.md)

### P

`P` = [`Properties`](../type-aliases/Properties.md)

## Properties

### bbox?

> `optional` **bbox**: [`BBox`](../type-aliases/BBox.md)

Defined in: index.d.ts:2983

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
https://tools.ietf.org/html/rfc7946#section-5

#### Inherited from

[`GeoJSONObject`](GeoJSONObject.md).[`bbox`](GeoJSONObject.md#bbox)

***

### features

> **features**: [`Feature`](Feature.md)\<`G`, `P`\>[]

Defined in: index.d.ts:3100

***

### type

> **type**: `"FeatureCollection"`

Defined in: index.d.ts:3099

Specifies the type of GeoJSON object.

#### Overrides

[`GeoJSONObject`](GeoJSONObject.md).[`type`](GeoJSONObject.md#type)
