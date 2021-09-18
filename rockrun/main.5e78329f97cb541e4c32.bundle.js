/*! For license information please see main.5e78329f97cb541e4c32.bundle.js.LICENSE.txt */
(()=>{var e,s={941:(e,s,t)=>{"use strict";t(260);class r extends Phaser.GameObjects.Text{constructor(e){super(e,10,10,"",{color:"black",fontSize:"28px"}),e.add.existing(this),this.setOrigin(0)}update(){this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`)}}class a extends Phaser.Scene{constructor(){super({key:"MainScene"})}create(){this.fpsText=new r(this),this.bg=this.add.tileSprite(0,38,1136,640,"bg").setOrigin(0,0),this.bgrun=this.add.tileSprite(0,38,1136,640,"bgrun").setOrigin(0,0),this.physics.world.setBounds(0,0,1136,600,!1,!0,!0,!0),this.player=this.physics.add.image(300,500,"player"),this.player.setCollideWorldBounds(!0),this.player.setBounce(.2),this.physics.world.on("worldbounds",(()=>{this.player.body.onWorldBounds=!1,console.log("Y:"+this.player.y)}),this.player),this.player.setSize(50,130),this.enemy=this.physics.add.image(1e3,600,"enemy"),this.enemy.setCollideWorldBounds(!0),this.enemy.setBounce(.8),this.enemy.setVelocityX(-400),this.enemy.setSize(50,130),this.physics.add.overlap(this.enemy,this.player,(()=>{console.log("Bum bum bum"),this.enemy.setVelocityX(100),this.enemy.setVelocityY(-400),this.player.setVelocityX(0)}));var e=this.anims.generateFrameNames("walker",{start:1,end:3,zeroPad:3,prefix:"girl/walk/walk_",suffix:".png"}),s=this.anims.generateFrameNames("walker",{start:1,end:1,zeroPad:3,prefix:"girl/fail/fail_",suffix:".png"}),t=this.anims.generateFrameNames("walker",{start:1,end:1,zeroPad:3,prefix:"girl/jump/jump_",suffix:".png"});this.anims.create({key:"walk",frames:e,frameRate:10,repeat:-1}),this.anims.create({key:"fail",frames:s,frameRate:10,repeat:-1}),this.anims.create({key:"jump",frames:t,frameRate:10,repeat:-1}),this.cursors=this.input.keyboard.createCursorKeys(),this.input.on("pointerdown",(()=>{this.player.body.onFloor()&&(this.player.body.onWorldBounds=!0,this.player.setVelocityY(-400))}))}update(){this.fpsText.update(),this.bgrun.tilePositionX+=4,this.enemy.x<-100&&(this.enemy.x=1200),this.cursors.up.isDown&&this.player.body.onFloor()?(console.log("Up is press"),this.player.body.onWorldBounds=!0,this.player.setVelocityY(-400)):this.cursors.down.isDown?console.log("Down is press"):this.cursors.left.isDown?console.log("Left is press"):this.cursors.right.isDown&&console.log("Right is press")}}class i extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){var e=this.add.graphics();this.load.on("progress",(function(s){e.clear(),e.fillStyle(4387926,1),e.fillRect(0,300,800*s,20),console.log(s)})),this.load.on("complete",(function(){e.destroy(),console.log("Load done")})),this.load.image("bg","assets/img/bg.png"),this.load.image("bgrun","assets/img/bg_run.png"),this.load.multiatlas("walker","assets/img/animations/walker.json","assets/img/animations"),this.load.image("player","assets/img/player.png"),this.load.image("enemy","assets/img/enemy.png")}create(){this.scene.start("MainScene")}}const o={type:Phaser.AUTO,backgroundColor:"#ffffff",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1136,height:640},scene:[i,a],physics:{default:"arcade",arcade:{debug:!0,gravity:{y:400}}}};window.addEventListener("load",(()=>{new Phaser.Game(o)}))},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return s[e].call(i.exports,i,i.exports,r),i.exports}r.m=s,e=[],r.O=(s,t,a,i)=>{if(!t){var o=1/0;for(p=0;p<e.length;p++){for(var[t,a,i]=e[p],n=!0,l=0;l<t.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(n=!1,i<o&&(o=i));if(n){e.splice(p--,1);var h=a();void 0!==h&&(s=h)}}return s}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,a,i]},r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={179:0};r.O.j=s=>0===e[s];var s=(s,t)=>{var a,i,[o,n,l]=t,h=0;if(o.some((s=>0!==e[s]))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(l)var p=l(r)}for(s&&s(t);h<o.length;h++)i=o[h],r.o(e,i)&&e[i]&&e[i][0](),e[o[h]]=0;return r.O(p)},t=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})(),r.O(void 0,[216],(()=>r(941)));var a=r.O(void 0,[216],(()=>r(204)));a=r.O(a)})();