meteor-popularity-contest
=========================

Generates a popularity value of collection based on user defined fields & factors

## Usage

All definitions should be made *server side only*.


## Examples

```javascript
// Sets up a 'authorPopularity' field on each author
Authors.createPopularityContest([{key: "likes", weight: 2}, {key: "comments", weight: 3}, {key: "followers", weight: 1}], 'authorPopularity');

```

The example creates a new field 'authorPopularity' to Authors collection with value: likes * 2 + comments * 3 + followers * 1.
The weigth values must be integer values. The popularity field will be automatically updated whenever given key values change.


## API

**collection.createPopularityContest(lookup, name)**

1. ***collection***

  The collection to store the popularity value on
  
2. ***Arguments***

  **lookup** — Array
  Array of objects containing field names and factors on collection to perform the popularity count.  

  **name** — String  
  Specify a custom popularity field name


## License 

MIT. (c) Jani Halmetoja



