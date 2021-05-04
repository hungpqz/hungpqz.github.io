var __reflect=this&&this.__reflect||function(t,e,s){t.__class__=e,s?s.push(e):s=[e],t.__types__=t.__types__?s.concat(t.__types__):s},__extends=this&&this.__extends||function(t,e){function s(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);s.prototype=e.prototype,t.prototype=new s},__awaiter=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))(function(a,n){function o(t){try{h(i.next(t))}catch(e){n(e)}}function l(t){try{h(i["throw"](t))}catch(e){n(e)}}function h(t){t.done?a(t.value):new s(function(e){e(t.value)}).then(o,l)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function s(t){return function(e){return i([t,e])}}function i(s){if(a)throw new TypeError("Generator is already executing.");for(;h;)try{if(a=1,n&&(o=n[2&s[0]?"return":s[0]?"throw":"next"])&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[0,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return h.label++,{value:s[1],done:!1};case 5:h.label++,n=s[1],s=[0];continue;case 7:s=h.ops.pop(),h.trys.pop();continue;default:if(o=h.trys,!(o=o.length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){h=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){h.label=s[1];break}if(6===s[0]&&h.label<o[1]){h.label=o[1],o=s;break}if(o&&h.label<o[2]){h.label=o[2],h.ops.push(s);break}o[2]&&h.ops.pop(),h.trys.pop();continue}s=e.call(t,h)}catch(i){s=[6,i],n=0}finally{a=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}var a,n,o,l,h={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:s(0),"throw":s(1),"return":s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=640,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e._touchStatus=!1,e.topIndex=new Array,e.remainTime=29,e.gameScore=0,e.gameOverStatus=!1,e.balls=new Array,e.balls_value=new Array,e.bulletBalls=new Array,e.bulletBalls_value=new Array,e._one=!1,e._two=!1,e._eight=!1,e._zero=!1,e.gunAngle=0,e.direction=1,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return s.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return s.sent(),this.stage.removeChild(t),[3,4];case 3:return e=s.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=this,e=this.createBitmapByName("bg_jpg");this.addChild(e);var s=this.stage.stageWidth,i=this.stage.stageHeight;e.width=s,e.height=i,e.touchEnabled=!0,e.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.removeChild(e);var s=new SoundBase("bg_sound_mp3");s.setLoop(0),s.play();var i=new SoundBase("cam_click_mp3");i.play(),t.pencilSound=new SoundBase("pencil_mp3"),t.pencilSound.setLoop(0);var a=document.documentElement,n=a.requestFullscreen||a.webkitRequestFullScreen||a.mozRequestFullscreen||a.msRequestFullscreen;n&&n.call(a),t.showTitle()},this)},e.prototype.showTitle=function(){var t=this,e=this.createBitmapByName("title_jpg");this.addChild(e);var s=this.stage.stageWidth,i=this.stage.stageHeight;e.width=s,e.height=i;var a=this.createBitmapByName("start_btn_png");a.x=(s-a.width)/2,a.y=800,a.touchEnabled=!0,this.addChild(a),a.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var s=new SoundBase("click_mp3");s.play(),egret.Tween.get(a).to({alpha:.4},100).to({alpha:1},100).wait(500).call(function(){t.removeChild(e),t.removeChild(a),t.showGuide()})},this)},e.prototype.showGuide=function(){var t=this.createBitmapByName("guide_jpg");this.addChild(t),this.timer=new egret.Timer(1e3,3),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.gameStart,this),this.timer.start()},e.prototype.gameStart=function(){this.game_bg=this.createBitmapByName("game_bg_jpg"),this.addChild(this.game_bg);var t=this.createBitmapByName("time_board_png"),e=this.createBitmapByName("score_board_png");e.y=t.y=45,e.x=27,t.x=392,this.addChild(t),this.addChild(e),this.gameScore=0,this.timer=new egret.Timer(1e3,30),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.gameOver,this),this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this),this.timer.start(),this.timeText=new egret.TextField,this.timeText.text="00:30",this.timeText.x=515,this.timeText.y=88,this.addChild(this.timeText),this.scoreText=new egret.TextField,this.scoreText.text="00",this.scoreText.x=160,this.scoreText.y=88,this.addChild(this.scoreText),this.game_bg.touchEnabled=!0,this.game_bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.game_bg.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this),this._dot=new egret.Shape,this._dot.graphics.beginFill(65280),this._dot.graphics.drawCircle(0,0,5),this._dot.graphics.endFill(),this.addEventListener(egret.Event.ENTER_FRAME,this.updateGunRotate,this),this.bulletBallContainer=new egret.DisplayObjectContainer,this.addChild(this.bulletBallContainer),this.ball_gun=this.createBitmapByName("gun_png"),this.ball_gun.x=this.stage.stageWidth/2,this.ball_gun.y=55,this.ball_gun.anchorOffsetX=this.ball_gun.width/2,this.ball_gun.anchorOffsetY=50,this.addChild(this.ball_gun),this.initBall(),this.shape=new egret.Shape,this.addChild(this.shape)},e.prototype.angleToIndex=function(t){var e=this.balls[t].x-this.ball_gun.x-this.ball_gun.anchorOffsetX,s=this.balls[t].y-5;Math.sqrt(e*e+s*s);return Math.round(90-180*Math.atan2(this.balls[t].y+this.balls[t].height/2-5,this.balls[t].x+this.balls[t].width/2-this.ball_gun.x-this.ball_gun.anchorOffsetX)/Math.PI)},e.prototype.timerFunc=function(t){this.remainTime>9?this.timeText.text="00:"+this.remainTime:this.timeText.text="00:0"+this.remainTime,this.remainTime=this.remainTime-1},e.prototype.gameOver=function(){this.gameOverStatus=!0;var t=new SoundBase("winning_mp3");t.play(),this.removeChild(this.game_bg),console.log("Time up! Game over");var e=this.createBitmapByName("gameOver_jpg");this.addChild(e);var s=new egret.Timer(1e3,3);s.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.gameInfo,this),s.start()},e.prototype.gameInfo=function(){var t=this,e=this.createBitmapByName("gameInfo_jpg");this.addChild(e),e.touchEnabled=!0,e.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.removeChildren(),window.location.reload()},this)},e.prototype.topBallIndexAtX=function(t){for(var e=0,s=0;s<this.balls.length;s++)this.balls[s].x==5+78*t&&1==this.balls[s].visible&&(e=s);return e},e.prototype.initBall=function(){var t=8,e=6;this.ballContainer=new egret.DisplayObjectContainer;for(var s,i,a=0;e>a;a++)for(var n=0;t>n;n++)i=Math.floor(10*Math.random()),s=this.createBitmapByName("ball_"+i+"_png"),s.x=5+78*n,s.y=this.stage.stageHeight-78*(a+1),this.balls_value.push(i),this.balls.push(s);for(var o=0;o<this.balls.length;o++)this.ballContainer.addChild(this.balls[o]);this.addChild(this.ballContainer)},e.prototype.updateBall=function(){this.ballContainer.removeChildren();for(var t=0;t<this.balls.length;t++)this.balls[t].y=this.balls[t].y+78,this.ballContainer.addChild(this.balls[t])},e.prototype.refreshBall=function(){this.ballContainer.removeChildren();for(var t=0;t<this.balls.length;t++)this.ballContainer.addChild(this.balls[t])},e.prototype.mouseDown=function(t){console.log("Mouse Down."),this.pencilSound.play(),this._touchStatus=!0,this.shape.graphics.lineStyle(4,16711935),this.shape.graphics.moveTo(t.stageX,t.stageY),this.startX=t.stageX,this.startY=t.stageY,this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},e.prototype.mouseMove=function(t){this._touchStatus&&(this.midX=Math.floor((this.startX+t.stageX)/2),this.midY=Math.floor((this.startY+t.stageY)/2),this.checkHitTest(this.midX,this.midY),this.shape.graphics.lineTo(t.stageX,t.stageY),this._dot.x=this.midX,this._dot.y=this.midY)},e.prototype.mouseUp=function(t){console.log("Mouse Up."),this.pencilSound.stop(),this.shape.graphics.clear(),this.gameUpdateSelectBall(),this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this),this._dot.parent&&this._dot.parent.removeChild(this._dot),this.updateGameScore()},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,s=RES.getRes(t);return e.texture=s,e},e.prototype.checkHitTest=function(t,e){for(var s=0;s<this.balls.length;s++)if(this.balls[s].hitTestPoint(t,e))switch(this.balls_value[s]){case 1:0==this._one&&(this.balls_value[s]=-this.balls_value[s],this._one=!0);break;case 2:1==this._one&&0==this._two&&(this.balls_value[s]=-this.balls_value[s],this._two=!0);break;case 8:1==this._one&&1==this._two&&0==this._eight&&(this.balls_value[s]=-this.balls_value[s],this._eight=!0);break;case 0:1==this._one&&1==this._two&&1==this._eight&&0==this._zero&&(this.balls_value[s]=-10,this._zero=!0)}},e.prototype.gameUpdateSelectBall=function(){for(var t=0;t<this.balls.length;t++)switch(this.balls_value[t]){case-1:this.balls[t].$setTexture(RES.getRes("ball_1_selected_png"));break;case-2:this.balls[t].$setTexture(RES.getRes("ball_2_selected_png"));break;case-8:this.balls[t].$setTexture(RES.getRes("ball_8_selected_png"));break;case-10:this.balls[t].$setTexture(RES.getRes("ball_0_selected_png"))}},e.prototype.updateGameScore=function(){new Array;if(1==this._one&&1==this._two&&1==this._eight&&1==this._zero){this.gameScore=this.gameScore+1,this.scoreText.text="0"+this.gameScore,this._one=this._two=this._eight=this._zero=!1;var t=new SoundBase("Yeah_mp3");t.play(),5==this.gameScore&&this.gameOver();for(var e=0;e<this.balls.length;e++)if(this.balls_value[e]<0){for(var s=0;s<this.balls.length;s++)this.balls[s].y<this.balls[e].y&&this.balls[s].x==this.balls[e].x&&(this.balls[s].y=this.balls[s].y+78);this.balls[e].visible=!1}this.updateBall()}},e.prototype.onlyUnique=function(t,e,s){return s.indexOf(t)===e},e.prototype.gunRotate=function(t){this.ball_gun.rotation=t},e.prototype.updateGunRotate=function(){1==this.gameOverStatus&&this.removeEventListener(egret.Event.ENTER_FRAME,this.updateGunRotate,this),this.gunAngle>30&&(this.direction=-1),this.gunAngle<-30&&(this.direction=1),this.gunAngle=this.gunAngle+this.direction,this.gunRotate(this.gunAngle);for(var t=0;8>t;t++)if(this.gunAngle==-this.angleToIndex(this.topBallIndexAtX(t))&&this.bulletBalls.length<1){var e=this.topBallIndexAtX(t),s=Math.round(Math.cos((90+this.gunAngle)*Math.PI/180)*(this.ball_gun.height-38)+this.ball_gun.x-this.ball_gun.anchorOffsetX),i=Math.round(Math.sin((90+this.gunAngle)*Math.PI/180)*(this.ball_gun.height-38)+this.ball_gun.y-this.ball_gun.anchorOffsetY);this.createBulletBall(e,s,i,this.balls[e].x,this.balls[e].y-this.balls[e].height)}},e.prototype.createBallBulletValue=function(){for(var t=!1,e=!1,s=!1,i=!1,a=0;a<this.balls.length;a++)1==this.balls_value[a]&&this.balls[a].y<this.stage.height&&(t=!0),2==this.balls_value[a]&&this.balls[a].y<this.stage.height&&(e=!0),8==this.balls_value[a]&&this.balls[a].y<this.stage.height&&(s=!0),0==this.balls_value[a]&&this.balls[a].y<this.stage.height&&(i=!0);return 0==t?(console.log("No ball 1 create ball 1"),1):0==e?(console.log("No ball 2 create ball 2"),2):0==s?(console.log("No ball 8 create ball 8"),8):0==i?(console.log("No ball 0 create ball 0"),0):Math.floor(10*Math.random())},e.prototype.createBulletBall=function(t,e,s,i,a){var n=this,o=this.createBallBulletValue();this.bulletBalls_value.push(o);var l;l=this.createBitmapByName("ball_"+o+"_png"),l.x=e,l.y=s,this.bulletBalls.push(l);var h=this.bulletBalls.length-1;this.bulletBallContainer.addChild(l),a>this.stage.height-78&&(a=this.stage.height-78),egret.Tween.get(l).to({x:i,y:a},500).call(function(){a!=n.balls[t].y&&(l.y=n.balls[t].y-78),n.bulletBallContainer.removeChild(l),n.bulletBalls.splice(h,1),n.bulletBalls_value.splice(h,1),n.balls.push(l),n.balls_value.push(o),n.refreshBall()})},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var SoundBase=function(t){function e(e){var s=t.call(this)||this;return s._soundURL="start_sound",s._positon=0,s._loop=1,s._status=0,e&&(s._soundURL=e),s._sound=new egret.Sound,s._loadSound(),s}return __extends(e,t),e.prototype._loadSound=function(){RES.getRes(this._soundURL)?this._sound=RES.getRes(this._soundURL):(this._sound.once(egret.Event.COMPLETE,this.loadComplete,this),this._sound.once(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this._sound.load(this._soundURL))},e.prototype.loadComplete=function(t){this._status=3;var e="Load complete";egret.log(e),this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this.dispatchEventWith(egret.Event.COMPLETE,!1,e)},e.prototype.onLoadErr=function(t){this._status=4;var e="Could not load sound at "+this._soundURL;egret.log(e),this._sound.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this),this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR,!1,e)},e.prototype.setUrl=function(t){this._soundURL=t,this._loadSound()},e.prototype.looped=function(t){console.log("looped"),this._soundChannel=null,this._positon=0,this._status=0;var e="looped";this._loop>=0?this.dispatchEventWith(egret.Event.SOUND_COMPLETE,!1,e):this.play()},e.prototype.getStatus=function(){return this._status},e.prototype.setVolume=function(t){console.log(this._status),1===this._status&&(this._soundChannel.volume=t/100)},e.prototype.showPosition=function(){return 1===this._status&&(this._positon=this._soundChannel.position),this._positon},e.prototype.play=function(){return 4===this._status?void this._loadSound():(this._status=1,this._soundChannel&&this._soundChannel.stop(),this._soundChannel=this._sound.play(this._positon,this._loop),this._soundChannel.once(egret.Event.SOUND_COMPLETE,this.looped,this),this._status)},e.prototype.setLoop=function(t){return void 0===t&&(t=1),this._loop=t,t},e.prototype.pause=function(){var t=this._status;return 1===t&&(this._positon=this._soundChannel.position,this._soundChannel.stop(),this._status=2),egret.log(this._positon),t},e.prototype.resume=function(){var t=this._status;return 2===t&&this.play(),egret.log(this._positon),t},e.prototype.stop=function(){this._status=0,this._positon=0,this._soundChannel.stop(),this._soundChannel=null},e}(egret.DisplayObjectContainer);__reflect(SoundBase.prototype,"SoundBase");