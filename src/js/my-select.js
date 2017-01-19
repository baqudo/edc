$(document).ready(function() {

	$('.select').each(function () {
		var select = $(this),
			opt_len = select.children('option').length,
			className = select.attr('class').replace('select', ''),
			timer = 300;

		select.wrap('<div class="select__wrapp"></div>');
		select.after('<div class="select__bar '+ className +'"></div>');

		var select__bar = select.next('div.select__bar');
		select__bar.html(select.children('option').eq(0).html());

		var list = $('<ul />', {
			'class': 'select__dropdown'
		}).insertAfter(select__bar);

		for (var i = 0; i < opt_len; i++) {
			var span;
			if (select.children('option').eq(i).data('info')){
				span = '<span> ' + select.children('option').eq(i).data('info') + '</span>';
			}
			else {
				span = '';
			}
			$('<li />', {
				class: 'option',
				html: select.children('option').eq(i).text() + span,
				data: select.children('option').eq(i).val()
			}).appendTo(list);
		}

		var listItems = list.children('li');

		select__bar.on('click', function (e) {
			var block = $(this);


			if (!block.hasClass('is-active')) {
				$('.select__bar').removeClass('is-active');
				$('ul.select__dropdown').slideUp(timer);
				block.addClass('is-active').next(list).slideDown(timer).addClass('is-active');
			}
			else {
				block.removeClass('is-active').next(list).slideUp(timer).removeClass('is-active');
			}

			e.stopPropagation();
		});

		listItems.on('click', function (e) {
			select__bar.html($(this).html()).removeClass('is-active').addClass('selected');
			select.val($(this).attr('data-index'));
			listItems.removeClass('is-active');
			$(this).addClass('is-active');
			list.slideUp(timer);
			e.stopPropagation();
		});
		$(document).on('click', function () {
			select__bar.removeClass('is-active');
			list.slideUp(timer);

		});
	
	});
});