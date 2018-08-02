class Board extends Laya.Sprite{
    private board:Laya.Sprite;
    public type:number; //跳板的类型
    public num:number;  //跳板的编号1-10

    constructor(){
        super();
        // this.init(1,1,0,0);
    }
     
     public init(type:number,num:number,x0:number,y0:number)
     {
        this.type = type;
        this.num = num;
        this.board = new Laya.Sprite();
        var texture = Laya.loader.getRes("res/img/board"+type+".png");
        this.board.graphics.drawTexture(texture,0,0,100,45);
        // console.log(this.board);
        this.addChild(this.board);
        var x;
        var y;
        var i = num % 10;
        switch (i){
                case 1:
                    x = x0;
                    y = y0 - 150;
                    break;
                case 2:
                    x = x0 + 130;
                    y = y0;
                    break;
                case 3:
                    x = x0 + 130;
                    y = y0;
                    break;
                case 4:
                    x = x0 + 130;
                    y = y0;
                    break;
                case 5:
                    x = x0;
                    y = y0 - 150;
                    break;
                case 6:
                    x = x0;
                    y = y0 - 150;
                    break;
                case 7:
                    x = x0 - 130;
                    y = y0;
                    break;
                case 8:
                    x = x0-130;
                    y = y0;
                    break;
                case 9:
                    x = x0 - 130;
                    y = y0;
                    break;
                case 0:
                    x = x0;
                    y = y0 - 150;
                    break;
            }
        this.x = x;
        this.y = y;
     }
}