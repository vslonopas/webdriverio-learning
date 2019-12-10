beforeEach(function() {
	browser.url("Hidden-Elements/index.html");
})

describe('Test whether specific elements are visible within viewport', function() {

	it('should resize the current viewport', function () {
		  browser.setViewportSize({
				width: 1200,
				height: 800
			})

			var width = browser.getViewportSize("width")
			console.log("Viewport width is "+ width);
			var height = browser.getViewportSize("height")
			console.log("Viewport height is "+ height);
			browser.pause(2000);
		});

	it('should detect if an element is visible', function () {
		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#not-displayed");
		expect(isVisibleWithinViewport).to.be.false
	
		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#visibility-hidden");
		expect(isVisibleWithinViewport).to.be.false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#zero-opacity");
		expect(isVisibleWithinViewport).to.be.false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
		expect(isVisibleWithinViewport).to.be.true
	});
});