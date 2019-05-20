var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(s,i){function r(t){try{h(o.next(t))}catch(e){i(e)}}function a(t){try{h(o["throw"](t))}catch(e){i(e)}}function h(t){t.done?s(t.value):new n(function(e){e(t.value)}).then(r,a)}h((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,i&&(r=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(r=r.call(i,n[1])).done)return r;switch(i=0,r&&(n=[0,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,i=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(r=h.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){h.label=n[1];break}if(6===n[0]&&h.label<r[1]){h.label=r[1],r=n;break}if(r&&h.label<r[2]){h.label=r[2],h.ops.push(n);break}r[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(o){n=[6,o],i=0}finally{s=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var s,i,r,a,h={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Đang tải..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",1,t)];case 2:return n.sent(),[4,RES.loadGroup("inGame",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.createGameScene=function(){var t=this;this.shake_count=0;var e=this.createBitmapByName("bg_jpg");this.addChild(e);var n=this.stage.stageWidth;this.stage.stageHeight;this._mcData=RES.getRes("sieu_nhe_mc_json"),this._mcTexture=RES.getRes("sieu_nhe_tex_png"),this._mcDataStrong=RES.getRes("manh_mc_json"),this._mcTextureStrong=RES.getRes("manh_tex_png"),this.start_btn=this.createBitmapByName("start_btn_png"),this.start_btn.x=(n-this.start_btn.width)/2,this.start_btn.y=625,this.start_btn.touchEnabled=!0,this.bgSound=new SoundBase("wave_mp3"),this.not_strong_sound=new SoundBase("not_strong_mp3"),this.strong_enough_sound=new SoundBase("strong_enough_mp3"),this.so_strong_sound=new SoundBase("so_strong_mp3"),this.addChild(this.start_btn),this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.bgSound.setLoop(0),t.bgSound.play(),t.removeChild(t.start_btn);var e=t.createBitmapByName("bg_start_jpg");t.addChild(e),t.scene="game_start",t.mcDataFactory=new egret.MovieClipDataFactory(t._mcData,t._mcTexture),t.role=new egret.MovieClip(t.mcDataFactory.generateMovieClipData("vuvuzela")),t.mcDataFactoryStrong=new egret.MovieClipDataFactory(t._mcDataStrong,t._mcTextureStrong),t.roleStrong=new egret.MovieClip(t.mcDataFactoryStrong.generateMovieClipData("vuvuzela")),t.roleStrong.x=t.role.x=316,t.roleStrong.y=t.role.y=652,t.roleStrong.visible=t.role.visible=!1,t.addChild(t.role),t.addChild(t.roleStrong),t.setChildIndex(t.role,10),t.setChildIndex(t.roleStrong,11);var n=document.body,o=n.requestFullscreen||n.webkitRequestFullScreen||n.mozRequestFullscreen||n.msRequestFullscreen;o&&o.call(n)},this),this.motion=new egret.Motion,this.motion.addEventListener(egret.Event.CHANGE,this.onMotion,this),this.motion.start(),this.second=3e3,this.starttime=egret.getTimer(),this.startX=this.startY=this.startZ=this.endX=this.endY=this.endZ=0},e.prototype.onMotion=function(t){var e=t.accelerationIncludingGravity,n=egret.getTimer();if(n-this.starttime>100){var o=n-this.starttime;this.startX=e.x,this.startY=e.y,this.startZ=e.z;var s=Math.abs(this.startX+this.startY+this.startZ-this.endX-this.endY-this.endZ)/o*1e4;s>this.second&&(console.log("Shake it, write it here"),this.shake_count=this.shake_count+1),this.starttime=n,this.endX=this.startX,this.endY=this.startY,this.endZ=this.startZ}if("game_start"==this.scene&&this.shake_count>3){this.scene="ingame",this.shake_count=0;var i=new SoundBase("game_start_mp3");i.play();var r=this.createBitmapByName("bg_ingame_jpg");this.addChild(r),this.setChildIndex(r,9),this.bgSound.stop(),this.bgSound=new SoundBase("bg_music_mp3"),this.bgSound.setLoop(0),this.bgSound.play(),this.role.visible=!0,this.role.gotoAndPlay("nhe",3),this.label=new egret.TextField,this.label.y=250,this.label.x=50,this.label.textColor=16711680,this.addChild(this.label),this.gametime=egret.getTimer()}if("ingame"==this.scene){var a=egret.getTimer()-this.gametime;this.label.text="No shake: "+this.shake_count+" game time: "+a+" version 2",a>3e3&&(this.gametime=egret.getTimer(),this.shake_count<7&&this.shake_count>2?(this.not_strong_sound.play(),this.role.visible=!0,this.roleStrong.visible=!1,this.role.gotoAndPlay("nhe",3)):this.shake_count>7&&this.shake_count<14?(this.strong_enough_sound.play(),this.role.visible=!1,this.roleStrong.visible=!0,this.roleStrong.gotoAndPlay("manh",2)):this.shake_count>14&&(this.so_strong_sound.play(),this.role.visible=!1,this.roleStrong.visible=!0,this.roleStrong.gotoAndPlay("manh",3)),this.shake_count=0)}},e.prototype._animationEventHandler=function(){console.log("Complete animation")},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.getMobileOperatingSystem=function(){var t=navigator.userAgent||navigator.vendor;return/windows phone/i.test(t)?"Windows Phone":/android/i.test(t)?"Android":/iPad|iPhone|iPod/.test(t)?"iOS":"unknown"},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var SoundBase=function(t){function e(e){var n=t.call(this)||this;return n._soundURL="start_sound",n._positon=0,n._loop=1,n._status=0,e&&(n._soundURL=e),n._sound=new egret.Sound,n._loadSound(),n}return __extends(e,t),e.prototype._loadSound=function(){RES.getRes(this._soundURL)?this._sound=RES.getRes(this._soundURL):(this._sound.once(egret.Event.COMPLETE,this.loadComplete,this),this._sound.once(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this._sound.load(this._soundURL))},e.prototype.loadComplete=function(t){this._status=3;var e="Load complete";egret.log(e),this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this.dispatchEventWith(egret.Event.COMPLETE,!1,e)},e.prototype.onLoadErr=function(t){this._status=4;var e="Could not load sound at "+this._soundURL;egret.log(e),this._sound.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this),this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR,!1,e)},e.prototype.setUrl=function(t){this._soundURL=t,this._loadSound()},e.prototype.looped=function(t){console.log("looped"),this._soundChannel=null,this._positon=0,this._status=0;var e="looped";this._loop>=0?this.dispatchEventWith(egret.Event.SOUND_COMPLETE,!1,e):this.play()},e.prototype.getStatus=function(){return this._status},e.prototype.setVolume=function(t){console.log(this._status),1===this._status&&(this._soundChannel.volume=t/100)},e.prototype.showPosition=function(){return 1===this._status&&(this._positon=this._soundChannel.position),this._positon},e.prototype.play=function(){return 4===this._status?void this._loadSound():(this._status=1,this._soundChannel&&this._soundChannel.stop(),this._soundChannel=this._sound.play(this._positon,this._loop),this._soundChannel.once(egret.Event.SOUND_COMPLETE,this.looped,this),this._status)},e.prototype.setLoop=function(t){return void 0===t&&(t=1),this._loop=t,t},e.prototype.pause=function(){var t=this._status;return 1===t&&(this._positon=this._soundChannel.position,this._soundChannel.stop(),this._status=2),egret.log(this._positon),t},e.prototype.resume=function(){var t=this._status;return 2===t&&this.play(),egret.log(this._positon),t},e.prototype.stop=function(){this._status=0,this._positon=0,this._soundChannel.stop(),this._soundChannel=null},e}(egret.DisplayObjectContainer);__reflect(SoundBase.prototype,"SoundBase");