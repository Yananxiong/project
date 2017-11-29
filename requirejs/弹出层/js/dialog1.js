/**
 * Created by lenovo on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(["jquery"], function ($) {
    return {
        open: function (settings) {
            var defaultSettings = {
                width:500,
                height:400,
                title:"µ¯³ö²ã",
                content:""
            };
            $.extend(defaultSettings,settings);
            var html = '<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-main">'
                + '<div class="dialog-title">'
                + '<div class="dialog-title-item">'+ defaultSettings.title +'</div>'
                + '<div class="dialog-title-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';
            $("body").append(html);

            $(".dialog-main").css({
                width:defaultSettings.width,
                height:defaultSettings.height,
                marginTop:-defaultSettings.height / 2,
                marginLeft:-defaultSettings.width / 2

        });
            if(defaultSettings.content.indexOf(".html") != -1){
                $(".dialog-content").load(defaultSettings.content);
            }else{
                $(".dialog-content").html(defaultSettings.content);

            }
            $(".dialog-title-close").on("click", function () {
                $(this).parents(".dialog-container").remove();
            });
        }
    };
});