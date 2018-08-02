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
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super.call(this) || this;
        // this.init(1,1,0,0);
    }
    Board.prototype.init = function (type, num, x0, y0) {
        this.type = type;
        this.num = num;
        this.board = new Laya.Sprite();
        var texture = Laya.loader.getRes("res/img/board" + type + ".png");
        this.board.graphics.drawTexture(texture, 0, 0, 100, 45);
        // console.log(this.board);
        this.addChild(this.board);
        var x;
        var y;
        var i = num % 10;
        switch (i) {
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
                x = x0 - 130;
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
    };
    return Board;
}(Laya.Sprite));
//# sourceMappingURL=Board.js.map