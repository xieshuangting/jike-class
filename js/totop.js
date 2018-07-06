define(['jquery'],function($){

	/**
	 * 回到顶部
	 * @param {obj} options 参数对象
	 * options详情：
	 * target：js element 绑定事件的对象 必填
	 * showPosition：何时出现，默认值为0，一直存在
	 * speed：滚动的速度，默认为0 瞬间移动，单位毫秒
	 */
	
	return function(options){
		var opt = {};
		opt.showPosition = options.showPosition || 0;
		opt.speed = options.speed || 0;

		var objTarget = options.target;
		if(opt.showPosition === 0){
			objTarget.show();
		}else{
			objTarget.hide();
		}

		$(document).scroll(function(){
			if($(document).scrollTop() >= opt.showPosition){
				objTarget.show();
			}else{
				objTarget.hide();
			}
		});

		objTarget.on('click',function(){
			if(opt.speed === 0){
				$('body,html').scrollTop(0);
			}else{
				$('body,html').animate({scrollTop:0},opt.speed);
			}
		})
	}
});