# 500pxHacking

A repo for some little scripts for 500px.

Requires request.js. Just run `npm install`.

You'll need to set your 500px API key in an environmental variable named (for compatibility) `FIVE_HUNDRED_PIXELS_KEY`.

Get a histogram of a property over a users photos:

`node ./camerasByUser.js [username] [property of the photo]`.

```javascript
var validProperties = [
  "id",
  "user_id",
  "name",
  "description",
  "camera",
  "lens",
  "focal_length",
  "iso",
  "shutter_speed",
  "aperture",
  "times_viewed",
  "rating",
  "status",
  "created_at",
  "category",
  "location",
  "latitude",
  "longitude",
  "taken_at",
  "hi_res_uploaded",
  "for_sale",
  "width",
  "height",
  "votes_count",
  "favorites_count",
  "comments_count",
  "nsfw",
  "sales_count",
  "for_sale_date",
  "highest_rating",
  "highest_rating_date",
  "license_type",
  "converted",
  "collections_count",
  "crop_version",
  "privacy",
  "image_url",
  "url",
  "positive_votes_count",
  "converted_bits",
  "image_format"
];
```

I'd thoroughly recommend using [loadenv](https://github.com/jacobwgillespie/loadenv), and having a `.env` file containing something like `FIVE_HUNDRED_PIXELS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX`.