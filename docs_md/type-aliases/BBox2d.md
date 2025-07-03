[**react-native-webmap3d开发文档**](../README.md)

***

[react-native-webmap3d开发文档](../globals.md) / BBox2d

# Type Alias: BBox2d

> **BBox2d** = \[`number`, `number`, `number`, `number`\]

Defined in: index.d.ts:2876

Bounding box

https://tools.ietf.org/html/rfc7946#section-5
A GeoJSON object MAY have a member named "bbox" to include information on the coordinate range for its Geometries, Features, or FeatureCollections.
The value of the bbox member MUST be an array of length 2*n where n is the number of dimensions represented in the contained geometries,
with all axes of the most southwesterly point followed by all axes of the more northeasterly point.
The axes order of a bbox follows the axes order of geometries.
