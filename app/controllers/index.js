for (var i = 0; i < 25; i++) {
	var ctl = Alloy.createController('touch', {number: i});
	var touchView = ctl.getView();
	$.touchArea.add(touchView);
};

$.window.open();
