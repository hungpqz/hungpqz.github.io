var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function a(e){try{o(i.next(e))}catch(t){s(t)}}function h(e){try{o(i["throw"](e))}catch(t){s(t)}}function o(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(a,h)}o((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return i([e,t])}}function i(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,s&&(a=s[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(s,r[1])).done)return a;switch(s=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,s=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(i){r=[6,i],s=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,s,a,h,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return h={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h},LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){var t=e.call(this)||this;return t.nowTexture=new Array("001A_jpg","002A_jpg","003A_jpg","004A_jpg","005A_jpg","006A_jpg","007A_jpg"),t.thenTexture=new Array("001B_jpg","002B_jpg","003B_jpg","004B_jpg","005B_jpg","006B_jpg","007B_jpg"),t.frameTexture=new Array("frame_1_png","frame_2_png","frame_3_png","frame_4_png","frame_567_png","frame_567_png","frame_567_png"),t.indexTexture=0,t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 2:return r.sent(),this.stage.removeChild(e),[3,4];case 3:return t=r.sent(),console.error(t),[3,4];case 4:return[2]}})})},t.prototype.createGameScene=function(){var e=this.createBitmapByName("bg_png"),t=this.stage.stageWidth,r=this.stage.stageHeight;e.width=t,e.height=r,this.now=this.createBitmapByName("001A_jpg"),this.then=this.createBitmapByName("001B_jpg"),this.now.x=28,this.now.y=this.then.y=206,this.then.x=280,this.addChild(this.now),this.addChild(this.then),this.theMask=new egret.Shape,this.theMask.graphics.beginFill(16711680),this.theMask.graphics.drawRect(0,0,1611,777),this.theMask.graphics.endFill(),this.addChild(this.theMask),this.theMask.x=this.stage.stageWidth/2,this.theMask.y=206,this.then.mask=this.theMask,this.frame=this.createBitmapByName("frame_1_png"),this.slider=this.createBitmapByName("slider_png"),this.slider.x=(this.stage.stageWidth-this.slider.width)/2,this.slider.y=206,this.slider.touchEnabled=!0,this.addChild(this.slider),this.addChild(e),this.addChild(this.frame),this.slider.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.SliderTouchHandler,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TouchHandler,this),this.timer=new egret.Timer(18e4,0),this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this),this.timer.start()},t.prototype.timerFunc=function(e){var t=this;this.timer.delay=5e3,console.log("Change the texture"),this.indexTexture<6?this.indexTexture++:this.indexTexture=0,egret.Tween.get(this.now).to({alpha:.5},300).call(function(){t.now.texture=RES.getRes(t.nowTexture[t.indexTexture]),egret.Tween.get(t.now).to({alpha:1},500)}),egret.Tween.get(this.then).to({alpha:.5},300).call(function(){t.then.texture=RES.getRes(t.thenTexture[t.indexTexture]),egret.Tween.get(t.then).to({alpha:1},500)}),this.frame.texture=RES.getRes(this.frameTexture[this.indexTexture])},t.prototype.TouchHandler=function(e){var t=this;switch(e.type){case egret.TouchEvent.TOUCH_MOVE:this.updateChanger(e.stageX,e.stageY);break;case egret.TouchEvent.TOUCH_BEGIN:this.timer.stop(),this.timer.delay=18e3,this.touchY=e.stageY,this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.TouchHandler,this),this.stage.once(egret.TouchEvent.TOUCH_END,this.TouchHandler,this),this.updateChanger(e.stageX,e.stageY);break;case egret.TouchEvent.TOUCH_END:this.timer.start(),this.touchY-e.stageY>100&&(console.log("Change the texture"),this.indexTexture<6?this.indexTexture++:this.indexTexture=0,egret.Tween.get(this.now).to({alpha:.5},300).call(function(){t.now.texture=RES.getRes(t.nowTexture[t.indexTexture]),egret.Tween.get(t.now).to({alpha:1},500)}),egret.Tween.get(this.then).to({alpha:.5},300).call(function(){t.then.texture=RES.getRes(t.thenTexture[t.indexTexture]),egret.Tween.get(t.then).to({alpha:1},500)}),this.frame.texture=RES.getRes(this.frameTexture[this.indexTexture])),e.stageY-this.touchY>100&&(console.log("Change the texture"),this.indexTexture>0?this.indexTexture--:this.indexTexture=6,egret.Tween.get(this.now).to({alpha:.5},300).call(function(){t.now.texture=RES.getRes(t.nowTexture[t.indexTexture]),egret.Tween.get(t.now).to({alpha:1},500)}),egret.Tween.get(this.then).to({alpha:.5},300).call(function(){t.then.texture=RES.getRes(t.thenTexture[t.indexTexture]),egret.Tween.get(t.then).to({alpha:1},500)}),this.frame.texture=RES.getRes(this.frameTexture[this.indexTexture])),this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.TouchHandler,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TouchHandler,this)}},t.prototype.updateChanger=function(e,t){},t.prototype.SliderTouchHandler=function(e){switch(e.type){case egret.TouchEvent.TOUCH_MOVE:this.updateSlider(e.stageX,e.stageY);break;case egret.TouchEvent.TOUCH_BEGIN:this.timer.stop(),this.slider.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.SliderTouchHandler,this),this.slider.once(egret.TouchEvent.TOUCH_END,this.SliderTouchHandler,this),this.updateSlider(e.stageX,e.stageY);break;case egret.TouchEvent.TOUCH_END:this.timer.start(),this.slider.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.SliderTouchHandler,this),this.slider.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.SliderTouchHandler,this)}},t.prototype.updateSlider=function(e,t){e>280&&1635>e&&(this.slider.x=e-this.slider.width/2,this.theMask.x=e)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,r=RES.getRes(e);return t.texture=r,t},t}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);