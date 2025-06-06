[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / GeometryObject

# Interface: GeometryObject

Defined in: index.d.ts:2990

Geometry Object

https://tools.ietf.org/html/rfc7946#section-3

## Extends

- [`GeoJSONObject`](GeoJSONObject.md)

## Extended by

- [`Point`](Point.md)
- [`MultiPoint`](MultiPoint.md)
- [`LineString`](LineString.md)
- [`MultiLineString`](MultiLineString.md)
- [`Polygon`](Polygon.md)
- [`MultiPolygon`](MultiPolygon.md)
- [`GeometryCollection`](GeometryCollection.md)

## Properties

### bbox?

> `optional` **bbox**: [`BBox`](../type-aliases/BBox.md)

Defined in: index.d.ts:2983

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
https://tools.ietf.org/html/rfc7946#section-5

#### Inherited from

[`GeoJSONObject`](GeoJSONObject.md).[`bbox`](GeoJSONObject.md#bbox)

***

### type

> **type**: [`GeometryTypes`](../type-aliases/GeometryTypes.md)

Defined in: index.d.ts:2991

Specifies the type of GeoJSON object.

#### Overrides

[`GeoJSONObject`](GeoJSONObject.md).[`type`](GeoJSONObject.md#type)
