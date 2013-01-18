---
layout: post
title: Nginx 502 Gateway Errors
tags:
- Writing
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

[Nginx 502's - random form](http://forum.nginx.org/read.php?2,188352,188430#msg-188430)
[Nginx big header response - stackoverflow](http://stackoverflow.com/questions/11526674/nginx-big-header-response)

Just spent the last couple hours on this bug where Tint was returning 502's when users try to add twitter accoutns. It turns out that Nginx has difficulty handling requests with large headers. Passing twitter id's using cookie-based sessions was enough to result in mysterious 502's.

Solution:
Put the following in the nginx.conf

    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
    fastcgi_buffers 8 16k;
    fastcgi_buffer_size 32k;

In other news, today we launched lakersnation.com, and here is a graph of servers undergoing some load.

![Lakersnation.com load testing](/files/lakersnationloadtest.png)

The new load was successfully handled and fistpounds were had.
