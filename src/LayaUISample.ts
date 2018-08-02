class GameMain{
	private mngBoard:Laya.Sprite;
	private mouse:Laya.Sprite;
	private boardPosArr:Array<any>;
	private mouseI:number = 1; //老鼠在第几块板子
	private mouseY:number; //老鼠定点Y位置

	private vY:number = 0; //向上速度
	private g:number = 1; //重力加速度
	private vX:number = 0; //

	constructor() {
		//初始化微信小游戏
		Laya.MiniAdpter.init();
		Laya.init(600, 1500, Laya.WebGL);
		Laya.stage.scaleMode = "noborder"; //最大比例缩放
        // Laya.stage.alignH = "center";
        Laya.stage.alignV = "bottom"; //底部对齐
        Laya.stage.screenMode = "vertical";

        Laya.stage.bgColor = "#93f5e7";

		 //一步按钮
        var btn1:Laya.Sprite=new Laya.Sprite();
		btn1.graphics.drawRect(0,0,180,80,'#d0434300');//绘制一个红色矩形按钮
		btn1.pos(50,1400);
		btn1.size(180,80);//sprite如果要触发鼠标事件，务必设置好size，也就是鼠标的相应区域
		btn1.on(Laya.Event.CLICK,this,this.onOneStep);
		Laya.stage.addChild(btn1);
		var text1:Laya.Text=new Laya.Text();
		text1.text='一步';
		text1.fontSize=40;
		btn1.addChild(text1);
		text1.pos(50,20);
		//两步按钮
		var btn2:Laya.Sprite=new Laya.Sprite();
		btn2.graphics.drawRect(0,0,180,80,'#4da8f1');
		btn2.pos(370,1400);
		btn2.size(180,80);
		btn2.on(Laya.Event.CLICK,this,this.onTwoStep);
		Laya.stage.addChild(btn2);
		var text2:Laya.Text=new Laya.Text();
		text2.text='两步';
		text2.fontSize=40;
		btn2.addChild(text2);
		text2.pos(50,20);
		btn1.zOrder = 1;
		btn2.zOrder = 1;

		var resArray:Array<any>=[
            {url:"res/img/board0.png",type:Laya.Loader.IMAGE},
            {url:"res/img/board1.png",type:Laya.Loader.IMAGE},
            {url:"res/img/mouse_hit.png",type:Laya.Loader.IMAGE},
            {url:"res/img/mouse_normal.png",type:Laya.Loader.IMAGE},
        ];
        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoaded));
	}

	 onLoaded():void{
		this.mngBoard = new ManageBoard()
		this.mngBoard.pos(50,1400);
		Laya.stage.addChild(this.mngBoard);
		this.mouse = this.mngBoard.getChildByName("mouse") as Laya.Sprite;
		this.boardPosArr = this.mngBoard.boardPosArr;
        this.mouseY = this.mouse.y + this.mngBoard.y;
    }

	onOneStep(){
		this.changeMouse(this.mouseI,this.mouseI+1);
		this.mouseI += 1;		           
	}
	onTwoStep(){
		this.changeMouse(this.mouseI,this.mouseI+2);
		this.mouseI += 2;
	}
	changeMouse(I,lastI){
		var x1 = this.boardPosArr[I][0]+10;
        var y1 = this.boardPosArr[I][1]-80;
		var x2 = this.boardPosArr[lastI][0]+10;
        var y2 = this.boardPosArr[lastI][1]-80;
		var yChan = y2-y1;
		console.log(y2-y1);
		var t = 20;
		// this.vY = (y2-y1+0.4*t*t)/t;
		switch (yChan){
                case 0:
					this.vY = 10;
                    break;
                case -150:
					this.vY = 20;
                    break;
                case -300:
					this.vY = 26.46;
                    break;
		}
		this.vX = (x2-x1)/t;
		Laya.timer.frameLoop(1,this,this.onLoop,[x2,y2,lastI]);   

		if(this.mngBoard.y + this.mouse.y < this.mouseY){
			Laya.Tween.to(this.mngBoard, { y: this.mouseY-this.mouse.y}, 200);
		}
	}
	onLoop(x2,y2,lastI){
		this.mouse.y -= this.vY;
		this.vY -= this.g;
		this.mouse.x += this.vX;
		if(this.vY < 0 && this.mouse.y > y2){
			// console.log(this.vY)
			Laya.timer.clear(this,this.onLoop);
			this.mouse.x = x2;
			this.mouse.y = y2;
			var curBoard:Board = this.mngBoard.getChildAt(lastI-1) as Board;
			if(curBoard.type == 0){
				curBoard.visible = false;
				//播放动画 延迟1s

			}
		}
	}
}
new GameMain();