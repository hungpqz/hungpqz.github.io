var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, HungPQ.
//  All rights reserved.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 1136;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "\u0110ang t\u1EA3i..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2019, HungPQ.
//  All rights reserved.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.theObstaclesTimer = new egret.Timer(1000);
        _this.theObstacles = [];
        _this.gameSpeed = 5;
        _this.jumpCount = 0;
        _this.sceneState = 0; //0: title;1: ingame; 2: gameover
        _this.level = 1;
        _this._lastTime = egret.getTimer();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.gameTitle();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display game Title
     */
    Main.prototype.gameTitle = function () {
        var _this = this;
        var title = this.createBitmapByName("title_jpg");
        this.addChild(title);
        title.touchEnabled = true;
        this.sceneState = 0;
        this.kb = new KeyBoard();
        this.kb.addEventListener(KeyBoard.onkeydown, this.onkeydown, this);
        title.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.removeChild(title);
            //Turn on fullscreen
            var elem = document.documentElement;
            var methodToBeInvoked = elem.requestFullscreen ||
                elem.webkitRequestFullScreen || elem['mozRequestFullscreen'] ||
                elem['msRequestFullscreen'];
            if (methodToBeInvoked)
                methodToBeInvoked.call(elem);
            _this.touchEnabled = false;
            _this.hiscore = 200;
            if (parseInt(egret.localStorage.getItem("hiscore")) > 200) {
                _this.hiscore = parseInt(egret.localStorage.getItem("hiscore"));
            }
            _this.createGameScene();
        }, this);
        //change();
    };
    /**
     * Check keyboard event
     */
    Main.prototype.onkeydown = function (event) {
        if (this.kb.isContain(event.data, KeyBoard.SPACE)) {
            console.log("Space was hit");
            switch (this.sceneState) {
                case 0:
                    this.removeChildren();
                    this.hiscore = 200;
                    if (parseInt(egret.localStorage.getItem("hiscore")) > 200) {
                        this.hiscore = parseInt(egret.localStorage.getItem("hiscore"));
                    }
                    this.createGameScene();
                    break;
                case 1:
                    this.touchHandler();
                    break;
                case 2:
                    this.replay();
                    break;
            }
        }
    };
    /**
     *
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this.gameSpeed = 6; //Start game speed
        this.jumpCount = 0;
        this.score = 0;
        this.sceneState = 1; //Ingame mode
        this.level = 1;
        this.bgSound = new SoundBase("stage1-4_mp3");
        this.bgSound.setLoop(0);
        this.bgSound.play();
        this.bgSound.setVolume(40);
        var bg_sun = this.createBitmapByName("bg_png");
        this.addChild(bg_sun);
        this.bg = new circus.BgMap();
        this.addChild(this.bg);
        this.bg.start(); //Start scrolling
        var logoboard = this.createBitmapByName("logo_png");
        logoboard.x = (this.stage.stageWidth - logoboard.width) / 2;
        logoboard.y = 600;
        this.addChild(logoboard);
        this.lion = new circus.lion();
        this.addChild(this.lion);
        this.lion.x = 200;
        this.lion.y = 345;
        this.lion.run();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
        this.scoreText = new egret.BitmapText();
        this.scoreText.font = RES.getRes("number_fnt");
        this.addChild(this.scoreText);
        this.scoreText.x = 145;
        this.levelText = new egret.BitmapText();
        this.levelText.font = RES.getRes("number_fnt");
        this.addChild(this.levelText);
        this.levelText.x = 820;
        this.hiscoreText = new egret.BitmapText();
        this.hiscoreText.font = RES.getRes("number_fnt");
        this.addChild(this.hiscoreText);
        this.hiscoreText.x = 475;
        this.levelText.y = this.scoreText.y = this.hiscoreText.y = 50;
        this.hiscoreText.text = this.hiscore.toString();
    };
    /**
     * Create obstacle
    */
    Main.prototype.createtheObstacle = function () {
        var theObstacle = new circus.obstacle();
        if (this.theObstacles.length > 0) {
            theObstacle.x = this.theObstacles[this.theObstacles.length - 1].x + theObstacle.width + Math.random() * 300 + 300 + 10 * this.gameSpeed;
        }
        else {
            theObstacle.x = this.stage.stageWidth + theObstacle.width + Math.random() * 300;
        }
        //theObstacle.y=680-theObstacle.height;    
        theObstacle.y = 350;
        this.addChildAt(theObstacle, this.numChildren - 1);
        this.theObstacles.push(theObstacle);
    };
    /**
     *  Update all the view
     */
    Main.prototype.gameViewUpdate = function () {
        var i = 0;
        var total_obstacle = 0;
        var nowTime = egret.getTimer();
        var fps = 1000 / (nowTime - this._lastTime);
        this._lastTime = nowTime;
        var speedOffset = 60 / fps;
        //Update score
        this.score += 1;
        if (this.score > 9) {
            this.scoreText.text = this.score.toString();
        }
        else {
            this.scoreText.text = "0" + this.score.toString();
        }
        //Update game speed
        if (this.score % 199 == 0) {
            if (this.gameSpeed < 12) {
                this.gameSpeed += 1;
            }
            //Update level
            this.level += 1;
        }
        if (this.level > 9) {
            this.levelText.text = this.level.toString();
        }
        else {
            this.levelText.text = "0" + this.level.toString();
        }
        //obstacle movement
        var theObstacle;
        var theObstacleCount = this.theObstacles.length;
        //console.log("Total array element: ",this.theObstacles.length);
        for (i = 0; i < theObstacleCount; i++) {
            theObstacle = this.theObstacles[i];
            if (theObstacle.x < -theObstacle.width) {
                this.removeChild(theObstacle);
                this.theObstacles.splice(i, 1);
                i--;
                theObstacleCount--;
            }
            else {
                total_obstacle += 1;
            }
            //check if lion jump
            if (this.lion.status() == 1) {
                theObstacle.x -= (this.gameSpeed + 1) * speedOffset; //Set speed here for obstacle
            }
            else
                theObstacle.x -= this.gameSpeed * speedOffset; //Set speed here for obstacle
        }
        if (total_obstacle < 4) {
            this.createtheObstacle();
        }
        //End of obstable movement
        //Check hi-score
        if (this.score >= this.hiscore) {
            this.hiscore = this.score;
            this.hiscoreText.text = this.hiscore.toString();
        }
        this.gameHitTest();
    };
    /**
     * Test collide
     */
    Main.prototype.gameHitTest = function () {
        var i, j;
        var theObstacle;
        var lion;
        var theObstacleCount = this.theObstacles.length;
        for (i = 0; i < theObstacleCount; i++) {
            theObstacle = this.theObstacles[i];
            if (circus.GameUtil.hitTest(this.lion, theObstacle)) {
                var hit_sound = new SoundBase("hit_mp3");
                hit_sound.play();
                this.gameOver();
            }
        }
    };
    /**
     * Game over
     */
    Main.prototype.gameOver = function () {
        var _this = this;
        this.sceneState = 3; // GameOver mode wait for key
        var i, j;
        var theObstacle;
        var lion;
        var theObstacleCount = this.theObstacles.length;
        for (i = 0; i < theObstacleCount; i++) {
            theObstacle = this.theObstacles[i];
            theObstacle.stop();
        }
        this.bg.pause(); // Stop scrolling
        this.lion.stop(); // Stop actor
        egret.localStorage.setItem("hiscore", this.hiscore.toString());
        var toang = this.createBitmapByName("toang_png");
        this.addChild(toang);
        toang.x = (this.stage.stageWidth - toang.width) / 2;
        toang.y = 190;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        egret.Tween.removeAllTweens();
        this.bgSound.stop();
        var fail_sound = new SoundBase("failure_mp3");
        fail_sound.play();
        this.touchEnabled = false;
        var replay_btn = this.createBitmapByName("start_btn_png");
        egret.Tween.get(replay_btn).wait(3000).call(function () {
            _this.touchEnabled = true;
            _this.addChild(replay_btn);
            _this.sceneState = 2; // GameOver mode
        });
        replay_btn.x = (this.stage.stageWidth - replay_btn.width) / 2;
        replay_btn.y = 370;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.replay, this);
    };
    /**
     * Call replay
     */
    Main.prototype.replay = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.replay, this);
        var obstable;
        while (this.theObstacles.length > 0) {
            obstable = this.theObstacles.pop();
            this.removeChild(obstable);
        }
        this.removeChildren();
        this.createGameScene();
    };
    /**
     * Handle touch to jump
     */
    Main.prototype.touchHandler = function () {
        this.lion.jump(220, this.gameSpeed);
        //this.jumpCount+=1;
        //if (this.jumpCount==5)
        //{
        //    this.gameSpeed+=1;
        //    this.jumpCount=0;
        //}
    };
    /**
     *
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
/**
 * Created by HungPQ
 */
