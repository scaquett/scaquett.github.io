 $(function(){
 	$('.botaoMenu').click(function (event){
 		event.stopPropagation();
 		if(!$(this).hasClass('menuAtivo')){
 			$(this).addClass('menuAtivo');
 			$('nav ul').animate({'left':'0px'},300);
 		} else {
 			$(this).removeClass('menuAtivo');
 			$('nav ul').animate({'left':'-100%'},300);
 		}
 	});
 	$('body').on('click', function(){
 		$('.botaoMenu').removeClass('menuAtivo');
 		$('nav ul').animate({'left':'-100%'},300);
 	});

 	$('.fancybox').fancybox({
		openEffect  : 'elastic',
		openSpeed : 150,
		closeEffect : 'elastic',
		closeSpeed : 150,
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,

		helpers : {
			title : {
				type : 'outside'
			},
		},

		afterLoad : function() {
			this.title = (this.title ? ' - ' + this.title : '');
		}
	});

	var $doc = $('html,body');
	$('.scrollSuave').click(function(){
		$doc.animate({
			scrollTop:$($.attr(this, 'href')).offset().top
		}, 400);
		$(this).removeClass('menuAtivo');
 		$('nav ul').animate({'left':'-100%'},300);
 		return false;
	});

	$(document).scroll(function(){
		if($(this).scrollTop() > 150){
			document.getElementById("voltarTopo").style.display = "block";
		} else {
			document.getElementById("voltarTopo").style.display = "none";
		}
	});
 });