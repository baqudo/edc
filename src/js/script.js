'use strict';

$(document).ready(function () {

	var select = $('.select'),
		$dropdown,
		$options;

	$(select).each(function () {

		var $select = $(this);

		$select.wrap('<div class="select__wrapp"></div>').before('<div class="select__bar">click</div>').after('<ul class="select__dropdown"></ul>');

		var $options = $select.children();

		// $('.select__bar').innerHTML($options.first(text()));

		var $dropdown = $select.next('ul.select__dropdown');

		for (var i = 0; i < $options.length; i++) {
			$dropdown.append('<li class="option" data-index="' + i + '">' + $options[i].innerHTML + '</li>');
		};

		// $dropdown__height = $options.length * 50 / 2;
		// $dropdown.css('height', $dropdown__height + 'px');

		$dropdown.children().on('click', function () {

			$(this).siblings().removeClass('option_active');
			$(this).addClass('option_active');
			$(this).parent().parent().find('.select__bar').html($(this).text()).addClass('is-active');
			$(this).parent().hide();

			var index = $(this).attr('data-index');

			var options = $(this).siblings();

			$(options).attr('selected', false);

			$(options[index]).attr('selected', true);

			//console.log(options[index]);
		});
	});

	$('.select__bar').on('click', function (e) {

		e.stopPropagation();
		$(e.target).parent().find('.select__dropdown').toggle();
	});

	$('body').on('click', function (e) {

		e.stopPropagation();
		$('.select__dropdown').hide();
	});
});