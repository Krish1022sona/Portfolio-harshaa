hello there you can delete this file and folder after reading it once, so don't worry :)

Here I will log every bug fix and change that I did, so that you dont have to read the entire commits, no need to thank me.

## 1. The Navigation Tool in the Stats Page
There was this **Navigation Tool** in the `stats` page, which was obviously not needed there and it was not working there also so I fixed that.
It was a simple fix I studied your code and saw that there was this Navigation Component you used directly in the `layout.js` which caused the **Navigation Tool** to appear on every page (yea if you had more pages it would have appeared there too).
To fix this what I did is, remove the Navigation from the `layout.js` and put it in the `app/page.js` script.