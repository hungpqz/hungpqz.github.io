var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,o){function a(t){try{h(n.next(t))}catch(e){o(e)}}function r(t){try{h(n["throw"](t))}catch(e){o(e)}}function h(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(a,r)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,o&&(a=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[0,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,o=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){h.label=i[1];break}if(6===i[0]&&h.label<a[1]){h.label=a[1],a=i;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(i);break}a[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],o=0}finally{s=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var s,o,a,r,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.totalGameTime=30,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return i.sent(),this.stage.removeChild(t),[3,4];case 3:return e=i.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=this,e=new SoundBase("bg_music_mp3");e.setLoop(0),e.play(),e.setVolume(40);var i=this.createBitmapByName("scene_1_jpg");this.addChild(i),i.touchEnabled=!0;var n=this.stage.stageWidth,s=this.stage.stageHeight;i.width=n,i.height=s,i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var e=new SoundBase("click_mp3");e.play(),i.touchEnabled=!1;var n=t.createBitmapByName("start_btn_png");n.x=553,n.y=363,t.addChild(n),egret.Tween.get(n).wait(300).call(function(){t.removeChild(n),t.showIntro()})},this)},e.prototype.showIntro=function(){this.introTimer=new egret.Timer(5e3,2);var t=this.createBitmapByName("scene_2_jpg");t.alpha=0,this.addChild(t),egret.Tween.get(t).to({alpha:1},300,egret.Ease.sineIn),this.introTimer.addEventListener(egret.TimerEvent.TIMER,this.timerIntroFunc,this),this.introTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerIntroStopFunc,this),this.introTimer.start()},e.prototype.timerIntroFunc=function(t){var e=this.createBitmapByName("scene_"+(t.target.currentCount+2)+"_jpg");e.alpha=0,this.addChild(e),egret.Tween.get(e).to({alpha:1},300,egret.Ease.sineIn)},e.prototype.bubbleAnimation=function(t){var e=this;4==t?(this.scene_4_item_1=this.createBitmapByName("scene_4_item_1_png"),this.scene_4_item_2=this.createBitmapByName("scene_4_item_2_png"),this.scene_4_item_3=this.createBitmapByName("scene_4_item_3_png"),this.scene_4_item_4=this.createBitmapByName("scene_4_item_4_png")):(this.removeChild(this.scene_4_item_1),this.removeChild(this.scene_4_item_2),this.removeChild(this.scene_4_item_3),this.removeChild(this.scene_4_item_4),this.scene_4_item_1=this.createBitmapByName("scene_5_item_1_png"),this.scene_4_item_2=this.createBitmapByName("scene_5_item_2_png"),this.scene_4_item_3=this.createBitmapByName("scene_5_item_3_png"),this.scene_4_item_4=this.createBitmapByName("scene_5_item_4_png")),this.scene_4_item_1.x=185,this.scene_4_item_1.y=196,this.scene_4_item_2.x=587,this.scene_4_item_2.y=30,this.scene_4_item_3.x=360,this.scene_4_item_3.y=30,this.scene_4_item_4.x=755,this.scene_4_item_4.y=196,this.addChild(this.scene_4_item_1),this.addChild(this.scene_4_item_2),this.addChild(this.scene_4_item_3),this.addChild(this.scene_4_item_4),this.aniTimer=new egret.Timer(250,0),this.aniTimer.addEventListener(egret.TimerEvent.TIMER,function(){var t=Math.floor(5*Math.random())+2;t=t*(Math.random()<.5?-1:1)+e.scene_4_item_1.x;var i=Math.floor(5*Math.random())+2;i=i*(Math.random()<.5?-1:1)+e.scene_4_item_2.x;var n=Math.floor(5*Math.random())+2;n=n*(Math.random()<.5?-1:1)+e.scene_4_item_3.x;var s=Math.floor(5*Math.random())+2;s=s*(Math.random()<.5?-1:1)+e.scene_4_item_4.x;var o=Math.floor(5*Math.random())+2;o=o*(Math.random()<.5?-1:1)+e.scene_4_item_1.y;var a=Math.floor(5*Math.random())+2;a=a*(Math.random()<.5?-1:1)+e.scene_4_item_2.y;var r=Math.floor(5*Math.random())+2;r=r*(Math.random()<.5?-1:1)+e.scene_4_item_3.y;var h=Math.floor(5*Math.random())+2;h=h*(Math.random()<.5?-1:1)+e.scene_4_item_4.y,egret.Tween.get(e.scene_4_item_1).to({x:t,y:o},100,egret.Ease.sineIn).to({x:185,y:196},100,egret.Ease.sineIn),egret.Tween.get(e.scene_4_item_2).to({x:i,y:a},100,egret.Ease.sineIn).to({x:587,y:30},100,egret.Ease.sineIn),egret.Tween.get(e.scene_4_item_3).to({x:n,y:r},100,egret.Ease.sineIn).to({x:360,y:30},100,egret.Ease.sineIn),egret.Tween.get(e.scene_4_item_4).to({x:s,y:h},100,egret.Ease.sineIn).to({x:775,y:196},100,egret.Ease.sineIn)},this),this.aniTimer.start()},e.prototype.timerIntroStopFunc=function(t){this.continue_btn=this.createBitmapByName("continue_btn"),this.continue_touch_btn=this.createBitmapByName("continue_touch_btn"),this.continue_btn.x=855,this.continue_btn.y=548,this.continue_touch_btn.x=855,this.continue_touch_btn.y=546,this.bubbleAnimation(4),this.addChild(this.continue_btn),this.continue_btn.touchEnabled=!0,this.continue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toSceneFive,this)},e.prototype.toSceneFive=function(){var t=this;console.log("Called! scene 5"),this.continue_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.toSceneFive,this),egret.Tween.get(this.continue_btn).call(function(){t.addChild(t.continue_touch_btn);var e=new SoundBase("click_mp3");e.play()}).wait(500).call(function(){t.removeChild(t.continue_touch_btn),t.removeChild(t.continue_btn),t.callToCountDown()})},e.prototype.callToCountDown=function(){var t=this,e=this.createBitmapByName("scene_5_jpg");e.alpha=0,this.addChild(e),this.addChild(this.continue_btn),egret.Tween.get(e).to({alpha:1},300,egret.Ease.sineIn).call(function(){t.aniTimer.reset(),t.bubbleAnimation(5)}),this.continue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){egret.Tween.get(t.continue_btn).call(function(){t.removeChild(t.continue_btn),t.addChild(t.continue_touch_btn);var e=new SoundBase("click_mp3");e.play()}).wait(500).call(function(){t.removeChild(t.continue_touch_btn),t.startCountDown()})},this)},e.prototype.startCountDown=function(){var t=this.createBitmapByName("scene_6_jpg");this.addChild(t),this.introTimer=new egret.Timer(1e3,4),this.introTimer.addEventListener(egret.TimerEvent.TIMER,this.timerCountDownFunc,this),this.introTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerStartGameFunc,this),this.introTimer.start()},e.prototype.timerCountDownFunc=function(t){var e=this.createBitmapByName("count_down_"+t.target.currentCount+"_jpg");if(this.addChild(e),1==t.target.currentCount){var i=new SoundBase("three_mp3");i.play()}else if(2==t.target.currentCount){var i=new SoundBase("two_mp3");i.play()}else if(3==t.target.currentCount){var i=new SoundBase("one_mp3");i.play()}},e.prototype.timerStartGameFunc=function(){var t=this;this.gameEndMC=this.createBitmapByName("scene_game_end_jpg"),this.gameEndCongrats1=this.createBitmapByName("scene_game_end_congrats_1_jpg"),this.gameEndCongrats2=this.createBitmapByName("scene_game_end_congrats_2_jpg"),this.gameEndMC.visible=this.gameEndCongrats1.visible=this.gameEndCongrats2.visible=!1,this.addChild(this.gameEndMC),this.addChild(this.gameEndCongrats1),this.addChild(this.gameEndCongrats2),this.gameBg=this.createBitmapByName("scene_game_start_jpg"),this.addChild(this.gameBg),this.scoreText=new egret.BitmapText,this.scoreText.font=RES.getRes("number_fnt"),this.addChild(this.scoreText),this.scoreText.text="00";var e=0;this.scoreText.x=255,this.scoreText.y=17,this.timeText=new egret.BitmapText,this.timeText.font=RES.getRes("number_fnt"),this.addChild(this.timeText),this.timeText.text=""+this.totalGameTime,this.timeText.x=840,this.timeText.y=17,this.gameTimer=new egret.Timer(1e3,this.totalGameTime),this.gameTimer.addEventListener(egret.TimerEvent.TIMER,this.timerGameFunc,this),this.gameTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerGameOverFunc,this),this.gameTimer.start(),this.bottom_open=this.createBitmapByName("washer_open_png"),this.bottom_open.visible=!1,this.bottom_open.x=495,this.bottom_open.y=430,this.addChild(this.bottom_open),this.up_btn=this.createBitmapByName("action_btn_png"),this.down_btn=this.createBitmapByName("action_btn_png"),this.skip_btn=this.createBitmapByName("skip_btn_png"),this.skip_btn.x=827,this.skip_btn.y=548,this.up_btn.x=this.down_btn.x=535,this.up_btn.y=315,this.down_btn.y=480,this.skip_btn.touchEnabled=this.up_btn.touchEnabled=this.down_btn.touchEnabled=!0,this.addChild(this.up_btn),this.addChild(this.down_btn),this.addChild(this.skip_btn),this.yaySound=new SoundBase("Yeah_mp3"),this.oopsSound=new SoundBase("Oops_mp3"),this.oops=this.createBitmapByName("oops_png"),this.oops_minus=this.createBitmapByName("oops_minus_png"),this.yay=this.createBitmapByName("yay_png"),this.item_status=0;var i=new egret.Timer(200,0);i.addEventListener(egret.TimerEvent.TIMER,function(){0==t.item_status&&(t.item_status=1,t.item=Math.floor(4*Math.random())+1,t.item_type=Math.floor(3*Math.random()),0==t.item_type?t.washer=t.createBitmapByName("top_item_"+t.item+"_png"):1==t.item_type?t.washer=t.createBitmapByName("bottom_item_"+t.item+"_png"):2==t.item_type&&(t.washer=t.createBitmapByName("special_item_"+t.item+"_png")),t.washer.x=-t.washer.width-10,t.washer.y=80,t.addChild(t.washer),egret.Tween.get(t.washer).to({x:500,y:80},300,egret.Ease.sineIn).call(function(){t.item_status<10&&(t.item_status=2)}).wait(2e3).call(function(){t.item_status<10&&(t.item_status=3)}).to({x:1240,y:80},300,egret.Ease.sineIn).call(function(){t.item_status<10&&(t.item_status=0)}))},this),i.start(),this.skip_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){2==t.item_status&&(t.item_status=3,egret.Tween.removeAllTweens(),t.skip_btn.touchEnabled=!1,egret.Tween.get(t.washer).call(function(){t.gameTimer.stop(),2==t.item_type?(t.addChild(t.yay),t.yaySound.play(),e+=1,10>e?t.scoreText.text="0"+e:t.scoreText.text=""+e):(t.addChild(t.oops),t.oopsSound.play())}).to({x:1240,y:80},300,egret.Ease.sineIn).call(function(){t.gameTimer.start()}).wait(600).call(function(){2==t.item_type?t.removeChild(t.yay):t.removeChild(t.oops),t.item_status=0,t.skip_btn.touchEnabled=!0}))},this),this.up_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){2==t.item_status&&(t.item_status=3,egret.Tween.removeAllTweens(),t.up_btn.touchEnabled=!1,0==t.item_type?(egret.Tween.get(t.washer).to({x:525,y:299,width:105,height:105},300,egret.Ease.sineIn).wait(500).call(function(){t.gameTimer.stop(),t.addChild(t.yay),t.yaySound.play()}).wait(500).call(function(){t.removeChild(t.yay),t.removeChild(t.washer),t.item_status=0,t.gameTimer.start(),t.up_btn.touchEnabled=!0}),e+=1,10>e?t.scoreText.text="0"+e:t.scoreText.text=""+e):(egret.Tween.get(t.washer).to({x:525,y:299,width:105,height:105},300,egret.Ease.sineIn).wait(100).to({x:600,y:400,width:100,height:100},200,egret.Ease.sineIn).to({x:750,y:299,width:90,height:90},200,egret.Ease.sineIn).call(function(){t.gameTimer.stop(),t.oopsSound.play(),t.removeChild(t.washer),2==t.item_type?t.addChild(t.oops_minus):t.addChild(t.oops)}).wait(500).call(function(){2==t.item_type?t.removeChild(t.oops_minus):t.removeChild(t.oops),t.item_status=0,t.gameTimer.start(),t.up_btn.touchEnabled=!0}),e>0&&2==t.item_type&&(e-=1),10>e?t.scoreText.text="0"+e:t.scoreText.text=""+e))},this),this.down_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){2==t.item_status&&(t.item_status=3,egret.Tween.removeAllTweens(),t.down_btn.touchEnabled=!1,1==t.item_type?(t.bottom_open.visible=!0,egret.Tween.get(t.washer).to({x:525,y:445,width:105,height:105},300,egret.Ease.sineIn).wait(500).call(function(){t.gameTimer.stop(),t.yay=t.createBitmapByName("yay_png"),t.bottom_open.visible=!1,t.addChild(t.yay),t.yaySound.play()}).wait(500).call(function(){t.removeChild(t.yay),t.removeChild(t.washer),t.item_status=0,t.gameTimer.start(),t.down_btn.touchEnabled=!0}),e+=1,10>e?t.scoreText.text="0"+e:t.scoreText.text=""+e):(egret.Tween.get(t.washer).to({x:525,y:445,width:105,height:105},300,egret.Ease.sineIn).wait(100).to({x:600,y:500,width:100,height:100},200,egret.Ease.sineIn).to({x:750,y:445,width:90,height:90},200,egret.Ease.sineIn).call(function(){t.gameTimer.stop(),t.oopsSound.play(),t.removeChild(t.washer),2==t.item_type?t.addChild(t.oops_minus):t.addChild(t.oops)}).wait(500).call(function(){2==t.item_type?t.removeChild(t.oops_minus):t.removeChild(t.oops),t.item_status=0,t.gameTimer.start(),t.down_btn.touchEnabled=!0}),e>0&&2==t.item_type&&(e-=1),10>e?t.scoreText.text="0"+e:t.scoreText.text=""+e))},this)},e.prototype.timerGameFunc=function(t){this.totalGameTime-t.target.currentCount>9?this.timeText.text=""+(this.totalGameTime-t.target.currentCount):this.timeText.text="0"+(this.totalGameTime-t.target.currentCount),egret.Tween.get(this.up_btn).to({alpha:.3},500,egret.Ease.sineIn).to({alpha:.7},500,egret.Ease.sineIn),egret.Tween.get(this.down_btn).to({alpha:.3},500,egret.Ease.sineIn).to({alpha:.7},500,egret.Ease.sineIn)},e.prototype.timerGameOverFunc=function(){var t=this;egret.Tween.removeAllTweens(),this.oops.visible=this.yay.visible=this.oops_minus.visible=this.washer.visible=this.bottom_open=!1,this.removeChild(this.gameBg),this.removeChild(this.up_btn),this.removeChild(this.down_btn),this.removeChild(this.skip_btn),this.item_status=10;var e=new SoundBase("winning_mp3");e.play(),this.gameEndMC.visible=!0;var i=this.createBitmapByName("restart_btn_png");i.touchEnabled=!0,i.x=508,i.y=536;var n=new egret.Timer(3e3,1);i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("Reload game"),window.location.reload()},this),n.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){t.gameEndCongrats1.visible=!0,t.removeChild(t.gameEndMC),t.addChild(i),t.animationCongrats()},this),n.start()},e.prototype.animationCongrats=function(){var t=this,e=0,i=new egret.Timer(100,0);i.addEventListener(egret.TimerEvent.TIMER,function(){0==e?(t.gameEndCongrats1.visible=!0,t.gameEndCongrats2.visible=!1,e=1):(t.gameEndCongrats2.visible=!0,t.gameEndCongrats1.visible=!1,e=0)},this),i.start()},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var SoundBase=function(t){function e(e){var i=t.call(this)||this;return i._soundURL="start_sound",i._positon=0,i._loop=1,i._status=0,e&&(i._soundURL=e),i._sound=new egret.Sound,i._loadSound(),i}return __extends(e,t),e.prototype._loadSound=function(){RES.getRes(this._soundURL)?this._sound=RES.getRes(this._soundURL):(this._sound.once(egret.Event.COMPLETE,this.loadComplete,this),this._sound.once(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this._sound.load(this._soundURL))},e.prototype.loadComplete=function(t){this._status=3;var e="Load complete";egret.log(e),this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this.dispatchEventWith(egret.Event.COMPLETE,!1,e)},e.prototype.onLoadErr=function(t){this._status=4;var e="Could not load sound at "+this._soundURL;egret.log(e),this._sound.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this),this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR,!1,e)},e.prototype.setUrl=function(t){this._soundURL=t,this._loadSound()},e.prototype.looped=function(t){console.log("looped"),this._soundChannel=null,this._positon=0,this._status=0;var e="looped";this._loop>=0?this.dispatchEventWith(egret.Event.SOUND_COMPLETE,!1,e):this.play()},e.prototype.getStatus=function(){return this._status},e.prototype.setVolume=function(t){console.log(this._status),1===this._status&&(this._soundChannel.volume=t/100)},e.prototype.showPosition=function(){return 1===this._status&&(this._positon=this._soundChannel.position),this._positon},e.prototype.play=function(){return 4===this._status?void this._loadSound():(this._status=1,this._soundChannel&&this._soundChannel.stop(),this._soundChannel=this._sound.play(this._positon,this._loop),this._soundChannel.once(egret.Event.SOUND_COMPLETE,this.looped,this),this._status)},e.prototype.setLoop=function(t){return void 0===t&&(t=1),this._loop=t,t},e.prototype.pause=function(){var t=this._status;return 1===t&&(this._positon=this._soundChannel.position,this._soundChannel.stop(),this._status=2),egret.log(this._positon),t},e.prototype.resume=function(){var t=this._status;return 2===t&&this.play(),egret.log(this._positon),t},e.prototype.stop=function(){this._status=0,this._positon=0,this._soundChannel.stop(),this._soundChannel=null},e}(egret.DisplayObjectContainer);__reflect(SoundBase.prototype,"SoundBase");