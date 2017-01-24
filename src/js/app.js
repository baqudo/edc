// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include jquery.datetimepicker.full.js
//=include my-select.js
console.log('Hello, World!');

$.datetimepicker.setLocale('ru');

$(function () {
	
	$('#datepicker').datetimepicker({
		timepicker:false,
		lang:'ru',
		// format:'d.m',
		// formatDate:'d.m'
		// minDate: new Date()
	});
	$('#timepicker').datetimepicker({
		datepicker:false,
		format:'H : i',
		step:30,
		minTime:'8:00'
	});
});

$(function () {

	$('.picker').each(function () {
		var $picker = $(this),
			$arrow = $picker.next('span.icon-arrow');

			$picker.on('focus', function (e) {
				var block = $(this);

				if (!block.hasClass('is-active')) {
					$picker.removeClass('is-active');
					$arrow.removeClass('is-active');
					block.addClass('is-active');
					$arrow.addClass('is-active');
				}
				else {
					block.removeClass('is-active');
					$arrow.removeClass('is-active');
				}
				e.stopPropagation();
			});
			$(document).on('focusout', function () {
			$picker.removeClass('is-active');
			$arrow.removeClass('is-active');
		});
	});
});
