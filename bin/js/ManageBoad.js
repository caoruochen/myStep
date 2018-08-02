var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ManageBoard = /** @class */ (function (_super) {
    __extends(ManageBoard, _super);
    function ManageBoard() {
        var _this = _super.call(this) || this;
        _this.x0 = 0; //前一个板子的位置(x0,y0)
        _this.y0 = 0;
        _this.boardPosArr = []; //记录每个板子的位置，二维数组
        _this.boardTypeArr = [7, 2, 3, 1, 2]; //断板记录数组,前20确定
        _this.init();
        return _this;
    }
    ManageBoard.prototype.init = function () {
        // this.addBoard(1,1,0,0);
        var j = 0; //记录是第几个断板
        var jnum = 0; //记录最后断板的编号
        for (var i = 1; i <= 100; i++) {
            if (!this.boardTypeArr[j]) {
                this.boardTypeArr[j] = Math.ceil(Math.random() * 4);
            }
            if (i == jnum + this.boardTypeArr[j] + 1) {
                this.addBoard(0, i, this.x0, this.y0); //是断板
                this.boardPosArr[i] = [this.x0, this.y0];
                jnum = i;
                j++;
            }
            else {
                this.addBoard(1, i, this.x0, this.y0);
                this.boardPosArr[i] = [this.x0, this.y0];
            }
        }
        //老鼠
        this.mouse = new Laya.Sprite();
        var mouseTexture = Laya.loader.getRes("res/img/mouse_normal.png");
        this.mouse.graphics.drawTexture(mouseTexture, 0, 0, 80, 100);
        this.addChild(this.mouse);
        this.mouse.x = this.boardPosArr[1][0] + 10;
        this.mouse.y = this.boardPosArr[1][1] - 80;
        // console.log(this.boardPosArr[1],this.mouse.x,this.mouse.y)
        this.mouse.name = "mouse";
    };
    ManageBoard.prototype.addBoard = function (type, num, x0, y0) {
        var board = new Board();
        board.init(type, num, x0, y0);
        this.addChild(board);
        this.x0 = board.x;
        this.y0 = board.y;
    };
    return ManageBoard;
}(Laya.Sprite));
//# sourceMappingURL=ManageBoad.js.map