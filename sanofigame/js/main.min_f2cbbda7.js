var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(e){s(e)}}function h(t){try{a(o["throw"](t))}catch(e){s(e)}}function a(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(r,h)}a((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return o([t,e])}}function o(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,s&&(r=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(r=r.call(s,i[1])).done)return r;switch(s=0,r&&(i=[0,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,s=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(o){i=[6,o],s=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,s,r,h,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return h={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.onGame=1,e.factory=new dragonBones.EgretFactory,e.factory_child=new dragonBones.EgretFactory,e.factory_happykids=new dragonBones.EgretFactory,e.factory_crykids=new dragonBones.EgretFactory,e.questionGroupA=new Array("Vector truyền bệnh Viêm não Nhật Bản từ muỗi sang người","Gánh nặng bệnh tật của Viêm não Nhật Bản tương đương sốt xuất huyết","Theo phân loại về mẫu hình dịch tễ Viêm não Nhật Bản, miền Nam Việt Nam là","Theo phân loại về mẫu hình dịch tễ, miền Bắc Việt Nam là","Tỷ lệ tử vong do Viêm não Nhật Bản từ báo cáo của Tổ chức Y Tế Thế Giới","Lứa tuổi nào có thể mắc bệnh Viêm não Nhật Bản","Yếu tố nào sau đây làm phát tán virus Viêm não Nhật Bản"),e.optionGroupAA=new Array("Muỗi Culex","Đúng","Vùng lưu hành dịch – bệnh xuất hiện quanh năm","Vùng lưu hành dịch – bệnh xuất hiện quanh năm","20% - 30%","Tất cả mọi lứa tuổi","Chim di trú mang mầm bệnh"),e.optionGroupAB=new Array("Muỗi Aedes","Sai","Mẫu hình phối hợp – bệnh xuất hiện quanh năm và đồng thời theo mùa","Mẫu hình phối hợp – bệnh xuất hiện quanh năm và theo theo mùa","50%","Chỉ có trẻ em < 15 tuổi","Muỗi đốt người mắc bệnh và truyền sang người khác"),e.answerGroupA=new Array("A","A","A","B","A","A","A"),e.questionGroupB=new Array("Theo tổ chức Y Tế Thế Giới, khi có thể, nên thay thế vắc xin nuôi cấy trên não chuột bằng các thế hệ mới hơn","Theo tổ chức Y tế thế giới, tại các vùng dịch tễ Viêm não Nhật Bản, khi số ca \nmắc thấp, việc duy trì tỷ lệ chủng ngừa cao là không cần thiết","Theo Tổ Chức Y Tế Thế Giới, tại vùng dịch tễ, nếu áp dụng biện pháp kiểm \nsoát vector (muỗi, lợn) thì việc tiêm chủng không còn quan trọng","Biện pháp có chỉ số chi phí/hiệu quả tốt nhất trong phòng ngừa Viêm não Nhật Bản","Tiêm phòng Viêm não Nhật Bản giúp tạo ra miễn dịch cộng đồng"),e.optionGroupBA=new Array("Đúng","Đúng","Đúng","Kiểm soát vector (muỗi, lợn)","Đúng"),e.optionGroupBB=new Array("Sai","Sai","Sai","Tiêm vắc xin cho người","Sai"),e.answerGroupB=new Array("A","B","B","B","B"),e.questionGroupC=new Array("Vắc xin Viêm não Nhật Bản tạo miễn dịch chéo cho tất cả các chủng \ntrong tự nhiên","Vắc xin sống, giảm độc lực tái tổ hợp có thể sử dụng ở trẻ từ","Liều sử dụng của vắc xin sống, giảm độc lực, tái tổ hợp trong phòng ngừa \nViêm não Nhật Bản ở trẻ em","Dòng tế bào nuôi cấy vắc xin sống, giảm độc lực, tái tổ hợp","Vắc xin sống, giảm độc lực tái tổ hợp có thể sử dụng đồng thời với vắc xin"),e.optionGroupCA=new Array("Đúng","9 tháng tuổi","1 liều cơ bản","Não chuột","Sởi đơn"),e.optionGroupCB=new Array("Sai","12 tháng tuổi","1 liều cơ bản và 1 liều nhắc","Vero","Sởi phối hợp (sởi, quai bị, rubella)"),e.answerGroupC=new Array("A","A","B","B","B"),e.countTrue=0,e.questionNumber=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return i.sent(),this.stage.removeChild(t),[3,4];case 3:return e=i.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.checkRightWrong=function(t,e,i){return 0==t?this.answerGroupA[e]==i?!0:!1:1==t||2==t?this.answerGroupB[e]==i?!0:!1:3==t||4==t?this.answerGroupC[e]==i?!0:!1:void 0},e.prototype.displayQuestion=function(t,e){var i=t+1;0==t?(this.questionText.textFlow=[{text:"Câu "+i+": ",style:{textColor:16773632}},{text:this.questionGroupA[e],style:{textColor:16777215}}],this.optionA.text=this.optionGroupAA[e],this.optionB.text=this.optionGroupAB[e]):1==t||2==t?(this.questionText.textFlow=[{text:"Câu "+i+": ",style:{textColor:16773632}},{text:this.questionGroupB[e],style:{textColor:16777215}}],this.optionA.text=this.optionGroupBA[e],this.optionB.text=this.optionGroupBB[e]):(3==t||4==t)&&(this.questionText.textFlow=[{text:"Câu "+i+": ",style:{textColor:16773632}},{text:this.questionGroupC[e],style:{textColor:16777215}}],this.optionA.text=this.optionGroupCA[e],this.optionB.text=this.optionGroupCB[e])},e.prototype.createGameScene=function(){var t=this,e=0,i=this.createBitmapByName("start_scene_jpg");this.onGame=1,this.addChild(i),i.touchEnabled=!0;var o=this.stage.stageWidth,n=this.stage.stageHeight;i.width=o,i.height=n,this.wSocket=new WebSocketSanofi,this.wSocket.x=0,this.wSocket.y=0,this.wSocket.addEventListener("JoinOK",function(){e=1,console.log("Ok to play now"),t.removeChild(i),i=t.createBitmapByName("how_to_play_scene_jpg"),t.addChild(i),t.wSocket.addEventListener("gameStart",t.startTheGame,t),t.wSocket.addEventListener("reviewGame",t.reviewTheGame,t),t.wSocket.addEventListener("reStartGame",t.reStartGame,t),t.wSocket.addEventListener("getQuestion",t.buildQuestion,t),t.wSocket.addEventListener("Check",t.checkConnection,t),t.addChild(t.wSocket)},this),this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){},this)},e.prototype.buildQuestion=function(t){this.questionSet=t.data,console.log("Get the question set: "+this.questionSet)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.checkConnection=function(){console.log("Check connection, show warning");var t=this.createBitmapByName("check_connection");this.addChild(t)},e.prototype.startTheGame=function(){console.log("Coundown and start the game"),this.beepSound=new SoundBase("beep"),this.bgSound=new SoundBase("bgsound"),this.yeahSound=new SoundBase("yeah"),this.loseSound=new SoundBase("loser"),this.winning=new SoundBase("winning"),this.fail=new SoundBase("fail"),this.bgSound.setLoop(1);var t=new egret.Timer(1e3,4);t.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this),t.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this),t.start(),this.wSocket.removeEventListener("gameStart",this.startTheGame,this)},e.prototype.timerFunc=function(t){var e=this.createBitmapByName("count_down_"+(4-t.target.currentCount)+"_scene_jpg");this.addChild(e),this.beepSound.play()},e.prototype.timerComFunc=function(t){this.MainGame()},e.prototype.MainGame=function(){var t=this;this.questionNumber=0,this.right_btn=this.createBitmapByName("right_btn"),this.wrong_btn=this.createBitmapByName("wrong_btn"),this.true_zero=this.createBitmapByName("true_zero_png"),this.true_one=this.createBitmapByName("true_one_png"),this.true_two=this.createBitmapByName("true_two_png"),this.true_three=this.createBitmapByName("true_three_png"),this.true_four=this.createBitmapByName("true_four_png"),this.true_five=this.createBitmapByName("true_five_png"),this.bgSound.play();var e=this.createBitmapByName("game_start_scene_jpg");this.addChild(e);var i=this.createBitmapByName("a_btn"),o=this.createBitmapByName("b_btn");this.right_btn.visible=this.wrong_btn.visible=this.true_zero.visible=this.true_one.visible=this.true_two.visible=this.true_three.visible=this.true_four.visible=this.true_five.visible=!1,this.true_zero.x=this.true_one.x=this.true_two.x=this.true_three.x=this.true_four.x=this.true_five.x=330,this.true_zero.y=this.true_one.y=this.true_two.y=this.true_three.y=this.true_four.y=this.true_five.y=20,this.addChild(this.right_btn),this.addChild(this.wrong_btn),this.addChild(i),this.addChild(o),i.x=100,i.y=510,o.x=100,o.y=575,i.touchEnabled=!0,o.touchEnabled=!0,this.questionText=new egret.TextField,this.optionB=new egret.TextField,this.optionA=new egret.TextField,this.questionText.text=this.optionA.text=this.optionB.text="",this.questionText.bold=!1,this.questionText.x=50,this.questionText.y=440,this.questionText.size=this.optionA.size=this.optionB.size=28,this.questionText.width=1080,this.optionA.width=this.optionB.width=990,this.questionText.wordWrap=this.optionA.wordWrap=this.optionB.wordWrap=!0,this.optionA.x=this.optionB.x=155,this.optionA.y=525,this.optionB.y=590,this.addChild(this.questionText),this.addChild(this.optionA),this.addChild(this.optionB),this.addChild(this.true_zero),this.addChild(this.true_one),this.addChild(this.true_two),this.addChild(this.true_three),this.addChild(this.true_four),this.addChild(this.true_five),this.displayQuestion(this.questionNumber,this.questionSet[this.questionNumber]),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("Question number: "+t.questionNumber+" Button A was touched. Answer is:"+t.checkRightWrong(t.questionNumber,t.questionSet[t.questionNumber],"A")),1==t.checkRightWrong(t.questionNumber,t.questionSet[t.questionNumber],"A")&&(t.countTrue=t.countTrue+1),t.playAfterAnswer(t.questionNumber,t.checkRightWrong(t.questionNumber,t.questionSet[t.questionNumber],"A"),"A"),t.questionNumber<4?t.questionNumber=t.questionNumber+1:(i.touchEnabled=!1,o.touchEnabled=!1)},this),o.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){console.log("Question number: "+t.questionNumber+" Button B was touched. Answer is:"+t.checkRightWrong(t.questionNumber,t.questionSet[t.questionNumber],"B")),1==t.checkRightWrong(t.questionNumber,t.questionSet[t.questionNumber],"B")&&(t.countTrue=t.countTrue+1),t.playAfterAnswer(t.questionNumber,t.checkRightWrong(t.questionNumber,t.questionSet[t.questionNumber],"B"),"B"),t.questionNumber<4?t.questionNumber=t.questionNumber+1:(i.touchEnabled=!1,o.touchEnabled=!1)},this),console.log("Câu 1:"+this.questionGroupA[this.questionSet[0]]+" Lựa chọn A:"+this.optionGroupAA[this.questionSet[0]]+" Lựa chọn B:"+this.optionGroupAB[this.questionSet[0]]+" Đáp án:"+this.answerGroupA[this.questionSet[0]]),console.log("Câu 2:"+this.questionGroupB[this.questionSet[1]]+" Lựa chọn A:"+this.optionGroupBA[this.questionSet[1]]+" Lựa chọn B:"+this.optionGroupBB[this.questionSet[1]]+" Đáp án:"+this.answerGroupB[this.questionSet[1]]),console.log("Câu 3:"+this.questionGroupB[this.questionSet[2]]+" Lựa chọn A:"+this.optionGroupBA[this.questionSet[2]]+" Lựa chọn B:"+this.optionGroupBB[this.questionSet[2]]+" Đáp án:"+this.answerGroupB[this.questionSet[2]]),console.log("Câu 4:"+this.questionGroupC[this.questionSet[3]]+" Lựa chọn A:"+this.optionGroupCA[this.questionSet[3]]+" Lựa chọn B:"+this.optionGroupCB[this.questionSet[3]]+" Đáp án:"+this.answerGroupC[this.questionSet[3]]),console.log("Câu 5:"+this.questionGroupC[this.questionSet[4]]+" Lựa chọn A:"+this.optionGroupCA[this.questionSet[4]]+" Lựa chọn B:"+this.optionGroupCB[this.questionSet[4]]+" Đáp án:"+this.answerGroupC[this.questionSet[4]]);var n=RES.getRes("mosquito_ske_json"),s=RES.getRes("mosquito_tex_json"),r=RES.getRes("mosquito_tex_png"),h=RES.getRes("children_ske_json"),a=RES.getRes("children_tex_json"),u=RES.getRes("children_tex_png"),c=RES.getRes("happykids_ske_json"),d=RES.getRes("happykids_tex_json"),p=RES.getRes("happykids_tex_png"),l=RES.getRes("crykids_ske_json"),_=RES.getRes("crykids_tex_json"),g=RES.getRes("crykids_tex_png");this.factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(n)),this.factory.addTextureAtlasData(this.factory.parseTextureAtlasData(s,r)),this.factory_child.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(h)),this.factory_child.addTextureAtlasData(this.factory_child.parseTextureAtlasData(a,u)),this.factory_crykids.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(l)),this.factory_crykids.addTextureAtlasData(this.factory_crykids.parseTextureAtlasData(_,g)),this.factory_happykids.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(c)),this.factory_happykids.addTextureAtlasData(this.factory_happykids.parseTextureAtlasData(d,p)),this.crykids=this.factory_crykids.buildArmature("crykids"),this.happykids=this.factory_happykids.buildArmature("happykids"),this.children=this.factory_child.buildArmature("children"),this.armature=this.factory.buildArmature("mosquito"),this.armature2=this.factory.buildArmature("mosquito"),this.armature3=this.factory.buildArmature("mosquito"),this.armature4=this.factory.buildArmature("mosquito"),dragonBones.WorldClock.clock.add(this.crykids),dragonBones.WorldClock.clock.add(this.happykids),dragonBones.WorldClock.clock.add(this.children),dragonBones.WorldClock.clock.add(this.armature),dragonBones.WorldClock.clock.add(this.armature2),dragonBones.WorldClock.clock.add(this.armature3),dragonBones.WorldClock.clock.add(this.armature4),this.children_clip=this.children.getDisplay(),this.addChild(this.children_clip),this.children_clip.x=520,this.children_clip.y=330,this.happykids_clip=this.happykids.getDisplay(),this.addChild(this.happykids_clip),this.happykids_clip.x=550,this.happykids_clip.y=260,this.crykids_clip=this.crykids.getDisplay(),this.addChild(this.crykids_clip),this.crykids_clip.x=550,this.crykids_clip.y=260,this.happykids_clip.visible=!1,this.crykids_clip.visible=!1,this.mostquito_1=this.armature.getDisplay(),this.addChild(this.mostquito_1),this.mostquito_1.x=860,this.mostquito_1.y=300,this.mostquito_2=this.armature2.getDisplay(),this.addChild(this.mostquito_2),this.mostquito_2.scaleX=this.mostquito_2.scaleY=.5,this.mostquito_2.x=900,this.mostquito_2.y=100,this.mostquito_3=this.armature3.getDisplay(),this.addChild(this.mostquito_3),this.mostquito_3.scaleX=this.mostquito_3.scaleY=.7,this.mostquito_3.x=700,this.mostquito_3.y=120,this.mostquito_4=this.armature4.getDisplay(),this.addChild(this.mostquito_4),this.mostquito_4.skewY=180,this.mostquito_4.x=200,this.mostquito_4.y=230,this.armature.animation.gotoAndPlay("fly"),this.armature2.animation.gotoAndPlay("fly"),this.armature3.animation.gotoAndPlay("fly"),this.armature4.animation.gotoAndPlay("fly"),this.children.animation.gotoAndPlay("stand"),this.happykids.animation.gotoAndPlay("happy"),this.crykids.animation.gotoAndPlay("crying"),egret.startTick(this.onTicker,this),this.textfield=new egret.TextField,this.textfield.text="30",this.textfield.bold=!0,this.textfield.textColor=16711680,this.textfield.x=1005,this.textfield.y=260,this.textfield.size=60,this.addChild(this.textfield);var y=new egret.Timer(1e3,30);y.addEventListener(egret.TimerEvent.TIMER,this.clockFunc,this),y.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.clockComFunc,this),y.start()},e.prototype.clockFunc=function(t){t.target.currentCount<21?this.textfield.text=""+(30-t.target.currentCount):this.textfield.text="0"+(30-t.target.currentCount),0==this.loseSound.getStatus()&&(egret.Tween.get(this.mostquito_3).to({x:750,y:120},300,egret.Ease.sineIn),egret.Tween.get(this.mostquito_4).to({x:200,y:230},300,egret.Ease.sineIn)),0==this.yeahSound.getStatus(),0==this.loseSound.getStatus()&&0==this.yeahSound.getStatus()&&(1==this.wrong_btn.visible&&(this.wrong_btn.visible=!1),1==this.right_btn.visible&&(this.right_btn.visible=!1),this.displayQuestion(this.questionNumber,this.questionSet[this.questionNumber]))},e.prototype.clockComFunc=function(){if(console.log("Game Over"),this.onGame=0,this.bgSound.stop(),this.countTrue<5){var t=this.createBitmapByName("game_over_scene_jpg");this.addChild(t),this.fail.play()}else{var t=this.createBitmapByName("game_win_scene_jpg");this.addChild(t),this.winning.play()}},e.prototype.onTicker=function(t){this._time||(this._time=t);var e=t,i=e-this._time;return this._time=e,dragonBones.WorldClock.clock.advanceTime(i/1e3),!1},e.prototype.playAfterAnswer=function(t,e,i){if(console.log("Play animation"),0==e)this.loseSound.play(),"A"==i?(this.wrong_btn.x=100,this.wrong_btn.y=510,this.wrong_btn.visible=!0):(this.wrong_btn.x=100,this.wrong_btn.y=575,this.wrong_btn.visible=!0),egret.Tween.get(this.mostquito_3).to({x:650,y:260},300,egret.Ease.sineIn),egret.Tween.get(this.mostquito_4).to({x:390,y:240},300,egret.Ease.sineIn),this.children_clip.visible=!1,this.happykids_clip.visible=!1,this.crykids_clip.visible=!0,0==this.countTrue&&(this.true_zero.visible=!0);else switch(this.yeahSound.play(),1==this.countTrue&&(this.mostquito_3.x=750),this.happykids_clip.visible=!0,this.crykids_clip.visible=!1,this.children_clip.visible=!1,"A"==i?(this.right_btn.x=100,this.right_btn.y=510,this.right_btn.visible=!0):(this.right_btn.x=100,this.right_btn.y=575,this.right_btn.visible=!0),this.countTrue){case 1:this.true_one.visible=!0;break;case 2:this.true_two.visible=!0;break;case 3:this.true_three.visible=!0;break;case 4:this.true_four.visible=!0;break;case 5:this.true_five.visible=!0}},e.prototype.reviewTheGame=function(t){var e,i=new Array("group_a_1_png","group_a_2_png","group_a_3_png","group_a_4_png","group_a_5_png","group_a_6_png","group_a_7_png"),o=new Array("group_b_1_png","group_b_2_png","group_b_3_png","group_b_4_png","group_b_5_png"),n=new Array("group_c_1_png","group_c_2_png","group_c_3_png","group_c_4_png","group_c_5_png");if(0==this.onGame){var s=t.data;console.log("get the review number:"+s),1==s?(e=this.createBitmapByName(i[this.questionSet[s-1]]),this.addChild(e)):2==s||3==s?(e=this.createBitmapByName(o[this.questionSet[s-1]]),this.addChild(e)):(4==s||5==s)&&(e=this.createBitmapByName(n[this.questionSet[s-1]]),this.addChild(e))}},e.prototype.reStartGame=function(){0==this.onGame&&window.location.reload()},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var WebSocketSanofi=function(t){function e(){var e=t.call(this)||this;return e.gameStart=!1,e.text="",e.initStateText(),e.initWebSocket(),e}return __extends(e,t),e.prototype.initStateText=function(){this.stateText=new egret.TextField,this.stateText.size=10,this.stateText.text=this.text,this.stateText.width=480,this.stateText.textColor=0,this.addChild(this.stateText)},e.prototype.initWebSocket=function(){this.socket=new egret.WebSocket,this.socket.type=egret.WebSocket.TYPE_STRING,this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this),this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this),this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this),this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this),this.socket.connectByUrl("wss://ws.achex.ca")},e.prototype.genID=function(){return"_"+Math.random().toString(36).substr(2,9)},e.prototype.sendData=function(){this.socket.writeUTF('{"auth":"'+this.genID()+'","passwd":"none"}'),this.socket.writeUTF('{"joinHub":"sanofi@00000727","passwd":"none"}')},e.prototype.socketCommand=function(t){this.socket.writeUTF(t)},e.prototype.onSocketOpen=function(){this.sendData(),this.dispatchEventWith("JoinOK")},e.prototype.onSocketClose=function(){this.trace("Kết nối đóng lại"),this.dispatchEventWith("Check")},e.prototype.onSocketError=function(){this.trace("Lỗi kết nối"),this.dispatchEventWith("Check")},e.prototype.onReceiveMessage=function(t){var e=this.socket.readUTF(),i=JSON.parse(e);if("undefined"!=typeof i.question){var o=i.question.split(",");console.log(o),this.dispatchEventWith("getQuestion",!0,o,!1)}if("undefined"!=typeof i.reviewGame){var n=i.reviewGame;this.dispatchEventWith("reviewGame",!0,n,!1)}if("undefined"!=typeof i.reStartGame){var s=1;this.dispatchEventWith("reStartGame",!0,s,!1)}"undefined"!=typeof i.auth&&("OK"==i.auth||(this.trace("Kết nối thất bại"),this.dispatchEventWith("Check"))),"undefined"!=typeof i.joinHub&&("OK"==i.joinHub?(this.dispatchEventWith("JoinOK"),console.log("Hệ thống sẵn sàng")):(this.trace("Hệ thống chưa sẵn sàng"),this.dispatchEventWith("Check"))),"undefined"!=typeof i.msg,"start"==i.msg&&this.dispatchEventWith("gameStart")},e.prototype.trace=function(t){this.text=this.text+"\n"+t,this.stateText.text=this.text,egret.log(t)},e}(egret.DisplayObjectContainer);__reflect(WebSocketSanofi.prototype,"WebSocketSanofi");var SoundBase=function(t){function e(e){var i=t.call(this)||this;return i._soundURL="bgSound",i._positon=0,i._loop=1,i._status=0,e&&(i._soundURL=e),i._sound=new egret.Sound,i._loadSound(),i}return __extends(e,t),e.prototype._loadSound=function(){RES.getRes(this._soundURL)?this._sound=RES.getRes(this._soundURL):(this._sound.once(egret.Event.COMPLETE,this.loadComplete,this),this._sound.once(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this._sound.load(this._soundURL))},e.prototype.loadComplete=function(t){this._status=3;var e="��������";egret.log(e),this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadErr,this),this.dispatchEventWith(egret.Event.COMPLETE,!1,e)},e.prototype.onLoadErr=function(t){this._status=4;var e="����ʧ��"+this._soundURL;egret.log(e),this._sound.removeEventListener(egret.Event.COMPLETE,this.loadComplete,this),this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR,!1,e)},e.prototype.setUrl=function(t){this._soundURL=t,this._loadSound()},e.prototype.looped=function(t){console.log("looped"),this._soundChannel=null,this._positon=0,this._status=0;var e="��������";this._loop>=0?this.dispatchEventWith(egret.Event.SOUND_COMPLETE,!1,e):this.play()},e.prototype.getStatus=function(){return this._status},e.prototype.setVolume=function(t){console.log(this._status),1===this._status&&(this._soundChannel.volume=t/100)},e.prototype.showPosition=function(){return 1===this._status&&(this._positon=this._soundChannel.position),this._positon},e.prototype.play=function(){return 4===this._status?void this._loadSound():(this._status=1,this._soundChannel&&this._soundChannel.stop(),this._soundChannel=this._sound.play(this._positon,1),this._soundChannel.once(egret.Event.SOUND_COMPLETE,this.looped,this),this._status)},e.prototype.setLoop=function(t){return void 0===t&&(t=1),this._loop=t,t},e.prototype.pause=function(){var t=this._status;return 1===t&&(this._positon=this._soundChannel.position,this._soundChannel.stop(),this._status=2),egret.log(this._positon),t},e.prototype.resume=function(){var t=this._status;return 2===t&&this.play(),egret.log(this._positon),t},e.prototype.stop=function(){this._status=0,this._positon=0,this._soundChannel.stop(),this._soundChannel=null},e}(egret.DisplayObjectContainer);__reflect(SoundBase.prototype,"SoundBase");