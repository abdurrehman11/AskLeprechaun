!function(){"use strict";function t(){return"www.tradingview.com"===location.host||"wwwcn.tradingview.com"===location.host||"dwq4do82y8xi7.cloudfront.net"===location.host||"s.tradingview.com"===location.host||"i18n.tradingview.com"===location.host||"partial.tradingview.com"===location.host||location.host.match(/^[a-z]{2}\.tradingview\.com/)||location.host.match(/prod-[^.]+.tradingview.com/)?"battle":-1!==location.href.indexOf("tradingview.com")?"staging":location.host.match(/webcharts/)?"staging_local":(location.host.match(/^localhost(:\d+)?$/),"local")}function e(t){if(null===t)return null;var e=t.querySelector("#tradingview-copyright"),i=t.querySelector("#tradingview-quotes"),r=e||i;return r&&t.removeChild(r),r}function i(t,e){Object.keys(e).forEach(function(i){t[i]=e[i]})}function r(){var t=document.createElement("style");return t.innerHTML="\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Tahoma, Arial, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #38acdb !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #299dcd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\t",t}var n={events:"external-embedding/embed-widget-events.js",hotlists:"external-embedding/embed-widget-hotlists.js",marketoverview:"external-embedding/embed-widget-market-overview.js",tickers:"external-embedding/embed-widget-tickers.js",forex_cross_rates:"external-embedding/embed-widget-forex-cross-rates.js",market_quotes:"external-embedding/embed-widget-market-quotes.js",forex_heat_map:"external-embedding/embed-widget-forex-heat-map.js",screener:"external-embedding/embed-widget-screener.js"},o={localPrefix:"/static/bundles/",cloudfrontBase:"https://s3.tradingview.com/",widgets:n},s=function(t,e){var i=this;void 0===e&&(e="json"),this.pathname=("battle"===this._environment()?"/":o.localPrefix)+t,this.settingsFormat=e,this._findScripts().forEach(function(t){return i._replaceScript(t)})},a={embedWidgetSitePath:{},widgetName:{},propertiesToWorkWith:{},utmInfo:{},iframeSrcBase:{},propertiesToSkipInHash:{},propertiesToGetParams:{},cloudfrontHost:{}};a.embedWidgetSitePath.get=function(){throw new Error("Method must be overridden")},a.widgetName.get=function(){throw new Error("Method must be overridden")},a.propertiesToWorkWith.get=function(){return[]},a.utmInfo.get=function(){return{utm_source:location.hostname,utm_medium:"widget",utm_campaign:this.widgetName}},s.prototype._environment=function(){var e=t();return"local"===e&&null===location.host.match(/^localhost(:\d+)?$/)&&(e="battle"),e},s.prototype.filterRawSettings=function(t){var e=this.propertiesToSkipInHash.concat(this.propertiesToWorkWith),i={};return Object.keys(t).forEach(function(r){e.includes(r)&&(i[r]=t[r])}),i},a.iframeSrcBase.get=function(){var t="";return"battle"===this._environment()?t="https://s.tradingview.com":"staging"===this._environment()&&-1!==location.hostname.indexOf("beta.tradingview.com")&&(t="https://betacdn.tradingview.com"),this.settings.customer&&this.propertiesToSkipInHash.includes("customer")&&(t+="/"+this.settings.customer),t+this.embedWidgetSitePath},a.propertiesToSkipInHash.get=function(){return[]},a.propertiesToGetParams.get=function(){return["locale","whitelabel"]},a.cloudfrontHost.get=function(){var t=document.createElement("a");return t.href=o.cloudfrontBase,t.host},s.prototype._findScripts=function(){var t,e=this,i=document.getElementsByTagName("script"),r=[],n=null;for(t=i.length;t--;){var o=i[t].src;if(o){n||(n=document.createElement("a")),n.href=o;var s=("/"===n.pathname[0]?"":"/")+n.pathname,a=n.host===e.cloudfrontHost||"d33t3vvu2t2yu5.cloudfront.net"===n.host;s!==e.pathname||"battle"===e._environment()&&!a||r.push(i[t])}}return r},s.prototype._replaceScript=function(t){var e;if(this.script=t,"json"===this.settingsFormat?e=this._scriptContentToJSON():"stroke"===this.settingsFormat&&(e=t.innerHTML.trim()),e){if(this.settings=this.filterRawSettings(e),i(this.settings,this.utmInfo),!this._isValidSettings())return void this._doEmergencyReplacement("Settings is not valid");var n=isNaN(this.settings.height)?this.settings.height:this.settings.height+"px",o=isNaN(this.settings.width)?this.settings.width:this.settings.width+"px";this.script.parentNode&&this.script.parentNode.classList.contains("tradingview-widget-container")?this.iframeContainer=this.script.parentNode:this.iframeContainer=document.createElement("div"),this.iframeContainer.style.width=o,this.iframeContainer.style.height=n,this.iframeContainer.appendChild(r());var s=this._extractOldStyleEmbedCopyrightFromDOM(),a=s&&!this.settings.whitelabel,c=s||this.iframeContainer.querySelector(".tradingview-widget-copyright"),h=c?"calc("+n+" - 32px)":n;this.iframe=this._createIframe(h,o);var d=this.iframeContainer.querySelector(".tradingview-widget-container__widget");if(d?(this.script.parentNode.replaceChild(this.iframe,d),this.script.parentNode.removeChild(this.script)):(this.iframeContainer.appendChild(this.iframe),this.script.parentNode.replaceChild(this.iframeContainer,this.script)),a){var l=document.createElement("div");l.style.height="32px",l.style.lineHeight="32px",l.style.width=o,l.style.textAlign="center",l.style.verticalAlign="middle",l.innerHTML=s.innerHTML,this.iframeContainer.appendChild(l)}}},s.prototype._isValidSettings=function(){var t=function(t){if(void 0===t)return!0;var e=parseInt(t)+"%"==t+"";return parseInt(t)+""==t+""||e};return t(this.settings.width)&&t(this.settings.height)},s.prototype._buildGetQueryString=function(){var t=this,e=this.propertiesToGetParams.filter(function(e){return t.settings[e]}).map(function(e){return e+"="+t.settings[e]}).join("&");return e?"?"+e:""},s.prototype._buildHashString=function(){var t=this,e={};return Object.keys(this.settings).forEach(function(i){-1===t.propertiesToSkipInHash.indexOf(i)&&(e[i]=t.settings[i])}),Object.keys(e).length>0?"#"+encodeURIComponent(JSON.stringify(e)):""},s.prototype._scriptContentToJSON=function(){var t=this.script.innerHTML.trim();try{return JSON.parse(t)}catch(t){return this._doEmergencyReplacement(),console.warn("Embed widget settings parse error: ",t),null}},s.prototype._createIframe=function(t,e){var i=document.createElement("iframe");this.settings.enableScrolling||i.setAttribute("scrolling","no"),i.setAttribute("allowtransparency",!0),i.setAttribute("frameborder",0),i.style.boxSizing="border-box",i.style.height=t,i.style.width=e;var r=this.iframeSrcBase+this._buildGetQueryString()+this._buildHashString();return i.setAttribute("src",r),i},s.prototype._doEmergencyReplacement=function(t){var e=document.createElement("div");e.innerHTML=t||"Something gone wrong",this.script.parentNode.replaceChild(e,this.script),this._extractOldStyleEmbedCopyrightFromDOM()},s.prototype._extractOldStyleEmbedCopyrightFromDOM=function(){return e(this.script.parentNode)},Object.defineProperties(s.prototype,a),new(function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var i={widgetName:{},embedWidgetSitePath:{},propertiesToWorkWith:{},propertiesToGetParams:{}};return i.widgetName.get=function(){return"tickers"},i.embedWidgetSitePath.get=function(){return"/tickerswidgetembed/"},i.propertiesToWorkWith.get=function(){return["symbols","linkPageTemplate","timeframe","locale","whitelabel","customer"]},e.prototype.filterRawSettings=function(e){var i=t.prototype.filterRawSettings.call(this,e);return i.width="100%",i.height=this._calculateHeight(e.whitelabel),i},e.prototype._calculateHeight=function(t){var e=0,i=this.script.parentNode.querySelector(".tradingview-widget-copyright"),r=this.script.parentNode.querySelector("#tradingview-copyright");if(!t&&(i||r)){e+=32}return e+=72},i.propertiesToGetParams.get=function(){return["whitelabel"]},Object.defineProperties(e.prototype,i),e}(s))(o.widgets.tickers)}();