var circus;
(function (circus) {
    /**
     * Scrollable base map
     */
    var BgMap = (function (_super) {
        __extends(BgMap, _super);
        function BgMap() {
            var _this = _super.call(this) || this;
            /**Controlling scroll speed*/
            _this.speed = 5;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /**initialization*/
        BgMap.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture = RES.getRes("bg_run_png");
            this.textureWidth = texture.textureWidth; //Preserve the height of the original texture for subsequent calculations
            this.rowCount = Math.ceil(this.stageW / this.textureWidth) + 1; //Count the number of pictures needed in the current screen
            this.bmpArr = [];
            //Create these images and set the x coordinates to connect them
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = circus.createBitmapByName("bg_run_png");
                bgBmp.x = this.textureWidth * i;
                console.log("Tọa độ X của đối tượng ", i, " :", bgBmp.x);
                this.bmpArr.push(bgBmp);
                this.addChild(bgBmp);
            }
        };
        /**Bắt đầu chuyển động*/
        BgMap.prototype.start = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        /**Lặp chuyển động*/
        BgMap.prototype.enterFrameHandler = function (event) {
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = this.bmpArr[i];
                bgBmp.x -= this.speed;
                //After judging beyond the screen, return to the beginning of the team, so as to achieve looping
                if (bgBmp.x < -bgBmp.width + bgBmp.anchorOffsetX * bgBmp.width) {
                    // console.log("X value: ",bgBmp.x);
                    bgBmp.x += bgBmp.width * 2;
                    //console.log("New value: ",bgBmp.x, "texture width:",this.textureWidth);
                    //this.bmpArr.shift();
                    //this.bmpArr.push(bgBmp);
                }
            }
        };
        /**Tạm dừng chuyển động*/
        BgMap.prototype.pause = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        return BgMap;
    }(egret.DisplayObjectContainer));
    circus.BgMap = BgMap;
    __reflect(BgMap.prototype, "circus.BgMap");
})(circus || (circus = {}));
/**
 * Created by HungPQ on 05/11/2019
 */
