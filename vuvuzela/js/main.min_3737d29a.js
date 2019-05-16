var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(s,i){function r(t){try{u(o.next(t))}catch(e){i(e)}}function a(t){try{u(o["throw"](t))}catch(e){i(e)}}function u(t){t.done?s(t.value):new n(function(e){e(t.value)}).then(r,a)}u((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(s)throw new TypeError("Generator is already executing.");for(;u;)try{if(s=1,i&&(r=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(r=r.call(i,n[1])).done)return r;switch(i=0,r&&(n=[0,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(r=u.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){u.label=n[1];break}if(6===n[0]&&u.label<r[1]){u.label=r[1],r=n;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(n);break}r[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(o){n=[6,o],i=0}finally{s=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var s,i,r,a,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Đang tải..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.factory=new dragonBones.EgretFactory,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n;return __generator(this,function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return o.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return o.sent(),e=this.createBitmapByName("bg_jpg"),this.addChild(e),[4,RES.loadGroup("inGame",0,t)];case 3:return o.sent(),this.stage.removeChild(t),[3,5];case 4:return n=o.sent(),console.error(n),[3,5];case 5:return[2]}})})},e.prototype.createGameScene=function(){var t=this,e=this.stage.stageWidth,n=this.stage.stageHeight;this.bgSound=new SoundBase("wave_mp3"),this.bgSound.setLoop(0),this.bgSound.play(),this.start_btn=this.createBitmapByName("start_btn_png"),this.start_btn.x=(e-this.start_btn.width)/2,this.start_btn.y=625,this.start_btn.touchEnabled=!0;var o=RES.getRes("girl_sieu_nhe_ske_json"),s=RES.getRes("girl_sieu_nhe_tex_json"),i=RES.getRes("girl_sieu_nhe_tex_png");this.factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(o)),this.factory.addTextureAtlasData(this.factory.parseTextureAtlasData(s,i)),this.armature=this.factory.buildArmature("manh_qua_2"),this.armatureClip=this.armature.getDisplay(),dragonBones.WorldClock.clock.add(this.armature),this.addChild(this.armatureClip),this.armatureClip.scaleX=2,this.armatureClip.scaleY=2,this.armatureClip.x=e-this.armatureClip.width,this.armatureClip.y=n-this.armatureClip.height,egret.startTick(this.onTicker,this),this.addChild(this.start_btn),this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.bgSound.stop(),t.bgSound=new SoundBase("bg_music_mp3"),t.bgSound.setLoop(0),t.bgSound.play();var e=new SoundBase("game_start_mp3");e.play(),t.removeChild(t.start_btn),t.armature.animation.gotoAndPlay("manh_qua_2")},this)},e.prototype.onMotion=function(t){this.label.text="Phone shake: \nx:"+t.accelerationIncludingGravity.x+",\ny:"+t.accelerationIncludingGravity.y+",\nz:"+t.accelerationIncludingGravity.z},e.prototype.onTicker=function(t){this._time||(this._time=t);var e=t,n=e-this._time;return this._time=e,dragonBones.WorldClock.clock.advanceTime(n/1e3),!1},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var SoundBase=function(t){function e(e){var n=t.call(this)||this;return n._soundURL="start_sound",n._positon=0,n._loop=1,n._status=0,e&&(n._soundURL=e),n._sound=new egret.Sound,n._loadSound(),n}return __extends(e,t),e.prototype._loadSound=function(){RES.getRes(this._soundURL)?this._sound=RES.getRes(this._soundURL):(this._sound.once(egret.Event.COMPLETE,this.loadComplete,this),this._sound.once(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this._sound.load(this._soundURL))},e.prototype.loadComplete=function(t){this._status=3;var e="Load complete";egret.log(e),this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this.dispatchEventWith(egret.Event.COMPLETE,!1,e)},e.prototype.onLoadErr=function(t){this._status=4;var e="Could not load sound at "+this._soundURL;egret.log(e),this._sound.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this),this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR,!1,e)},e.prototype.setUrl=function(t){this._soundURL=t,this._loadSound()},e.prototype.looped=function(t){console.log("looped"),this._soundChannel=null,this._positon=0,this._status=0;var e="looped";this._loop>=0?this.dispatchEventWith(egret.Event.SOUND_COMPLETE,!1,e):this.play()},e.prototype.getStatus=function(){return this._status},e.prototype.setVolume=function(t){console.log(this._status),1===this._status&&(this._soundChannel.volume=t/100)},e.prototype.showPosition=function(){return 1===this._status&&(this._positon=this._soundChannel.position),this._positon},e.prototype.play=function(){return 4===this._status?void this._loadSound():(this._status=1,this._soundChannel&&this._soundChannel.stop(),this._soundChannel=this._sound.play(this._positon,this._loop),this._soundChannel.once(egret.Event.SOUND_COMPLETE,this.looped,this),this._status)},e.prototype.setLoop=function(t){return void 0===t&&(t=1),this._loop=t,t},e.prototype.pause=function(){var t=this._status;return 1===t&&(this._positon=this._soundChannel.position,this._soundChannel.stop(),this._status=2),egret.log(this._positon),t},e.prototype.resume=function(){var t=this._status;return 2===t&&this.play(),egret.log(this._positon),t},e.prototype.stop=function(){this._status=0,this._positon=0,this._soundChannel.stop(),this._soundChannel=null},e}(egret.DisplayObjectContainer);__reflect(SoundBase.prototype,"SoundBase");