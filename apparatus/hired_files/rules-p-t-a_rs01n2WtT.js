/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a,g,f){try{__qc("defaults",a,{labels:"_fp.event.Default"})}catch(l){}var h=function(e){var c=f.createElement("a");c.href=e;return c},k=function(e,c,a){return e?"nc"===e?!c||!a||0>c.indexOf(a):"eq"===e?c===a:"sw"===e?0===c.indexOf(a):"ew"===e?(e=c.length-a.length,c=c.lastIndexOf(a,e),-1!==c&&c===e):"c"===e?0<=c.indexOf(a):!1:!1},d=function(e,a,b){var d;d=g.top===g.self?f.location.href:h(f.referrer).href;k(a,d,b)?e(d):e(!1)},b=function(a){return"array"==={}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()?
{labels:a.join(",")}:{labels:""+a}};__qc.apply(null,["rules",[a,null,[[b,"_fp.event.Employer Success Stories"]],[[d,"eq","https://hired.com/success-stories#employer"]]],[a,null,[[b,"_fp.event.Candidate Stories"]],[[d,"eq","https://hired.com/success-stories#candidate"]]],[a,null,[[b,"_fp.event.Resources"]],[[d,"eq","https://hired.com/employers/resources"]]],[a,null,[[b,"_fp.event.Success Stories"]],[[d,"eq","https://hired.com/success-stories"]]],[a,null,[[b,"_fp.event.Join"]],[[d,"eq","https://hired.com/join"]]],
[a,null,[[b,"_fp.event.Homepage"]],[[function(a,c,d){var b;b=g.top===g.self?f.location.pathname:h(f.referrer).pathname;k(c,b,d)?a(b):a(!1)},"eq","/"]]],[a,null,[[b,"_fp.event.How It Works"]],[[d,"eq","https://hired.com/how-it-works"]]],[a,null,[[b,"_fp.event.Employers"]],[[d,"eq","https://hired.com/employers"]]],[a,null,[[b,"_fp.event.Sign In"]],[[d,"eq","https://hired.com/invite/logged_out"]]],[a,null,[[b,"_fp.event.Sign Up"]],[[d,"eq","https://hired.com/signup"]]]])})("p-t-a_rs01n2WtT",window,document);