(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{339:function(i,t,e){(function(i){
/*!
imgLiquid v0.9.944 / 03-05-2013
jQuery plugin to resize images to fit in a container.
Copyright (c) 2012 Alejandro Emparan (karacas) @krc_ale
Dual licensed under the MIT and GPL licenses
https://github.com/karacas/imgLiquid
**/
var t,e,a,o,d=d||{VER:"0.9.944"};d.bgs_Available=!1,d.bgs_CheckRunned=!1,d.injectCss=".imgLiquid img {visibility:hidden}",(t=i).fn.extend({imgLiquid:function(i){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},function(){if(!d.bgs_CheckRunned){d.bgs_CheckRunned=!0;var i=t('<span style="background-size:cover" />');t("body").append(i),function(){var t=i[0];if(t&&window.getComputedStyle){var e=window.getComputedStyle(t,null);e&&e.backgroundSize&&(d.bgs_Available="cover"===e.backgroundSize)}}(),i.remove()}}();var e=this;return this.options=i,this.settings=t.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each((function(i){var a=e.settings,o=t(this),n=t("img:first",o);function s(){(a.responsive||n.data("imgLiquid_oldProcessed"))&&n.data("imgLiquid_settings")&&(a=n.data("imgLiquid_settings"),o.actualSize=o.get(0).offsetWidth+o.get(0).offsetHeight/1e4,o.sizeOld&&o.actualSize!==o.sizeOld&&l(),o.sizeOld=o.actualSize,setTimeout(s,a.responsiveCheckTime))}function r(){n.data("imgLiquid_error",!0),o.addClass("imgLiquid_error"),a.onItemError&&a.onItemError(i,o,n),g()}function l(){var t,e,d,s,r,l,h,c,u=0,m=0,f=o.width(),v=o.height();void 0===n.data("owidth")&&n.data("owidth",n[0].width),void 0===n.data("oheight")&&n.data("oheight",n[0].height),!a.fill&&n.data("owidth")<=f&&n.data("oheight")<=v?(t="auto",e="auto",d=n.data("owidth"),s=n.data("oheight")):a.fill===f/v>=n.data("owidth")/n.data("oheight")?(t="100%",e="auto",d=Math.floor(f),s=Math.floor(f*(n.data("oheight")/n.data("owidth")))):(t="auto",e="100%",d=Math.floor(v*(n.data("owidth")/n.data("oheight"))),s=Math.floor(v)),h=f-d,"left"===(r=a.horizontalAlign.toLowerCase())&&(m=0),"center"===r&&(m=.5*h),"right"===r&&(m=h),-1!==r.indexOf("%")&&(r=parseInt(r.replace("%",""),10))>0&&(m=h*r*.01),c=v-s,"top"===(l=a.verticalAlign.toLowerCase())&&(u=0),"center"===l&&(u=.5*c),"bottom"===l&&(u=c),-1!==l.indexOf("%")&&(l=parseInt(l.replace("%",""),10))>0&&(u=c*l*.01),a.hardPixels&&(t=d,e=s),n.css({width:t,height:e,"margin-left":Math.floor(m),"margin-top":Math.floor(u)}),n.data("imgLiquid_oldProcessed")||(n.fadeTo(a.fadeInTime,1),n.data("imgLiquid_oldProcessed",!0),a.removeBoxBackground&&o.css("background-image","none"),o.addClass("imgLiquid_nobgSize"),o.addClass("imgLiquid_ready")),a.onItemFinish&&a.onItemFinish(i,o,n),g()}function g(){i===e.length-1&&e.settings.onFinish&&e.settings.onFinish()}n.length?(n.data("imgLiquid_settings")?(o.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"),a=t.extend({},n.data("imgLiquid_settings"),e.options)):a=t.extend({},e.settings,function(){var i={};if(e.settings.useDataHtmlAttr){var t=o.attr("data-imgLiquid-fill"),a=o.attr("data-imgLiquid-horizontalAlign"),n=o.attr("data-imgLiquid-verticalAlign");"true"!==t&&"false"!==t||(i.fill=Boolean("true"===t)),void 0===a||"left"!==a&&"center"!==a&&"right"!==a&&-1===a.indexOf("%")||(i.horizontalAlign=a),void 0===n||"top"!==n&&"bottom"!==n&&"center"!==n&&-1===n.indexOf("%")||(i.verticalAlign=n)}return d.isIE&&e.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}()),n.data("imgLiquid_settings",a),a.onItemStart&&a.onItemStart(i,o,n),d.bgs_Available&&a.useBackgroundSize?(-1===o.css("background-image").indexOf(encodeURI(n.attr("src")))&&o.css({"background-image":'url("'+encodeURI(n.attr("src"))+'")'}),o.css({"background-size":!a.fill&&n[0].width<=o.width()&&n[0].height<=o.height()?"auto":a.fill?"cover":"contain","background-position":(a.horizontalAlign+" "+a.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),t("a:first",o).css({display:"block",width:"100%",height:"100%"}),t("img",o).css({display:"none"}),a.onItemFinish&&a.onItemFinish(i,o,n),o.addClass("imgLiquid_bgSize"),o.addClass("imgLiquid_ready"),g()):function e(){if(n.data("oldSrc")&&n.data("oldSrc")!==n.attr("src")){var d=n.clone().removeAttr("style");return d.data("imgLiquid_settings",n.data("imgLiquid_settings")),n.parent().prepend(d),n.remove(),(n=d)[0].width=0,void setTimeout(e,10)}n.data("imgLiquid_oldProcessed")?l():(n.data("imgLiquid_oldProcessed",!1),n.data("oldSrc",n.attr("src")),t("img:not(:first)",o).css("display","none"),o.css({overflow:"hidden"}),n.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),n.on("error",r),n[0].onerror=r,function t(){n.data("imgLiquid_error")||n.data("imgLiquid_loaded")||n.data("imgLiquid_oldProcessed")||(o.is(":visible")&&n[0].complete&&n[0].width>0&&n[0].height>0?(n.data("imgLiquid_loaded",!0),setTimeout(l,i*a.delay)):setTimeout(t,a.timecheckvisibility))}(),s())}()):r()}))}}),e=d.injectCss,a=document.getElementsByTagName("head")[0],(o=document.createElement("style")).type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),a.appendChild(o)}).call(this,e(45))}}]);