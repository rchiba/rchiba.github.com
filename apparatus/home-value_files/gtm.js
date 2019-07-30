
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"195",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByName(\"home.bedrooms\")[0].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByName(\"home.bathrooms\")[0].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.pool_type\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.getElementsByTagName(\"input\");window.misc=[];for(var a=0;a\u003Cb.length;a++)\"checkbox\"==b[a].type.toLowerCase()\u0026\u0026b[a].checked\u0026\u0026misc.push(b[a].value);return window.misc})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByName(\"home.sq_ft\")[0].value.replace(\",\",\"\");a=parseInt(a);return a=500*Math.ceil(a\/500)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.renovated\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"input\")[0].value.replace(\",\",\"\").replace(\"$\",\"\");a=parseFloat(a);return a=1E3*Math.ceil(a\/1E3)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.kitchen.counter_type\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.kitchen.condition\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.kitchen.appliance_type\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.getElementsByTagName(\"input\");window.kitchFeatures=[];for(var a=0;a\u003Cb.length;a++)\"checkbox\"==b[a].type.toLowerCase()\u0026\u0026b[a].checked\u0026\u0026kitchFeatures.push(b[a].value);return window.kitchFeatures})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.getElementsByTagName(\"input\");window.masterFeatures=[];for(var a=0;a\u003Cb.length;a++)\"checkbox\"==b[a].type.toLowerCase()\u0026\u0026b[a].checked\u0026\u0026masterFeatures.push(b[a].value);return window.masterFeatures})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.bathroom.condition\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.flooring.condition\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.flooring.floor_type\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.interior_paint.condition\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"home.back_yard.condition\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"seller.relation_to_owner\"),a=0;a\u003Cb.length;a++)if(b[a].checked){if(\"other\"==b[a].value){var c=document.getElementsByClassName(\"additional-input\")[0];return b[a].value+\": \"+c.value}return b[a].value}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"seller.sale_timeline\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"seller.closing_date_flexibility\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"seller.actively_looking\"),a=0;a\u003Cb.length;a++)if(b[a].checked)return b[a].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document.getElementsByTagName(\"input\");window.reasons=[];for(var a=0;a\u003Cb.length;a++)if(\"checkbox\"==b[a].type.toLowerCase()\u0026\u0026b[a].checked)if(\"other\"==b[a].value){var c=document.getElementsByClassName(\"additional-input\")[0].value;window.reasons.push(\"other: \"+c)}else window.reasons.push(b[a].value);return window.reasons})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseInt(document.getElementsByName(\"seller.price_estimate_cents\")[0].value.replace(\",\",\"\").replace(\"$\",\"\"));a=5E4*Math.ceil(a\/5E4);return a=a.toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByName(\"seller.referral_source\"),a=0;a\u003Cb.length;a++)if(b[a].checked){if(\"other\"==b[a].value){var c=document.getElementsByClassName(\"additional-input\")[0];return b[a].value+\": \"+c.value}return b[a].value}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"input\");for(i=0;i\u003Ca.length;i++)if(\"radio\"==a[i].type.toLowerCase()\u0026\u0026a[i].checked)return a[i]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=location.href;if(-1!=a.indexOf(\"Phoenix\"))return\"Phoenix\";if(-1!=a.indexOf(\"TX\"))return\"Dallas-Fort worth\";if(-1!=a.indexOf(\"Vegas\"))return\"Las Vegas\";if(-1!=a.indexOf(\"GA\"))return\"Atlanta\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByName(\"home.garage_spaces\")[0].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByName(\"home.exterior_stories\")[0].value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){window.lenderVal=\"\";for(i=0;2\u003Ei;)return void 0!=document.getElementsByClassName(\"radio\")[i].getElementsByClassName(\"ng-valid-parse\")[0]\u0026\u0026(window.lenderVal=document.getElementsByClassName(\"radio\")[i].getElementsByTagName(\"span\")[0].innerText),window.lenderVal})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return google_tag_manager[\"GTM-MSX7NS\"].dataLayer.get(\"extra\").address.city})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[\"GTM-MSX7NS\"].dataLayer.get(\"extra\");return a=a.answer})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[\"GTM-MSX7NS\"].dataLayer.get(\"extra\");return a=a.question_key})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=sessionStorage.getItem(\"sell-DMA\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.title})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname;return a=encodeURIComponent(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname;return a=a.split(\"\/\")[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return google_tag_manager[\"GTM-MSX7NS\"].dataLayer.get(\"extra\").address.city}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return google_tag_manager[\"GTM-MSX7NS\"].dataLayer.get(\"extra\").address.state})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname;a=a.split(\"\/\");a=a[2];a=a.split(\"-\");var b=a.length;return a=a[b-1-1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname;a=a.split(\"\/\");a=a[2];a=a.split(\"-\");var b=a.length;return a=a[b-1-2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByClassName(\"list-price\")[0].children[1].innerText.split(\"$\")[1].replace(\",\",\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return document.querySelector(\".text-small+ .ng-binding\").innerText.split(\" \")[0].replace(\",\",\"\")}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.userAgent.match(\/mobile\/i)?\"Mobile\":navigator.userAgent.match(\/iPad|Android|Touch\/i)?\"Tablet\":\"Desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==window.location.href.indexOf(\"seller-lead\")?window.location.href.split(\"seller-lead\")[1].split(\"\/\")[1]:window.dataLayer.find(function(a){return\"offer-state.change.ready\"===a.event}).extra.adTrackingId})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer.find(function(a){return\"lead-state.email.ready\"===a.event});if(a\u0026\u0026a.extra\u0026\u0026a.extra.email)return a.extra.email})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer.filter(function(a){return\"flow-answer.change.answer\"===a.event\u0026\u0026a.extra\u0026\u0026a.extra.question_key\u0026\u0026\"seller.full_name\"===a.extra.question_key.key});if(a=a[a.length-1])return a=a.extra.answer.replace(\/\"\/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(c){c+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var d=0;d\u003Cb.length;d++){for(var a=b[d];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"}return\"\"==e(\"_gcl_aw\")?\"\":e(\"_gcl_aw\").split(\".\")[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(c){c+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var d=0;d\u003Cb.length;d++){for(var a=b[d];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"}return\"\"==e(\"_uetmsclkid\")?\"\":e(\"_uetmsclkid\").split(\"_uet\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(c){c+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var d=0;d\u003Cb.length;d++){for(var a=b[d];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return\"\"}return\"\"==e(\"_fbc\")?\"\":e(\"_fbc\").split(\".\")[3]})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"extra.task_type"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__sp",
      "vtp_conversionId":"967747911",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",50],
      "tag_id":1
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"945970684",
      "vtp_conversionLabel":"rOSfCOrfsl4Q_LuJwwM",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":6
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"945970684",
      "vtp_conversionLabel":"fAfFCLqtrF4Q_LuJwwM",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":7
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"945970684",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",50],
      "tag_id":8
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"937479325",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",50],
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"945970684",
      "vtp_conversionLabel":"X_XJCMD5iGkQ_LuJwwM",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":22
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"875342961",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",50],
      "tag_id":32
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"944891047",
      "vtp_conversionLabel":"P4c4CJKa1HIQp8nHwgM",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":38
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5319756",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":39
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"conversion",
      "vtp_tagId":"5319756",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"customer preparing",
      "tag_id":40
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"landi0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"odlan0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8115026",
      "vtp_ordinalStandard":["macro",53],
      "vtp_url":["macro",50],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":49
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conve0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"selle0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8115026",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",53],
      "vtp_url":["macro",50],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":50
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":128
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"944891047",
      "vtp_conversionLabel":"T6boCI6804IBEKfJx8ID",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":149
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5319756",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":150
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"offer0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"opend0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8115026",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",53],
      "vtp_url":["macro",50],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":154
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"944891047",
      "vtp_conversionLabel":"Cku7CK7X8IIBEKfJx8ID",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":164
    },{
      "function":"__baut",
      "setup_tags":["list",["tag",8,0]],
      "once_per_event":true,
      "vtp_eventCategory":"conversion",
      "vtp_tagId":"5319756",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Bing - Conversion - Seller Contract",
      "tag_id":165
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"contr0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"opend0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8115026",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",53],
      "vtp_url":["macro",50],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":167
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":176
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":177
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":179
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"944891047",
      "vtp_conversionLabel":"f3k4CPG544kBEKfJx8ID",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"806517495",
      "vtp_conversionLabel":"5KSCCNyd8YwBEPf1yYAD",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":199
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"806517495",
      "vtp_conversionLabel":"TrSoCOzf6YwBEPf1yYAD",
      "vtp_url":["macro",50],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":200
    },{
      "function":"__hl",
      "tag_id":209
    },{
      "function":"__hl",
      "tag_id":210
    },{
      "function":"__hl",
      "tag_id":211
    },{
      "function":"__hl",
      "tag_id":212
    },{
      "function":"__hl",
      "tag_id":213
    },{
      "function":"__hl",
      "tag_id":214
    },{
      "function":"__hl",
      "tag_id":215
    },{
      "function":"__hl",
      "tag_id":216
    },{
      "function":"__hl",
      "tag_id":217
    },{
      "function":"__hl",
      "tag_id":218
    },{
      "function":"__hl",
      "tag_id":219
    },{
      "function":"__hl",
      "tag_id":220
    },{
      "function":"__hl",
      "tag_id":221
    },{
      "function":"__hl",
      "tag_id":222
    },{
      "function":"__hl",
      "tag_id":223
    },{
      "function":"__hl",
      "tag_id":224
    },{
      "function":"__hl",
      "tag_id":225
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1238647_106",
      "tag_id":226
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1238647_107",
      "tag_id":227
    },{
      "function":"__cl",
      "tag_id":228
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1238647_109",
      "tag_id":229
    },{
      "function":"__cl",
      "tag_id":230
    },{
      "function":"__hl",
      "tag_id":231
    },{
      "function":"__hl",
      "tag_id":232
    },{
      "function":"__hl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__cl",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__cl",
      "tag_id":244
    },{
      "function":"__cl",
      "tag_id":245
    },{
      "function":"__cl",
      "tag_id":246
    },{
      "function":"__cl",
      "tag_id":247
    },{
      "function":"__cl",
      "tag_id":248
    },{
      "function":"__cl",
      "tag_id":249
    },{
      "function":"__cl",
      "tag_id":250
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1238647_255",
      "tag_id":251
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1238647_256",
      "tag_id":252
    },{
      "function":"__hl",
      "tag_id":253
    },{
      "function":"__hl",
      "tag_id":254
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1610195155916409\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n \n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1610195155916409\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4052816\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=4052816\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6028585561947\",{value:\"0.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6028585561947\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6028587104547\",{value:\"0.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6028587104547\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:159809,hjsv:5};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/conv\/?adv=zz1doyi\u0026amp;ct=0:x7wkc3p\u0026amp;fmt=3\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/imp\/?adv=zz1doyi\u0026amp;ct=0:t2e80wl\u0026amp;fmt=3\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/imp\/?adv=zz1doyi\u0026amp;ct=0:ni894xq\u0026amp;fmt=3\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");window.pintrkLoaded||(pintrk(\"load\",\"2618695329095\"),window.pintrkLoaded=!0);pintrk(\"page\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2618695329095\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nvyjg\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10023807\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10023807\",qstrings:{et:\"custom\",ec:\"opendoor-video\",ea:\"conversion\"}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,d,c,e,b,f,g){a.fbq||(b=a.fbq=function(){b.callMethod?b.callMethod.apply(b,arguments):b.queue.push(arguments)},a._fbq||(a._fbq=b),b.push=b,b.loaded=!0,b.version=\"2.0\",b.queue=[],f=d.createElement(c),f.async=!0,f.src=e,g=d.getElementsByTagName(c)[0],g.parentNode.insertBefore(f,g))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nsetTimeout(function(){var a=",["escape",["macro",44],8,16],";a\u0026\u0026(a=a.toLowerCase());var d=",["escape",["macro",45],8,16],",c,e=void 0;d\u0026\u0026((c=d.split(\" \")[0])\u0026\u0026(c=c.toLowerCase()),(e=d.split(\" \")[1])\u0026\u0026(e=e.toLowerCase()));a={em:a,fn:c,ln:e};fbq(\"init\",\"1610195155916409\",a);fbq(\"track\",\"AddToCart\")},300);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:42519},{event:\"setSiteType\",type:deviceType},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:42519},{event:\"setSiteType\",type:deviceType},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.criteo_q=window.criteo_q||[];var postal_code=window.dataLayer.find(function(a){return\"lead-state.change.ready\"===a.event}).extra.address.postal_code,deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:42519},{event:\"setSiteType\",type:deviceType},{event:\"viewSearch\",ui_zipcode:postal_code},{event:\"viewItem\",item:\"1\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:42519},{event:\"setSiteType\",type:deviceType},{event:\"viewBasket\",item:[{id:\"1\",price:0,quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){try{window.criteo_q=window.criteo_q||[];var a=",["escape",["macro",44],8,16],",b=",["escape",["macro",43],8,16],",c=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:42519},{event:\"setSiteType\",type:c},{event:\"setEmail\",email:[a]},{event:\"trackTransaction\",id:b,item:[{id:\"1\",price:0,quantity:1}]})}catch(d){}},300);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:42519},{event:\"setSiteType\",type:deviceType},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar onWindow=function(b,a){\"undefined\"!==typeof window.addEventListener?window.addEventListener(b,a,!1):window.attachEvent(\"on\"+b,function(){a.call(window)})},onWindowLeave=function(b){onWindow(\"mouseout\",function(a){a=a?a:window.event;(a=a.relatedTarget||a.toElement)\u0026\u0026\"HTML\"!==a.nodeName||\"function\"===typeof b\u0026\u0026b()})};onWindowLeave(function(){dataLayer.push({event:\"exit_intent\"})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10048016\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10048016\",qstrings:{et:\"custom\",ec:\"seller-flow-complete\"}}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1610195155916409\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1610195155916409\");fbq(\"track\",\"Purchase\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");window.pintrkLoaded||(pintrk(\"load\",\"2618695329095\"),window.pintrkLoaded=!0);pintrk(\"track\",\"signup\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,a,g,e){if(!b[e]){var d=b[e]=[];for(b=0;b\u003Ca.length;b++){var f=a[b];d[f]=d[f]||function(a){return function(){var b=Array.prototype.slice.call(arguments);d.push([a,b])}}(f)}d.SNIPPET_VERSION=\"1.0.1\";a=c.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/d2yyd1h5u9mauk.cloudfront.net\/integrations\/web\/v1\/library\/\"+g+\"\/\"+e+\".js\";c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c)}}(window,document,\"survey reset config init set get event identify track page screen group alias\".split(\" \"),\n\"d3pBlBhQjanNfzh5\",\"delighted\");var delightedEmail=",["escape",["macro",44],8,16],",delightedName=",["escape",["macro",45],8,16],",leadtoken=",["escape",["macro",43],8,16],";delighted.survey({email:delightedEmail,name:delightedName,properties:{Token:leadtoken,TriggerEventName:\"seller_flow_completed_csat\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,a,g,e){if(!b[e]){var d=b[e]=[];for(b=0;b\u003Ca.length;b++){var f=a[b];d[f]=d[f]||function(a){return function(){var b=Array.prototype.slice.call(arguments);d.push([a,b])}}(f)}d.SNIPPET_VERSION=\"1.0.1\";a=c.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/d2yyd1h5u9mauk.cloudfront.net\/integrations\/web\/v1\/library\/\"+g+\"\/\"+e+\".js\";c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c)}}(window,document,\"survey reset config init set get event identify track page screen group alias\".split(\" \"),\n\"1djTjIRWIUiW6EZg\",\"delighted\");for(var leadtoken=",["escape",["macro",43],8,16],",event,i=0;i\u003Cwindow.dataLayer.length;i++){var item=window.dataLayer[i];\"inspection-milestone.in-view.signatories-section\"===item.event\u0026\u0026(event=item)}var eventData=event\u0026\u0026event.extra;delighted.survey({properties:{LeadName:eventData\u0026\u0026eventData.name,Market:eventData\u0026\u0026eventData.market,Token:leadtoken,TriggerEventName:\"seller_dashboard_repair_results_csat\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N34E0-3EB\",\"script\");ktag(\"setup\",\"KT-N34E0-3EB\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=23c3a2f0-b713-48b4-8af1-d3479d327db1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar orderId=",["escape",["macro",43],8,16],";kenshoo.trackConversion(\"3536\",\"23c3a2f0-b713-48b4-8af1-d3479d327db1\",{conversionType:\"address_entered\",revenue:0,currency:\"USD\",orderId:orderId});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=23c3a2f0-b713-48b4-8af1-d3479d327db1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=",["escape",["macro",43],8,16],";kenshoo.trackConversion(\"3536\",\"23c3a2f0-b713-48b4-8af1-d3479d327db1\",{conversionType:\"offer_viewed\",revenue:0,currency:\"USD\",orderId:a})},300);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=23c3a2f0-b713-48b4-8af1-d3479d327db1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar orderId=",["escape",["macro",43],8,16],";kenshoo.trackConversion(\"3536\",\"23c3a2f0-b713-48b4-8af1-d3479d327db1\",{conversionType:\"seller_flow_complete\",revenue:0,currency:\"USD\",orderId:orderId});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=23c3a2f0-b713-48b4-8af1-d3479d327db1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=",["escape",["macro",43],8,16],";kenshoo.trackConversion(\"3536\",\"23c3a2f0-b713-48b4-8af1-d3479d327db1\",{conversionType:\"seller_purchase_agreement_complete\",revenue:0,currency:\"USD\",orderId:a})},300);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar now=Date.now(),i=new Image;i.src=\"https:\/\/alb.reddit.com\/snoo.gif?q\\x3dCAAHAAABAAoACQAAACpw4160AA\\x3d\\x3d\\x26s\\x3dvMoGS34Bpuxj3bIn-AmR5X-v2-MLnsSdsfrhxGA4PPE\\x3d\\x26ts\\x3d\"+now;\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAACpw4160AA==\u0026amp;s=vMoGS34Bpuxj3bIn-AmR5X-v2-MLnsSdsfrhxGA4PPE=\"\u003E\n\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"0656e149e64045478d96925705780475\");qp(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/0656e149e64045478d96925705780475\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"0656e149e64045478d96925705780475\");qp(\"track\",\"GenerateLead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/0656e149e64045478d96925705780475\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - TTD Seller Flow Complete\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/zz1doyi\/ylybea6\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_760c1530-c524-7551-d3e8-0fbd0cb8ffac\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D760c1530-c524-7551-d3e8-0fbd0cb8ffac%26type%3D55%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.opendoor.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D8496265730901%3Bp%3D760C1530-C524-7551-D3E8-0FBD0CB8FFAC\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_760c1530-c524-7551-d3e8-0fbd0cb8ffac\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D760c1530-c524-7551-d3e8-0fbd0cb8ffac%26type%3D55%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.opendoor.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D8496265730901%3Bp%3D760C1530-C524-7551-D3E8-0FBD0CB8FFAC\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_b7fc3dc5-7c51-f1c0-3bae-a51f15dee895\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Db7fc3dc5-7c51-f1c0-3bae-a51f15dee895%26type%3D29%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.opendoor.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D8496265730901%3Bp%3DB7FC3DC5-7C51-F1C0-3BAE-A51F15DEE895\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_b7fc3dc5-7c51-f1c0-3bae-a51f15dee895\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Db7fc3dc5-7c51-f1c0-3bae-a51f15dee895%26type%3D29%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.opendoor.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D8496265730901%3Bp%3DB7FC3DC5-7C51-F1C0-3BAE-A51F15DEE895\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_6061a8c1-9bc2-607f-f612-bab254c187f5\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D6061a8c1-9bc2-607f-f612-bab254c187f5%26type%3D29%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.opendoor.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D8496265730901%3Bp%3D6061A8C1-9BC2-607F-F612-BAB254C187F5\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_6061a8c1-9bc2-607f-f612-bab254c187f5\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D6061a8c1-9bc2-607f-f612-bab254c187f5%26type%3D29%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.opendoor.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D8496265730901%3Bp%3D6061A8C1-9BC2-607F-F612-BAB254C187F5\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/tracking.admarketplace.net\/tracking?pid=31971\u0026amp;cid=74379\u0026amp;orderval=0.00\u0026amp;v=2\u0026amp;orderid=\u0026amp;custominfo=\" width=\"1\" height=\"1\" border=\"0\"\u003E\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/tracking.admarketplace.net\/tracking?pid=31973\u0026amp;cid=74379\u0026amp;orderval=0.00\u0026amp;v=2\u0026amp;orderid=\u0026amp;custominfo=\" width=\"1\" height=\"1\" border=\"0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");window.pintrkLoaded||(pintrk(\"load\",\"2618695329095\"),window.pintrkLoaded=!0);pintrk(\"track\",\"search\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Enull==localStorage.getItem(\"hasOffer\")\u0026\u0026(localStorage.setItem(\"hasOffer\",\"yes\"),dataLayer.push({event:\"one offer view\"}));\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10048016\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10048016\",qstrings:{et:\"custom\",ec:\"address-entry-new\"}}});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/gztkr.mobi\/?gmid=zx\u0026amp;axid=1318\u0026amp;trxid=",["escape",["macro",43],12],"\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,a,g,e){if(!b[e]){var d=b[e]=[];for(b=0;b\u003Ca.length;b++){var f=a[b];d[f]=d[f]||function(a){return function(){var b=Array.prototype.slice.call(arguments);d.push([a,b])}}(f)}d.SNIPPET_VERSION=\"1.0.1\";a=c.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/d2yyd1h5u9mauk.cloudfront.net\/integrations\/web\/v1\/library\/\"+g+\"\/\"+e+\".js\";c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c)}}(window,document,\"survey reset config init set get event identify track page screen group alias\".split(\" \"),\n\"1djTjIRWIUiW6EZg\",\"delighted\");delighted.survey({});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"state.change.buy-submit"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"state.change.buy-email-subscribe"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"https:\/\/www.opendoor.com\/homes\/.*\/buy\/pending",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"seller-lead"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"complete"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"seller-lead"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"complete"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"ignoreEvents"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"https:\/\/www.opendoor.com\/$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"state.change.offer.welcome"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"sign_repair_form_addendum"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"seller-dashboard.contract.signed"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"flow-address.verification.shown"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"preparing"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"basic"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"www\\.opendoor.com\\\/customers\\\/.*\\\/address",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"www.opendoor.com"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"https:\/\/www.opendoor.com\/how-it-works",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"\/w\/pricing"
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"\/w\/how-it-works"
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"\/w\/about"
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"\/w\/faq"
    },{
      "function":"_ew",
      "arg0":["macro",52],
      "arg1":"\/w\/reviews"
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"\/w\/stories"
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"\/w\/reviews"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"lead-state.change.ready"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"inspection-milestone.in-view.signatories-section"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"sign_form_purchase_agreement"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"closing-dashboard.view.sign-repair-addendum"
    }],
  "rules":[
    [["if",0],["add",0,4,6,8,22,73,81,82]],
    [["if",1],["add",1,76]],
    [["if",2],["add",2,75]],
    [["if",3],["add",3,8,12,19,73,77,81,91,98,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72]],
    [["if",0,4],["add",5]],
    [["if",3,5,6],["add",7,9,11,21,26,84,89,92,95,96,101,104,106,109,111,115]],
    [["if",0,7,8],["add",7,9,11,21,26,84,88,89,92,95,96,101,104,106,109,111,115]],
    [["if",3,10],["add",10,80,85,107]],
    [["if",11],["add",13,14,15,93,100,113]],
    [["if",12,13],["add",16,17,18,94]],
    [["if",14],["add",20]],
    [["if",3,7],["unless",8,15,16],["add",23,24,25,78,90,99,103,105,108,110,112,114]],
    [["if",0,17],["add",74,83]],
    [["if",3,20],["add",79]],
    [["if",0,10],["add",85]],
    [["if",3,21],["add",86]],
    [["if",3,22],["add",86]],
    [["if",3,23],["add",86]],
    [["if",3,24],["add",86]],
    [["if",3,25],["add",86]],
    [["if",3,26],["add",86]],
    [["if",0,23],["add",86]],
    [["if",0,27],["add",86]],
    [["if",0,26],["add",86]],
    [["if",0,24],["add",86]],
    [["if",0,22],["add",86]],
    [["if",0,21],["add",86]],
    [["if",28],["add",87]],
    [["if",3,7,15],["add",88]],
    [["if",0,7],["unless",8,15,16],["add",90]],
    [["if",29],["add",97]],
    [["if",13,30],["add",102]],
    [["if",31],["add",116]],
    [["if",9],["block",7,9,10,11,81,84,89,95,104,115]],
    [["if",3,18,19],["block",77]]]
},
"runtime":[
[],[]
]



};
var ba,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Aa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ba=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,A=document,Ia=navigator,Ja=A.currentScript&&A.currentScript.src,Ka=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=A.getElementsByTagName("script")[0]||A.body||A.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=A.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=A.body&&A.body.lastChild||
A.body||A.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Sa=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ua=function(a){var b=A.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Xa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ya=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a={},ab=function(a,b){$a[a]=$a[a]||[];$a[a][b]=!0},bb=function(a){for(var b=[],c=$a[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||ab("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ib=function(a){var b=A.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var jb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},mb=function(a,b,c,d){var e=kb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=lb(e,function(g){return g.Eb},b);if(1===e.length)return e[0].id;e=lb(e,function(g){return g.Za},c);return e[0]?e[0].id:void 0}};
function nb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=jb(b,e).indexOf(c)}
var qb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=ob(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!pb(y,t)&&nb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!pb(p,t)&&nb(m,a,l)}return k};function lb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function kb(a,b){for(var c=[],d=jb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Eb:1*k[0]||1,Za:1*k[1]||1}))}}return c}
var sb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tb=/(^|\.)doubleclick\.net$/i,pb=function(a,b){return tb.test(document.location.hostname)||"/"===b&&sb.test(a)},ob=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ub=[],vb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wb=function(a){return vb[a]},xb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Cb[a]};
ub[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bb,Db)+"'"}};var Jb=/['()]/g,Kb=function(a){return"%"+a.charCodeAt(0).toString(16)};ub[12]=function(a){var b=
encodeURIComponent(String(a));Jb.lastIndex=0;return Jb.test(b)?b.replace(Jb,Kb):b};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};ub[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Xb,Yb,Zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$b=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},bc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ac(a[e],b,c));return d},
cc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},ac=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ac(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.Bc(h))return;c[g]=!0;try{var k=bc(h,b,c);k.vtp_gtmEventId=b.id;d=$b(k,b);Yb&&(d=Yb.wf(d,k))}catch(w){b.Td&&b.Td(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ac(a[l],b,c)]=ac(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ac(a[n],b,c);Xb&&(m=m||p===Xb.sb);d.push(p)}return Xb&&m?Xb.zf(d):d.join("");case "escape":d=ac(a[1],b,c);if(Xb&&la(a[1])&&"macro"===a[1][0]&&Xb.ag(a))return Xb.kg(d);d=String(d);for(var t=2;t<a.length;t++)ub[a[t]]&&(d=ub[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Fd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=dc(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Vb(bc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=function(){var a=function(b){return{toString:function(){return b}}};return{ad:a("convert_case_to"),bd:a("convert_false_to"),cd:a("convert_null_to"),dd:a("convert_true_to"),ed:a("convert_undefined_to"),ja:a("function"),Le:a("instance_name"),Me:a("live_only"),Ne:a("malware_disabled"),Oe:a("metadata"),Vg:a("original_vendor_template_id"),Pe:a("once_per_event"),ud:a("once_per_load"),vd:a("setup_tags"),wd:a("tag_id"),xd:a("teardown_tags")}}();var fc=null,ic=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];fc=gc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=hc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=fc(e[g]);if(null===h)return null;
if(h)return!1}return!0},gc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var jc,kc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.ef&&(l["fix_"+m]=!0),l.Gd=l.Gd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,F:q.F,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,z){var C=y||x||z||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=C;r[w]=B.textContent||B.innerText||C});return{tagName:q[1],F:r,fb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Gd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Sd=function(){return this[this.length-1]};v.Fc=function(B){var E=this.Sd();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.vf=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.fb=q.test(B.tagName)||B.fb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Fc("TABLE")?(k="<TBODY>"+k,C()):l.dh&&r.test(E)&&v.vf(E)?v.Fc(E)?x():(k="</"+B.tagName+">"+k,C()):B.fb||v.push(B)},endTag:function(B){v.Sd()?l.Jf&&!v.Fc(B.tagName)?x():v.pop():l.Jf&&(y(),C())}},C=function(){var B=k,E=w(y());k=B;if(E&&
z[E.type])z[E.type](E)};t=function(){C();return w(y())}}();return{append:function(q){k+=q},ug:t,jh:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},kh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.rh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.mh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.sh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.F){var t=m.F[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.fb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.bh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.lf=a.lf||!b[h]&&h;jc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Ve:a,We:a,Xe:a,Ye:a,ff:a,hf:function(p){return p},done:a,error:function(p){throw p;},yg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,gb:v.defaultView||v.parentWindow,za:v,Kb:jc("",{ef:!0}),mc:[q],Nc:"",Oc:v.createElement(q.nodeName),cb:[],oa:[]});p(this.Oc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.oa,arguments);for(var q;!this.Db&&this.oa.length;)q=this.oa.shift(),"function"===typeof q?this.rf(q):this.Xc(q)};t.prototype.rf=function(q){var r={type:"function",value:q.name||q.toString()};this.Kc(r);q.call(this.gb,this.za);this.Xd(r)};
t.prototype.Xc=function(q){this.Kb.append(q);for(var r,v=[],w,y;(r=this.Kb.ug())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.Sg(v);w&&this.Pf(r);y&&this.Qf(r)};t.prototype.Sg=function(q){var r=this.nf(q);r.zd&&(r.zc=this.Nc+r.zd,this.Nc+=r.pg,this.Oc.innerHTML=r.zc,this.Pg())};t.prototype.nf=function(q){var r=this.mc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.F){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.F.id&&"ps-style"!==x.F.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.fb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{th:q,raw:v.join(""),zd:w.join(""),pg:y.join("")}};t.prototype.Pg=function(){for(var q,r=[this.Oc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.mc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.mc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Pf=function(q){var r=this.Kb.clear();r&&this.oa.unshift(r);q.src=q.F.src||q.F.Wg;q.src&&this.cb.length?this.Db=q:this.Kc(q);var v=this;this.Rg(q,function(){v.Xd(q)})};t.prototype.Qf=function(q){var r=this.Kb.clear();r&&this.oa.unshift(r);q.type=q.F.type||q.F.Xg||"text/css";this.Tg(q);r&&this.write()};t.prototype.Tg=function(q){var r=this.qf(q);this.Zf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.za.createTextNode(q.content)))};t.prototype.qf=function(q){var r=this.za.createElement(q.tagName);r.setAttribute("type",q.type);d(q.F,function(v,w){r.setAttribute(v,w)});return r};t.prototype.Zf=function(q){this.Xc('<span id="ps-style"/>');var r=this.za.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Kc=function(q){q.gg=this.oa;this.oa=[];this.cb.unshift(q)};t.prototype.Xd=function(q){q!==this.cb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.cb.shift(),this.write.apply(this,q.gg),!this.cb.length&&this.Db&&(this.Kc(this.Db),this.Db=null))};t.prototype.Rg=function(q,r){var v=this.pf(q),w=this.Eg(v),y=this.options.Ve;q.src&&(v.src=q.src,this.Cg(v,w?y:function(){r();y()}));try{this.Yf(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.pf=function(q){var r=this.za.createElement(q.tagName);d(q.F,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.Yf=function(q){this.Xc('<span id="ps-script"/>');
var r=this.za.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Cg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.Eg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.yg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.We(),w.stream=t.apply(null,w),y.Xe())}function t(w,y,x){function z(F){F=x.hf(F);v.write(F);x.Ye(F)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var C=w.ownerDocument,B={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.gb.onerror||a;v.gb.onerror=function(F,P,T){x.error({gh:F+
" - "+P+":"+T});E.apply(v.gb,arguments)};v.write(y,function(){e(C,B);v.gb.onerror=E;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.eh?w[0]:w;var z=[w,y,x];w.jg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.ff(z);r.push(z);v||p();return w.jg},{streams:{},ih:r,Yg:n})}();kc=l.postscribe}})();var xc={},yc=null,zc=Math.random();xc.i="GTM-MSX7NS";xc.wb="7o0";var Ac={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Cc="www.googletagmanager.com/gtm.js";var Dc=Cc,Ec=null,Fc=null,Gc=null,Hc="//www.googletagmanager.com/a?id="+xc.i+"&cv=195",Ic={},Jc={},Kc=function(){var a=yc.sequence||0;yc.sequence=a+1;return a};var G=function(a,b,c,d){return(2===Lc()||d||"http:"!=u.location.protocol?a:b)+c},Lc=function(){var a=Na(),b;if(1===a)a:{var c=Dc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=A.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Mc=!1;
var Qc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Zc=function(){Rc&&(u.clearTimeout(Rc),Rc=void 0);void 0===Sc||Tc[Sc]&&!Uc||(Vc[Sc]||Wc.cg()||0>=Xc--?(ab("GTM",1),Vc[Sc]=!0):(Wc.wg(),Pa(Yc()),Tc[Sc]=!0,Uc=""))},Yc=function(){var a=Sc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[$c,Tc[a]?"":"&es=1",ad[a],b?"&u="+b:"",c?"&ut="+c:"",Qc(),Uc,"&z=0"].join("")},bd=function(){return[Hc,"&v=3&t=t","&pid="+oa(),"&rv="+xc.wb].join("")},cd="0.005000">
Math.random(),$c=bd(),dd=function(){$c=bd()},Tc={},Uc="",Sc=void 0,ad={},Vc={},Rc=void 0,Wc=function(a,b){var c=0,d=0;return{cg:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},wg:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Xc=1E3,ed=function(a,b){if(cd&&!Vc[a]&&Sc!==a){Zc();Sc=a;Uc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ad[a]="&e="+c+"&eid="+a;Rc||(Rc=u.setTimeout(Zc,500))}},fd=function(a,b,c){if(cd&&!Vc[a]&&b){a!==Sc&&(Zc(),Sc=a);var d=String(b[ec.ja]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Uc=Uc?Uc+"."+e:"&tr="+e;Rc||(Rc=u.setTimeout(Zc,500));2022<=Yc().length&&Zc()}};var gd={},hd=new pa,id={},jd={},nd={name:"dataLayer",set:function(a,b){f(kd(a,b),id);ld()},get:function(a){return md(a,2)},reset:function(){hd=new pa;id={};ld()}},md=function(a,b){if(2!=b){var c=hd.get(a);if(cd){var d=od(a);c!==d&&ab("GTM",5)}return c}return od(a)},od=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:qd(d)},qd=function(a){for(var b=id,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var td=function(a,b){jd.hasOwnProperty(a)||(hd.set(a,b),f(kd(a,b),id),ld())},kd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ld=function(a){ra(jd,function(b,c){hd.set(b,c);f(kd(b,void 0),id);f(kd(b,c),id);a&&delete jd[b]})},ud=function(a,b,c){gd[a]=gd[a]||{};var d=1!==c?od(b):hd.get(b);"array"===Fa(d)||"object"===Fa(d)?gd[a][b]=f(d):gd[a][b]=d},vd=function(a,b){if(gd[a])return gd[a][b]};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bd=function(a){var b=md("gtm.whitelist");b&&ab("GTM",9);var c=b&&Da(va(b),xd),d=md("gtm.blacklist");d||(d=md("tagTypeBlacklist"))&&ab("GTM",3);
d?ab("GTM",8):d=[];Ad()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(va(d),"google")&&ab("GTM",2);var e=d&&Da(va(d),yd),g={};return function(h){var k=h&&h[ec.ja];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Jc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ma(c,l[p])){ab("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&ab("GTM",10);t=r}}var v=!m||t;v||!(0<=ma(l,"sandboxedScripts"))||c&&-1!==ma(c,"sandboxedScripts")||(v=qa(e,zd));return g[k]=v}},Ad=function(){return wd.test(u.location&&u.location.hostname)};var Cd={wf:function(a,b){b[ec.ad]&&"string"===typeof a&&(a=1==b[ec.ad]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ec.cd)&&null===a&&(a=b[ec.cd]);b.hasOwnProperty(ec.ed)&&void 0===a&&(a=b[ec.ed]);b.hasOwnProperty(ec.dd)&&!0===a&&(a=b[ec.dd]);b.hasOwnProperty(ec.bd)&&!1===a&&(a=b[ec.bd]);return a}};var Dd={active:!0,isWhitelisted:function(){return!0}},Ed=function(a){var b=yc.zones;!b&&a&&(b=yc.zones=a());return b};var Fd=!1,Gd=0,Hd=[];function Id(a){if(!Fd){var b=A.createEventObject,c="complete"==A.readyState,d="interactive"==A.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fd=!0;for(var e=0;e<Hd.length;e++)D(Hd[e])}Hd.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function Jd(){if(!Fd&&140>Gd){Gd++;try{A.documentElement.doScroll("left"),Id()}catch(a){u.setTimeout(Jd,50)}}}var Kd=function(a){Fd?a():Hd.push(a)};var Ld={},Md={},Nd=function(a,b,c,d){if(!Md[a]||Ac[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Md[a].tags.push(e)-1},Od=function(a,b,c,d){if(Md[a]){var e=Md[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pd(a){for(var b=Ld[a]||[],c=0;c<b.length;c++)b[c]();Ld[a]={push:function(d){d(xc.i,Md[a])}}}
var Sd=function(a,b,c){Md[a]={tags:[]};ha(b)&&Qd(a,b);c&&u.setTimeout(function(){return Pd(a)},Number(c));return Rd(a)},Qd=function(a,b){Ld[a]=Ld[a]||[];Ld[a].push(za(function(){return D(function(){b(xc.i,Md[a])})}))};function Rd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Pd(a)})},cf:function(){d=!0;b>=c&&Pd(a)}}};var Td=function(){function a(d){return!ka(d)||0>d?0:d}if(!yc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ka(nd.get("gtm.start"))?nd.get("gtm.start"):0;yc._li={cst:a(c-b),cbt:a(Fc-b)}}};var Xd=!1,Yd=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},Zd=!1;
var ce=function(){},be=function(){return u.GoogleAnalyticsObject||"ga"},de=!1;var ke=function(a){};function je(a,b){a.containerId=xc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function le(a,b,c,d){var e=Sb[a],g=me(a,b,c,d);if(!g)return null;var h=ac(e[ec.vd],c,[]);if(h&&h.length){var k=h[0];g=le(k.index,{I:g,O:1===k.Fd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function me(a,b,c,d){function e(){if(g[ec.Ne])k();else{var w=bc(g,c,[]),y=Nd(c.id,String(g[ec.ja]),Number(g[ec.wd]),w[ec.Oe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Sb[a],"5");Od(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Sb[a],"6");Od(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;fd(c.id,g,"1");var z=function(B){var E=xa()-C;ke(B);fd(c.id,g,"7");Od(c.id,y,"exception",E);x||(x=!0,k())};var C=xa();try{$b(w,c)}catch(B){z(B)}}}var g=Sb[a],h=b.I,k=b.O,l=b.terminate;if(c.Bc(g))return null;var m=ac(g[ec.xd],c,[]);if(m&&m.length){var n=m[0],p=le(n.index,{I:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Fd?l:p}if(g[ec.ud]||g[ec.Pe]){var t=g[ec.ud]?Tb:c.Gg,q=h,r=k;if(!t[a]){e=za(e);var v=ne(a,t,e);h=v.I;k=v.O}return function(){t[a](q,r)}}return e}
function ne(a,b,c){var d=[],e=[];b[a]=oe(d,e,c);return{I:function(){b[a]=pe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=qe;for(var g=0;g<e.length;g++)e[g]()}}}function oe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pe(a){a()}function qe(a,b){b()};var te=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ya[d]){var e=Sb[d];var g=b.add();try{var h=le(d,{I:g,O:g,terminate:g},a,d);h?c.push({ke:d,ae:cc(e),Hf:h}):(re(d,a),g())}catch(l){g()}}b.cf();c.sort(se);for(var k=0;k<c.length;k++)c[k].Hf();return 0<c.length};function se(a,b){var c,d=b.ae,e=a.ae;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ke,k=b.ke;g=h>k?1:h<k?-1:0}return g}
function re(a,b){if(!cd)return;var c=function(d){var e=b.Bc(Sb[d])?"3":"4",g=ac(Sb[d][ec.vd],b,[]);g&&g.length&&c(g[0].index);fd(b.id,Sb[d],e);var h=ac(Sb[d][ec.xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ue=!1,ve=function(a,b,c,d,e){if("gtm.js"==b){if(ue)return!1;ue=!0}ed(a,b);var g=Sd(a,d,e);ud(a,"event",1);ud(a,"ecommerce",1);ud(a,"gtm");var h={id:a,name:b,Bc:Bd(c),Ya:[],Gg:[],Td:function(n){ab("GTM",6);ke(n)}};h.Ya=ic(h);var k=te(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ce();if(!k)return k;for(var l=0;l<h.Ya.length;l++)if(h.Ya[l]){var m=
Sb[l];if(m&&!Ac[String(m[ec.ja])])return!0}return!1};var xe=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};var H={Wb:"event_callback",Yb:"event_timeout",R:"gtag.config"};var ye=function(){var a=!1;return a};function ze(){var a=yc;return a.gcq=a.gcq||new Ae}var Be=function(a,b){ze().register(a,b)},Ce=function(){this.status=1;this.sc={};this.be=null},De=function(a,b,c,d,e){this.type=a;this.Lg=b;this.ca=c||"";this.yb=d;this.defer=e},Ae=function(){this.me={};this.Ld={};this.Ta=[]},Ee=function(a,b){return a.me[b]=a.me[b]||new Ce},Fe=function(a,b,c,d){var e=Ee(a,d.ca).be;if(e){var g=f(c),h=f(Ee(a,d.ca).sc),k=f(a.Ld),l=new xe(g,h,k);try{e(b,d.Lg,l)}catch(m){}}};
Ae.prototype.register=function(a,b){3!==Ee(this,a).status&&(Ee(this,a).be=b,Ee(this,a).status=3,this.flush())};Ae.prototype.push=function(a,b,c,d){var e=Math.floor(xa()/1E3);if(c&&1===Ee(this,c).status&&(Ee(this,c).status=2,this.push("require",[],c),!ye())){var g=encodeURIComponent(c);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Ta.push(new De(a,e,c,b,d));d||this.flush()};
Ae.prototype.flush=function(a){for(var b=this;this.Ta.length;){var c=this.Ta[0];if(c.defer)c.defer=!1,this.Ta.push(c);else switch(c.type){case "require":if(3!==Ee(this,c.ca).status&&!a)return;break;case "set":ra(c.yb[0],function(e,g){b.Ld[e]=g});break;case "config":var d=c.yb[0];Ee(this,c.ca).sc={};Fe(this,H.R,d,c);Ee(this,c.ca).sc=d;break;case "event":Fe(this,c.yb[1],c.yb[0],c)}this.Ta.shift()}};var Ge=/[A-Z]+/,He=/\s/,Ie=function(a){if(ja(a)&&(a=wa(a),!He.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ge.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ka:d}}}}},Ke=function(a){for(var b={},c=0;c<a.length;++c){var d=Ie(a[c]);d&&(b[d.id]=d)}Je(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Je(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ka[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Le={};var Me=null,Ne={},Oe={},Pe,Qe=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.Wb]&&(c.eventCallback=b[H.Wb]),b[H.Yb]&&(c.eventTimeout=b[H.Yb]));return c};
var Xe={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=Qe(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Le[b]||(Le[b]=[]);Le[b].push(c)}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b){b.eventModel=f(b);b.event="gtag.set";b._clear=!0;return b}}},Ye={policy:!0};var $e=function(a){return Ze?A.querySelectorAll(a):null},af=function(a,b){if(!Ze)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!A.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},bf=!1;if(A.querySelectorAll)try{var cf=A.querySelectorAll(":root");cf&&1==cf.length&&cf[0]==A.documentElement&&(bf=!0)}catch(a){}var Ze=bf;var kf=function(a){if(jf(a))return a;this.Og=a};kf.prototype.Of=function(){return this.Og};var jf=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};kf.prototype.getUntrustedUpdateValue=kf.prototype.Of;var lf=!1,mf=[];function nf(){if(!lf){lf=!0;for(var a=0;a<mf.length;a++)D(mf[a])}}var of=function(a){lf?D(a):mf.push(a)};var pf=[],qf=!1,rf=function(a){return u["dataLayer"].push(a)},sf=function(a){var b=yc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},uf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&td(g,void 0),td(g,h))});Ec||(Ec=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Kc(),a["gtm.uniqueEventId"]=d,td("gtm.uniqueEventId",d));Gc=c;var e=tf(a);
Gc=null;switch(c){case "gtag.set":e&&ab("GTM",18);break;case "gtm.init":ab("GTM",19),e&&ab("GTM",20)}return e};function tf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=yc.zones;d=e?e.checkState(xc.i,c):Dd;return d.active?ve(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var vf=function(){for(var a=!1;!qf&&0<pf.length;){qf=!0;delete id.eventModel;ld();var b=pf.shift();if(null!=b){var c=jf(b);if(c){var d=b;b=jf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=md(h,1);if(la(k)||Ha(k))k=f(k);jd[h]=k}}try{if(ha(b))try{b.call(nd)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=Xe[b[0]];if(r&&(!c||!Ye[b[0]])){b=r(b);break a}}b=void 0}if(!b){qf=!1;continue}}a=uf(b)||a}}finally{c&&ld(!0)}}qf=!1}
return!a},wf=function(){var a=vf();try{var b=xc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},xf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});of(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<yc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new kf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);pf.push.apply(pf,d);if(300<this.length)for(ab("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return vf()&&h};pf.push.apply(pf,a.slice(0));D(wf)};var yf;var Uf={};Uf.sb=new String("undefined");
var Vf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Uf.sb?b:a[d]);return c.join("")}};Vf.prototype.toString=function(){return this.resolve("undefined")};Vf.prototype.valueOf=Vf.prototype.toString;Uf.Qe=Vf;Uf.jc={};Uf.zf=function(a){return new Vf(a)};var Wf={};Uf.xg=function(a,b){var c=Kc();Wf[c]=[a,b];return c};Uf.Cd=function(a){var b=a?0:1;return function(c){var d=Wf[c];if(d&&"function"===typeof d[b])d[b]();Wf[c]=void 0}};Uf.ag=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Uf.kg=function(a){if(a===Uf.sb)return a;var b=Kc();Uf.jc[b]=a;return'google_tag_manager["'+xc.i+'"].macro('+b+")"};Uf.eg=function(a,b,c){a instanceof Uf.Qe&&(a=a.resolve(Uf.xg(b,c)),b=fa);return{zc:a,I:b}};var Xf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Yf=function(a){yc.hasOwnProperty("autoEventsSettings")||(yc.autoEventsSettings={});var b=yc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Zf=function(a,b,c){Yf(a)[b]=c},$f=function(a,b,c,d){var e=Yf(a),g=ya(e,b,d);e[b]=c(g)},ag=function(a,b,c){var d=Yf(a);return ya(d,b,c)};var bg=function(){for(var a=Ia.userAgent+(A.cookie||"")+(A.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},eg=function(a,b,c,d){var e=cg(b);return mb(a,e,dg(c),d)},fg=function(a,b,c,d){var e=""+cg(c),g=dg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},cg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},dg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var gg=["1"],hg={},lg=function(a,b,c,d){var e=ig(a);hg[e]||jg(e,b,c)||(kg(e,bg(),b,c,d),jg(e,b,c))};function kg(a,b,c,d,e){var g=fg(b,"1",d,c);qb(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function jg(a,b,c){var d=eg(a,b,c,gg);d&&(hg[a]=d);return d}function ig(a){return(a||"_gcl")+"_au"};var mg=function(){for(var a=[],b=A.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Uc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Uc]||(g[a[h].Uc]=[]),g[a[h].Uc].push({timestamp:k[1],Lf:k[2]}))}return g};function ng(){for(var a=og,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function pg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var og,qg,rg=function(a){og=og||pg();qg=qg||ng();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(og[l],og[m],og[n],og[p])}return b.join("")},sg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=qg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}og=og||pg();qg=qg||
ng();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var tg;function ug(a,b){if(!a||b===A.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var yg=function(){var a=vg,b=wg,c=xg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(A,"mousedown",d);Qa(A,"keyup",d);Qa(A,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},xg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var zg=/(.*?)\*(.*?)\*(.*)/,Ag=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Bg=/^(?:www\.|m\.|amp\.)+/,Cg=/([^?#]+)(\?[^#]*)?(#.*)?/,Dg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Fg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(rg(String(d))))}var e=b.join("*");return["1",Eg(e),e].join("*")},Eg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=tg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}tg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^tg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Hg=function(){return function(a){var b=ib(u.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=Gg(d)||{};var e=gb(b,"fragment").match(Dg);a.fragment=Gg(e&&e[3]||
"")||{}}},Ig=function(){var a=Hg(),b=xg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Aa(c,d.query),Aa(c,d.fragment));return c},Gg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=zg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Eg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=sg(t[q+1]);return p}}}}catch(r){}};
function Jg(a,b,c){function d(m){var n=m,p=Dg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Cg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Kg(a,b,c){for(var d={},e={},g=xg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&ug(k.domains,b)&&(k.fragment?Aa(e,k.callback()):Aa(d,k.callback()))}if(Ba(d)){var l=Fg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=A.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Jg(l,a.action);Za.test(v)&&(a.action=v)}}}else Lg(l,a,!1)}if(!c&&Ba(e)){var w=Fg(e);Lg(w,a,!0)}}function Lg(a,b,c){if(b.href){var d=Jg(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var vg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Kg(e,e.hostname,!1)}}catch(h){}},wg=function(a){try{if(a.action){var b=gb(ib(a.action),"host");Kg(a,b,!0)}}catch(c){}},Mg=function(a,b,c,d){yg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};xg().decorators.push(e)},Ng=function(){var a=A.location.hostname,b=Ag.exec(A.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Bg,"")===e.replace(Bg,"")},Og=function(a,b){return!1===a?!1:a||b||Ng()};var Pg={};var Qg=/^\w+$/,Rg=/^[\w-]+$/,Sg=/^~?[\w-]+$/,Tg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Ug(a){return a&&"string"==typeof a&&a.match(Qg)?a:"_gcl"}var Wg=function(){var a=ib(u.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Vg(b,c,d)};
function Vg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Rg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Pg.gtm_3pds?0:Pg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Xg(a,b,c){function d(p,t){var q=Yg(p,e);q&&qb(q,t,h,g,l,!0)}b=b||{};var e=Ug(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ud?7776E3:b.Ud;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.vh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Yg=function(a,b){var c=Tg[a];if(void 0!==c)return b+c},Zg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function $g(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ah=function(a,b,c,d,e){if(la(b)){var g=Ug(e);Mg(function(){for(var h={},k=0;k<a.length;++k){var l=Yg(a[k],g);if(l){var m=jb(l,A.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},bh=function(a){return a.filter(function(b){return Sg.test(b)})},ch=function(a){for(var b=["aw","dc"],c=Ug(a&&a.prefix),d={},e=0;e<b.length;e++)Tg[b[e]]&&(d[b[e]]=Tg[b[e]]);ra(d,function(g,h){var k=jb(c+h,A.cookie);if(k.length){var l=k[0],m=Zg(l),n={};n[g]=[$g(l)];Xg(n,a,m)}})};var dh=/^\d+\.fls\.doubleclick\.net$/;function eh(a){var b=ib(u.location.href),c=gb(b,"host",!1);if(c&&c.match(dh)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function fh(a,b){if("aw"==a||"dc"==a){var c=eh("gcl"+a);if(c)return c.split(".")}var d=Ug(b);if("_gcl"==d){var e;e=Wg()[a]||[];if(0<e.length)return e}var g=Yg(a,d),h;if(g){var k=[];if(A.cookie){var l=jb(g,A.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=$g(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=bh(k)}else h=k}else h=k}else h=[];return h}
var gh=function(){var a=eh("gac");if(a)return decodeURIComponent(a);var b=mg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Lf);g=bh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},hh=function(a,b,c,d,e){lg(b,c,d,e);var g=hg[ig(b)],h=Wg().dc||[],k=!1;if(g&&0<h.length){var l=yc.joined_au=yc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=ig(b),r=hg[q];r&&kg(q,r,c,d,e)}};var ih;if(3===xc.wb.length)ih="g";else{var jh="G";ih=jh}
var kh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ih,OPT:"o"},lh=function(a){var b=xc.i.split("-"),c=b[0].toUpperCase(),d=kh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===xc.wb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+xc.wb+e};
var nh=function(a){return!(void 0===a||null===a||0===(a+"").length)},oh=function(a,b){var c;if(2===b.L)return a("ord",oa(1E11,1E13)),!0;if(3===b.L)return a("ord","1"),a("num",oa(1E11,1E13)),!0;if(4===b.L)return nh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.L)c="1";else if(6===b.L)c=b.Pc;else return!1;nh(c)&&a("qty",c);nh(b.Ab)&&a("cost",b.Ab);nh(b.transactionId)&&a("ord",b.transactionId);return!0},ph=encodeURIComponent,qh=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:ph(p)))}var d=a.wc,e=a.protocol;e+=a.Lb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+ph(d)+(";type="+ph(a.yc))+(";cat="+ph(a.Sa));var g=a.Bf||{};ra(g,function(n,p){e+=";"+ph(n)+"="+ph(p+"")});if(oh(c,a)){nh(a.Rb)&&c("u",a.Rb);nh(a.Qb)&&c("tran",a.Qb);c("gtm",lh());!1===a.Ze&&c("npa","1");if(a.uc){var h=fh("dc",a.ya);h&&h.length&&c("gcldc",h.join("."));var k=fh("aw",a.ya);k&&k.length&&c("gclaw",k.join("."));var l=gh();l&&c("gac",l);lg(a.ya,void 0,a.xf,a.yf);
var m=hg[ig(a.ya)];m&&c("auiddc",m)}nh(a.Lc)&&c("prd",a.Lc,!0);ra(a.Wc,function(n,p){c(n,p)});e+=b||"";nh(a.Jb)&&c("~oref",a.Jb);a.Lb?Oa(e+"?",a.I):Pa(e+"?",a.I,a.O)}else D(a.O)};var rh=["input","select","textarea"],sh=["button","hidden","image","reset","submit"],th=function(a){var b=a.tagName.toLowerCase();return!na(rh,function(c){return c===b})||"input"===b&&na(sh,function(c){return c===a.type.toLowerCase()})?!1:!0},uh=function(a){return a.form?a.form.tagName?a.form:A.getElementById(a.form):Xa(a,["form"],100)},vh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(th(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var yh=!!u.MutationObserver,zh=void 0,Ah=function(a){if(!zh){var b=function(){var c=A.body;if(c)if(yh)(new MutationObserver(function(){for(var e=0;e<zh.length;e++)D(zh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<zh.length;e++)D(zh[e])}))})}};zh=[];A.body?b():D(b)}zh.push(a)};var bi=u.clearTimeout,ci=u.setTimeout,K=function(a,b,c){if(ye()){b&&D(b)}else return Ma(a,b,c)},di=function(){return new Date},ei=function(){return u.location.href},fi=function(a){return gb(ib(a),"fragment")},gi=function(a){return fb(ib(a))},hi=null;
var ii=function(a,b){return md(a,b||2)},ji=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return rf(a)},ki=function(a,b){u[a]=b},L=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},li=function(a,b,c){return jb(a,b,void 0===c?!0:!!c)},mi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Ud:d},g=Wg();Xg(g,e);ch(e)},ni=function(a,b,c,d,e){for(var g=Ig(),h=Ug(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Tg[l]){var m=Yg(l,h),
n=g[m];if(n){var p=Math.min(Zg(n),xa()),t;b:{for(var q=p,r=jb(m,A.cookie),v=0;v<r.length;++v)if(Zg(r[v])>q){t=!0;break b}t=!1}t||qb(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Xg(Vg(g.gclid,g.gclsrc),w);},oi=function(a,b,c,d,e){ah(a,b,c,d,e);},pi=function(a,b){if(ye()){
b&&D(b)}else Oa(a,b)},qi=function(a){return!!ag(a,"init",!1)},ri=function(a){Zf(a,"init",!0)},si=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Dc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(G("https://","http://",d))},ti=function(a,b){var c=a[b];return c};

var vi=Uf.eg;
var wi=new pa,xi=function(a,b){function c(h){var k=ib(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},yi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(yi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=wi.get(q);r||(r=new RegExp(c,t),wi.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return xi(b,c)}return!1};var Ai=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Bi={},Ci=encodeURI,X=encodeURIComponent,Di=Pa;var Ei=function(a,b){if(!a)return!1;var c=gb(ib(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Fi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Bi.bg=function(){var a=!1;return a};var Gi=function(){var a=!1;return a};var fj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var wj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},xj=function(){this.c=1;this.e=[];this.p2=this.p=null};function yj(a){var b=yc,c=b.gss=b.gss||{};return c[a]=c[a]||new xj}
var zj=function(a){if(yj(a).p&&!yj(a).p2){var b=yj(a).p;yj(a).p2=function(c,d,e){b(c,d,e.eventModel)}}return yj(a).p2},Aj=function(a,b){yj(a).p2=b;yj(a).p=function(c,d,e){return b(c,d,new xe(e))}},Bj=function(a){var b=yj(a),c=zj(a);if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,new xe(l.p))}catch(m){}};g(d);g(e)}};var Uj=window,Vj=document,Wj=function(a){var b=Uj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Uj["ga-disable-"+a])return!0;try{var c=Uj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=jb("AMP_TOKEN",Vj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Vj.getElementById("__gaOptOutExtension")?!0:!1};var bk=!1;bk=!0;
var dk=function(a,b,c){if(bk)ze().push("event",[c,b],a,void 0);else{ck(a);var d=Math.floor(xa()/1E3);yj(a).e.push(new wj(b,d,c,void 0));Bj(a)}},ek=function(a,b,c){if(bk)ze().push("event",[c,b],a,!0);else{ck(a);var d=Math.floor(xa()/1E3);yj(a).e.push(new wj(b,d,c,!0))}},ck=function(a){if(1===yj(a).c&&(yj(a).c=2,!ye())){var b=encodeURIComponent(a);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},gk=function(a,b){},fk=function(a,b){},hk=function(a){return"_"===a.charAt(0)},ik=function(a){ra(a,function(c){hk(c)&&
delete a[c]});var b=a[H.rb]||{};ra(b,function(c){hk(c)&&delete b[c]})};var Z={a:{}};

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=L("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;qh(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Fi(b.vtp_customVariable||[],"key","value")||{},e={Sa:b.vtp_activityTag,uc:c,ya:b.vtp_conversionCookiePrefix||void 0,Ab:void 0,L:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,wc:b.vtp_advertiserId,yc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,
Jb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Pc:void 0,Lb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Qb:b.vtp_transactionVariable,transactionId:void 0,Rb:b.vtp_userVariable,Wc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){K("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,L("google_attr").build([Fi(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=a.vtp_gtmOnFailure;Td();K("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=L("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Fi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),
a.vtp_eventValue&&(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:lh()})||b()}else b()},b)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(vd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=ii("gtm.referrer",1)||A.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(ib(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):gi(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Xf(c,"gtm.click");ji(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!qi("cl")){var c=L("document");Qa(c,"click",a,!0);ri("cl")}D(b.vtp_gtmOnSuccess)})}();

Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:ii("gtm.url",1))||ei();var d=b[a("vtp_component")];if(!d||"URL"==d)return gi(String(c));var e=ib(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=ii(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();



Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){D(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
Ng())&&ni(a,h,k,l));mi(e,c,d);hh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");oi(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=vd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=v(z),n[y]=x,p.push(y),35<p.length)){var C=p.shift();delete n[C]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(ei());la(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Ei(q,w)}function e(q){m.test(q)||(q="http://"+q);return gb(ib(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":return b(r,"FORM."+q,k)||v;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||
v;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Sa(q,"value");case "button":return Ta(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)th(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Sa(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",
HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||v;case "TEXT":return b(r,w,Ta)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),C=ib(z),
B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=gb(C,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,P=a(r,"element");E=P&&Sa(P,F)||v||""}return E;case "MD":var T=q.vtp_mdValue,R=b(r,"MD",Oh);return T&&R?Rh(R,T)||v:R||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();


Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:ei()}function b(g,h){Qa(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:gi(l),D:fi(l)})})}function c(g,h){Qa(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:gi(l),D:fi(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:gi(ei()),
D:fi(ei())})}}catch(n){}}function e(){var g={source:null,state:L("history").state||null,url:gi(ei()),D:fi(ei())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;ji(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=L("self");if(!qi("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);ri("hl")}D(g.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=L("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Td();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:lh()},m=function(t){return function(q,r,v){var w="DATA_LAYER"==t?ii(v):k[r];w&&(l[q]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,K("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=L(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);
b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{K("//bat.bing.com/bat.js",function(){var h=Ai(L("UET"),{ti:b.vtp_tagId,q:d});u[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){D(b.vtp_gtmOnFailure)}})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){D(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=A.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var b=function(d,e,g){Kd(function(){var h,k=yc;k.postscribe||(k.postscribe=kc);h=k.postscribe;var l={done:e},m=A.createElement("div");m.style.display="none";m.style.visibility="hidden";A.body.appendChild(m);try{h(m,d,l)}catch(n){D(g)}})};var c=function(d){if(A.body){var e=
d.vtp_gtmOnFailure,g=vi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.zc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(A.body,Ua(h),k,e)()}else ci(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();





Z.a.lcl=[],function(){function a(){var c=L("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Xa(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=ag("lcl",k?"nv.mwt":"mwt",0),m;m=k?ag("lcl","nv.ids",[]):ag("lcl","ids",[]);if(m.length){var n=Xf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=L((ti(h,"target")||"_self").substring(1)),t=!0;if(ji(n,sf(function(){t&&p&&(p.location.href=ti(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else ji(n,function(){},l||2E3);return!0}}};Qa(c,"click",e,!1);Qa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=ti(d,"href"),h=g.indexOf("#"),k=ti(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=gi(g),m=gi(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};$f("lcl","mwt",k,0);e||$f("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};$f("lcl","ids",l,[]);e||$f("lcl","nv.ids",l,[]);qi("lcl")||(a(),ri("lcl"));D(c.vtp_gtmOnSuccess)})}();

var jk={};jk.macro=function(a){if(Uf.jc.hasOwnProperty(a))return Uf.jc[a]},jk.onHtmlSuccess=Uf.Cd(!0),jk.onHtmlFailure=Uf.Cd(!1);jk.dataLayer=nd;jk.callback=function(a){Ic.hasOwnProperty(a)&&ha(Ic[a])&&Ic[a]();delete Ic[a]};jk.jf=function(){yc[xc.i]=jk;Aa(Jc,Z.a);Xb=Xb||Uf;Yb=Cd};
jk.Xf=function(){Pg.gtm_3pds=!0;yc=u.google_tag_manager=u.google_tag_manager||{};if(yc[xc.i]){var a=yc.zones;a&&a.unregisterChild(xc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Z;Vb=yi;jk.jf();xf();Fd=!1;Gd=0;if("interactive"==A.readyState&&!A.createEventObject||"complete"==A.readyState)Id();else{Qa(A,"DOMContentLoaded",Id);Qa(A,"readystatechange",Id);if(A.createEventObject&&A.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Jd()}Qa(u,"load",Id)}lf=!1;"complete"===A.readyState?nf():
Qa(u,"load",nf);a:{if(!cd)break a;u.setInterval(dd,864E5);}
Fc=(new Date).getTime();}};(0,jk.Xf)();

})()
