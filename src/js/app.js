// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include jquery.datetimepicker.full.min.js
//=include my-select.js
console.log('Hello, World!');

$.datetimepicker.setLocale('ru');
$(function () {
	$('#datepicker').datetimepicker({
	lang:'ru',
	timepicker:false,
	format:'d.m',
	formatDate:'d.m',
	minDate: new Date()
	});
	$('#timepicker').datetimepicker({
	datepicker:false,
	format:'H : i',
	step:30
	});
});

$(function () {

	$('.picker').each(function () {
		var $picker = $(this),
			$arrow = $picker.next('span.arrow');

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
