---
title: "Service worker struggles"
date: "2018-12-25"
---

I like Chrome's Lighthouse tool. So much so that I set up a service worker for this site, just so I could earn 100 
scores across the board.

I used a boilerplate service worker. But didn't really know how it works.

So now the worker is caching index.html, and I'm not sure how to bust the cache. I incremended the precache version, 
but no dice.

Oh well, I'm learning.

**Update**: the boilerplate has a runtime cache which caches everything. Busting the precache won't update index.html. 
So I removed the runtime cache logic, and now the page updates when I increment the precache version.