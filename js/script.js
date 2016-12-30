// start form
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
// msg form
var msgForm = $(".contact .msg-form");
var msgFormName = msgForm.find("input[name=name]");
var msgFormEmail = msgForm.find("input[name=email]");
var msgFormSubject = msgForm.find("input[name=subject]");
var msgFormMessage = msgForm.find("textarea");

// initialization
$(".presentation-slider-control").addClass("live");

// 
// start form
// 
mainHeaderFormName.focus();

mainHeaderForm.submit(function(event) {
	event.preventDefault();

	if (!mainHeaderFormName.val()     ||
		!mainHeaderFormPassword.val() ||
		!mainHeaderFormEmail.val()) {

		mainHeaderFormWrapper.addClass("form-error");
		setTimeout(function() {
			mainHeaderFormWrapper.removeClass("form-error");
		}, 600);
	}
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

// 
// msg form
// 

msgForm.submit(function(event) {
	event.preventDefault();
	
	if (!msgFormName.val()) {
		msgFormName.addClass("form-error");
		setTimeout(function() {
			msgFormName.removeClass("form-error");
		}, 600);
	}

	if (!msgFormEmail.val()) {
		msgFormEmail.addClass("form-error");
		setTimeout(function() {
			msgFormEmail.removeClass("form-error");
		}, 600);
	}

	if (!msgFormMessage.val()) {
		msgFormMessage.addClass("form-error");
		setTimeout(function() {
			msgFormMessage.removeClass("form-error");
		}, 600);	
	}

	if (!msgFormSubject.val()) {
		msgFormSubject.val("No subject");
	}
});