var circus;
(function (circus) {
    /**
     * Tạo đối tượng Lion
     */
    var lion = (function (_super) {
        __extends(lion, _super);
        function lion() {
            var _this = _super.call(this) || this;
            var data = RES.getRes("lion_mc_json");
            var tex = RES.getRes("lion_tex_png");
            _this._readyJump = true;
            //console.log("yes: ",tex);
            var mcf = new egret.MovieClipDataFactory(data, tex);
            _this._lion = new egret.MovieClip(mcf.generateMovieClipData("circus"));
            _this.addChild(_this._lion);
            return _this;
        }
        /**Chạy*/
        lion.prototype.run = function () {
            this._status = 0;
            this._lion.gotoAndPlay("run", -1);
        };
        /**
         * Nhảy lên không trung
         */
        lion.prototype.air_jump = function () {
            this._lion.gotoAndPlay("jump");
        };
        /**Dừng*/
        lion.prototype.stop = function () {
            this._lion.gotoAndPlay("fail");
        };
        /**
         * Status of lion
         * 0: run
         * 1: jump
         */
        lion.prototype.status = function () {
            return this._status;
        };
        /**Nhảy*/
        lion.prototype.jump = function (h, speed) {
            var _this = this;
            var lionY = this.y;
            if (this._readyJump == true) {
                this._readyJump = false;
                var jump_sound = new SoundBase("jump_mp3");
                jump_sound.play();
                egret.Tween.get(this).call(this.air_jump)
                    .to({ y: lionY - h }, 200 + h - speed * 10)
                    .call(function () { _this._status = 1; })
                    .wait(120)
                    .call(function () { _this._status = 0; })
                    .to({ y: lionY }, 300 + h - speed * 10)
                    .call(function () { _this.run(); _this._readyJump = true; });
            }
        };
        return lion;
    }(egret.DisplayObjectContainer));
    circus.lion = lion;
    __reflect(lion.prototype, "circus.lion");
})(circus || (circus = {}));
/**
 * Created by HungPQ on 05/11/2019
 */
