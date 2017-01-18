// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include jquery.datetimepicker.full.min.js
//=include script.js
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

	

	// $(picker).each(function (){
	// 	$(this).on('click', function (e) {
	// 		arrow = $(this).next('.arrow');

	// 		arrow.toggleClass('is-active');
	// 	$(e.target).parent().find('.arrow').removeClass('is-active');

	// 	})
	// })
	$('.picker').each(function () {
		var picker = $(this);
		var zone = picker.parents().parents();
		console.log(zone);
		picker.on('click', function (e) {
			var block = $(this),
				parent = block.parents('.select');

			if (!block.hasClass('is-active')) {
				$('.picker').removeClass('is-active');
				$('span.arrow').removeClass('is-active');
				block.addClass('is-active').next('span.arrow').addClass('is-active');
			}
			else {
				block.removeClass('is-active').next('span.arrow').removeClass('is-active');
			}
			e.stopPropagation();
		});

		zone.on('click', function () {
			picker.removeClass('is-active');
			$('span.arrow').removeClass('is-active');
		});
	});
});
