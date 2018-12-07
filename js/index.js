$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#FFF', '#4BBFC3', '#7BAABE', '#f90', '#f90', '#f90', '#f90', '#f90', '#f90'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){
			for(var i = 0;i<9;i++){
				$('#menu').find('li').eq(i).find('a').css('background','url(../images/home1_0'+(i+1)+'_01.png) no-repeat center')
			}
			$('#menu').find('li').eq(index.index).find('a').css('background','url(../images/home1_0'+(index.index+1)+'_02.png) no-repeat center')
			$('.navtit').find('li a').removeClass('on')
			$('.navtit').find('li').eq(index.index).find('a').addClass('on')
		}
	});
	$('.precenter').on('click', function(){
		window.location.href = window.location.origin + '/pages/precenter.html'
	});
	$('#tab li').each(function(){
		$(this).on('click',function(){
			var index = $(this).index();
			$(this).siblings('li').removeClass('on').end().addClass('on');
			$('#info-con ul').hide();
			$('#info-con ul').eq(index).show();
		});
	});
	$('#textlist li').each(function(){
		$(this).on('click',function(){
			var index = $(this).index();
			$(this).siblings('li').removeClass('on').end().addClass('on');
			$('#textmain ul').hide();
			$('#textmain ul').eq(index).show();
		});
	});
	$('#dmttab li').each(function(){
		$(this).on('click',function(){
			var index = $(this).index();
			$(this).siblings('li').removeClass('on').end().addClass('on');
			$('#dmtmain ul').hide();
			$('#dmtmain ul').eq(index).show();
		});
	});
	$('#ehtab li').each(function(){
		$(this).on('click',function(){
			var index = $(this).index();
			$(this).siblings('li').removeClass('on').end().addClass('on');
			$('#ehmain ul').hide();
			$('#ehmain ul').eq(index).show();
		});
	});
	$('#frtab li').each(function(){
		$(this).on('click',function(){
			var index = $(this).index();
			$(this).siblings('li').removeClass('on').end().addClass('on');
			$('#frmain ul').hide();
			$('#frmain ul').eq(index).show();
		});
	});
})