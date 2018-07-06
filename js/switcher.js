define(['jquery'],function($){
/**
 *修改页面中某个元素的class属性
 *@param {obj} option [参数对象]
 *option详情：
 *parent：父级对象 jquery element
 *class：['','']  用于修改的class列表，数组，注意顺序，必填
 *target：jq element----必填，被修改的元素
 *
 *@return {[type]} [description]
 */

// option相当于switcher
	return function(option){
		var opt = {};
		opt.parent = option.parent?option.parent:$('body');
		var radio = opt.parent.find('label');

		radio.each(function(index,element){
			$(this).on('click',function(e){
				option.class.forEach(function(element,index){
					option.target.removeClass(element);
				});
				option.target.addClass(option.class[index]);
			});
		});
	}	
});