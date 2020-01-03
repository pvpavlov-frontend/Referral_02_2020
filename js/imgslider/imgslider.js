(function ($) {
	'use strict';
	$.fn.slider = function (options) {

	//default options
	var settings = $.extend($.fn.slider.defaultOptions, options);

	var init = function () {
		var $this = $(this);
		var width = $this.width();
		$this.find('.image img').css('width' , width + 'px');
		$this.find('.left.image').css('width' , Math.floor(width * settings.initialPosition));
		if (settings.showInstruction) {
			// Check if instruction div exists before adding
			var $instrDiv = null;
			$instrDiv = $('div.instruction');

			if ($instrDiv.length === 0) {
				$instrDiv = $('<div></div>')
					.addClass('instruction')
					.append('<p></p>');
				$this.append($instrDiv);
			}

			$instrDiv.children('p')
				.text(settings.instructionText);

			//set left offset of instruction
			$instrDiv.css('left', (settings.initialPosition - $instrDiv.children('p').width() / (2 * width)) * 100 + '%');
		}
		if (settings.showDragblock) {
			// Check if instruction div exists before adding
			var $DragblockDiv = null;
			$DragblockDiv = $('div.dragblock');

			if ($DragblockDiv.length === 0) {
				$DragblockDiv = $('<div></div>')
					.addClass('dragblock');
				$this.append($DragblockDiv);
			}

			//set left offset of instruction
			$DragblockDiv.css('left', (settings.initialPosition - $DragblockDiv.width() / (2 * width)) * 100 + '%');
		}
	};

	var slideResize = function (e) {
		e.preventDefault();
		//hide instructions
		$(e.currentTarget).children('.instruction').hide();
		var width;
		if(e.type.startsWith('touch')){
			// width = e.originalEvent.touches[0].clientX - e.originalEvent.layerX;
			width = e.originalEvent.touches[0].clientX;
		} else {
			width = e.offsetX === undefined ? e.pageX - e.originalEvent.layerX : e.offsetX;
		}
		if (width<=$(this).width()){
			$(this).find('.left.image').css('width', width + 'px');
			if (settings.showDragblock) {
				let $DragblockDiv = $('div.dragblock'),
					widthDrag = width - 17;
					$DragblockDiv.css('left', widthDrag + 'px');
			}
		}
	};

	var enableSliderDrag = function (e) {
		e.preventDefault();
		$(this).css('cursor' , 'ew-resize')
			.on('mousemove.sliderns', slideResize)
			.on('touchmove.sliderns', slideResize);
	};

	var disableSliderDrag = function (e) {
		e.preventDefault();
		$(this).css('cursor', 'normal')
			.off('mousemove.sliderns')
			.off('touchmove.sliderns');
	};

	var redrawSlider = function () {
		return $('.slider.responsive').each(init);
	};

	$(window).on('resize', redrawSlider);
	return this.each(init)
		.on('click touchstart', slideResize)
		.on('mousedown touchstart', enableSliderDrag)
		.on('mouseup touchend', disableSliderDrag);
	};

	$.fn.slider.defaultOptions= {
			initialPosition: 0.5,
			showInstruction: true,
			showDragblock: false,
			instructionText: 'Click and Drag'
	};

}(jQuery));
