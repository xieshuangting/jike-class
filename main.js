requirejs.config({
	baseUrl:'js',
	paths:{
		jquery:'jquery-3.2.1.min',
		sp:'sp'
	}
});

define(['main'],function(){
	requirejs(['jquery','switcher','sp','totop'],function($,switcher,sp,totop){
		switcher({
			parent:$('.list-switch'),
			target:$('.courses-wrap'),
			class:['blist','hlist']
		});

		sp({
			perPageNum:18,
			totleNum:100,
			showPage:5
		});

		totop({
			target:$('#totop'),
			showPosition:200
		});


		$('#show-search').on('click',function(){
			$('#searchwrap').toggleClass('searchbar-show');
		});
		$('#hide-search').on('click',function(){
			$('#searchwrap').toggleClass('searchbar-show');
		});
	});
	

})
