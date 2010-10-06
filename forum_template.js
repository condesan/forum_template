(function($){
	$(document).ready(function(){
	//comments	
  $('.comment-inner h3.title ').attr('href','#')
	$('.comment-inner .comment-body').hide();
	$('.comment-inner h3').click(function(){
	$(this).parent().children('.comment-body').slideToggle();
	});		
  //ajax for load of files and theirs descriptions
	$('.field-field-ponencias .field-item').each(function(){
	$(this).append('<div class="show-recurso-details"></div>');
	})
	
	$('.field-field-ponencias .field-item a').click(function(){
				var url = $(this).attr('href');
				var link = this;
				$.get(url,function(data) {
						var $content1 = $('.node-body-recurso', data);
						var $content2 = $('.listing-files', data);
						var html = $content1.html() + $content2.html();
						$(link).siblings('.show-recurso-details').html(html);
				});
				return false;
	});
	//modify date
	$('#page-forum .field-type-datestamp .field-label').text('Fecha de inicio y fin');
	//disable link in titles of contents
	$('#page-forum #content #content-inner ul li .node-inner h2.title a').attr('href', '#')
	//show user data
	$('.forum-template-participants-body ul li').each(function(){
	$(this).append('<div class="show-user-details"></div>');
	})
	
	$('.forum-template-participants-body ul li a').click(function(){
			var url = $(this).attr('href');
			var link = this;
			$.get(url,function(data) {
					var $content1 = $('.node-type-profile .field-field-ciudad', data);
					var $content2 = $('.node-type-profile .field-field-institucion-pertenece', data);
					var $content3 = $('.node-type-profile .field-field-foto', data);
					var html = $content1.html() + $content2.html() + $content3.html() ;
					$(link).siblings('.show-user-details').html(html);
				 
			});
			return false;
	});



});
})(jQuery)
