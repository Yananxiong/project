/**
 * Created by lenovo on 2017/6/18.
 */
(function(){
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img");
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImg = oSmallPic.getElementsByTagName("img");
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowIndex = 0;
    for(var i=0; i<aSmallImg.length; i++){
        aSmallImg[i].index = i;
        aSmallImg[i].onclick = function(){
            nowIndex = this.index;
            oBigImg.src = aSmallImg[nowIndex].src;
            for(var i=0; i<aSmallImg.length; i++){
                aSmallImg[i].className = "";
            }
            aSmallImg[nowIndex].className = "selected";
        };
    }




})();