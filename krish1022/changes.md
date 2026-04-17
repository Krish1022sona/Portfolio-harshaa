hello there you can delete this file and folder after reading it once, so don't worry :)

Here I will log every bug fix and change that I did, so that you dont have to read the entire commits, no need to thank me.
You may not apply some of my changes if they don't follow your vision for your portfolio, and if any change made by me is hurtful to you I'm sorry :(

## 1. The Navigation Tool in the Stats Page
There was this **Navigation Tool** in the `stats` page, which was obviously not needed there and it was not working there also so I fixed that.
It was a simple fix I studied your code and saw that there was this Navigation Component you used directly in the `layout.js` which caused the **Navigation Tool** to appear on every page (yea if you had more pages it would have appeared there too).
To fix this what I did is, remove the Navigation from the `layout.js` and put it in the `app/page.js` script.

## 2. Fixed the Ordering of Components
According to the **Navigation Tool** and normal conventions, **Experience Component** should come before the **Contact Component**, so I made that change in the `src/page.js`. This was pretty easy compared to the last one, and I also corrected my previous mistake of putting **Navigation Component** before the **Experience Component**.

## 3. Padding in the Stats Button
This is rather a POV of mine not a bug to be fixed. The asymmetric button padding seemed to bug me and the exccessive padding also made the button large, so I reduced the paddings a little bit in the **Navigation Compoment** or `components/Navigation.js`.