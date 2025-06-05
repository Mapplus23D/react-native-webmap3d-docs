[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / Point

# Interface: Point

Defined in: index.d.ts:2998

Point Geometry Object

https://tools.ietf.org/html/rfc7946#section-3.1.2

## Extends

- [`GeometryObject`](GeometryObject.md)

## Properties

### bbox?

> `optional` **bbox**: [`BBox`](../type-aliases/BBox.md)

Defined in: index.d.ts:2975

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
https://tools.ietf.org/html/rfc7946#section-5

#### Inherited from

[`GeometryObject`](GeometryObject.md).[`bbox`](GeometryObject.md#bbox)

***

### coordinates

> **coordinates**: [`Position`](../type-aliases/Position.md)

Defined in: index.d.ts:3000

***

### type

> **type**: `"Point"`

Defined in: index.d.ts:2999

Specifies the type of GeoJSON object.

#### Overrides

[`GeometryObject`](GeometryObject.md).[`type`](GeometryObject.md#type)
