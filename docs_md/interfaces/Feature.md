[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Feature

# Interface: Feature\<G, P\>

Defined in: index.d.ts:3076

Feature

https://tools.ietf.org/html/rfc7946#section-3.2
A Feature object represents a spatially bounded thing.
Every Feature object is a GeoJSON object no matter where it occurs in a GeoJSON text.

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

### geometry

> **geometry**: `G`

Defined in: index.d.ts:3078

***

### id?

> `optional` **id**: [`Id`](../type-aliases/Id.md)

Defined in: index.d.ts:3083

A value that uniquely identifies this feature in a
https://tools.ietf.org/html/rfc7946#section-3.2.

***

### properties

> **properties**: `P`

Defined in: index.d.ts:3087

Properties associated with this feature.

***

### type

> **type**: `"Feature"`

Defined in: index.d.ts:3077

Specifies the type of GeoJSON object.

#### Overrides

[`GeoJSONObject`](GeoJSONObject.md).[`type`](GeoJSONObject.md#type)
