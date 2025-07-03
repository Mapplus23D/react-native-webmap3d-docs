[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / GeometryCollection

# Interface: GeometryCollection

Defined in: index.d.ts:3016

GeometryCollection

https://tools.ietf.org/html/rfc7946#section-3.1.8

A GeoJSON object with type "GeometryCollection" is a Geometry object.
A GeometryCollection has a member with the name "geometries".
The value of "geometries" is an array.  Each element of this array is a GeoJSON Geometry object.
It is possible for this array to be empty.

## Extends

- [`GeometryObject`](GeometryObject.md)

## Properties

### bbox?

> `optional` **bbox**: [`BBox`](../type-aliases/BBox.md)

Defined in: index.d.ts:2934

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
https://tools.ietf.org/html/rfc7946#section-5

#### Inherited from

[`GeometryObject`](GeometryObject.md).[`bbox`](GeometryObject.md#bbox)

***

### geometries

> **geometries**: ([`Point`](Point.md) \| [`MultiPoint`](MultiPoint.md) \| [`LineString`](LineString.md) \| [`MultiLineString`](MultiLineString.md) \| [`Polygon`](Polygon.md) \| [`MultiPolygon`](MultiPolygon.md))[]

Defined in: index.d.ts:3018

***

### type

> **type**: `"GeometryCollection"`

Defined in: index.d.ts:3017

Specifies the type of GeoJSON object.

#### Overrides

[`GeometryObject`](GeometryObject.md).[`type`](GeometryObject.md#type)