var circus;
(function (circus) {
    /**
     * Tạo đối tượng obstacle
     */
    var obstacle = (function (_super) {
        __extends(obstacle, _super);
        //private _ninja:egret.MovieClip;
        //private _readyJump:boolean;
        function obstacle() {
            var _this = _super.call(this) || this;
            var data = RES.getRes("fire_mc_json");
            var tex = RES.getRes("fire_tex_png");
            var randObstacle = Math.round(Math.random());
            //this._readyJump=true;
            //console.log("yes: ",tex);
            var mcf = new egret.MovieClipDataFactory(data, tex);
            _this._fire = new egret.MovieClip(mcf.generateMovieClipData("fire"));
            //this._ninja  = new egret.MovieClip(mcf.generateMovieClipData("ninja"));
            _this.addChild(_this._fire);
            if (randObstacle == 0) {
                //this.addChild(this._fire);
                _this._type = 0;
                _this._fire.gotoAndPlay("fire", -1);
            }
            else {
                //this.addChild(this._ninja);
                _this._type = 1;
                _this._fire.gotoAndPlay("ninja", -1);
            }
            return _this;
            //var _obstacle:egret.Bitmap=circus.createBitmapByName("obtacle_png");
            //this.addChild(_obstacle);
        }
        /**Dừng vật cản
         *
        */
        obstacle.prototype.stop = function () {
            this._fire.stop();
        };
        /**
         * Return type of obstacle
         */
        obstacle.prototype.type = function () {
            return this._type;
        };
        return obstacle;
    }(egret.DisplayObjectContainer));
    circus.obstacle = obstacle;
    __reflect(obstacle.prototype, "circus.obstacle");
})(circus || (circus = {}));
/**
 * Created by HungPQ on 05/11/2019
 */
