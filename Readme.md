# 500pxHacking

A repo for some little scripts for 500px.

Requires request.js. Just run `npm install`.

You'll need to set your 500px API key in an environmental variable named (for compatibility) `FIVE_HUNDRED_PIXELS_KEY`.

Get a histogram of the lenses a user uses by running:

`node ./camerasByUser.js [username]`.

Get a histogram of the cameras a user uses by running:

`node ./lensesByUser.js [username]`.

Get a histogram of the focal lengths a user uses by running:

`node ./focalLengthsByUser.js [username]`.

Good luck, padawans. :sparkles:
