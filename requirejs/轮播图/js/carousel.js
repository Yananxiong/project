/**
 * Created by lenovo on 2017/8/22.
 */
define(["jquery"], function ($) {
    function Carousel(settings){
        this.$container = $('<div class="carousel-container"></div>');
        this.$tabs = $('<ul class="carousel-tabs"></ul>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next = $('<span class="carousel-next">&gt;</span>');
        this.defaultSettings = {
            selector:document.body,
            //selector:表示将轮播图追加到网页的哪个位置，将container赋给selector才能将其真正加入DOM结构中
            imgArr:[],
            speed:1000,
            btnStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSettings,settings);

    }
    Carousel.prototype.init = function () {
        this.$container.append(this.$tabs).append(this.$imgs).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);
        for(var i= 0; i<this.defaultSettings.imgArr.length; i++){
            var $li = $("<li></li>").html(i + 1);
            this.$tabs.append($li);

            var $img = $("<img/>").attr("src",this.defaultSettings.imgArr[i]);
            this.$imgs.append($img);
        }
        this.$prev.addClass(this.defaultSettings.arrowPos);
        this.$next.addClass(this.defaultSettings.arrowPos);

        $("img",this.$imgs).eq(0).addClass("selected");
        $("li",this.$tabs).eq(0).addClass("selected");
        $(this.defaultSettings.selector).append(this.$container);

        var nowIndex = 0;
        $("li",this.$tabs).on("mouseover", function (e) {
            nowIndex = $(e.target).index();
            changeImg().call(this);
        }.bind(this));

        this.$prev.on("click", function () {
            nowIndex--;
            if(nowIndex == -1){
                nowIndex = this.defaultSettings.imgArr.length - 1;
            }
            changeImg().call(this);

        }.bind(this));

        this.$next.on("click", function () {
            nowIndex++;
            if(nowIndex == this.defaultSettings.imgArr.length){
                nowIndex = 0;
            }
            changeImg().call(this);

        }.bind(this));

        var timer;
        this.$container.hover(function () {
            clearInterval(timer);
        }, function () {
            play.call(this);
        }.bind(this));
        play.call(this);
        function play(){

            timer = setInterval(function () {
                this.$next.trigger("click");
            }.bind(this),this.defaultSettings.speed);

        }

        function changeImg(){
            $("img",this.$imgs).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
            $("li",this.$tabs).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        }
    };
    return Carousel;
});