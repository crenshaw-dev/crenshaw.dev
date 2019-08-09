---
title: "preconnect resource hint and the crossorigin attribute"
date: "2019-4-5"
---

[Resource hints](https://www.w3.org/TR/resource-hints/) help pages load faster by telling the browser what assets it'll need in the future.

Sometimes you don't know ahead of time what assets are needed in a page. But you know they'll be hosted on a 
particular domain. In that case, you can give the browser a head start with the `preconnect` resource hint.

```html
<head>
  <!-- other stuff -->
  <link rel="preconnect" href="https://cdn.example.com/" crossorigin>
</head>
```

#### Without resource hints ####

Suppose a page on my site uses a stylesheet on another origin, and that stylesheet defines a custom font.

```css
@font-face {
  font-family: 'Custom Font';
  src: url(https://mac9416.com/demo/preconnect/font.ttf) format('truetype');
}

body {
  font-family: 'Custom Font';
}
```

Without resource hints, my page's HTML must be parsed before the stylesheet can be downloaded.

(In this example, I've moved the stylesheet link below a massive block of "lorem ipsum" text, to simulate a late-
discovered stylesheet and make the waterfall chart easier to read.)

![WebPageTest waterfall chart showing no connection to the external domain until HTML is completely downloaded and parsed](https://crenshaw.dev/images/preconnect/webpagetest-no-hint.png)

In the [above WebPageTest](https://www.webpagetest.org/result/190405_9X_f73fed28b47e2b1bdccc2d1810ed9e13/) waterfall 
chart, the page is completely downloaded and parsed before Chrome connects to mac9416.com to download the stylesheet.

#### preconnect with crossorigin ####

The asset will load faster if I add a `preconnect` hint for mac9416.com. (Remember, we're pretending we don't know 
specifically which assets will be downloaded from mac9416.com. Otherwise we would add `preload` hints for an even 
greater performance boost.)

```html
<head>
  <!-- other stuff -->
  <link rel="preconnect" href="https://mac9416.com/" crossorigin>
</head>
```

![WebPageTest waterfall chart showing one connection to the external domain starting immediately after the first chunk 
of HTML is parsed, but the other one being delayed](https://crenshaw.dev/images/preconnect/webpagetest-crossorigin-hint.png)

With a `preconnect` hint in place, [the waterfall](https://www.webpagetest.org/result/190405_G4_32fdd03fe7166cd5599500dd67b297ca/) 
looks better. A DNS lookup for mac9416.com happens immediately after 
the first chunk of HTML is downloaded. And the connection used to download my custom font happens immediately after 
the DNS lookup is finished. But it looks like there's another connection to mac9416.com that's initiated after HTML 
is downloaded and parsed. That second connection is used to download the custom font.

#### preconnect without crossorigin ####

In the above code sample, I naiively copied an example and left the crossorigin attribute in place. I just assumed 
it meant "this connection is to a different domain" -- which it is. Let's see what happens when I remove that 
attribute.

```html
<head>
  <!-- other stuff -->
  <link rel="preconnect" href="https://mac9416.com/">
</head>
```

![WebPageTest waterfall chart showing one connection to the external domain starting immediately after the first chunk 
of HTML is parsed, but the other one beind delayed](https://crenshaw.dev/images/preconnect/webpagetest-no-crossorigin-hint.png)

In [this waterfall chart](https://www.webpagetest.org/result/190405_N3_83bb01386330b6d7fc30fac43b3b6a85/), we seem to 
have the same problem, but with the connections swapped. The connection used to 
download styles happens immediately, but the connection used to download fonts begins after the stylesheet is 
downloaded and parsed.

#### Why did crossorigin break things? ####

What's going on? I incorrectly assumed crossorigin simply meant "the target is on another domain." But the browser 
could infer that by comparing the `<link>` element's href attribute to the current page's origin. So what is the 
`crossorigin` attribute for?

`crossorigin` actually tells the browser that "resources on this connection are downloaded using CORS."

By default, it specifically means "CORS without credentials."

CORS improves web security. That's all I'll say about it here, because smarter people have explained it elsewhere much 
better than I could.

To speed up this web page, all we need to know is that resources downloaded without CORS are downloaded on a separate 
connection from those that use CORS.

A quick glance at a list of requests that use CORS shows that our font request will use CORS, but the stylesheet 
request will not.

#### preconnect with crossorigin _and_ without ####

So let's use two preconnect hints, one for non-CORS requests, and the other for CORS requests.

```html
<head>
  <!-- other stuff -->
  <link rel="preconnect" href="https://mac9416.com/">
  <link rel="preconnect" href="https://mac9416.com/" crossorigin>
</head>
```

![WebPageTest waterfall chart showing two connections to mac9416.com starting immediately after the first chunk of HTML is parsed](https://crenshaw.dev/images/preconnect/webpagetest-both-hints.png)

This waterfall chart looks much better. With two resource hints in place, both connections to mac9416.com are 
established immediately after the first chunk of HTML is parsed. Incidentally, we've achieved the fastest time to 
document complete (the blue line in the waterfall chart) of all the tests.

Just for good measure, I'll add a `dns-prefetch` hint for browsers that don't support the `preconnect` hint.

```html
<head>
  <!-- other stuff -->
  <link rel="dns-prefetch" href="https://mac9416.com/">
  <link rel="preconnect" href="https://mac9416.com/">
  <link rel="preconnect" href="https://mac9416.com/" crossorigin>
</head>
```

There's no need for a `crossorigin` attribute, since DNS queries are performed without CORS.

For this experiment I've ignored `crossorigin="use-credentials"`. I suspect CORS requests with credentials would 
require a third hint.

#### Summary ####

The `crossorigin` attribute, when used with `rel="preconnect"`, doesn't describe where the target origin is but rather 
what kind of assets will be downloaded from that origin. If the assets use CORS, `crossorigin` is needed. If CORS won't 
be used, `crossorigin` should be omitted. If both types of assets will be present, two resource hints are necessary.

If you've found resource hints and `crossorigin` confusing, don't feel bad. There's a lot going on. If you find this 
guide confusing, please contact me! The fault is probably mine, and I'll be happy to clarify.