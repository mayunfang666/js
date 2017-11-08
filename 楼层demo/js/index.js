/*$(function(){
    var arr=[];
    $(window).scroll(function(e){
        var T=$(this).scrollTop();
        // console.log(T)
        //console.log($(".f2").offset().top);
        var floors=$("#floor").children("div");//获取floor下的div
        $(floors).each(function(i){//循环每一个楼层
             arr[i]=$(this).offset().top;//把每一个楼层距离视口的top值
        });
        $.each(arr,function(i,val){//循环数组并取出索引[]和滚动的距离top的位置
            console.log(i,val)//打印数组索引,和位置
              if(T>=val){//判断如果视口的高度大于val
                //$("#list>li").eq(i).attr("data-name","on").siblings().attr("data-name","")
                $("#list>li").eq(i).stop().animate({"margin-left":0}).find("span").show().end().siblings().stop().animate({"margin-left":"100px"}).find("span").hide();
              }
        })
        if(T>=400){
            $("#wrap").show();

        }else{
            $("#wrap").hide();
        }  

    })
    $("#list>li").click(function(){
        var idx=$(this).index();
         $(document).scrollTop(arr[idx]);
         //$(this).css("margin-left",0).siblings()
         .animate({"margin-left":"100px"}).end().find("span").show().end();
    })
    $("#return").click(function(){    
        $(document).animate({scrollTop:0},2000);
    });
})












































// /*$(function(){
//     var txt=null,
//         attr=null;
//         $(window).scroll(function(){
// 		var T=$(this).scrollTop();
//             if(T>400){
//             	$(".wrap").slideDown();
//          }else{
//             	$(".wrap").slideUp();
//             }
//         $("#btn").click(function(){
//         	$(window).scrollTop(0);
        	
//         })

// })
//   //$("#name")

// $("#name").on("click","li",function(){
//     //移动
//     $(this).stop().animate({"width":"120px"});
//     txt=$(this).text();
//     attr=$(this).attr("data-item");
//     $(this).text(attr).siblings().text();
//     //兄弟元素
//     $(this).siblings().on("mouseover",function(){
//         attr=$(this).attr("data-item");//获取自定义属性
//         txt=$(this).text();//获取文本内容
//          $(this).text(attr);//设置属性
//          $(this).stop().animate({"width":"120px"});//将宽调为120
//     }).on("mouseout",function(){
//         txt=$(this).text();
//          $(this).stop().animate({"width":"80px"});//恢复
//          $(this).text(txt);
//   })
// })

	
// })*/