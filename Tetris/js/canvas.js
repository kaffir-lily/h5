(function(){
    'use strict';
    function Canvas(CanvasId, width, height){
        this.CanvasId = CanvasId;
        this.el = document.getElementById(CanvasId);
        if(!this.el){
            throw new Error('Must provide a right canvas id');
        }
        this.context = this.el.getContext('2d');
        this.width = width || window.innerWidth;
        this.height = height || window.innerHeight;
    
        this._init();
    }
    
    Canvas.prototype = {
        constructor: Canvas,
        _init: function(){
            this.el.width = this.width;
            this.el.height = this.height;
        },
        clear: function(fromX, fromY, toX, toY){
            fromX = fromX || 0;
            fromY = fromY || 0;
            toX = toX || this.width;
            toY = toY || this.height;
            this.context.clearRect(fromX, fromY, toX, toY);
        },
        drawText: function(text, x, y){
            this.clear(0, 0);
            this.context.font = '25px Arial';
            this.context.fillStyle = 'purple';
            this.context.textAlign = 'center';
            this.context.fillText(text, x === undefined ? (this.width / 2) : x, y === undefined ? 45 : y);
        }
    };

    window.Canvas = Canvas;

})(window);
