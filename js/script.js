// form
var mainHeaderFormWrapper = $(".main-header-content .start-form");
var mainHeaderForm = mainHeaderFormWrapper.find("form");
var mainHeaderFormName = mainHeaderForm.find("input[name=name]");
var mainHeaderFormEmail = mainHeaderForm.find("input[name=email]");
var mainHeaderFormPassword = mainHeaderForm.find("input[name=password]");
// presentation slider
var presentationSlider = $(".presentation-slider");
var presSliderController = presentationSlider.find(".presentation-slider-control");
var tabs = presSliderController.find(".tab");
var slides = presentationSlider.find(".presentation-slider-content-item");

// 
// form
// 
mainHeaderFormName.focus();

mainHeaderForm.submit(function(event) {
	event.preventDefault();
	if (!mainHeaderFormName.value     ||
		!mainHeaderFormPassword.value ||
		!mainHeaderFormEmail.value
		) {
		mainHeaderFormWrapper.toggleClass("form-error");
	}
});

mainHeaderFormName.focus(function(event) {
	event.preventDefault();
	if (mainHeaderFormWrapper.hasClass("form-error"))
		mainHeaderFormWrapper.removeClass("form-error");
});

mainHeaderFormEmail.focus(function(event) {
	event.preventDefault();
	if (mainHeaderFormWrapper.hasClass("form-error"))
		mainHeaderFormWrapper.removeClass("form-error");
});

mainHeaderFormPassword.focus(function(event) {
	event.preventDefault();
	if (mainHeaderFormWrapper.hasClass("form-error"))
		mainHeaderFormWrapper.removeClass("form-error");
});

// 
// presentation slider
// 
tabs.click(function(event) {
	event.preventDefault();

	var $this = $(this);
	var activeTab = tabs.filter(".active");
	var activeSlide = slides.filter(".active");

	if ($this.hasClass("nonactive")) {
		$this.removeClass("nonactive");
		$this.addClass("active");
		activeTab.removeClass("active");
		activeTab.addClass("nonactive");

		var choosenSlideId = $this.attr("href");
		var choosenSlide = slides.siblings(choosenSlideId);

		activeSlide.hide();
		choosenSlide.fadeIn(1000);

		activeSlide.removeClass("active");
		activeSlide.addClass("nonactive");
		choosenSlide.removeClass("nonactive");
		choosenSlide.addClass("active");
	}
});