var circus;
(function (circus) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        /**Rectangular based collision detection*/
        GameUtil.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect1.height = rect1.height - 20;
            rect2.y = obj2.y + rect2.height / 2;
            rect2.width = rect2.width - 30;
            /*
            rect1.width=rect1.width-10;
            rect1.height=4;
            rect2.width=rect2.width-10;
            rect2.height=4;
            */
            if (rect1.intersects(rect2))
                return true;
            else
                return false;
            //return collision.checkCollision(obj1, obj2);
        };
        return GameUtil;
    }());
    circus.GameUtil = GameUtil;
    __reflect(GameUtil.prototype, "circus.GameUtil");
    /**
     * Create a Bitmap object based on the name keyword.
     * For the name attribute, please refer to the contents of the resources/resource.json configuration file.
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    circus.createBitmapByName = createBitmapByName;
})(circus || (circus = {}));
var KeyBoard = (function (_super) {
    __extends(KeyBoard, _super);
    function KeyBoard() {
        var _this = _super.call(this) || this;
        _this.inputs = [];
        _this.keyValue = {
            "27": KeyBoard.Esc,
            "112": KeyBoard.F1,
            "113": KeyBoard.F2,
            "114": KeyBoard.F3,
            "115": KeyBoard.F4,
            "116": KeyBoard.F5,
            "117": KeyBoard.F6,
            "118": KeyBoard.F7,
            "119": KeyBoard.F8,
            "120": KeyBoard.F9,
            "121": KeyBoard.F10,
            "122": KeyBoard.F11,
            "123": KeyBoard.F12,
            "42": KeyBoard.PrintScreen,
            "145": KeyBoard.ScrollLock,
            "19": KeyBoard.PauseBreak,
            "192": KeyBoard.key_Points,
            "49": KeyBoard.key_1,
            "50": KeyBoard.key_2,
            "51": KeyBoard.key_3,
            "52": KeyBoard.key_4,
            "53": KeyBoard.key_5,
            "54": KeyBoard.key_6,
            "55": KeyBoard.key_7,
            "56": KeyBoard.key_8,
            "57": KeyBoard.key_9,
            "48": KeyBoard.key_0,
            "189": KeyBoard.key_Sub,
            "187": KeyBoard.key_Plus,
            "8": KeyBoard.Backspace,
            "45": KeyBoard.Insert,
            "36": KeyBoard.Home,
            "33": KeyBoard.PageUp,
            "144": KeyBoard.NumLock,
            "111": KeyBoard.Num_Slash,
            "106": KeyBoard.Num_Mul,
            "109": KeyBoard.Num_Sub,
            "9": KeyBoard.Tab,
            "81": KeyBoard.Q,
            "87": KeyBoard.W,
            "69": KeyBoard.E,
            "82": KeyBoard.R,
            "84": KeyBoard.T,
            "89": KeyBoard.Y,
            "85": KeyBoard.U,
            "73": KeyBoard.I,
            "79": KeyBoard.O,
            "80": KeyBoard.P,
            "219": KeyBoard.brace1,
            "221": KeyBoard.brace2,
            "13": KeyBoard.CnterEnter,
            "46": KeyBoard.Delete,
            "35": KeyBoard.End,
            "34": KeyBoard.PageDown,
            "103": KeyBoard.Num_7,
            "104": KeyBoard.Num_8,
            "105": KeyBoard.Num_9,
            "107": KeyBoard.Num_Plus,
            "20": KeyBoard.CapsLock,
            "65": KeyBoard.A,
            "83": KeyBoard.S,
            "68": KeyBoard.D,
            "70": KeyBoard.F,
            "71": KeyBoard.G,
            "72": KeyBoard.H,
            "74": KeyBoard.J,
            "75": KeyBoard.K,
            "76": KeyBoard.L,
            "186": KeyBoard.semicolon,
            "222": KeyBoard.quotes,
            "220": KeyBoard.bar,
            "100": KeyBoard.Num_4,
            "101": KeyBoard.Num_5,
            "102": KeyBoard.Num_6,
            "16": KeyBoard.key_Shift,
            "90": KeyBoard.Z,
            "88": KeyBoard.X,
            "67": KeyBoard.C,
            "86": KeyBoard.V,
            "66": KeyBoard.B,
            "78": KeyBoard.N,
            "77": KeyBoard.M,
            "188": KeyBoard.key_Semicolon,
            "190": KeyBoard.key_Dot,
            "191": KeyBoard.question,
            "38": KeyBoard.UpArrow,
            "97": KeyBoard.Num_1,
            "98": KeyBoard.Num_2,
            "99": KeyBoard.Num_3,
            // "13" : KeyBoard.Num_Enter,
            "17": KeyBoard.left_Ctrl,
            "91": KeyBoard.Left_Win,
            "18": KeyBoard.key_Alt,
            "32": KeyBoard.SPACE,
            "92": KeyBoard.RIGHT_WIN,
            "93": KeyBoard.NoteSign,
            "37": KeyBoard.keyArrow,
            "40": KeyBoard.DownArrow,
            "39": KeyBoard.RightArrow,
            "96": KeyBoard.Num_0,
            "110": KeyBoard.Num_dot
        };
        _this.init();
        return _this;
    }
    KeyBoard.prototype.init = function () {
        var self = this;
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            self.handlekeydown(e);
            if (self.inputs.length > 0) {
                //console.log(self.inputs.length)
                self.dispatchEventWith(KeyBoard.onkeydown, true, self.inputs, true);
            }
        };
        document.onkeyup = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            self.handlekeyup(e);
            if (self.inputs.length > 0) {
                self.dispatchEventWith(KeyBoard.onkeyup, true, self.inputs, true);
            }
        };
        document.onmousedown = function (event) {
            self.inputs = [];
        };
    };
    //Handle keyboard press correspondence keycode
    KeyBoard.prototype.handlekeydown = function (e) {
        for (var item in this.keyValue) {
            if (parseInt(item) == e.keyCode) {
                this.checkInput(this.keyValue[item]);
            }
        }
    };
    //Handle keyboard lift correspondence keycode
    KeyBoard.prototype.handlekeyup = function (e) {
        for (var item in this.keyValue) {
            if (parseInt(item) == e.keyCode) {
                this.removeByKey(this.keyValue[item]);
            }
        }
    };
    //Add by key
    KeyBoard.prototype.checkInput = function (key) {
        var isContain = false;
        for (var i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i] == key) {
                isContain = true;
            }
        }
        if (!isContain) {
            this.inputs.push(key);
        }
    };
    //delete by key
    KeyBoard.prototype.removeByKey = function (key) {
        for (var i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i] == key) {
                this.inputs.splice(i, 1);
            }
        }
    };
    /**
     * Determines whether a string is contained in the data string array
     */
    KeyBoard.prototype.isContain = function (data, keyCode) {
        var isContain = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == keyCode) {
                isContain = true;
            }
        }
        return isContain;
    };
    /**
     * Multiple keys pressed at the same time: returns a string array of multiple keys
     */
    KeyBoard.onkeydown = "KeyBoardonkeydown";
    KeyBoard.onkeyup = "KeyBoardonkeyup";
    KeyBoard.NumLock = "NumLock";
    KeyBoard.Num_Slash = "num_/";
    KeyBoard.Num_Mul = "num_*";
    KeyBoard.Num_Sub = "num_-";
    KeyBoard.Num_7 = "num_7";
    KeyBoard.Num_8 = "num_8";
    KeyBoard.Num_9 = "num_9";
    KeyBoard.Num_Plus = "num_+";
    KeyBoard.Num_4 = "num_4";
    KeyBoard.Num_5 = "num_5";
    KeyBoard.Num_6 = "num_6";
    KeyBoard.Num_1 = "num_1";
    KeyBoard.Num_2 = "num_2";
    KeyBoard.Num_3 = "num_3";
    KeyBoard.Num_Enter = "num_Enter";
    KeyBoard.Num_0 = "num_0";
    KeyBoard.Num_dot = "num_.";
    //First group
    KeyBoard.Esc = "Esc"; //27
    KeyBoard.F1 = "F1";
    KeyBoard.F2 = "F2";
    KeyBoard.F3 = "F3";
    KeyBoard.F4 = "F4";
    KeyBoard.F5 = "F5";
    KeyBoard.F6 = "F6";
    KeyBoard.F7 = "F7";
    KeyBoard.F8 = "F8";
    KeyBoard.F9 = "F9";
    KeyBoard.F10 = "F10";
    KeyBoard.F11 = "F11";
    KeyBoard.F12 = "F12";
    KeyBoard.PrintScreen = "PrintScreen";
    KeyBoard.ScrollLock = "ScrollLock";
    KeyBoard.PauseBreak = "PauseBreak";
    //2nd group
    KeyBoard.key_Points = "`";
    KeyBoard.key_1 = "1";
    KeyBoard.key_2 = "2";
    KeyBoard.key_3 = "3";
    KeyBoard.key_4 = "4";
    KeyBoard.key_5 = "5";
    KeyBoard.key_6 = "6";
    KeyBoard.key_7 = "7";
    KeyBoard.key_8 = "8";
    KeyBoard.key_9 = "9";
    KeyBoard.key_0 = "0";
    KeyBoard.key_Sub = "-";
    KeyBoard.key_Plus = "=";
    KeyBoard.Backspace = "Backspace";
    KeyBoard.Insert = "Insert";
    KeyBoard.Home = "Home";
    KeyBoard.PageUp = "PageUp";
    //3rd group
    KeyBoard.Tab = "Tab";
    KeyBoard.Q = "Q";
    KeyBoard.W = "W";
    KeyBoard.E = "E";
    KeyBoard.R = "R";
    KeyBoard.T = "T";
    KeyBoard.Y = "Y";
    KeyBoard.U = "U";
    KeyBoard.I = "I";
    KeyBoard.O = "O";
    KeyBoard.P = "P";
    KeyBoard.brace1 = "[";
    KeyBoard.brace2 = "]";
    KeyBoard.CnterEnter = "Enter";
    KeyBoard.Delete = "Delete";
    KeyBoard.End = "End";
    KeyBoard.PageDown = "PageDown";
    //4th group
    KeyBoard.CapsLock = "CapsLock";
    KeyBoard.A = "A";
    KeyBoard.S = "S";
    KeyBoard.D = "D";
    KeyBoard.F = "F";
    KeyBoard.G = "G";
    KeyBoard.H = "H";
    KeyBoard.J = "J";
    KeyBoard.K = "K";
    KeyBoard.L = "L";
    KeyBoard.semicolon = ";";
    KeyBoard.quotes = ",";
    KeyBoard.bar = "|";
    //5th group
    KeyBoard.key_Shift = "Shift";
    KeyBoard.Z = "Z";
    KeyBoard.X = "X";
    KeyBoard.C = "C";
    KeyBoard.V = "V";
    KeyBoard.B = "B";
    KeyBoard.N = "N";
    KeyBoard.M = "M";
    KeyBoard.key_Semicolon = ",";
    KeyBoard.key_Dot = ".";
    KeyBoard.question = "/";
    KeyBoard.Right_Shift = "Shift";
    KeyBoard.UpArrow = "up";
    //6th group
    KeyBoard.left_Ctrl = "Ctrl";
    KeyBoard.Left_Win = "left_win";
    KeyBoard.key_Alt = "Alt";
    KeyBoard.SPACE = "SPACE";
    KeyBoard.RIGH_Alt = "RIGH_Alt";
    KeyBoard.RIGHT_WIN = "right_win";
    KeyBoard.NoteSign = "NoteSign";
    KeyBoard.RIGHT_Ctrl = "Ctrl";
    KeyBoard.keyArrow = "left";
    KeyBoard.DownArrow = "down";
    KeyBoard.RightArrow = "right";
    return KeyBoard;
}(egret.EventDispatcher));
__reflect(KeyBoard.prototype, "KeyBoard");
/**
 Created by HungPQ
**/
var SoundBase = (function (_super) {
    __extends(SoundBase, _super);
    function SoundBase(url) {
        var _this = _super.call(this) || this;
        _this._soundURL = "start_sound";
        //construct the sound channel
        _this._positon = 0;
        //start sound position
        _this._loop = 1;
        //default loop
        _this._status = 0;
        if (url)
            _this._soundURL = url;
        _this._sound = new egret.Sound();
        _this._loadSound();
        return _this;
    }
    //status set to 0; stop
    SoundBase.prototype._loadSound = function () {
        if (RES.getRes(this._soundURL)) {
            this._sound = RES.getRes(this._soundURL);
        }
        else {
            //If get error, throw it
            this._sound.once(egret.Event.COMPLETE, this.loadComplete, this);
            this._sound.once(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this);
            this._sound.load(this._soundURL);
        }
    };
    //Show load complete
    SoundBase.prototype.loadComplete = function (e) {
        this._status = 3;
        var waring = "Load complete";
        egret.log(waring);
        //remove event and send complete
        this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this);
        this.dispatchEventWith(egret.Event.COMPLETE, false, waring);
    };
    //Show error onload
    SoundBase.prototype.onLoadErr = function (e) {
        this._status = 4;
        var waring = "Could not load sound at " + this._soundURL;
        egret.log(waring);
        //ɾemove event and send error 
        this._sound.removeEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR, false, waring);
    };
    //Set url to load sound
    SoundBase.prototype.setUrl = function (url) {
        this._soundURL = url;
        this._loadSound();
    };
    //play again when reach end sound
    SoundBase.prototype.looped = function (e) {
        console.log("looped");
        this._soundChannel = null;
        this._positon = 0;
        this._status = 0;
        var waring = "looped";
        if (this._loop >= 0) {
            this.dispatchEventWith(egret.Event.SOUND_COMPLETE, false, waring);
        }
        else {
            this.play();
        }
    };
    // Return the status: 0 stop; 1: playing
    SoundBase.prototype.getStatus = function () {
        return this._status;
    };
    // Tuning the volume
    SoundBase.prototype.setVolume = function (volume) {
        console.log(this._status);
        if (1 === this._status)
            this._soundChannel.volume = volume / 100;
    };
    // Show current position of the play
    SoundBase.prototype.showPosition = function () {
        if (1 === this._status)
            this._positon = this._soundChannel.position;
        return this._positon;
    };
    // Play the sound and change status to 1
    SoundBase.prototype.play = function () {
        if (4 === this._status) {
            this._loadSound();
            return;
        }
        this._status = 1;
        if (this._soundChannel)
            this._soundChannel.stop();
        this._soundChannel = this._sound.play(this._positon, this._loop);
        this._soundChannel.once(egret.Event.SOUND_COMPLETE, this.looped, this);
        return this._status;
    };
    // Loop the sound
    SoundBase.prototype.setLoop = function (loop) {
        if (loop === void 0) { loop = 1; }
        this._loop = loop;
        return loop;
    };
    // Pause the sound
    SoundBase.prototype.pause = function () {
        var temp = this._status;
        if (1 === temp) {
            this._positon = this._soundChannel.position;
            this._soundChannel.stop();
            this._status = 2;
        }
        egret.log(this._positon);
        return temp;
    };
    // Resume the sound
    SoundBase.prototype.resume = function () {
        var temp = this._status;
        if (2 === temp) {
            this.play();
        }
        egret.log(this._positon);
        return temp;
    };
    //Stop the sound
    SoundBase.prototype.stop = function () {
        this._status = 0;
        this._positon = 0;
        this._soundChannel.stop();
        this._soundChannel = null;
    };
    return SoundBase;
}(egret.DisplayObjectContainer));
__reflect(SoundBase.prototype, "SoundBase");
