var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,o){function r(t){try{h(n.next(t))}catch(e){o(e)}}function a(t){try{h(n["throw"](t))}catch(e){o(e)}}function h(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(r,a)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,o&&(r=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[0,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,o=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(r=h.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){h.label=i[1];break}if(6===i[0]&&h.label<r[1]){h.label=r[1],r=i;break}if(r&&h.label<r[2]){h.label=r[2],h.ops.push(i);break}r[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],o=0}finally{s=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var s,o,r,a,h={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=640,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Chờ em một chút nhé..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.play_count=0,this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",1,t)];case 2:return i.sent(),[4,RES.loadGroup("inGame",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.createGameScene=function(){var t=this;this.shake_count=0;var e=this.createBitmapByName("bg_jpg");this.addChild(e);var i=this.stage.stageWidth;this.stage.stageHeight;if(this._mcData=RES.getRes("sieu_nhe_mc_json"),this._mcTexture=RES.getRes("sieu_nhe_tex_png"),this._mcDataStrong=RES.getRes("manh_mc_json"),this._mcTextureStrong=RES.getRes("manh_tex_png"),this._mcDataMedium=RES.getRes("vua_mc_json"),this._mcTextureMedium=RES.getRes("vua_tex_png"),window&&!window.DeviceMotionEvent){if("iOS"==this.getMobileOperatingSystem()){var n=this.createBitmapByName("guide_png");this.addChild(n)}}else if("unknown"==this.getMobileOperatingSystem()){var s=this.createBitmapByName("qr_jpg");this.addChild(s)}else this.start_btn=this.createBitmapByName("start_btn_png"),this.start_btn.x=(i-this.start_btn.width)/2,this.start_btn.y=775,this.start_btn.touchEnabled=!0,this.addChild(this.start_btn),this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.removeChild(t.start_btn),t.gameStartScene()},this);this.motion=new egret.Motion,this.motion.addEventListener(egret.Event.CHANGE,this.onMotion,this),this.motion.start(),this.second=1e3,this.starttime=egret.getTimer(),this.startX=this.startY=this.startZ=this.endX=this.endY=this.endZ=0},e.prototype.onMotion=function(t){var e=this,i=t.accelerationIncludingGravity,n=egret.getTimer();if(n-this.starttime>100){var s=n-this.starttime;this.startX=i.x,this.startY=i.y,this.startZ=i.z;var o=Math.abs(this.startX+this.startY+this.startZ-this.endX-this.endY-this.endZ)/s*1e4;o>this.second&&(console.log("Shake it, write it here"),this.shake_count=this.shake_count+1,"ingame"==this.scene&&(1==this.role.$visible&&this.role.gotoAndPlay("nhe",1),1==this.roleMedium.$visible&&this.roleMedium.gotoAndPlay("vua",1),1==this.roleStrong.$visible&&this.roleStrong.gotoAndPlay("manh",1))),this.starttime=n,this.endX=this.startX,this.endY=this.startY,this.endZ=this.startZ}if("game_start"==this.scene&&this.shake_count>2){this.scene="ingame",this.shake_count=0;var r=new SoundBase("game_start_mp3");r.play();var a=this.createBitmapByName("bg_ingame_jpg");this.addChild(a);var h=this.createBitmapByName("gift_png");this.addChild(h),h.x=36,h.y=1032,h.touchEnabled=!0,h.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=e.createBitmapByName("gift_list_png");e.addChild(t),t.touchEnabled=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.touchEnabled=!1,e.removeChild(t)},e)},this),this.setChildIndex(this.role,1e4),this.setChildIndex(this.roleStrong,11e3),this.setChildIndex(this.roleMedium,12e3),this.bgSound.stop(),this.bgSound=new SoundBase("bg_music_mp3"),this.bgSound.setVolume(30),this.bgSound.setLoop(0),this.bgSound.play(),this.role.visible=!0,this.role.gotoAndPlay("nhe",3),this.gametime=this.playtime=egret.getTimer()}if("ingame"==this.scene){var l=egret.getTimer()-this.gametime,u=egret.getTimer()-this.playtime;u>15e3&&this.gameOver(),l>3e3&&(this.gametime=egret.getTimer(),this.shake_count<7&&this.shake_count>1?(this.not_strong_sound.play(),this.role.visible=!0,this.roleStrong.visible=!1,this.roleMedium.visible=!1,this.role.gotoAndPlay("nhe",2)):this.shake_count>7&&this.shake_count<14?(this.strong_enough_sound.play(),this.role.visible=!1,this.roleStrong.visible=!1,this.roleMedium.visible=!0,this.roleMedium.gotoAndPlay("vua",2)):this.shake_count>14&&(this.so_strong_sound.play(),this.role.visible=!1,this.roleMedium.visible=!1,this.roleStrong.visible=!0,this.roleStrong.gotoAndPlay("manh",2)),this.shake_count=0)}},e.prototype.gameStartScene=function(){this.bgSound=new SoundBase("wave_mp3"),this.not_strong_sound=new SoundBase("not_strong_mp3"),this.strong_enough_sound=new SoundBase("strong_enough_mp3"),this.so_strong_sound=new SoundBase("so_strong_mp3"),this.bgSound.setLoop(0),this.bgSound.play();var t=this.createBitmapByName("bg_start_jpg");this.addChild(t),this.scene="game_start",this.mcDataFactory=new egret.MovieClipDataFactory(this._mcData,this._mcTexture),this.role=new egret.MovieClip(this.mcDataFactory.generateMovieClipData("vuvuzela")),this.mcDataFactoryStrong=new egret.MovieClipDataFactory(this._mcDataStrong,this._mcTextureStrong),this.roleStrong=new egret.MovieClip(this.mcDataFactoryStrong.generateMovieClipData("vuvuzela"));var e=new egret.MovieClipDataFactory(this._mcDataMedium,this._mcTextureMedium);this.roleMedium=new egret.MovieClip(e.generateMovieClipData("vuvuzela")),this.roleStrong.x=this.role.x=this.roleMedium.x=316,this.roleStrong.y=this.role.y=this.roleMedium.y=652,this.roleStrong.visible=this.role.visible=this.roleMedium.visible=!1,this.addChild(this.role),this.addChild(this.roleStrong),this.addChild(this.roleMedium);var i=document.body,n=i.requestFullscreen||i.webkitRequestFullScreen||i.mozRequestFullscreen||i.msRequestFullscreen;n&&n.call(i)},e.prototype.gameOver=function(){var t=this;if(this.motion.stop(),this.motion.removeEventListener(egret.Event.CHANGE,this.onMotion,this),this.play_count<5){this.scene="gameOver",this.gift=Math.floor(6*Math.random()+1);var e="",i=new SoundBase("game_win_mp3"),n=new SoundBase("loser_mp3");switch(this.gift){case 1:e="unlucky_png",n.play();break;case 2:e="end_buy2get1_png",i.play();break;case 3:e="end_one_free_png",i.play();break;case 4:e="end_voucher10_png",i.play();break;case 5:e="end_voucher100_png",i.play();break;case 6:e="end_voucher20_png",i.play()}this.play_count=this.play_count+1;var s=this.createBitmapByName(e);this.addChild(s),s.touchEnabled=!0,s.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(t.removeChild(s),1==t.gift)t.bgSound.stop(),t.play_count<5?t.createGameScene():(s=t.createBitmapByName("over_png"),t.addChild(s));else{var e=t.createBitmapByName("form_png");t.addChild(e);var i=t.createBitmapByName("submit_btn_png");i.x=345,i.y=605,i.touchEnabled=!0,t.fullname=new egret.TextField,t.email=new egret.TextField,t.fullname.type=t.email.type=egret.TextFieldType.INPUT,t.fullname.width=t.email.width=300,t.fullname.height=t.email.height=60,t.fullname.textColor=t.email.textColor=0,t.fullname.x=t.email.x=225,t.fullname.y=470,t.email.y=535,t.fullname.addEventListener(egret.FocusEvent.FOCUS_IN,function(t){"Vd: Nguyễn Văn A"==this.fullname.text&&(this.fullname.text="")},t),t.fullname.addEventListener(egret.FocusEvent.FOCUS_OUT,function(t){""==this.fullname.text&&(this.fullname.text="Vd: Nguyễn Văn A")},t),t.email.addEventListener(egret.FocusEvent.FOCUS_IN,function(t){"Vd: anguyen@gmail.com"==this.email.text&&(this.email.text="")},t),t.email.addEventListener(egret.FocusEvent.FOCUS_OUT,function(t){""==this.email.text&&(this.email.text="Vd: anguyen@gmail.com")},t),t.addChild(t.fullname),t.addChild(t.email),t.addChild(i)}},this)}},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.getMobileOperatingSystem=function(){var t=navigator.userAgent||navigator.vendor;return/windows phone/i.test(t)?"Windows Phone":/android/i.test(t)?"Android":/iPad|iPhone|iPod/.test(t)?"iOS":"unknown"},e.prototype.getVoucher=function(t){},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var SoundBase=function(t){function e(e){var i=t.call(this)||this;return i._soundURL="start_sound",i._positon=0,i._loop=1,i._status=0,e&&(i._soundURL=e),i._sound=new egret.Sound,i._loadSound(),i}return __extends(e,t),e.prototype._loadSound=function(){RES.getRes(this._soundURL)?this._sound=RES.getRes(this._soundURL):(this._sound.once(egret.Event.COMPLETE,this.loadComplete,this),this._sound.once(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this._sound.load(this._soundURL))},e.prototype.loadComplete=function(t){this._status=3;var e="Load complete";egret.log(e),this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this.dispatchEventWith(egret.Event.COMPLETE,!1,e)},e.prototype.onLoadErr=function(t){this._status=4;var e="Could not load sound at "+this._soundURL;egret.log(e),this._sound.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this),this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR,!1,e)},e.prototype.setUrl=function(t){this._soundURL=t,this._loadSound()},e.prototype.looped=function(t){console.log("looped"),this._soundChannel=null,this._positon=0,this._status=0;var e="looped";this._loop>=0?this.dispatchEventWith(egret.Event.SOUND_COMPLETE,!1,e):this.play()},e.prototype.getStatus=function(){return this._status},e.prototype.setVolume=function(t){console.log(this._status),1===this._status&&(this._soundChannel.volume=t/100)},e.prototype.showPosition=function(){return 1===this._status&&(this._positon=this._soundChannel.position),this._positon},e.prototype.play=function(){return 4===this._status?void this._loadSound():(this._status=1,this._soundChannel&&this._soundChannel.stop(),this._soundChannel=this._sound.play(this._positon,this._loop),this._soundChannel.once(egret.Event.SOUND_COMPLETE,this.looped,this),this._status)},e.prototype.setLoop=function(t){return void 0===t&&(t=1),this._loop=t,t},e.prototype.pause=function(){var t=this._status;return 1===t&&(this._positon=this._soundChannel.position,this._soundChannel.stop(),this._status=2),egret.log(this._positon),t},e.prototype.resume=function(){var t=this._status;return 2===t&&this.play(),egret.log(this._positon),t},e.prototype.stop=function(){this._status=0,this._positon=0,this._soundChannel.stop(),this._soundChannel=null},e}(egret.DisplayObjectContainer);__reflect(SoundBase.prototype,"SoundBase");