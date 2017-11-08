// (function($){
// 	$.fn.extend({
// 		//划过显示
// 		method:function(options){
// 			var that=$(this);
// 			var options=({
// 				ele:"li",
// 				con:"span",
// 				attr:"margin-left",
// 				over:0,
// 				out:"100px"
// 			})
// 			options=$.extend(options,options)
// 			that.find(options.ele).hover(function(){
// 				 $(this).find(options.con).show();
// 				 var obj={};
// 				    obj[options.attr]=options.over;
//                     $(this).stop(false,true).animate(obj)
// 			},function(){                
//                  var obj={};
//                 obj[options.attr]=options.out;
//                 if($(this).attr("data-name")!="on"){
//                 	$(this).stop(false,true).animate(obj);
//                 	$(this).find(options.con).hide();
//                 }
// 			})		
// 		}
		
// 	})
// })(jQuery)